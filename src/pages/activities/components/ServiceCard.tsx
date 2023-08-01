import Service from "@models/service/Service";
import "@css/activities/ServiceCard.css";

function ServiceCard({ service }: { service: Service }) {
    const handleOnClickLink = () => {
        if (service.link) {
            window.open(service.link);
        }
    };

    const handleOnClickGithub = () => {
        if (service.github) {
            window.open(service.github);
        }
    };

    return (
        <div className="service-page__item">
            <img src={service.image} alt=" " />
            <div className="service-page__item__content">
                <div className="service-page__item__content__title">
                    {service.name}
                </div>
                <div className="service-page__item__content__introduction">
                    {service.introduction}
                </div>
                <div className="service-page__item__content__buttons">
                    {service.link && (
                        <button
                            type="button"
                            className="service-page__item__content__button"
                            onClick={handleOnClickLink}
                        >
                            사용해보기 →
                        </button>
                    )}

                    {service.github && (
                        <button
                            type="button"
                            className="service-page__item__content__button"
                            onClick={handleOnClickGithub}
                        >
                            Github →
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
