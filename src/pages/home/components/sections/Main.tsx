import "@css/home/Main.css";
// import BannerSlides from "@pages/home/components/carousels/BannerSlides";

import ContentArea from "@components/ContentArea";

function Main() {
    return (
        <div
            className="pt-[540px] pb-20 mb-40"
            style={{
                backgroundImage:
                    "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1)), url('images/backgrounds/background4.png')",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center top",
                backgroundSize: "auto 100%",
            }}
        >
            <ContentArea>
                <div className="flex flex-row font-bold text-white justify-between mb-40">
                    <div className="max-w-[18rem]">
                        <div className="max-w-full text-base bg-neutral-800 rounded-full p-3 mb-2">
                            유니스트 유일무이 해킹 동아리
                        </div>
                        <div className="text-6xl mb-4 leading-tight">
                            HACKERS EXCITING ACADEMY
                        </div>
                    </div>
                    {/* <BannerSlides /> */}
                </div>

            </ContentArea>
        </div>
    );
}

export default Main;
