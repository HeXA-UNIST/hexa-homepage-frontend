import { AdminNotification } from "@pages/admin/store/AdminNotificationStore";
import { MdClose, MdError, MdInfo } from "react-icons/md";

export const PopupNotificationHeight = 80;

export default function PopupNotification({
  notification,
  onClose,
}: {
  notification: AdminNotification;
  onClose: () => void;
}) {
  let borderColor = "";
  let iconColor = "";

  if (notification.type === "info") {
    borderColor = "border-border-gray";
    iconColor = "text-text-gray-dark";
  } else if (notification.type === "error") {
    borderColor = "border-[#B70000]";
    iconColor = "text-[#B70000]";
  }

  return (
    <div
      className={`rounded-md border ${borderColor} flex flex-row py-3 px-4 bg-gray-950 text-white items-center box-border`}
      style={{
        width: "360px",
        height: `${PopupNotificationHeight}px`,
        boxShadow: "0px 4px 16px 0px rgba(255, 255, 255, 0.14)",
      }}
    >
      <div className={`${iconColor} text-lg mr-4`}>
        {notification.type === "info" && <MdInfo />}
        {notification.type === "error" && <MdError />}
      </div>
      <div className="flex-1 flex flex-col mr-4 gap-1 text-left">
        <div className="text-sm font-bold">{notification.title}</div>
        <div className="text-xs flex-1 overflow-y-auto">
          {notification.content}
        </div>
      </div>
      <button
        className="rounded-md p-1 cursor-pointer text-sm text-white hover:bg-gray-800"
        onClick={onClose}
        aria-label="닫기"
        type="button"
      >
        <MdClose />
      </button>
    </div>
  );
}
