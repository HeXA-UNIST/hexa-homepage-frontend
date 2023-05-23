import ContentArea from "@components/ContentArea";
import "@css/activities/SeminarPage.css";

function TitlePart() {
  return (
    <div className="seminar-page__title">
      <h2>HeXA가 진행한 세미나</h2>
      <span>HeXA는, 지식을 나누기 위해 정기적으로 스터디를 진행합니다.</span>
    </div>
  );
}

function SeminarPage() {
  return (
    <ContentArea>
      <TitlePart />
    </ContentArea>
  );
}

export default SeminarPage;
