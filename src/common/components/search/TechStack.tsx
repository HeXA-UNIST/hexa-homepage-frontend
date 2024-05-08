import { useEffect, useState } from "react";
import ProjectListViewModel from "@pages/project/activity/ProjectListViewModel";
import ToggleItems, { IToggleItem } from "./ToggleItems";



export default function TechStack({
    projectListViewModel,
}: {
    projectListViewModel: ProjectListViewModel;
}) {
    const [items, setItems] = useState<{ id: string; data: IToggleItem }[]>([]);

    if (
        new Set(projectListViewModel.techList).size !==
        projectListViewModel.techList.length
    )
        throw new Error(`같은 이름의 tech가 두개 존재합니다`);

    useEffect(() => {
        setItems(
            projectListViewModel.techList.map(
                (x: string): { id: string; data: IToggleItem } => ({
                    id: x,
                    data: {
                        text: x,
                        activeColor: "#2abf59",
                        deactiveColor: "#bf2a2a",
                    },
                })
            )
        );
    }, [projectListViewModel.techList]);

    useEffect(() => {
        console.error(projectListViewModel.projectQueryOptions);
    }, [projectListViewModel.projectQueryOptions.sort]);

    return (
        <ToggleItems
            items={items}
            activeItems={
                projectListViewModel.projectQueryOptions.includeTechStack ?? []
            }
            deactiveItems={
                projectListViewModel.projectQueryOptions.excludeTechStack ?? []
            }
            onActiveToggleChanged={projectListViewModel.setIncludeTechStack}
            onDeactiveToggleChanged={projectListViewModel.setExcludeTechStack}
            hasDeactive
        />
    );
}
