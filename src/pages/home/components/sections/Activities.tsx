import "@css/home/Activities.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import {
    // faDesktop,
    // faGraduationCap,
    // faHome,
    // faBolt,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import ContentFrame from "../content";

function ActivityItem({
    // thumbnail,
    title,
    content,
    link,
    color,
    children,
}: {
    // thumbnail: string;
    title: string;
    content: string;
    link: string;
    color: string;
    children: React.ReactNode;
}) {
    const handleClick = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        if (link === "") {
            event.preventDefault();
        }
    };
    return (
        <Link
            to={link}
            className={`flex flex-row justify-center items-center w-full transition-all group/item cursor-pointer `}
            onClick={handleClick}
        >
            <div
                className={`flex justify-center items-center min-w-[8rem] w-32 h-32 rounded-2xl text-center ${color} overflow-hidden`}
            >
                {children}
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
                <FontAwesomeIcon
                    className="w-6 h-6 text-zinc-500"
                    icon={faChevronRight}
                />
            </div>
        </Link>
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
                        title="서비스"
                        content="HeXA는 UNIST 학우들을 위한 서비스를 개발하고 있습니다."
                        link="/activity/services"
                        color="bg-purple-800"
                    >
                        <img className="w-20 group-hover/item:scale-125 transition-all" src="/images/icon/hexaLogoPurple.png" alt="" />
                    </ActivityItem>
                    <ActivityItem
                        title="프로젝트"
                        content="HeXA는 매학기마다 흥미 위주의 다양한 토이프로젝트를 진행합니다."
                        link="/activity/projects"
                        color="bg-white"
                        >
                        <img className="w-20 bg-black group-hover/item:scale-125 transition-all" src="/images/icon/hexaLogoBackground.png" alt="" />
                    </ActivityItem>
                    <ActivityItem
                        title="세미나"
                        content="HeXA에서 각종 스터디와 내외부 연사를 초청한 세미나가 이루어집니다."
                        link="/activity/seminars"
                        color="bg-blue-900"
                        >
                        <img className="w-20 group-hover/item:scale-125 transition-all" src="/images/icon/hexaLogo.png" alt="" />
                    </ActivityItem>
                    <ActivityItem
                        title="부트캠프"
                        content="신입 부원들이 HeXA에 잘 적응할 수 있도록 준비한 교육 프로그램입니다."
                        link=""
                        color="bg-black"
                        >
                        <img className="w-20 group-hover/item:scale-125 transition-all" src="/images/icon/hexaLogoGold.png" alt="" />
                    </ActivityItem>
                </div>
            </ContentFrame>
        </div>
    );
}

export default Activities;
