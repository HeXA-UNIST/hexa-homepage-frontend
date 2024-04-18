import { observer } from "mobx-react-lite";
import { animated, useSpring, useTransition } from "react-spring";
import adminNotificationStore, {
  AdminNotification,
} from "@pages/admin/store/AdminNotificationStore";

import PopupNotification, {
  PopupNotificationHeight,
} from "./views/PopupNotification";

function PositionedPopupNotification({
  index,
  notification,
  onClose,
}: {
  index: number;
  notification: AdminNotification;
  onClose: () => void;
}) {
  const PositionAnimation = useSpring({
    top: `${24 + index * (PopupNotificationHeight + 14)}px`,
  });

  return (
    <animated.div
      className="fixed right-6"
      style={{
        ...PositionAnimation,
        zIndex: 1,
      }}
    >
      <PopupNotification notification={notification} onClose={onClose} />
    </animated.div>
  );
}

function AdminNotificationPopup() {
  const { notifications } = adminNotificationStore;

  const transitionAnimations = useTransition(notifications, {
    from: { opacity: 0, height: 0 },
    enter: { opacity: 1, height: 50 },
    leave: { opacity: 0, height: 0 },
  });

  return (
    <div className="fixed top-0 right-0 z-50 p-4">
      {transitionAnimations((style, item) => (
        <animated.div key={item.id} style={style}>
          <PositionedPopupNotification
            notification={item}
            index={notifications.indexOf(item) ?? 0}
            onClose={() => {
              adminNotificationStore.removeNotification(item.id);
            }}
          />
        </animated.div>
      ))}
    </div>
  );
}

export default observer(AdminNotificationPopup);
