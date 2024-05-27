import { useEffect, useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function DropDown({
    items,
    onItemChanged,
    defaultItemIndex = 0,
}: {
    items: string[];
    onItemChanged: (value: string) => void;
    defaultItemIndex?: number;
}) {
    if (typeof items[defaultItemIndex] === "undefined") {
        defaultItemIndex = 0;
    }

    const isFirstRender = useRef(true);

    const dropMenuRef = useRef<HTMLDivElement | null>(null);
    const [item, setItem] = useState<string>(items[defaultItemIndex]);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
          }
        onItemChanged(item);
    }, [item]);

    useEffect(() => {
        const handleOutsideClose = (e: { target: any }) => {
            // useRef current에 담긴 엘리먼트 바깥을 클릭 시 드롭메뉴 닫힘
            if (
                open &&
                dropMenuRef.current &&
                !dropMenuRef.current.contains(e.target)
            )
                setOpen(false);
        };
        document.addEventListener("click", handleOutsideClose);

        return () => document.removeEventListener("click", handleOutsideClose);
    }, [open]);

    return (
        <div ref={dropMenuRef}>
            <button
                className=" justify-center items-center text-zinc-300 flex flex-row bg-zinc-800 rounded-2xl p-4 w-[8rem] h-14"
                type="button"
                onClick={() => setOpen(!open)}
            >
                {item}
                <FontAwesomeIcon className="ml-2" icon={faArrowDown} />
            </button>
            {open && (
                <div className="rounded-lg w-[8rem] absolute max-h-[20rem] overflow-y-auto customscrollbar mt-2 z-50">
                    {items.map((x) => (
                        <button
                            type="button"
                            key={x}
                            onClick={() => {
                                setItem(x);
                                setOpen(false);
                            }}
                            className={`justify-center items-center text-zinc-300 flex flex-row  p-4 w-full ${
                                x === item ? "bg-zinc-700" : "bg-zinc-800"
                            }`}
                        >
                            {x}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

DropDown.defaultProps = {
    defaultItemIndex: 0,
};

export function YearDropDown({
    onYearChanged,
}: {
    onYearChanged: (value: string) => void;
}) {
    const firstYear = 2013;
    const currentYear: number = new Date().getFullYear();
    const yaerList: string[] = Array.from(
        { length: currentYear - firstYear + 1 },
        (_, index) => index + firstYear
    )
        .map((x) => String(x))
        .reverse();
    return (
        // get api에서 year이 number이 아니라 string으로 받기 때문에 그냥 넘겨줌.
        <DropDown items={yaerList} onItemChanged={onYearChanged} />
    );
}

export function SortDropDown({
    onSortChanged,
}: {
    onSortChanged: (value: "asc" | "desc") => void;
}) {
    const sortList: string[] = ["최신순", "오래된순"];
    const sortStringConvertor = (value: string) => {
        switch (value) {
            case "오래된순":
                onSortChanged("desc");
                break;
            case "최신순":
            default:
                onSortChanged("asc");
                break;
        }
    };

    return <DropDown items={sortList} onItemChanged={sortStringConvertor} />;
}

export function PerPage({
    onPerPageChanged,
    defaultValue = 15,
}: {
    onPerPageChanged: (perPage: number) => void;
    defaultValue?: number;
}) {
    const values = ["6", "15", "30"];

    return (
        <DropDown
            items={values}
            onItemChanged={(item) => onPerPageChanged(+item)}
            defaultItemIndex={values.indexOf(defaultValue.toString())}
        />
    );
}


PerPage.defaultProps = {
    defaultValue: 15,
};