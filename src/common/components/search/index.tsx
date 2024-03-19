import { ProjectStatusString } from "@models/project/Project";

import { SortDropDown, YearDropDown } from "./DropDowns";
import SearchBox from "./SearchBox";
import TechStack from "./TechStack";

interface ISearchTypes {
    onTextChanged: (text: string) => void | null;
    onSortChanged: (sort: "asc" | "desc") => void | null;
    onYearChanged: (year: string) => void | null;
    onStatusChanged: (status: ProjectStatusString) => void | null;
    onStackChanged: (stack: string[]) => void | null;
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
        <div>
            <div className=" text-sm text-white font-semibold">{title}</div>
            <div className="flex flex-row"></div>
        </div>
    );
}

export default function SearchArea(toggle: ISearchTypes) {
    return (
        <div>
            <SubSearchArea title="검색">
                {toggle.onTextChanged === null ?? (
                    <SearchBox value="" onSubmit={toggle.onTextChanged} />
                )}
                {toggle.onSortChanged === null ?? (
                    <SortDropDown onSortChanged={toggle.onSortChanged} />
                )}
                {toggle.onYearChanged === null ?? (
                    <YearDropDown onYearChanged={toggle.onYearChanged} />
                )}
            </SubSearchArea>
            <SubSearchArea title="상태">
                {toggle.onStatusChanged === null ?? (
                    <SearchBox value="" onSubmit={toggle.onTextChanged} />
                )}
            </SubSearchArea>
            <SubSearchArea title="기술스택">
                {toggle.onStackChanged === null ?? (
                    <TechStack onStackChanged={toggle.onStackChanged} />
                )}
            </SubSearchArea>
        </div>
    );
}
