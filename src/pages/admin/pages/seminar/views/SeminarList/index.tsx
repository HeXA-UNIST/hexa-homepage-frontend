import { SimpleSeminarAdmin } from "@models/admin/SeminarAdmin";
import Button from "@pages/admin/components/Button";
import { observer } from "mobx-react-lite";
import { useSeminarAdminStore } from "../../context/SeminarAdminContext";

function SeminarItem({
  item,
  onClick,
}: {
  item: SimpleSeminarAdmin;
  onClick: () => void;
}) {
  return (
    <button
      className="p-4 w-full max-w-lg bg-gray-800 rounded-md border border-gray-700 flex flex-row items-center gap-2"
      type="button"
      onClick={onClick}
    >
      <div className="flex-1 flex flex-col items-start">
        <div className="text-base font-bold text-white">{item.title}</div>
        <div className="text-sm text-gray-500">
          {item.date.toISOString().split("T")[0]}
        </div>
      </div>
    </button>
  );
}

function SeminarList() {
  const store = useSeminarAdminStore();

  return (
    <div className="w-full h-full relative flex flex-col gap-4 min-h-0 overflow-y-auto">
      <div className="w-full flex flex-row items-center py-2 gap-6">
        <div className="text-xl font-bold text-white">세미나 목록</div>
        <Button
          label="세미나 추가"
          onClick={() => {
            store.createProject();
          }}
        />
      </div>
      <div className="w-full h-full flex-wrap flex flex-row gap-4 justify-start items-start p-4">
        {store.data?.list.map((item) => (
          <SeminarItem
            key={item.seminarId}
            item={item}
            onClick={() => {
              store.editorStore.selectSeminar(item.seminarId);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default observer(SeminarList);
