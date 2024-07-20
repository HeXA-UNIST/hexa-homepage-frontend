import { observer } from "mobx-react-lite";
import OneLineTextField from "@pages/admin/components/OneLineTextField";
import DateField from "@pages/admin/components/DateField";
import { NewsTypeAdmin } from "@models/admin/NewsAdmin";
import MultilineTextField from "@pages/admin/components/MultilineTextField";
import EnumSelector from "@pages/admin/components/EnumSelector";
import Actions from "./views/Actions";
import { useNewsAdminStore } from "../../context/NewsAdminContext";

const Title = observer(() => {
  const { editorStore } = useNewsAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">제목</div>
      <OneLineTextField
        value={
          editorStore.isEditing
            ? editorStore.edittingNews?.title ?? ""
            : editorStore.news?.title ?? ""
        }
        onChange={(v) => {
          if (!editorStore.edittingNews) return;
          editorStore.setEdittingNews({
            ...editorStore.edittingNews,
            title: v,
          });
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

const NewsDate = observer(() => {
  const { editorStore } = useNewsAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">날짜</div>
      <DateField
        value={
          editorStore.isEditing
            ? editorStore.edittingNews?.date ?? new Date()
            : editorStore.news?.date ?? new Date()
        }
        onChange={(v) => {
          if (!v) return;
          if (!editorStore.edittingNews) return;
          editorStore.setEdittingNews({
            ...editorStore.edittingNews,
            date: v,
          });
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

const NewsType = observer(() => {
  const { editorStore } = useNewsAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">상태</div>
      <EnumSelector<NewsTypeAdmin>
        options={["공지", "수상"]}
        value={
          editorStore.isEditing
            ? editorStore.edittingNews?.newsType ?? "공지"
            : editorStore.news?.newsType ?? "공지"
        }
        onChange={(v) => {
          if (!editorStore.edittingNews) return;
          editorStore.setEdittingNews({
            ...editorStore.edittingNews,
            newsType: v,
          });
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

const Content = observer(() => {
  const { editorStore } = useNewsAdminStore();

  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <div className="text-white text-sm">내용</div>
      <MultilineTextField
        value={
          editorStore.isEditing
            ? editorStore.edittingNews?.content ?? ""
            : editorStore.news?.content ?? ""
        }
        onChange={(v) => {
          if (!editorStore.edittingNews) return;
          editorStore.setEdittingNews({
            ...editorStore.edittingNews,
            content: v,
          });
        }}
        readOnly={!editorStore.isEditing}
      />
    </div>
  );
});

function NewsEditor() {
  return (
    <div className="w-full h-full min-h-0 overflow-y-auto flex flex-col items-start gap-4">
      <div className="text-white font-bold text-2xl">뉴스 정보</div>
      <Actions />
      <Title />
      <NewsDate />
      <NewsType />
      <Content />
    </div>
  );
}

export default NewsEditor;
