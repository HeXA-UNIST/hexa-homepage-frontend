import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
    faAnglesLeft,
    faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { PerPage } from "./DropDowns";

function PageNation({
    curPage,
    maxPage,
    onCurPageChanged,
    onPerPageChanged,
}: {
    curPage: number;
    maxPage: number;
    onCurPageChanged: (value: number) => void;
    onPerPageChanged: (value: number) => void;
}) {
    const pageListUnit = 5;
    const [pageList, setPageList] = useState<number[]>([]);
    const [hasLeft, setHasLeft] = useState<boolean>(false);
    const [hasRight, setHasRight] = useState<boolean>(false);

    const movePageList = (isRight: boolean) => {
        if (isRight) {
            if (!hasRight || pageList.length === 0) return;
            onCurPageChanged(pageList[pageList.length - 1] + 1);
        } else {
            if (!hasLeft || pageList.length === 0) return;
            onCurPageChanged(pageList[0] - 1);
        }
    };

    useEffect(() => {
        console.log(`curPage to ${curPage}`);
        const startPoint =
            Math.floor((curPage - 1) / pageListUnit) * pageListUnit + 1;
        const lastPoint = Math.min(
            Math.ceil(curPage / pageListUnit) * pageListUnit,
            maxPage
        );
        console.log(
            Array.from(
                { length: lastPoint - startPoint + 1 },
                (_, index) => index + startPoint
            )
        );
        setPageList(
            Array.from(
                { length: lastPoint - startPoint + 1 },
                (_, index) => index + startPoint
            )
        );

        setHasLeft(startPoint !== 1);
        setHasRight(lastPoint !== maxPage);
    }, [curPage, maxPage]);

    return (
        <div className="grid grid-cols-[1fr_auto_1fr] justify-center items-center mb-20">
            <div className=" col-start-2 grid grid-cols-[1fr_auto_1fr] items-center justify-center gap-3 text-white text-xl mb-1">
                <div>
                    {hasLeft && (
                        <>
                            <button
                                key="toFirst"
                                type="button"
                                onClick={() => onCurPageChanged(1)}
                                aria-label="toFirst"
                                className="mr-3"
                            >
                                <FontAwesomeIcon
                                    className=" text-base"
                                    icon={faAnglesLeft}
                                />
                            </button>
                            <button
                                key="moveLeft"
                                type="button"
                                onClick={() => movePageList(false)}
                                aria-label="moveLeft"
                            >
                                <FontAwesomeIcon
                                    className=" text-base"
                                    icon={faChevronLeft}
                                />
                            </button>
                        </>
                    )}
                </div>
                <div className="gap-3">
                    {pageList.map((page) => (
                        <button
                            key={page}
                            type="button"
                            onClick={() => onCurPageChanged(page)}
                            className={` mx-2 ${
                                curPage === page
                                    ? "font-bold text-white"
                                    : "font-normal text-zinc-400"
                            }`}
                        >
                            <span className="hover:underline pb-1">{page}</span>
                        </button>
                    ))}
                </div>
                <div className="gap-3">
                    {hasRight && (
                        <>
                            <button
                                key="moveRight"
                                type="button"
                                onClick={() => movePageList(true)}
                                aria-label="moveRight"
                            >
                                <FontAwesomeIcon
                                    className=" text-base"
                                    icon={faChevronRight}
                                />
                            </button>
                            <button
                                key="toLast"
                                type="button"
                                onClick={() => onCurPageChanged(maxPage)}
                                aria-label="toLast"
                                className=" ml-3"
                            >
                                <FontAwesomeIcon
                                    className="text-base"
                                    icon={faAnglesRight}
                                />
                            </button>
                        </>
                    )}
                </div>
            </div>
            <span className=" ml-auto ">
                <PerPage onPerPageChanged={onPerPageChanged} />
            </span>
        </div>
    );
}

export default PageNation;
