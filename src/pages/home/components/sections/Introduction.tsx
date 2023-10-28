import ContentArea from "@components/ContentArea";
import "@css/home/Introduction.css";

function Introduction() {
    return (
        <div className="introduction-area">
            <ContentArea>
                <div className="introduction-area__content">
                    <div className="">
                        <div>동아리 소개</div>
                        <div>HeXA란?</div>
                    </div>
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <div>
                                <div>HACKERS</div>
                                <div>EXCITING ACADEMY</div>
                            </div>
                            <div>
                                HeXA는 2011년부터 시작된 UNIST 종합 프로그래밍
                                동아리입니다. UNIST 학우의 생활을 개선하기 위한
                                많은 서비스를 개발하고 있습니다. HeXA는
                                프로그래밍에 관심있는 UNIST의 학부생이라면
                                누구나 지원가능합니다.
                            </div>
                        </div>
                    </div>
                </div>
            </ContentArea>
        </div>
    );
}

export default Introduction;
