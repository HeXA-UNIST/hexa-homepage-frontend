import "@css/home/Activities.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faDesktop, faGraduationCap, faHome, faBolt, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ContentFrame from "../content";

function ActivityItem({
    // thumbnail,
    title,
    content,
    link,
    color,
    iconDef,
}: {
    // thumbnail: string;
    title: string;
    content: string;
    link: string;
    color: string;
    iconDef: IconDefinition;
}) {
    const handleClick = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        if (link === "") {
            event.preventDefault();
        }
    };
    return (
        <a
            href={link}
            className={`flex flex-row justify-center items-center w-full transition-all group/item cursor-pointer `}
            onClick={handleClick}
        >
            <div
                className={`flex justify-center items-center min-w-[8rem] w-32 h-32 rounded-2xl text-center ${color}`}
            >
                <FontAwesomeIcon
                    icon={iconDef}
                    className="w-12 h-12 text-white group-hover/item:scale-125 transition-all"
                />
            </div>
            <div className="ml-8 flex flex-col text-left flex-grow">
                <div className="text-3xl text-white mb-3">{title}</div>
                <div className="text-xl text-zinc-500">{content}</div>
            </div>
            <div
                className={`w-40 right-0 invisible ${
                    link !== "" ? "group-hover/item:visible" : ""
                }`}
            >
                <FontAwesomeIcon className="w-6 h-6 text-zinc-500" icon={faChevronRight} />
            </div>
        </a>
    );
}

function Activities() {
    return (
        <div className="activities-area">
            <ContentFrame
                title="주요 활동"
                subTitle="HEXA는 매 학기 특별한 활동을 진행하고 있습니다."
                // icon="💡"
            >
                <div className="flex flex-col h-[50rem] flex-wrap justify-evenly content-evenly items-start font-bold ml-10">
                    <ActivityItem
                        title="프로젝트"
                        content="HeXA는 매학기 프로젝트를 진행하며 UNIST 학우들을 위한 서비스를 개발합니다."
                        link="/projects"
                        color="bg-emerald-500"
                        iconDef={faDesktop}
                    />
                    <ActivityItem
                        title="세미나"
                        content="HeXA에서 각종 스터디와 내외부 연사를 초청한 세미나가 이루어집니다."
                        link="/services"
                        color="bg-rose-500"
                        iconDef={faGraduationCap}
                    />
                    <ActivityItem
                        title="홈커밍데이"
                        content="HeXA의 졸업생과 재학생이 만나는 자리입니다. UNIST
                        컴퓨터공학과와 후원사의 지원을 통해 이루어지며 각종
                        진로 조언을 얻을 수 있습니다."
                        link=""
                        color="bg-cyan-500"
                        iconDef={faHome}
                    />
                    <ActivityItem
                        title="Coming Soon"
                        content="무엇이 추가되어야 할까요?"
                        link=""
                        color="bg-amber-500"
                        iconDef={faBolt}
                    />
                </div>
            </ContentFrame>
        </div>
    );
}

export default Activities;
