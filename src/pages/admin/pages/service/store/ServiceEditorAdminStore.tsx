import {
  DetailServiceAdmin,
  ModifyServiceAdmin,
} from "@models/admin/ServiceAdmin";
import adminNotificationStore from "@pages/admin/store/AdminNotificationStore";
import { makeAutoObservable, observable, runInAction } from "mobx";
import {
  createServiceAdmin,
  deleteServiceAdmin,
  getDetailServiceAdmin,
  modifyServiceAdmin,
} from "common/services/admin/service/ServiceAdminService";

// eslint-disable-next-line import/no-cycle
import ServiceAdminStore from "./ServiceAdminStore";

export default class ServiceEditorAdminStore {
  private _serviceId: number | null = null; // if -1, it means new service

  private _service: DetailServiceAdmin | null = null;

  private _isEditing = false;

  private _edittingService: ModifyServiceAdmin | null = null;

  private _isLoading = false;

  private _isSubmitting = false;

  private _parentStore: ServiceAdminStore; // Not controlled by MobX

  constructor(parent: ServiceAdminStore) {
    this._parentStore = parent;

    makeAutoObservable<
      ServiceEditorAdminStore,
      | "_serviceId"
      | "_service"
      | "_isEditing"
      | "_edittingService"
      | "_isLoading"
      | "_isSubmitting"
    >(this, {
      _serviceId: observable,
      _service: observable,
      _isEditing: observable,
      _edittingService: observable,
      _isLoading: observable,
      _isSubmitting: observable,
    });
  }

  get isSelected() {
    return this._serviceId !== null;
  }

  get service() {
    return this._service;
  }

  get isEditing() {
    return this._isEditing;
  }

  get edittingService() {
    return this._edittingService;
  }

  get isLoading() {
    return this._isLoading;
  }

  get isSubmitting() {
    return this._isSubmitting;
  }

  get isNewService() {
    return this._serviceId === -1;
  }

  selectService = async (serviceId: number | null) => {
    if (serviceId === null) {
      runInAction(() => {
        this._serviceId = null;
        this._service = null;
        this._edittingService = null;
        this._isEditing = false;
        this._isLoading = false;
        this._isSubmitting = false;
      });

      return;
    }

    if (serviceId === -1) {
      runInAction(() => {
        this._serviceId = serviceId;
        this._isEditing = true;
        this._service = {
          title: "새 서비스",
          content: "",
          description: "",
          thumbnail: -1,
          siteLink: "",
          githubLink: "",
        };
        this._edittingService = {
          title: "새 서비스",
          content: "",
          description: "",
          thumbnail: -1,
          siteLink: "",
          githubLink: "",
        };

        this._isLoading = false;
        this._isSubmitting = false;
      });

      return;
    }

    runInAction(() => {
      this._serviceId = serviceId;
      this._isEditing = false;
      this._service = null;
      this._edittingService = null;

      this._isLoading = true;
      this._isSubmitting = false;
    });

    try {
      const data = await getDetailServiceAdmin(serviceId);

      runInAction(() => {
        this._service = data;
        this._edittingService = {
          ...data,
        };
      });
    } catch (e) {
      console.error(e);

      adminNotificationStore.addNotification(
        "서비스 정보 로드 오류",
        "서비스 정보를 불러오는 중 오류가 발생했습니다."
      );
    }

    runInAction(() => {
      this._isLoading = false;
    });
  };

  startEditing = () => {
    if (!this._service) return;

    runInAction(() => {
      this._isEditing = true;
      this._edittingService = {
        ...this._service!,
      };
    });
  };

  cancelEditing = () => {
    if (this._serviceId === -1) {
      runInAction(() => {
        this._serviceId = null;
      });
    }

    runInAction(() => {
      this._isEditing = false;
    });
  };

  submitEditing = async () => {
    if (!this._serviceId) return;
    if (!this._edittingService) return;
    if (!this._edittingService) return;

    runInAction(() => {
      this._isSubmitting = true;
    });

    // validation
    if (this._edittingService.thumbnail === -1) {
      adminNotificationStore.addNotification(
        "서비스 수정 오류",
        "썸네일을 선택해주세요."
      );

      runInAction(() => {
        this._isSubmitting = false;
      });

      return;
    }

    try {
      if (this._serviceId === -1) {
        await createServiceAdmin(this._edittingService);
      } else {
        await modifyServiceAdmin(this._serviceId, this._edittingService);
      }

      adminNotificationStore.addNotification(
        "서비스 수정 완료",
        "서비스 수정이 완료되었습니다.",
        "info"
      );

      await this._parentStore.loadData();

      if (this._serviceId === -1) {
        this._serviceId = null;
      }
      await this.selectService(this._serviceId);

      runInAction(() => {
        this._isEditing = false;
      });
    } catch (e) {
      console.error(e);

      if (this._serviceId === -1) {
        adminNotificationStore.addNotification(
          "서비스 생성 오류",
          "서비스 생성 중 오류가 발생했습니다."
        );
      } else {
        adminNotificationStore.addNotification(
          "서비스 수정 오류",
          "서비스 수정 중 오류가 발생했습니다."
        );
      }
    }

    runInAction(() => {
      this._isSubmitting = false;
    });
  };

  deleteService = async () => {
    if (!this._serviceId) return;

    runInAction(() => {
      this._isSubmitting = true;
    });

    try {
      await deleteServiceAdmin(this._serviceId);

      adminNotificationStore.addNotification(
        "서비스 삭제 완료",
        "서비스 삭제가 완료되었습니다.",
        "info"
      );
    } catch (e) {
      console.error(e);
      adminNotificationStore.addNotification(
        "서비스 삭제 오류",
        "서비스 삭제 중 오류가 발생했습니다."
      );
    }

    runInAction(() => {
      this._isSubmitting = false;
    });

    await this._parentStore.loadData();
    await this.selectService(null);
  };

  setEdittingService = (service: ModifyServiceAdmin) => {
    runInAction(() => {
      this._edittingService = service;
    });
  };
}
