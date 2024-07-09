import { makeAutoObservable, observable } from "mobx";

export interface AdminNotification {
  id: number;
  title: string;
  content: string;
  type: "error" | "info";
}

export class AdminNotificationStore {
  private _notifications: AdminNotification[] = [];

  private _notificationId = 0; // Not managed by MobX

  constructor() {
    makeAutoObservable<AdminNotificationStore, "_notifications">(this, {
      _notifications: observable.deep,
    });
  }

  get notifications() {
    return this._notifications;
  }

  addNotification = (
    title: string,
    content: string,
    type: "error" | "info" = "error"
  ) => {
    // eslint-disable-next-line no-plusplus
    const newId = this._notificationId++;

    this._notifications.push({
      id: newId,
      title,
      content,
      type,
    });

    setTimeout(() => {
      this.removeNotification(newId);
    }, 5000);
  };

  removeNotification = (id: number) => {
    this._notifications = this._notifications.filter(
      (notification) => notification.id !== id
    );
  };
}

const adminNotificationStore = new AdminNotificationStore();

export default adminNotificationStore;
