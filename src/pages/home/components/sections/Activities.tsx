import "@css/home/Activities.css";
import ContentFrame from "../content";

function ActivityItem(thumbnail: string, title: string, content: string) {
    return (
        <div
            className="flex flex-col justify-center items-center w-80"
            style={{
                width: "28rem",
            }}
        >
            <div className="w-80 text-center mb-7">
                <img
                    src={`images/${thumbnail}.png`}
                    className="w-max"
                    alt="face"
                />
            </div>
            <div className="text-left w-full">
                <div className="text-3xl text-white mb-3">{title}</div>
                <div className="text-2xl text-zinc-500">{content}</div>
            </div>
        </div>
    );
}

function Activities() {
    return (
        <div className="activities-area">
            <ContentFrame
                title="활동"
                subTitle="HeXA에서는 매학기 동아리원이 모여 활동을 기획하고 진행해요."
                icon="💡"
            >
                <div className="flex flex-wrap justify-evenly content-evenly items-start font-bold" style={{
                    height:"65rem"
                }}>
                    {ActivityItem(
                        "sample1",
                        "프로젝트",
                        "HeXA는 매학기 프로젝트를 진행하며 UNIST 학우들을 위한 서비스를 개발합니다."
                    )}
                    {ActivityItem(
                        "sample1",
                        "세미나",
                        "HeXA에서 각종 스터디와 내외부 연사를 초청한 세미나가 이루어집니다."
                    )}
                    {ActivityItem(
                        "sample1",
                        "홈커밍데이",
                        `HeXA의 졸업생과 재학생이 만나는 자리입니다. UNIST
                        컴퓨터공학과와 후원사의 지원을 통해 이루어지며 각종
                        진로 조언을 얻을 수 있습니다.`
                    )}
                    {ActivityItem(
                        "sample1",
                        "Coming Soon",
                        "무엇이 추가되어야 할까요?"
                    )}
                </div>
            </ContentFrame>
        </div>
    );
}

export default Activities;
