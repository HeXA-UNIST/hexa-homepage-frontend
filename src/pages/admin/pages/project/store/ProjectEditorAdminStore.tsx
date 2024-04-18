import {
  DetailProjectAdmin,
  ModifyProjectAdmin,
} from "@models/admin/ProjectAdmin";
import {
  createProjectAdmin,
  deleteProjectAdmin,
  getDetailProjectAdmin,
  modifyProjectAdmin,
} from "common/services/admin/project/ProjectAdminService";
import adminNotificationStore from "@pages/admin/store/AdminNotificationStore";
import { makeAutoObservable, observable, runInAction } from "mobx";

// eslint-disable-next-line import/no-cycle
import ProjectAdminStore from "./ProjectAdminStore";

export default class ProjectEditorAdminStore {
  private _projectId: number | null = null; // if -1, it means new project

  private _project: DetailProjectAdmin | null = null;

  private _isEditing = false;

  private _edittingProject: ModifyProjectAdmin | null = null;

  private _isLoading = false;

  private _isSubmitting = false;

  private _parentStore: ProjectAdminStore; // Not controlled by MobX

  constructor(parent: ProjectAdminStore) {
    this._parentStore = parent;

    makeAutoObservable<
      ProjectEditorAdminStore,
      | "_selectedProject"
      | "_isEditing"
      | "_edittingProject"
      | "_isLoading"
      | "_isSubmitting"
    >(this, {
      _selectedProject: observable,
      _isEditing: observable,
      _edittingProject: observable,
      _isLoading: observable,
      _isSubmitting: observable,
    });
  }

  get isSelected() {
    return this._projectId !== null;
  }

  get project() {
    return this._project;
  }

  get isEditing() {
    return this._isEditing;
  }

  get edittingProject() {
    return this._edittingProject;
  }

  get isLoading() {
    return this._isLoading;
  }

  get isSubmitting() {
    return this._isSubmitting;
  }

  get isNewProject() {
    return this._projectId === -1;
  }

  selectProject = async (projectId: number | null) => {
    if (projectId === null) {
      runInAction(() => {
        this._projectId = null;
        this._project = null;
        this._edittingProject = null;
        this._isEditing = false;
        this._isLoading = false;
        this._isSubmitting = false;
      });

      return;
    }

    if (projectId === -1) {
      runInAction(() => {
        this._projectId = projectId;
        this._isEditing = true;
        this._project = {
          title: "새 프로젝트",
          startDate: new Date(),
          endDate: null,
          projectTechStacks: [],
          state: "승인중",
          content: "",
          description: "",
          thumbnail: -1,
        };
        this._edittingProject = {
          title: "새 프로젝트",
          startDate: new Date(),
          endDate: null,
          projectTechStacks: [],
          state: "승인중",
          content: "",
          description: "",
          thumbnail: -1,
        };

        this._isLoading = false;
        this._isSubmitting = false;
      });

      return;
    }

    runInAction(() => {
      this._projectId = projectId;
      this._isEditing = false;
      this._project = null;
      this._edittingProject = null;

      this._isLoading = true;
      this._isSubmitting = false;
    });

    try {
      const data = await getDetailProjectAdmin(projectId);

      runInAction(() => {
        this._project = data;
        this._edittingProject = {
          ...data,
        };
      });
    } catch (e) {
      console.error(e);

      adminNotificationStore.addNotification(
        "프로젝트 정보 로드 오류",
        "프로젝트 정보를 불러오는 중 오류가 발생했습니다."
      );
    }

    runInAction(() => {
      this._isLoading = false;
    });
  };

  startEditing = () => {
    if (!this._project) return;

    runInAction(() => {
      this._isEditing = true;
      this._edittingProject = {
        ...this._project!,
      };
    });
  };

  cancelEditing = () => {
    if (this._projectId === -1) {
      runInAction(() => {
        this._projectId = null;
      });
    }

    runInAction(() => {
      this._isEditing = false;
    });
  };

  submitEditing = async () => {
    if (!this._projectId) return;
    if (!this._edittingProject) return;
    if (!this._edittingProject) return;

    runInAction(() => {
      this._isSubmitting = true;
    });

    // validation
    if (this._edittingProject.thumbnail === -1) {
      adminNotificationStore.addNotification(
        "프로젝트 수정 오류",
        "썸네일을 선택해주세요."
      );

      runInAction(() => {
        this._isSubmitting = false;
      });

      return;
    }

    try {
      if (this._projectId === -1) {
        await createProjectAdmin(this._edittingProject);
      } else {
        await modifyProjectAdmin(this._projectId, this._edittingProject);
      }

      adminNotificationStore.addNotification(
        "프로젝트 수정 완료",
        "프로젝트 수정이 완료되었습니다.",
        "info"
      );

      await this._parentStore.loadData();

      if (this._projectId === -1) {
        this._projectId = null;
      }
      await this.selectProject(this._projectId);

      runInAction(() => {
        this._isEditing = false;
      });
    } catch (e) {
      console.error(e);

      if (this._projectId === -1) {
        adminNotificationStore.addNotification(
          "프로젝트 생성 오류",
          "프로젝트 생성 중 오류가 발생했습니다."
        );
      } else {
        adminNotificationStore.addNotification(
          "프로젝트 수정 오류",
          "프로젝트 수정 중 오류가 발생했습니다."
        );
      }
    }

    runInAction(() => {
      this._isSubmitting = false;
    });
  };

  deleteProject = async () => {
    if (!this._projectId) return;

    runInAction(() => {
      this._isSubmitting = true;
    });

    try {
      await deleteProjectAdmin(this._projectId);

      adminNotificationStore.addNotification(
        "프로젝트 삭제 완료",
        "프로젝트 삭제가 완료되었습니다.",
        "info"
      );
    } catch (e) {
      console.error(e);
      adminNotificationStore.addNotification(
        "프로젝트 삭제 오류",
        "프로젝트 삭제 중 오류가 발생했습니다."
      );
    }

    runInAction(() => {
      this._isSubmitting = false;
    });

    await this._parentStore.loadData();
    await this.selectProject(null);
  };

  setEdittingProject = (project: ModifyProjectAdmin) => {
    runInAction(() => {
      this._edittingProject = project;
    });
  };
}
