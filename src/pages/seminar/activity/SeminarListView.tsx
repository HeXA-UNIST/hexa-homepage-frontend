import { observer } from "mobx-react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";

import SearchArea from "@components/search";
import PageNation from "@components/search/PageNation";
import ContentArea from "@components/ContentArea";

// import Header from "@components/header/Header";
// import Footer from "@components/footer/Footer";

import SeminarSummary from "@models/seminar/SeminarSummary";
import SeminarListViewModel from "./SeminarListViewModel";

const QueryFormPart = observer(
    ({
        seminarPageViewModel,
    }: {
        seminarPageViewModel: SeminarListViewModel;
    }) => (
        <div className="project-page__query-form">
            <div>
                <SearchArea
                    toggle={{
                        subAreaTypes: ["search"],
                        search: {
                            searchText: "",
                            placeHolder: "검색 (예: BUS HeXA, tag:서비스)",
                            onTextChanged: (text: string) => {
                                seminarPageViewModel.setSearchText(text);
                                seminarPageViewModel.fetchSeminars();
                            }
                        },
                        onYearChanged: seminarPageViewModel.setYear
                    }}
                />
            </div>
        </div>
    )
);

function SeminarItem({ seminarData }: { seminarData: SeminarSummary }) {

    return (
        <Link
            to={`/seminar/${seminarData.seminarId}`}
            className="w-full h-30 p-8 bg-neutral-900 rounded-2xl text-zinc-300 mb-10 group/seminarItem"
        >
            <div className="flex flex-col transition-all">
                <div className="w-full flex flex-col">
                    <div className="flex flex-row items-center text-3xl font-bold text-left text-white text-ellipsis overflow-hidden grow">
                        {seminarData.hasAttachment && (
                            <FontAwesomeIcon
                                className=" mr-2 text-xl"
                                icon={faFileLines}
                            />
                        )}
                        <div className="mb-[3px]">{seminarData.title}</div>
                    </div>
                    <div className="flex flex-row gap-2">
                        <div className="text-xl">{seminarData.writer}</div>
                        <div className="text-xl">{seminarData.date}</div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

function SeminarView({ viewModel }: { viewModel: SeminarListViewModel }) {
    return (
        <ContentArea>
            <QueryFormPart seminarPageViewModel={viewModel}/>
            <div className="min-h-[40rem]">
                <div className="grid grid-cols-[repeat(3,minmax(350px,auto))] gap-x-4 gap-y-6 mb-28">
                    {viewModel.queryResult.seminars.map((seminar) => (
                        <SeminarItem
                            key={seminar.seminarId}
                            seminarData={seminar}
                        />
                    ))}
                </div>
            </div>

            <PageNation
                curPage={viewModel.seminarQueryOptions.pageNum}
                maxPage={viewModel.queryResult.totalPage}
                onCurPageChanged={viewModel.setPageNum}
                onPerPageChanged={viewModel.setPerPage}
            />
        </ContentArea>
    );
}

export default observer(SeminarView);
