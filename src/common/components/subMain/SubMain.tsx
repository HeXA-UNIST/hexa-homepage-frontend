import ContentArea from "@components/ContentArea";
// import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import {
    // faArrowUp,
    faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { ActivityMode } from "@pages/activities/vm/activity_view_model";



// class DropdownStore {
//     @observable selectedItemId: number | null = null;

//     @observable isOpen = false;

//     @observable items: DropdownItem[] = [];

//     @action
//     setItems = (changedItems: DropdownItem[]) => {
//         this.items = changedItems;
//     };

//     @action toggleDropdown = () => {
//         this.isOpen = !this.isOpen;
//         console.log(this.isOpen);
//     };

//     @action
//     selectItem = (id: number) => {
//         this.selectedItemId = id;
//         this.isOpen = false;
//     };
// }

// const dropdownd = new DropdownStore();


interface DropdownItem {
    id: number;
    label: string;
    mode: ActivityMode;
    description: string;
}

const SubMain = observer(
    ({
        activityMode,
        onModeChange
    }: {
        activityMode: ActivityMode;
        onModeChange: (mode: ActivityMode) => void;
    }) => {
        let subPageList: DropdownItem[] = [
            { id: 1, label: "프로젝트", mode: ActivityMode.Project, description: "HeXA는, UNIST 학우들을 위해 다양한 서비스를 제공합니다" },
            { id: 2, label: "서비스", mode: ActivityMode.Service, description: "HeXA는, UNIST 학우들을 위해 다양한 서비스를 제공합니다"  },
            { id: 3, label: "소식", mode: ActivityMode.News, description: "HeXA는, UNIST 학우들을 위해 다양한 서비스를 제공합니다"  },
            { id: 4, label: "세미나", mode: ActivityMode.Seminar, description: "HeXA는, UNIST 학우들을 위해 다양한 서비스를 제공합니다"  },
        ];
        const current: DropdownItem = subPageList.filter((e) => e.mode === activityMode)[0];
        subPageList = subPageList.filter((e) => e.mode !== activityMode);

        const [isOpen, setOpen] = useState<boolean>(false);

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
                                        className="w-60 border-b-4 border-zinc-300 text-zinc-300 pb-3 pl-2 pr-11 group/dropdown"
                                        type="button"
                                    >
                                        <div className="absolute top-0 transition-all group-hover/dropdown:mt-[3px]">
                                            {current.label}
                                            <FontAwesomeIcon
                                                className="ml-3"
                                                icon={faArrowDown}
                                            />
                                        </div>
                                    </button>
                                    <div
                                        className={`transition-all z-10 text-2xl absolute origin-top top-20 rounded-lg bg-zinc-800 overflow-hidden ${
                                            !isOpen ? "h-0" : "h-44"
                                        }`}
                                    >
                                        {subPageList.map((subPageItem) => (
                                            <button
                                                key={subPageItem.id}
                                                className="transition-all text-white block px-4 py-2 w-56 text-center rounded-md hover:bg-zinc-900 m-2"
                                                role="menuitem"
                                                tabIndex={-1}
                                                id="menu-item-1"
                                                onClick={() => onModeChange(ActivityMode.Project)}
                                                type="button"
                                            >
                                                {subPageItem.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className="ml-4">목록</span>
                    </div>
                    <div className=" font-medium text-zinc-400 text-lg">
                        {current.description}
                    </div>
                </div>
            </ContentArea>
        );
    }
);

export default SubMain;
