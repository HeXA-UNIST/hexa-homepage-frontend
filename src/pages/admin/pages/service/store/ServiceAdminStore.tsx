import { GetServiceListResultAdmin } from "@models/admin/ServiceAdmin";
import adminNotificationStore from "@pages/admin/store/AdminNotificationStore";
import { getServiceListAdmin } from "common/services/admin/service/ServiceAdminService";
import { makeAutoObservable, observable, runInAction } from "mobx";

// eslint-disable-next-line import/no-cycle
import ServiceEditorAdminStore from "./ServiceEditorAdminStore";

export default class ServiceAdminStore {
  private _isLoading = false;

  private _data: GetServiceListResultAdmin | null = null;

  private _editorStore: ServiceEditorAdminStore; // Not controlled by MobX

  constructor() {
    this._editorStore = new ServiceEditorAdminStore(this);

    makeAutoObservable<
      ServiceAdminStore,
      "_isLoading" | "_pageIndex" | "_perPage" | "_data"
    >(this, {
      _isLoading: observable,
      _pageIndex: observable,
      _perPage: observable,
      _data: observable,
    });
  }

  get isLoading() {
    return this._isLoading;
  }

  get data() {
    return this._data;
  }

  get editorStore() {
    return this._editorStore;
  }

  loadData = async () => {
    runInAction(() => {
      this._isLoading = true;
    });

    try {
      const result = await getServiceListAdmin();

      runInAction(() => {
        this._data = result;
      });
    } catch (e) {
      console.error(e);

      adminNotificationStore.addNotification(
        "서비스 목록 로드 오류",
        "서비스 목록을 불러오는 중 오류가 발생했습니다."
      );
    }

    runInAction(() => {
      this._isLoading = false;
    });
  };

  createService = () => {
    this._editorStore.selectService(-1);
  };
}
