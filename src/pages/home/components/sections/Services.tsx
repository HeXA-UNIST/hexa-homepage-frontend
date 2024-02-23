// import Carousel from "@pages/home/components/serviceCarousels/Carousel";
import "@css/home/Services.css";
import MainPageServiceItem from "@models/service/MainPageServiceItem";
import ContentFrame from "../content";

interface ServiceProps {
    serviceList: MainPageServiceItem[];
}

function ServiceItem({ service }: { service: MainPageServiceItem }) {
    const { thumbnail, title, subTitle } = service;

    return (
        <a
            href="home"
            className="flex flex-col min-w-min w-[22rem] h-96 bg-neutral-800 rounded-2xl p-7 text-left font-bold"
        >
            <div className="flex justify-center items-center bg-emerald-500 rounded-xl h-40 mb-4">
                <img className="" src={thumbnail} alt="" />
            </div>
            <div className="text-white text-3xl mb-3">{title}</div>
            <div className="text-zinc-500 text-xl">{subTitle}</div>
        </a>
    );
}
function Services({ serviceList }: ServiceProps) {
    return (
        <div className="services-area">
            <ContentFrame
                title="진행 프로젝트"
                subTitle="HEXA에서는 매 학기 프로젝트를 진행하고 있어요.
                실제 부원들이 제작하고 배포한 서비스를 살펴보세요!"
                // icon="🧭"
            >
                <div
                    className="flex flex-wrap justify-between content-between"
                    style={{
                        height: "50rem",
                    }}
                >
                    {serviceList.map((service) => (
                        <ServiceItem
                            key={service.serviceId}
                            service={service}
                        />
                    ))}
                </div>
                {/* <div className="flex justify-center">
                    <div className="flex justify-center items-center text-3xl text-white font-bold bg-neutral-800 rounded-full w-64 h-24">
                        <a className="mb-2" href="/service">
                            +더보기
                        </a>
                    </div>
                </div> */}
            </ContentFrame>
        </div>
    );
}

export default Services;
