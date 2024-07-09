import { observer } from "mobx-react-lite";
import DeleteButton from "@pages/admin/components/DeleteButton";
import Button from "@pages/admin/components/Button";
import { useServiceAdminStore } from "../../../context/ServiceAdminContext";

function Actions() {
  const { editorStore } = useServiceAdminStore();

  return (
    <div className="flex flex-row gap-2">
      {!editorStore.isEditing ? (
        <>
          <Button
            label="서비스 수정"
            onClick={() => {
              editorStore.startEditing();
            }}
          />
          <DeleteButton
            prefix="서비스"
            onClick={() => {
              editorStore.deleteService();
            }}
          />
        </>
      ) : (
        <>
          <Button
            label={
              editorStore.isNewService ? "서비스 생성 완료" : "서비스 수정 완료"
            }
            onClick={() => {
              editorStore.submitEditing();
            }}
          />
          <Button
            label={
              editorStore.isNewService ? "서비스 생성 취소" : "서비스 수정 취소"
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
