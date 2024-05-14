import {
  createNewsAdmin,
  deleteNewsAdmin,
  getDetailNewsAdmin,
  modifyNewsAdmin,
} from "common/services/admin/news/NewsAdminService";
import { DetailNewsAdmin, ModifyNewsAdmin } from "@models/admin/NewsAdmin";
import adminNotificationStore from "@pages/admin/store/AdminNotificationStore";
import { makeAutoObservable, observable, runInAction } from "mobx";

// eslint-disable-next-line import/no-cycle
import NewsAdminStore from "./NewsAdminStore";

export default class NewsEditorAdminStore {
  private _newsId: number | null = null; // if -1, it means new news

  private _news: DetailNewsAdmin | null = null;

  private _isEditing = false;

  private _edittingNews: ModifyNewsAdmin | null = null;

  private _isLoading = false;

  private _isSubmitting = false;

  private _parentStore: NewsAdminStore; // Not controlled by MobX

  constructor(parent: NewsAdminStore) {
    this._parentStore = parent;

    makeAutoObservable<
      NewsEditorAdminStore,
      | "_newsId"
      | "_news"
      | "_isEditing"
      | "_edittingNews"
      | "_isLoading"
      | "_isSubmitting"
    >(this, {
      _newsId: observable,
      _news: observable,
      _isEditing: observable,
      _edittingNews: observable,
      _isLoading: observable,
      _isSubmitting: observable,
    });
  }

  get isSelected() {
    return this._newsId !== null;
  }

  get news() {
    return this._news;
  }

  get isEditing() {
    return this._isEditing;
  }

  get edittingNews() {
    return this._edittingNews;
  }

  get isLoading() {
    return this._isLoading;
  }

  get isSubmitting() {
    return this._isSubmitting;
  }

  get isNewNews() {
    return this._newsId === -1;
  }

  selectNews = async (newsId: number | null) => {
    if (newsId === null) {
      runInAction(() => {
        this._newsId = null;
        this._news = null;
        this._edittingNews = null;
        this._isEditing = false;
        this._isLoading = false;
        this._isSubmitting = false;
      });

      return;
    }

    if (newsId === -1) {
      runInAction(() => {
        this._newsId = newsId;
        this._isEditing = true;
        this._news = {
          newsType: "공지",
          title: "새 뉴스",
          date: new Date(),
          content: "",
        };
        this._edittingNews = {
          newsType: "공지",
          title: "새 뉴스",
          date: new Date(),
          content: "",
        };

        this._isLoading = false;
        this._isSubmitting = false;
      });

      return;
    }

    runInAction(() => {
      this._newsId = newsId;
      this._isEditing = false;
      this._news = null;
      this._edittingNews = null;

      this._isLoading = true;
      this._isSubmitting = false;
    });

    try {
      const data = await getDetailNewsAdmin(newsId);

      runInAction(() => {
        this._news = data;
        this._edittingNews = {
          ...data,
        };
      });
    } catch (e) {
      console.error(e);

      adminNotificationStore.addNotification(
        "뉴스 정보 로드 오류",
        "뉴스 정보를 불러오는 중 오류가 발생했습니다."
      );
    }

    runInAction(() => {
      this._isLoading = false;
    });
  };

  startEditing = () => {
    if (!this._news) return;

    runInAction(() => {
      this._isEditing = true;
      this._edittingNews = {
        ...this._news!,
      };
    });
  };

  cancelEditing = () => {
    if (this._newsId === -1) {
      runInAction(() => {
        this._newsId = null;
      });
    }

    runInAction(() => {
      this._isEditing = false;
    });
  };

  submitEditing = async () => {
    if (!this._newsId) return;
    if (!this._edittingNews) return;

    runInAction(() => {
      this._isSubmitting = true;
    });

    try {
      if (this._newsId === -1) {
        await createNewsAdmin(this._edittingNews);
      } else {
        await modifyNewsAdmin(this._newsId, this._edittingNews);
      }

      adminNotificationStore.addNotification(
        "뉴스 수정 완료",
        "뉴스 수정이 완료되었습니다.",
        "info"
      );

      await this._parentStore.loadData();

      if (this._newsId === -1) {
        this._newsId = null;
      }
      await this.selectNews(this._newsId);

      runInAction(() => {
        this._isEditing = false;
      });
    } catch (e) {
      console.error(e);

      if (this._newsId === -1) {
        adminNotificationStore.addNotification(
          "뉴스 생성 오류",
          "뉴스 생성 중 오류가 발생했습니다."
        );
      } else {
        adminNotificationStore.addNotification(
          "뉴스 수정 오류",
          "뉴스 수정 중 오류가 발생했습니다."
        );
      }
    }

    runInAction(() => {
      this._isSubmitting = false;
    });
  };

  deleteNews = async () => {
    if (!this._newsId) return;

    runInAction(() => {
      this._isSubmitting = true;
    });

    try {
      await deleteNewsAdmin(this._newsId);

      adminNotificationStore.addNotification(
        "뉴스 삭제 완료",
        "뉴스 삭제가 완료되었습니다.",
        "info"
      );
    } catch (e) {
      console.error(e);
      adminNotificationStore.addNotification(
        "뉴스 삭제 오류",
        "뉴스 삭제 중 오류가 발생했습니다."
      );
    }

    runInAction(() => {
      this._isSubmitting = false;
    });

    await this._parentStore.loadData();
    await this.selectNews(null);
  };

  setEdittingNews = (news: ModifyNewsAdmin) => {
    runInAction(() => {
      this._edittingNews = news;
    });
  };
}
