import { observer } from "mobx-react";


import ContentArea from "@components/ContentArea";
// import SearchBox from "@components/search/SearchBox";

// import Header from "@components/header/Header";
// import Footer from "@components/footer/Footer";

import ServiceSummary from "@models/service/ServiceSummary";
import ServiceListViewModel from "./ServiceListViewModel";


function ServiceItem({ serviceData }: { serviceData: ServiceSummary }) {
    return (
        <a
            href="home"
            className="flex flex-col min-w-min w-[22rem] h-96 bg-neutral-900 rounded-2xl p-7 text-left font-bold"
        >
            <div className="flex justify-center items-center bg-emerald-500 rounded-xl h-40 mb-4">
                <img className="" src={`${serviceData.thumbnail}`} alt="" />
            </div>
            <div className="text-white text-3xl mb-3">{serviceData.title}</div>
        </a>
    );
}

function ServiceView({ viewModel }: { viewModel: ServiceListViewModel }) {
    return (
        <ContentArea>
            <div className="flex justify-between">
                {viewModel.queryResult.services.map((service) => (
                    <ServiceItem
                        key={service.serviceId}
                        serviceData={service}
                    />
                ))}
            </div>
        </ContentArea>
    );
}

export default observer(ServiceView);
