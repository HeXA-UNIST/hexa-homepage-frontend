// import Carousel from "@pages/home/components/serviceCarousels/Carousel";
import "@css/home/Services.css";
import MainPageServiceItem from "@models/service/MainPageServiceItem";
import { Image } from "@components/ImageContent";
import { Link } from "react-router-dom";
import ContentFrame from "../content";

interface ServiceProps {
    serviceList: MainPageServiceItem[];
}

function ServiceItem({ service }: { service: MainPageServiceItem }) {

    return (
        // <Link
        //     to={`/service/${service.serviceId}`}
        //     className="flex flex-col min-w-min w-[22rem] h-96 bg-neutral-800 rounded-2xl p-7 text-left font-bold"
        // >
        //     <div className="flex justify-center items-center bg-emerald-500 rounded-xl h-40 mb-4">
        //         <img className="" src={thumbnail} alt="" />
        //     </div>
        //     <div className="text-white text-3xl mb-3">{title}</div>
        //     <div className="text-zinc-500 text-xl">{subTitle}</div>
        // </Link>
        <Link
            to={`/service/${service.serviceId}`}
            className="flex flex-col h-80 bg-neutral-900 rounded-3xl p-6 text-left font-bold"
        >
            <div className="flex flex-row items-center justify-between text-white text-2xl mb-3 px-1">
                <div className=" overflow-hidden text-ellipsis whitespace-nowrap">
                    {service.title}
                </div>
                <span className="text-base font-medium text-zinc-500 float-right">
                    Service
                </span>
            </div>
            <div className="flex justify-center items-center bg-neutral-800 rounded-2xl h-44 mb-4 overflow-hidden max-w-md">
                <Image id={service.thumbnail} className="w-full" />
            </div>
        </Link>
    );
}
function Services({ serviceList }: ServiceProps) {
    const maxCnt = 6;
    return (
        <div className="services-area">
            <ContentFrame
                title="진행 프로젝트"
                subTitle="HEXA에서는 매 학기 프로젝트를 진행하고 있어요.
                실제 부원들이 제작하고 배포한 서비스를 살펴보세요!"
                // icon="🧭"
            >
                <div
                    className="grid grid-cols-[repeat(3,minmax(350px,_1fr))] gap-x-6 gap-y-8 mb-28"
                    style={{
                        height: "50rem",
                    }}
                >
                    {serviceList.slice(0, maxCnt).map((service) => (
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
