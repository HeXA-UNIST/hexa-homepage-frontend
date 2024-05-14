import { useState } from "react";
import { reaction } from "mobx";
import { observer } from "mobx-react";
import ProjectListViewModel from "@pages/project/activity/ProjectListViewModel";
import ToggleItems, { IToggleItem } from "./ToggleItems";


function TechStack({
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


    reaction(
        () => projectListViewModel.techList,
        (list) => {
            console.log("set tech list", list);
            setItems(
                list.map((x: string): { id: string; data: IToggleItem } => ({
                    id: x,
                    data: {
                        text: x,
                        activeColor: "#2abf59",
                        deactiveColor: "#bf2a2a",
                    },
                }))
            );
        }
    );

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


export default observer(TechStack);