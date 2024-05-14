import { observer } from "mobx-react-lite";
import ImageUploadField from "@pages/admin/components/ImageUploadField";
import OneLineTextField from "@pages/admin/components/OneLineTextField";
import WebConstants from "@constants";
import { uploadAttachment } from "common/services/admin/attachment/AttachmentAdminService";

import adminNotificationStore from "@pages/admin/store/AdminNotificationStore";
import MultilineTextField from "@pages/admin/components/MultilineTextField";

import Actions from "./views/Actions";
import { useServiceAdminStore } from "../../context/ServiceAdminContext";

const Thumbnail = observer(() => {
  const { editorStore } = useServiceAdminStore();

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
                editorStore.edittingService?.thumbnail ?? -1
              )
            : `${WebConstants.API_URL}/attachment/?attachmentId=${editorStore.service?.thumbnail}`
        }
        onUpload={async (file) => {
          if (!file) {
            return;
          }

          try {
            const result = await uploadAttachment(file, "projectThumbnail");
            if (!editorStore.edittingService) return;
            editorStore.setEdittingService({
              ...editorStore.edittingService,
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
  const { editorStore } = useServiceAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">제목</div>
      <OneLineTextField
        value={
          editorStore.isEditing
            ? editorStore.edittingService?.title ?? ""
            : editorStore.service?.title ?? ""
        }
        onChange={(v) => {
          if (!editorStore.edittingService) return;
          editorStore.setEdittingService({
            ...editorStore.edittingService,
            title: v,
          });
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

const SiteUrl = observer(() => {
  const { editorStore } = useServiceAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">사이트 주소</div>
      <OneLineTextField
        value={
          editorStore.isEditing
            ? editorStore.edittingService?.siteLink ?? ""
            : editorStore.service?.siteLink ?? ""
        }
        onChange={(v) => {
          if (!editorStore.edittingService) return;
          editorStore.setEdittingService({
            ...editorStore.edittingService,
            siteLink: v,
          });
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

const GithubUrl = observer(() => {
  const { editorStore } = useServiceAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">깃허브 주소</div>
      <OneLineTextField
        value={
          editorStore.isEditing
            ? editorStore.edittingService?.githubLink ?? ""
            : editorStore.service?.githubLink ?? ""
        }
        onChange={(v) => {
          if (!editorStore.edittingService) return;
          editorStore.setEdittingService({
            ...editorStore.edittingService,
            githubLink: v,
          });
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

const Content = observer(() => {
  const { editorStore } = useServiceAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">내용</div>
      <MultilineTextField
        value={
          editorStore.isEditing
            ? editorStore.edittingService?.content ?? ""
            : editorStore.service?.content ?? ""
        }
        onChange={(v) => {
          if (!editorStore.edittingService) return;
          editorStore.setEdittingService({
            ...editorStore.edittingService,
            content: v,
          });
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

function ServiceEditor() {
  return (
    <div className="w-full h-full min-h-0 overflow-y-auto flex flex-col items-start gap-4">
      <div className="text-white font-bold text-2xl">프로젝트 정보</div>
      <Actions />
      <Thumbnail />
      <Title />
      <SiteUrl />
      <GithubUrl />
      <Content />
    </div>
  );
}

export default ServiceEditor;
