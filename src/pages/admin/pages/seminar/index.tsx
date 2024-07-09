import { useEffect, useRef } from "react";
import PageIndicator from "@pages/admin/components/PageIndicator";
import { observer } from "mobx-react-lite";
import {
  SeminarAdminProvider,
  useSeminarAdminStore,
} from "./context/SeminarAdminContext";
import Header from "./views/Header";
import SeminarEditor from "./views/SeminarEditor";
import SeminarList from "./views/SeminarList";

const PageIndicatorPart = observer(() => {
  const store = useSeminarAdminStore();

  return (
    <PageIndicator
      totalPage={store.data?.totalPage ?? 0}
      currentIndex={store.pageNum}
      onChange={(index) => {
        store.setPageNum(index);
      }}
    />
  );
});

const Inner = observer(() => {
  const IsFirstRef = useRef(true);
  const store = useSeminarAdminStore();

  useEffect(() => {
    if (!IsFirstRef.current) {
      return;
    }

    IsFirstRef.current = false;

    store.loadData();
  }, []);

  return (
    <div className="w-full h-full flex flex-col relative gap-6">
      <Header />
      {store.editorStore.isSelected ? (
        <div className="flex-1 w-full relative flex flex-col min-h-0">
          <SeminarEditor />
        </div>
      ) : (
        <>
          <div className="flex-1 w-full relative min-h-0 flex">
            <SeminarList />
          </div>
          <PageIndicatorPart />
        </>
      )}
    </div>
  );
});

export default function AdminProjectRouter() {
  return (
    <SeminarAdminProvider>
      <Inner />
    </SeminarAdminProvider>
  );
}
