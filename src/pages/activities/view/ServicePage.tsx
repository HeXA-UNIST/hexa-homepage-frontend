import ContentArea from "@components/ContentArea";
import { observer } from "mobx-react";

import "@css/activities/ServicePage.css";
import ServicePageViewModel from "@pages/activities/vm/service_page_view_model";
import ServiceCard from "@pages/activities/components/ServiceCard";



function TitlePart() {
  return (
    <div className="service-page__title">
      <h2>HeXA가 만든 서비스</h2>
      <span>HeXA는, UNIST 학우들을 위해 다양한 서비스를 제공합니다</span>
    </div>
  );
}

const ServiceListPart = observer(
    ({
      servicePageViewModel,
    }: {
      servicePageViewModel: ServicePageViewModel;
    }) => {
      const { queryResult } = servicePageViewModel;
        
      return (
        <div className="service-page__service-list">
          {queryResult.services.map((service) => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
      );
    }
  );

function ServicePage({
    servicePageViewModel,
  }: {
    servicePageViewModel: ServicePageViewModel;
  }) {
    servicePageViewModel.fetchServices();
    
    return (
      <ContentArea>
        <TitlePart />
        <ServiceListPart servicePageViewModel={servicePageViewModel} />
      </ContentArea>
    );
  }

export default ServicePage;
