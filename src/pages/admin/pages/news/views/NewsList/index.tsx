import { SimpleNewsAdmin } from "@models/admin/NewsAdmin";
import Button from "@pages/admin/components/Button";
import { observer } from "mobx-react-lite";
import { useNewsAdminStore } from "../../context/NewsAdminContext";

function NewsItem({
  item,
  onClick,
}: {
  item: SimpleNewsAdmin;
  onClick: () => void;
}) {
  return (
    <button
      className="p-4 w-full bg-gray-800 rounded-md border border-gray-700 flex flex-row items-center gap-2"
      type="button"
      onClick={onClick}
    >
      <div className="px-8 flex items-center justify-center text-sm text-gray-300">
        {item.newsType}
      </div>
      <div className="flex-1 flex flex-col items-start gap-1">
        <div className="text-base font-bold text-white">{item.title}</div>
        <div className="text-sm text-gray-500">
          {item.date.toISOString().split("T")[0]}
        </div>
      </div>
    </button>
  );
}

function NewsList() {
  const store = useNewsAdminStore();

  return (
    <div className="w-full h-full relative flex flex-col gap-4 min-h-0 overflow-y-auto">
      <div className="w-full flex flex-row items-center py-2 gap-6">
        <div className="text-xl font-bold text-white">뉴스 목록</div>
        <Button
          label="뉴스 추가"
          onClick={() => {
            store.createNews();
          }}
        />
      </div>
      <div className="w-full h-full flex-wrap flex flex-row gap-4 justify-start items-start p-4">
        {store.data?.list.map((item) => (
          <NewsItem
            key={item.newsId}
            item={item}
            onClick={() => {
              store.editorStore.selectNews(item.newsId);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default observer(NewsList);
