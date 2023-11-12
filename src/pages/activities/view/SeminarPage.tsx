import ContentArea from "@components/ContentArea";
import SearchBox from "@components/SearchBox";
import { observer } from "mobx-react";

import "@css/activities/SeminarPage.css";
import SeminarPageViewModel from "@pages/activities/vm/seminar_page_view_model";
import SeminarCard from "@pages/activities/components/SeminarCard";

function TitlePart() {
    return (
        <div className="seminar-page__title">
            <h2>HeXA가 진행한 세미나</h2>
            <span>
                HeXA는, 지식을 나누기 위해 정기적으로 스터디를 진행합니다.
            </span>
        </div>
    );
}

const QueryFormPart = observer(
    ({
        seminarPageViewModel,
    }: {
        seminarPageViewModel: SeminarPageViewModel;
    }) => {
        const { seminarQueryOptions } = seminarPageViewModel;

        return (
            <div className="seminar-page__query-form">
                <div>
                    <SearchBox
                        style={{
                            width: "100%",
                        }}
                        value={seminarQueryOptions.searchText}
                        onChange={(text) => {
                            seminarPageViewModel.setSearchText(text);
                            seminarPageViewModel.fetchSeminars();
                        }}
                        placeholder="검색 (예: BUS HeXA, tag:서비스)"
                    />
                </div>
            </div>
        );
    }
);

const SeminarListPart = observer(
    ({
        seminarPageViewModel,
    }: {
        seminarPageViewModel: SeminarPageViewModel;
    }) => {
        const { queryResult } = seminarPageViewModel;

        return (
            <div className="seminar-page__seminar-list">
                {queryResult.seminars.map((seminar) => (
                    <SeminarCard key={seminar.seminarId} seminar={seminar} />
                ))}
            </div>
        );
    }
);

function SeminarPage({
    seminarPageViewModel,
}: {
    seminarPageViewModel: SeminarPageViewModel;
}) {
    seminarPageViewModel.fetchSeminars();

    return (
        <ContentArea>
            <TitlePart />
            <QueryFormPart seminarPageViewModel={seminarPageViewModel} />
            <SeminarListPart seminarPageViewModel={seminarPageViewModel} />
        </ContentArea>
    );
}

export default SeminarPage;
