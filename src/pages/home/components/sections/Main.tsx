import "@css/home/Main.css";
import BannerSlides from "@pages/home/components/carousels/BannerSlides";

import ContentArea from "@components/ContentArea";

function Main() {
    return (
        <div className="mt-20 mb-40"><ContentArea>
        <div className="flex flex-row font-bold text-white justify-between">
            <div className="max-w-lg">
                <div className="text-8xl mb-8 leading-tight">HACKERS EXCITING ACADEMY</div>
                <div className="max-w-full text-3xl bg-neutral-800 rounded-full p-6">
                    유니스트 유일무이 해킹 동아리
                </div>
            </div>
            <BannerSlides />
        </div>
    </ContentArea></div>
        
    );
}

export default Main;
