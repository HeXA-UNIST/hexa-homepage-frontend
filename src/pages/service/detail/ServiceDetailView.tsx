import { observer } from "mobx-react";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

import ServiceDetailViewModel from "./ServiceDetailViewModel";

function ServiceDetailView({ viewModel }: { viewModel: ServiceDetailViewModel }) {
    const { id } = useParams();

    useEffect(() => {
        if(id !== undefined){
            // id: string to number
            viewModel.setServiceId(+id);
        }
    }, []);

    return (
        <div>
            {viewModel.serviceId}
        </div>
    )
}

export default observer(ServiceDetailView);