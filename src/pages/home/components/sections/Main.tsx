import "@css/home/Main.css";
import BannerSlides from "@pages/home/components/carousels/BannerSlides";

function Main() {
    return (
        <div className="main-area">
            <div className="main-leftSide">
                <div className="main-title">HACKERS EXCITING ACADEMY</div>
                <div className="main-description component-big">유니스트 유일무이 해킹 동아리</div>
            </div>
            <BannerSlides />;
        </div>
    );
}

export default Main;
