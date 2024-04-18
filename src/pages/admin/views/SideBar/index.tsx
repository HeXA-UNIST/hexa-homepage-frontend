import { MdKeyboardArrowRight } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

function SideBarItem({ label, url }: { label: string; url: string }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isSelected = pathname === url;

  return (
    <button
      className={`
    rounded-md text-base flex flex-row justify-between items-center gap-1 px-1.5 py-2
    ${
      isSelected
        ? "bg-[#1B83BE] text-white hover:bg-white hover:text-black"
        : "text-stone-400 hover:bg-[#1B83BE] hover:text-white hover:bg-opacity-30"
    }
    `}
      type="button"
      onClick={() => {
        navigate(url, {
          replace: true,
        });
      }}
    >
      <div>{label}</div>
      {isSelected && <MdKeyboardArrowRight className="text-base" />}
    </button>
  );
}

export function AdminSideBar() {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="text-white text-2xl font-bold text-left">
        HEXA
        <br />
        관리자 페이지
      </div>
      <div className="w-full flex flex-col gap-1">
        <SideBarItem label="프로젝트" url="/admin/project" />
        <SideBarItem label="뉴스" url="/admin/news" />
        <SideBarItem label="세미나" url="/admin/seminar" />
        <SideBarItem label="서비스" url="/admin/service" />
      </div>
    </div>
  );
}
