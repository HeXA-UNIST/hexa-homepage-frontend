import { observer } from "mobx-react-lite";
import DeleteButton from "@pages/admin/components/DeleteButton";
import Button from "@pages/admin/components/Button";
import { useSeminarAdminStore } from "../../../context/SeminarAdminContext";

function Actions() {
  const { editorStore } = useSeminarAdminStore();

  return (
    <div className="flex flex-row gap-2">
      {!editorStore.isEditing ? (
        <>
          <Button
            label="세미나 수정"
            onClick={() => {
              editorStore.startEditing();
            }}
          />
          <DeleteButton
            prefix="세미나"
            onClick={() => {
              editorStore.deleteSeminar();
            }}
          />
        </>
      ) : (
        <>
          <Button
            label={
              editorStore.isNewSeminar ? "세미나 생성 완료" : "세미나 수정 완료"
            }
            onClick={() => {
              editorStore.submitEditing();
            }}
          />
          <Button
            label={
              editorStore.isNewSeminar ? "세미나 생성 취소" : "세미나 수정 취소"
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
