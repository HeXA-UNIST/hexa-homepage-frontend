import ContentArea from "@components/ContentArea";
// import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { ActivityMode } from "@pages/activities/vm/activity_view_model";

import { Link, useLocation } from "react-router-dom";

interface DropdownItem {
    id: number;
    label: string;
    link: string;
    mode: ActivityMode;
    description: string;
}

const PageList: DropdownItem[] = [
    {
        id: 1,
        label: "프로젝트",
        link: "/activity/projects",
        mode: ActivityMode.Project,
        description: "HeXA는, UNIST 학우들을 위해 다양한 서비스를 제공합니다",
    },
    {
        id: 2,
        label: "서비스",
        link: "/activity/services",
        mode: ActivityMode.Service,
        description: "HeXA는, UNIST 학우들을 위해 다양한 서비스를 제공합니다",
    },
    {
        id: 3,
        label: "소식",
        link: "/activity/news",
        mode: ActivityMode.News,
        description: "HeXA는, UNIST 학우들을 위해 다양한 서비스를 제공합니다",
    },
    {
        id: 4,
        label: "세미나",
        link: "/activity/seminars",
        mode: ActivityMode.Seminar,
        description: "HeXA는, UNIST 학우들을 위해 다양한 서비스를 제공합니다",
    },
];

const SubMain = observer(
    ({
        activityMode,
        onModeChange,
    }: {
        activityMode: ActivityMode;
        onModeChange: (mode: ActivityMode) => void;
    }) => {
        const location = useLocation();
        const [isOpen, setOpen] = useState<boolean>(false);
        const [curPage, setPage] = useState<DropdownItem>(PageList[0]);
        const [subPageList, setSubPageList] = useState<DropdownItem[]>(
            PageList.slice(1)
        );

        useEffect(() => {
            const modeOfLocation = PageList.filter(
                (e) => e.link === location.pathname
            )[0];
            if (activityMode !== modeOfLocation.mode) {
                console.log(
                    `링크로 옮겨서 mode change가 안됨. ${activityMode} ${modeOfLocation.mode}`
                );
                onModeChange(modeOfLocation.mode);
            }
        }, [location.pathname, activityMode, onModeChange]);

        useEffect(() => {
            console.log(`mode changed to ${activityMode.toString()}`);
            setOpen(false);
            setPage(PageList.filter((e) => e.mode === activityMode)[0]);
        }, [activityMode]);

        return (
            <ContentArea>
                <div className="flex flex-col items-start text-white font-semibold text-5xl pt-[180px] mb-20">
                    <div className="w-100 mb-5">HeXA에서 진행한</div>
                    <div className="flex flex-row mb-7">
                        <div>
                            <div className="relative inline-block text-left">
                                <div>
                                    <button
                                        onClick={() => setOpen(!isOpen)}
                                        className="w-[15.5rem] border-b-4 border-zinc-300 text-zinc-300 pb-3 pl-2 pr-11 group/dropdown"
                                        type="button"
                                    >
                                        <div className="w-60 flex justify-center absolute top-0 transition-all group-hover/dropdown:mt-[3px]">
                                            <span >
                                            {curPage.label}
                                            <FontAwesomeIcon
                                                className="ml-3"
                                                icon={faArrowDown}
                                            />
                                            </span>
                                            
                                        </div>
                                    </button>
                                    <div
                                        className={`transition-all z-10 text-2xl absolute origin-top top-20 rounded-lg bg-zinc-800 overflow-hidden ${
                                            !isOpen ? "h-0" : "h-44"
                                        }`}
                                        onTransitionEnd={(e) => {
                                            if (
                                                e.target === e.currentTarget &&
                                                !isOpen
                                            ) {
                                                setSubPageList(
                                                    PageList.filter(
                                                        (page) =>
                                                            page.mode !==
                                                            activityMode
                                                    )
                                                );
                                            }
                                        }}
                                    >
                                        {subPageList.map((subPageItem) => (
                                            <Link
                                                key={subPageItem.id}
                                                className="transition-all text-white block px-4 py-2 w-56 text-center rounded-md hover:bg-zinc-900 m-2"
                                                role="menuitem"
                                                tabIndex={-1}
                                                id="menu-item-1"
                                                to={subPageItem.link}
                                                onClick={(e) => {
                                                    if (isOpen) {
                                                        onModeChange(
                                                            subPageItem.mode
                                                        );
                                                    } else {
                                                        e.preventDefault();
                                                    }
                                                }}
                                                type="button"
                                            >
                                                {subPageItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="ml-4">목록</span>
                    </div>
                    <div className=" font-medium text-zinc-400 text-lg">
                        {curPage.description}
                    </div>
                </div>
            </ContentArea>
        );
    }
);

export default SubMain;
