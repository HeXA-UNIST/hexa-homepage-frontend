import { observer } from "mobx-react-lite";
import DeleteButton from "@pages/admin/components/DeleteButton";
import Button from "@pages/admin/components/Button";
import { useProjectAdminStore } from "../../../context/ProjectAdminContext";

function Actions() {
  const { editorStore } = useProjectAdminStore();

  return (
    <div className="flex flex-row gap-2">
      {!editorStore.isEditing ? (
        <>
          <Button
            label="프로젝트 수정"
            onClick={() => {
              editorStore.startEditing();
            }}
          />
          <DeleteButton
            prefix="프로젝트"
            onClick={() => {
              editorStore.deleteProject();
            }}
          />
        </>
      ) : (
        <>
          <Button
            label={
              editorStore.isNewProject
                ? "프로젝트 생성 완료"
                : "프로젝트 수정 완료"
            }
            onClick={() => {
              editorStore.submitEditing();
            }}
          />
          <Button
            label={
              editorStore.isNewProject
                ? "프로젝트 생성 취소"
                : "프로젝트 수정 취소"
            }
            onClick={() => {
              editorStore.cancelEditing();
            }}
          />
        </>
      )}
    </div>
  );
}

export default observer(Actions);
