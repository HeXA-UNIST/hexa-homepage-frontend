import "@css/activities/seminar.css";
import searchBox from "./Search";
import { toStringByFormatting } from "../../../util/index";
const seminarList = [
    {
        id: 1,
        name: "2022 Seminar",
        introduction: "Hexa에서 진행한 2022 첫 세미나입니다. 관련 파일은 아래에 첨부하였습니다.",
        download: '/download/seminar/Seminar PPT.pdf',
        pdfName: 'Seminar PPT.pdf',
        organizer: '김선욱',
        seminarDate: new Date()
    },
    {
        id: 2,
        name: "2022 Seminar",
        introduction: "Hexa에서 진행한 2022 첫 세미나입니다. 관련 파일은 아래에 첨부하였습니다.",
        download: '/download/seminar/Seminar PPT.pdf',
        pdfName: 'Seminar PPT.pdf',
        organizer: '김선욱',
        seminarDate: new Date()
    },
    {
        id: 3,
        name: "2022 Seminar",
        introduction: "Hexa에서 진행한 2022 첫 세미나입니다. 관련 파일은 아래에 첨부하였습니다.",
        download: '/download/seminar/Seminar PPT.pdf',
        pdfName: 'Seminar PPT.pdf',
        organizer: '김선욱',
        seminarDate: new Date()
    },
    {
        id: 4,
        name: "2022 Seminar",
        introduction: "Hexa에서 진행한 2022 첫 세미나입니다. 관련 파일은 아래에 첨부하였습니다.",
        download: '/download/seminar/Seminar PPT.pdf',
        pdfName: 'Seminar PPT.pdf',
        organizer: '김선욱',
        seminarDate: new Date()
    },
];


function PdfDownload(pdfName: string, link: string){
    return (
        <a href={link} className="download-wrap">

        </a>
    );
}

function Seminar() {
    const seminars = seminarList.map((seminar: any) => ( // <= 지금은 임시로 데이터 적어놔서 any로 형식 지정
        <div className="seminarContent">
            <div className="seminarIntroduction">
                <div className="seminarLeft">
                    <div className="h3">{seminar.name}</div>
                    {seminar.introduction}
                    {PdfDownload(seminar.pdfName, seminar.download)}
                </div>
                <div className="seminarRight">
                    <div className="organizer">{seminar.organizer}</div>
                    <div className="seminarDate">{toStringByFormatting(seminar.date)}</div>
                </div>
                
            </div>
        </div>
    ));




    return (
        <div>
            <div className="seminarArea">
                <h1>HeXA가 진행한 세미나</h1>
                <h5>HeXA는, 지식을 나누기 위해 정기적으로 스터디를 진행합니다.</h5>
                {searchBox()}
            </div>
            <div className="seminars">
                {seminars}
            </div>
        </div>
    );
}

export default Seminar;
