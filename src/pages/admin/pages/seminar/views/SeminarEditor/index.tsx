import { observer } from "mobx-react-lite";
import OneLineTextField from "@pages/admin/components/OneLineTextField";
import { uploadAttachment } from "common/services/admin/attachment/AttachmentAdminService";
import DateField from "@pages/admin/components/DateField";
import adminNotificationStore from "@pages/admin/store/AdminNotificationStore";
import FileListUploadField from "@pages/admin/components/FileListUploadField";
import MultilineTextField from "@pages/admin/components/MultilineTextField";
import Actions from "./views/Actions";
import { useSeminarAdminStore } from "../../context/SeminarAdminContext";

const Title = observer(() => {
  const { editorStore } = useSeminarAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">제목</div>
      <OneLineTextField
        value={
          editorStore.isEditing
            ? editorStore.edittingSeminar?.title ?? ""
            : editorStore.seminar?.title ?? ""
        }
        onChange={(v) => {
          if (!editorStore.edittingSeminar) return;
          editorStore.setEdittingSeminar({
            ...editorStore.edittingSeminar,
            title: v,
          });
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

const SeminarDate = observer(() => {
  const { editorStore } = useSeminarAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">시작일</div>
      <DateField
        value={
          editorStore.isEditing
            ? editorStore.edittingSeminar?.date ?? new Date()
            : editorStore.seminar?.date ?? new Date()
        }
        onChange={(v) => {
          if (!v) return;
          if (!editorStore.edittingSeminar) return;
          editorStore.setEdittingSeminar({
            ...editorStore.edittingSeminar,
            date: v,
          });
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

const Content = observer(() => {
  const { editorStore } = useSeminarAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">내용</div>
      <MultilineTextField
        value={
          editorStore.isEditing
            ? editorStore.edittingSeminar?.content ?? ""
            : editorStore.seminar?.content ?? ""
        }
        onChange={(v) => {
          if (!editorStore.edittingSeminar) return;
          editorStore.setEdittingSeminar({
            ...editorStore.edittingSeminar,
            content: v,
          });
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

const Attachment = observer(() => {
  const { editorStore } = useSeminarAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">첨부파일</div>
      <FileListUploadField
        initialFiles={editorStore.seminar?.attachments ?? []}
        value={
          editorStore.isEditing
            ? editorStore.edittingSeminar?.attachments ?? []
            : editorStore.seminar?.attachments ?? []
        }
        onChange={(v) => {
          if (!editorStore.edittingSeminar) return;
          editorStore.setEdittingSeminar({
            ...editorStore.edittingSeminar,
            attachments: v,
          });
        }}
        onUpload={async (file, fileName) => {
          try {
            const result = await uploadAttachment(file, fileName);

            if (!editorStore.edittingSeminar) return;

            editorStore.setEdittingSeminar({
              ...editorStore.edittingSeminar,
              attachments: [
                ...(editorStore.edittingSeminar?.attachments ?? []),
                result,
              ],
            });
          } catch (e) {
            adminNotificationStore.addNotification(
              "첨부파일 업로드 오류",
              "첨부파일을 업로드하는 중 오류가 발생했습니다."
            );
            console.error(e);
          }
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

function SeminarEditor() {
  return (
    <div className="w-full h-full min-h-0 overflow-y-auto flex flex-col items-start gap-4">
      <div className="text-white font-bold text-2xl">세미나 정보</div>
      <Actions />
      <Title />
      <SeminarDate />
      <Content />
      <Attachment />
    </div>
  );
}

export default SeminarEditor;
