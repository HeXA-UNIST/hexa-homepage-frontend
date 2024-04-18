import { SimpleServiceAdmin } from "@models/admin/ServiceAdmin";
import WebConstants from "@constants";
import Button from "@pages/admin/components/Button";
import { observer } from "mobx-react-lite";
import { useServiceAdminStore } from "../../context/ServiceAdminContext";

function ServiceItem({
  item,
  onClick,
}: {
  item: SimpleServiceAdmin;
  onClick: () => void;
}) {
  return (
    <button
      className="p-4 w-full max-w-lg bg-gray-800 rounded-md border border-gray-700 flex flex-row items-center gap-4"
      type="button"
      onClick={onClick}
    >
      <img
        className="w-[140px] rounded-md overflow-hidden"
        src={`${`${WebConstants.API_URL}/attachment/?attachmentId=${item.thumbnail}`}`}
        alt="thumbnail"
      />
      <div className="flex-1 flex flex-col items-start">
        <div className="text-base font-bold text-white">{item.title}</div>
      </div>
    </button>
  );
}

function ServiceList() {
  const store = useServiceAdminStore();

  return (
    <div className="w-full h-full relative flex flex-col gap-4 min-h-0 overflow-y-auto">
      <div className="w-full flex flex-row items-center py-2 gap-6">
        <div className="text-xl font-bold text-white">서비스 목록</div>
        <Button
          label="서비스 추가"
          onClick={() => {
            store.createService();
          }}
        />
      </div>
      <div className="w-full h-full flex-wrap flex flex-row gap-4 justify-start items-start p-4">
        {store.data?.list.map((item) => (
          <ServiceItem
            key={item.serviceId}
            item={item}
            onClick={() => {
              store.editorStore.selectService(item.serviceId);
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default observer(ServiceList);
