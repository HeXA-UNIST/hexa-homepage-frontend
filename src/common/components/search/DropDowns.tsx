import { useState } from "react";

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

    const [index, setIndex] = useState<number>(defaultItemIndex);

    return <div></div>;
}

DropDown.defaultProps = {
    defaultItemIndex: 0
}

export function YearDropDown({
    onYearChanged,
}: {
    onYearChanged: (value: string) => void;
}) {
    const firstYear: number = 2013;
    const currentYear: number = new Date().getFullYear();
    const yaerList: string[] = Array.from(
        { length: currentYear - firstYear + 1 },
        (_, index) => index + firstYear
    ).map((x) => String(x)).reverse();
    return (
        // get api에서 year이 number이 아니라 string으로 받기 때문에 그냥 넘겨줌.
        <DropDown items={yaerList} onItemChanged={onYearChanged}/>
    );
}


export function SortDropDown({
    onSortChanged
}: {
    onSortChanged: (value: "asc" | "desc") => void;
}){
    const sortList: string[] = ["최신순", "오래된순"];
    const sortStringConvertor = (value: string) => {
        switch(value){
            case "최신순":
            default:
                onSortChanged("asc");
                break;
            case "오래된순":
                onSortChanged("desc");
                break;
        }
    };

    return (
        <DropDown items={sortList} onItemChanged={sortStringConvertor} />
    )
}