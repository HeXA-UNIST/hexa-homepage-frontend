import { observer } from "mobx-react-lite";
import ImageUploadField from "@pages/admin/components/ImageUploadField";
import OneLineTextField from "@pages/admin/components/OneLineTextField";
import WebConstants from "@constants";
import { uploadAttachment } from "common/services/admin/attachment/AttachmentAdminService";
import DateField from "@pages/admin/components/DateField";
import adminNotificationStore from "@pages/admin/store/AdminNotificationStore";
import MultilineTextField from "@pages/admin/components/MultilineTextField";
import TextListField from "@pages/admin/components/TextListField";
import EnumSelector from "@pages/admin/components/EnumSelector";
import Actions from "./views/Actions";
import { useProjectAdminStore } from "../../context/ProjectAdminContext";

const Thumbnail = observer(() => {
  const { editorStore } = useProjectAdminStore();

  return (
    <div className="w-full flex flex-col gap-2 items-start">
      <div className="text-white text-sm">섬네일</div>
      <ImageUploadField
        url={
          editorStore.isEditing
            ? ((v) =>
                v === -1
                  ? null
                  : `${WebConstants.API_URL}/attachment/?attachmentId=${v}`)(
                editorStore.edittingProject?.thumbnail ?? -1
              )
            : `${WebConstants.API_URL}/attachment/?attachmentId=${editorStore.project?.thumbnail}`
        }
        onUpload={async (file) => {
          if (!file) {
            return;
          }

          try {
            const result = await uploadAttachment(file, "projectThumbnail");
            if (!editorStore.edittingProject) return;
            editorStore.setEdittingProject({
              ...editorStore.edittingProject,
              thumbnail: result.fileId,
            });
          } catch (e) {
            adminNotificationStore.addNotification(
              "업로드 실패",
              "업로드에 실패했습니다. 다시 시도해주세요."
            );
          }
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

const Title = observer(() => {
  const { editorStore } = useProjectAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">제목</div>
      <OneLineTextField
        value={
          editorStore.isEditing
            ? editorStore.edittingProject?.title ?? ""
            : editorStore.project?.title ?? ""
        }
        onChange={(v) => {
          if (!editorStore.edittingProject) return;
          editorStore.setEdittingProject({
            ...editorStore.edittingProject,
            title: v,
          });
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

const StartDate = observer(() => {
  const { editorStore } = useProjectAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">시작일</div>
      <DateField
        value={
          editorStore.isEditing
            ? editorStore.edittingProject?.startDate ?? new Date()
            : editorStore.project?.startDate ?? new Date()
        }
        onChange={(v) => {
          if (!v) return;
          if (!editorStore.edittingProject) return;
          editorStore.setEdittingProject({
            ...editorStore.edittingProject,
            startDate: v,
          });
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

const EndDate = observer(() => {
  const { editorStore } = useProjectAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">종료일</div>
      <DateField
        value={
          editorStore.isEditing
            ? editorStore.edittingProject?.endDate ?? null
            : editorStore.project?.endDate ?? null
        }
        onChange={(v) => {
          if (!editorStore.edittingProject) return;
          editorStore.setEdittingProject({
            ...editorStore.edittingProject,
            endDate: v,
          });
        }}
        readOnly={!editorStore.isEditing}
        allowClear
      />
    </div>
  );
});

const TechStack = observer(() => {
  const { editorStore } = useProjectAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">기술 스택</div>
      <TextListField
        value={
          editorStore.isEditing
            ? editorStore.edittingProject?.projectTechStacks ?? []
            : editorStore.project?.projectTechStacks ?? []
        }
        onChange={(v) => {
          if (!editorStore.edittingProject) return;
          editorStore.setEdittingProject({
            ...editorStore.edittingProject,
            projectTechStacks: v,
          });
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

const State = observer(() => {
  const { editorStore } = useProjectAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">상태</div>
      <EnumSelector<"승인중" | "모집중" | "진행중" | "진행완료">
        options={["승인중", "모집중", "진행중", "진행완료"]}
        value={
          editorStore.isEditing
            ? editorStore.edittingProject?.state ?? "승인중"
            : editorStore.project?.state ?? "승인중"
        }
        onChange={(v) => {
          if (!editorStore.edittingProject) return;
          editorStore.setEdittingProject({
            ...editorStore.edittingProject,
            state: v,
          });
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

const Content = observer(() => {
  const { editorStore } = useProjectAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">내용</div>
      <MultilineTextField
        value={
          editorStore.isEditing
            ? editorStore.edittingProject?.content ?? ""
            : editorStore.project?.content ?? ""
        }
        onChange={(v) => {
          if (!editorStore.edittingProject) return;
          editorStore.setEdittingProject({
            ...editorStore.edittingProject,
            content: v,
          });
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

function ProjectEditor() {
  return (
    <div className="w-full h-full min-h-0 overflow-y-auto flex flex-col items-start gap-4">
      <div className="text-white font-bold text-2xl">프로젝트 정보</div>
      <Actions />
      <Thumbnail />
      <Title />
      <StartDate />
      <EndDate />
      <State />
      <TechStack />
      <Content />
    </div>
  );
}

export default ProjectEditor;
