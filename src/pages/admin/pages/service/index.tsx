import { useEffect, useRef } from "react";
import { observer } from "mobx-react-lite";
import {
  ServiceAdminProvider,
  useServiceAdminStore,
} from "./context/ServiceAdminContext";
import Header from "./views/Header";
import ServiceEditor from "./views/ServiceEditor";
import ServiceList from "./views/ServiceList";

const Inner = observer(() => {
  const IsFirstRef = useRef(true);
  const store = useServiceAdminStore();

  useEffect(() => {
    if (!IsFirstRef.current) {
      return;
    }

    IsFirstRef.current = false;

    store.loadData();
  }, [store]);

  return (
    <div className="w-full h-full flex flex-col relative gap-6">
      <Header />
      {store.editorStore.isSelected ? (
        <div className="flex-1 w-full relative flex flex-col min-h-0">
          <ServiceEditor />
        </div>
      ) : (
        <div className="flex-1 w-full relative min-h-0 flex">
          <ServiceList />
        </div>
      )}
    </div>
  );
});

export default function AdminServiceRouter() {
  return (
    <ServiceAdminProvider>
      <Inner />
    </ServiceAdminProvider>
  );
}
