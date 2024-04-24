// import { ProjectStatusString } from "@models/project/Project";
import ProjectListViewModel from "@pages/project/activity/ProjectListViewModel";
import { SortDropDown, YearDropDown } from "./DropDowns";
import SearchBox from "./SearchBox";
import TechStack from "./TechStack";
import ProjectState from "./ProjectState";

interface ISearchTypes {
    search?: {
        searchText: string;
        placeHolder: string;
        onTextChanged: (text: string) => void;
    };
    onSortChanged?: (sort: "asc" | "desc") => void;
    onYearChanged?: (year: string) => void;
    // onPerPageChanged?: (perPage: number) => void;
    // onStatusChanged?: (status: ProjectStatusString[]) => void;
    projectListViewModel?: ProjectListViewModel;
}

function SubSearchArea({
    title,
    children,
}: {
    title: string;
    children: React.ReactNode;
}) {
    if (children == null) {
        return null;
    }
    return (
        <div className="mb-8">
            <div className=" text-left text-xl text-white font-semibold mb-4">
                {title}
            </div>
            <div className="flex flex-row gap-3">{children}</div>
        </div>
    );
}

export default function SearchArea({ toggle }: { toggle: ISearchTypes }) {
    return (
        <div>
            <SubSearchArea title="검색">
                {toggle.search !== undefined && (
                    <SearchBox
                        value={toggle.search.searchText}
                        placeholder={toggle.search.placeHolder}
                        onSubmit={toggle.search.onTextChanged}
                    />
                )}
                {toggle.onSortChanged !== undefined && (
                    <SortDropDown onSortChanged={toggle.onSortChanged} />
                )}
                {toggle.onYearChanged !== undefined && (
                    <YearDropDown onYearChanged={toggle.onYearChanged} />
                )}
            </SubSearchArea>
            <SubSearchArea title="상태">
                {toggle.projectListViewModel !== undefined && (
                    <ProjectState
                        projectListViewModel={toggle.projectListViewModel}
                    />
                )}
            </SubSearchArea>
            <SubSearchArea title="기술스택">
                {toggle.projectListViewModel !== undefined && (
                    <TechStack
                        projectListViewModel={toggle.projectListViewModel}
                    />
                )}
            </SubSearchArea>
        </div>
    );
}
