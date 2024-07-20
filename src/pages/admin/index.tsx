import { Outlet } from "react-router-dom";
import { AdminSideBar } from "./views/SideBar";
import NotificationPopup from "./views/NotificationPopup";

export function AdminRouter() {
  // TODO : 관리자 페이지 레이아웃을 메인 화면의 outlet이 되록록 할 때 h-screen을 h-full로 변경해야 합니다.
  return (
    <div className="w-full h-screen min-h-0 min-w-0 relative flex flex-row gap-12 p-10">
      <div className="h-full w-64 relative">
        <AdminSideBar />
      </div>
      <div className="flex-1 h-full relative">
        <Outlet />
      </div>
      <NotificationPopup />
    </div>
  );
}
