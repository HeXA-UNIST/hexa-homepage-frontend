import { observer } from "mobx-react";

import { useParams } from "react-router-dom";
import { useEffect } from "react";

import ProjectDetailViewModel from "./ProjectDetailViewModel";

function ProjectDetailView({ viewModel }: { viewModel: ProjectDetailViewModel }) {
    const { id } = useParams();

    useEffect(() => {
        if(id !== undefined){
            // id: string to number
            viewModel.setProjectId(+id);
        }
    }, []);

    return (
        <div className=" pt-[10rem] min-h-[50rem]">
            {viewModel.projectId}
        </div>
    )
}

export default observer(ProjectDetailView);