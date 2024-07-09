import {
  createSeminarAdmin,
  deleteSeminarAdmin,
  getDetailSeminarAdmin,
  modifySeminarAdmin,
} from "common/services/admin/seminar/SeminarAdminService";
import adminNotificationStore from "@pages/admin/store/AdminNotificationStore";
import {
  DetailSeminarAdmin,
  ModifySeminarAdmin,
} from "@models/admin/SeminarAdmin";
import { makeAutoObservable, observable, runInAction } from "mobx";

// eslint-disable-next-line import/no-cycle
import SeminarAdminStore from "./SeminarAdminStore";

export default class SeminarEditorAdminStore {
  private _seminarId: number | null = null; // if -1, it means new seminar

  private _seminar: DetailSeminarAdmin | null = null;

  private _isEditing = false;

  private _edittingSeminar: ModifySeminarAdmin | null = null;

  private _isLoading = false;

  private _isSubmitting = false;

  private _parentStore: SeminarAdminStore; // Not controlled by MobX

  constructor(parent: SeminarAdminStore) {
    this._parentStore = parent;

    makeAutoObservable<
      SeminarEditorAdminStore,
      | "_seminarId"
      | "_seminar"
      | "_isEditing"
      | "_edittingSeminar"
      | "_isLoading"
      | "_isSubmitting"
    >(this, {
      _seminarId: observable,
      _seminar: observable,
      _isEditing: observable,
      _edittingSeminar: observable,
      _isLoading: observable,
      _isSubmitting: observable,
    });
  }

  get isSelected() {
    return this._seminarId !== null;
  }

  get seminar() {
    return this._seminar;
  }

  get isEditing() {
    return this._isEditing;
  }

  get edittingSeminar() {
    return this._edittingSeminar;
  }

  get isLoading() {
    return this._isLoading;
  }

  get isSubmitting() {
    return this._isSubmitting;
  }

  get isNewSeminar() {
    return this._seminarId === -1;
  }

  selectSeminar = async (seminarId: number | null) => {
    if (seminarId === null) {
      runInAction(() => {
        this._seminarId = null;
        this._seminar = null;
        this._edittingSeminar = null;
        this._isEditing = false;
        this._isLoading = false;
        this._isSubmitting = false;
      });

      return;
    }

    if (seminarId === -1) {
      runInAction(() => {
        this._seminarId = seminarId;
        this._isEditing = true;
        this._seminar = {
          title: "새 세미나",
          content: "",
          date: new Date(),
          attachments: [],
        };
        this._edittingSeminar = {
          title: "새 세미나",
          content: "",
          date: new Date(),
          attachments: [],
        };

        this._isLoading = false;
        this._isSubmitting = false;
      });

      return;
    }

    runInAction(() => {
      this._seminarId = seminarId;
      this._isEditing = false;
      this._seminar = null;
      this._edittingSeminar = null;

      this._isLoading = true;
      this._isSubmitting = false;
    });

    try {
      const data = await getDetailSeminarAdmin(seminarId);

      runInAction(() => {
        this._seminar = data;
        this._edittingSeminar = {
          ...data,
        };
      });
    } catch (e) {
      console.error(e);

      adminNotificationStore.addNotification(
        "세미나 정보 로드 오류",
        "세미나 정보를 불러오는 중 오류가 발생했습니다."
      );
    }

    runInAction(() => {
      this._isLoading = false;
    });
  };

  startEditing = () => {
    if (!this._seminar) return;

    runInAction(() => {
      this._isEditing = true;
      this._edittingSeminar = {
        ...this._seminar!,
      };
    });
  };

  cancelEditing = () => {
    if (this._seminarId === -1) {
      runInAction(() => {
        this._seminarId = null;
      });
    }

    runInAction(() => {
      this._isEditing = false;
    });
  };

  submitEditing = async () => {
    if (!this._seminarId) return;
    if (!this._edittingSeminar) return;
    if (!this._edittingSeminar) return;

    runInAction(() => {
      this._isSubmitting = true;
    });

    try {
      if (this._seminarId === -1) {
        await createSeminarAdmin(this._edittingSeminar);
      } else {
        await modifySeminarAdmin(this._seminarId, this._edittingSeminar);
      }

      adminNotificationStore.addNotification(
        "세미나 수정 완료",
        "세미나 수정이 완료되었습니다.",
        "info"
      );

      await this._parentStore.loadData();

      if (this._seminarId === -1) {
        this._seminarId = null;
      }
      await this.selectSeminar(this._seminarId);

      runInAction(() => {
        this._isEditing = false;
      });
    } catch (e) {
      console.error(e);

      if (this._seminarId === -1) {
        adminNotificationStore.addNotification(
          "세미나 생성 오류",
          "세미나 생성 중 오류가 발생했습니다."
        );
      } else {
        adminNotificationStore.addNotification(
          "세미나 수정 오류",
          "세미나 수정 중 오류가 발생했습니다."
        );
      }
    }

    runInAction(() => {
      this._isSubmitting = false;
    });
  };

  deleteSeminar = async () => {
    if (!this._seminarId) return;

    runInAction(() => {
      this._isSubmitting = true;
    });

    try {
      await deleteSeminarAdmin(this._seminarId);

      adminNotificationStore.addNotification(
        "세미나 삭제 완료",
        "세미나 삭제가 완료되었습니다.",
        "info"
      );
    } catch (e) {
      console.error(e);
      adminNotificationStore.addNotification(
        "세미나 삭제 오류",
        "세미나 삭제 중 오류가 발생했습니다."
      );
    }

    runInAction(() => {
      this._isSubmitting = false;
    });

    await this._parentStore.loadData();
    await this.selectSeminar(null);
  };

  setEdittingSeminar = (seminar: ModifySeminarAdmin) => {
    runInAction(() => {
      this._edittingSeminar = seminar;
    });
  };
}
