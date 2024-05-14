import { GetProjectListResultAdmin } from "@models/admin/ProjectAdmin";
import adminNotificationStore from "@pages/admin/store/AdminNotificationStore";
import { getProjectListAdmin } from "common/services/admin/project/ProjectAdminService";
import { makeAutoObservable, observable, runInAction } from "mobx";

// eslint-disable-next-line import/no-cycle
import ProjectEditorAdminStore from "./ProjectEditorAdminStore";

export default class ProjectAdminStore {
  private _isLoading = false;

  private _pageIndex = 0;

  private _perPage = 10;

  private _data: GetProjectListResultAdmin | null = null;

  private _editorStore: ProjectEditorAdminStore; // Not controlled by MobX

  constructor() {
    this._editorStore = new ProjectEditorAdminStore(this);

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
      const result = await getProjectListAdmin(this._pageIndex, this._perPage);

      runInAction(() => {
        this._data = result;
      });
    } catch (e) {
      console.error(e);

      adminNotificationStore.addNotification(
        "프로젝트 목록 로드 오류",
        "프로젝트 목록을 불러오는 중 오류가 발생했습니다."
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
    this._editorStore.selectProject(-1);
  };
}
