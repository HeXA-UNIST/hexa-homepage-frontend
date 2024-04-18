import { observer } from "mobx-react-lite";
import BackButton from "@pages/admin/components/BackButton";
import { useServiceAdminStore } from "../../context/ServiceAdminContext";

function Header() {
  const store = useServiceAdminStore();
  const { editorStore } = store;

  return (
    <div className="w-full h-16 flex flex-row items-center text-white text-2xl font-bold gap-2">
      {editorStore.isSelected ? (
        <>
          <BackButton
            onClick={() => {
              editorStore.selectService(null);
            }}
          />
          <div>
            {"서비스 > "}
            {editorStore.service?.title ?? ""}
          </div>
        </>
      ) : (
        <div>서비스</div>
      )}
    </div>
  );
}

export default observer(Header);
