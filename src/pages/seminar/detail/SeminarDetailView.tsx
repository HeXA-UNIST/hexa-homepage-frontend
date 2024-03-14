import { observer } from "mobx-react";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

import SeminarDetailViewModel from "./SeminarDetailViewModel";

function SeminarDetailView({ viewModel }: { viewModel: SeminarDetailViewModel }) {
    const { id } = useParams();

    useEffect(() => {
        if(id !== undefined){
            // id: string to number
            viewModel.setSeminarId(+id);
        }
    }, []);

    return (
        <div>
            {viewModel.seminarId}
        </div>
    )
}

export default observer(SeminarDetailView);