import ContentArea from "@components/ContentArea";
import { ActivityMode } from "../vm/activity_view_model";

import "@css/activities/ModeSelectArea.css";

function ModeSelectArea({
  activityMode,
  onModeChange,
}: {
  activityMode: ActivityMode;
  onModeChange: (mode: ActivityMode) => void;
}) {
  return (
    <div className="activity__mode-select-area">
      <ContentArea>
        <div className="activity__mode-select-area__title">
          <h1>HeXA</h1>
          <h2>에서 진행한 활동 탐색하기</h2>
        </div>
        <div className="activity__mode-select-area__mode">
          <button
            className={[
              "activity__mode-select-area__mode__mode-button",
              activityMode === ActivityMode.Project ? "selected" : "",
            ].join(" ")}
            onClick={() => onModeChange(ActivityMode.Project)}
            type="button"
            name="project"
          >
            프로젝트
          </button>
          <button
            className={[
              "activity__mode-select-area__mode__mode-button",
              activityMode === ActivityMode.Seminar ? "selected" : "",
            ].join(" ")}
            onClick={() => onModeChange(ActivityMode.Seminar)}
            type="button"
            name="seminar"
          >
            세미나
          </button>
          <button
            className={[
              "activity__mode-select-area__mode__mode-button",
              activityMode === ActivityMode.Service ? "selected" : "",
            ].join(" ")}
            onClick={() => onModeChange(ActivityMode.Service)}
            type="button"
            name="service"
          >
            서비스
          </button>
        </div>
      </ContentArea>
    </div>
  );
}

export default ModeSelectArea;
