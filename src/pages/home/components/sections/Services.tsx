import Carousel from "@pages/home/components/serviceCarousels/Carousel";
import "@css/home/Services.css";
import ContentArea from "@components/ContentArea";

import MainPageServiceItem from "@models/mainpage/MainPageServiceItem";

interface ServiceProps {
    serviceList: MainPageServiceItem[];
}

function ServiceItem({ service }: { service: MainPageServiceItem }) {
    const { thumbnail, title } = service;

    return (
        <div className="service-item">
            <a href="home" className="service-item__content">
                <div className="service-item__thumbnail">
                    {/* 나중에 src 수정 요망 */}
                    <img src={thumbnail} alt="" />
                </div>
                <div className="service-item__title">{title}</div>
                <div>
                    {/* 나중에 백엔드에 요청해서 subtitle넣어야 함. */}
                </div>
            </a>
        </div>
    );
}
function Services({ serviceList }: ServiceProps) {
    return (
        <div className="services-area">
            <ContentArea>
                <div className="services-area__content">
                    <div className="services-area__content__title">서비스</div>
                    <div className="services-area__content__subtitle">
                        HeXA는 UNIST 학생들의 삶의 편의를 증진시킬 수 있는
                        서비스를 제작하고 있어요
                    </div>
                    <div className="services-area__content__list">
                        {serviceList.map((service) => (
                            <ServiceItem
                                key={service.serviceId}
                                service={service}
                            />
                        ))}
                    </div>
                    <div>
                        <a href="/service">+더보기</a>
                    </div>
                </div>
            </ContentArea>
        </div>
    );
}

export default Services;
