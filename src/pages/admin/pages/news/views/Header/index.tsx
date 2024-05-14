import { observer } from "mobx-react-lite";
import BackButton from "@pages/admin/components/BackButton";
import { useNewsAdminStore } from "../../context/NewsAdminContext";

function Header() {
  const store = useNewsAdminStore();
  const { editorStore } = store;

  return (
    <div className="w-full h-16 flex flex-row items-center text-white text-2xl font-bold gap-2">
      {editorStore.isSelected ? (
        <>
          <BackButton
            onClick={() => {
              editorStore.selectNews(null);
            }}
          />
          <div>
            {"뉴스 > "}
            {editorStore.news?.title ?? ""}
          </div>
        </>
      ) : (
        <div>뉴스</div>
      )}
    </div>
  );
}

export default observer(Header);
