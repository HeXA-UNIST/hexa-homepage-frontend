import { useEffect, useRef } from "react";
import PageIndicator from "@pages/admin/components/PageIndicator";
import { observer } from "mobx-react-lite";
import {
  NewsAdminProvider,
  useNewsAdminStore,
} from "./context/NewsAdminContext";
import Header from "./views/Header";
import NewsEditor from "./views/NewsEditor";
import NewsList from "./views/NewsList";

const PageIndicatorPart = observer(() => {
  const store = useNewsAdminStore();

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
  const store = useNewsAdminStore();

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
          <NewsEditor />
        </div>
      ) : (
        <>
          <div className="flex-1 w-full relative min-h-0 flex">
            <NewsList />
          </div>
          <PageIndicatorPart />
        </>
      )}
    </div>
  );
});

export default function AdminNewsRouter() {
  return (
    <NewsAdminProvider>
      <Inner />
    </NewsAdminProvider>
  );
}
