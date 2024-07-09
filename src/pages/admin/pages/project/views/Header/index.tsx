import { observer } from "mobx-react-lite";
import BackButton from "@pages/admin/components/BackButton";
import { useProjectAdminStore } from "../../context/ProjectAdminContext";

function Header() {
  const store = useProjectAdminStore();
  const { editorStore } = store;

  return (
    <div className="w-full h-16 flex flex-row items-center text-white text-2xl font-bold gap-2">
      {editorStore.isSelected ? (
        <>
          <BackButton
            onClick={() => {
              editorStore.selectProject(null);
            }}
          />
          <div>
            {"프로젝트 > "}
            {editorStore.project?.title ?? ""}
          </div>
        </>
      ) : (
        <div>프로젝트</div>
      )}
    </div>
  );
}

export default observer(Header);
