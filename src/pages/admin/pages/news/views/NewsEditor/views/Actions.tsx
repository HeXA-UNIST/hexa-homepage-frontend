import { observer } from "mobx-react-lite";
import DeleteButton from "@pages/admin/components/DeleteButton";
import Button from "@pages/admin/components/Button";
import { useNewsAdminStore } from "../../../context/NewsAdminContext";

function Actions() {
  const { editorStore } = useNewsAdminStore();

  return (
    <div className="flex flex-row gap-2">
      {!editorStore.isEditing ? (
        <>
          <Button
            label="뉴스 수정"
            onClick={() => {
              editorStore.startEditing();
            }}
          />
          <DeleteButton
            prefix="뉴스"
            onClick={() => {
              editorStore.deleteNews();
            }}
          />
        </>
      ) : (
        <>
          <Button
            label={editorStore.isNewNews ? "뉴스 생성 완료" : "뉴스 수정 완료"}
            onClick={() => {
              editorStore.submitEditing();
            }}
          />
          <Button
            label={editorStore.isNewNews ? "뉴스 생성 취소" : "뉴스 수정 취소"}
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
