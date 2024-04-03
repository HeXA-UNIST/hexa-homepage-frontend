import { ProjectStatusString } from "@models/project/Project";
import ProjectListViewModel from "@pages/project/activity/ProjectListViewModel";
import ToggleItems, { IToggleItem } from "./ToggleItems";

export default function ProjectState({
    projectListViewModel,
}: {
    projectListViewModel: ProjectListViewModel;
}) {
    const item: { id: ProjectStatusString; data: IToggleItem }[] = [
        {
            id: "모집중",
            data: {
                text: "모집중",
                activeColor: "#3cc93c",
            },
        },
        {
            id: "진행중",
            data: {
                text: "진행중",
                activeColor: "#347bed",
            },
        },
        {
            id: "승인중",
            data: {
                text: "승인중",
                activeColor: "#392abf",
            },
        },
        {
            id: "진행완료",
            data: {
                text: "진행완료",
                activeColor: "#7b229c",
            },
        },
    ];
    return (
        <ToggleItems
            items={item}
            activeItems={projectListViewModel.projectQueryOptions.status}
            deactiveItems={[]}
            onActiveToggleChanged={projectListViewModel.setStatus}
            onDeactiveToggleChanged={() => {}}
            hasDeactive={false}
        />
    );
}
