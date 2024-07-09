import { GetSeminarListResultAdmin } from "@models/admin/SeminarAdmin";
import adminNotificationStore from "@pages/admin/store/AdminNotificationStore";
import { getSeminarListAdmin } from "common/services/admin/seminar/SeminarAdminService";
import { makeAutoObservable, observable, runInAction } from "mobx";

// eslint-disable-next-line import/no-cycle
import SeminarEditorAdminStore from "./SeminarEditorAdminStore";

export default class ProjectAdminStore {
  private _isLoading = false;

  private _pageIndex = 0;

  private _perPage = 10;

  private _data: GetSeminarListResultAdmin | null = null;

  private _editorStore: SeminarEditorAdminStore; // Not controlled by MobX

  constructor() {
    this._editorStore = new SeminarEditorAdminStore(this);

    makeAutoObservable<
      ProjectAdminStore,
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

  get pageNum() {
    return this._pageIndex;
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
      const result = await getSeminarListAdmin(this._pageIndex, this._perPage);

      runInAction(() => {
        this._data = result;
      });
    } catch (e) {
      console.error(e);

      adminNotificationStore.addNotification(
        "세미나 목록 로드 오류",
        "세미나 목록을 불러오는 중 오류가 발생했습니다."
      );
    }

    runInAction(() => {
      this._isLoading = false;
    });
  };

  setPageNum = async (pageNum: number) => {
    runInAction(() => {
      this._pageIndex = pageNum;
    });

    await this.loadData();
  };

  createProject = () => {
    this._editorStore.selectSeminar(-1);
  };
}
