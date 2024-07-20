import { observer } from "mobx-react-lite";
import BackButton from "@pages/admin/components/BackButton";
import { useSeminarAdminStore } from "../../context/SeminarAdminContext";

function Header() {
  const store = useSeminarAdminStore();
  const { editorStore } = store;

  return (
    <div className="w-full h-16 flex flex-row items-center text-white text-2xl font-bold gap-2">
      {editorStore.isSelected ? (
        <>
          <BackButton
            onClick={() => {
              editorStore.selectSeminar(null);
            }}
          />
          <div>
            {"세미나 > "}
            {editorStore.seminar?.title ?? ""}
          </div>
        </>
      ) : (
        <div>세미나</div>
      )}
    </div>
  );
}

export default observer(Header);
