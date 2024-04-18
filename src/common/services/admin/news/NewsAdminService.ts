import {
  CreateNewsAdmin,
  DetailNewsAdmin,
  GetNewsListResultAdmin,
  ModifyNewsAdmin,
} from "@models/admin/NewsAdmin";
import {
  CreateNewsAdminDTO,
  DetailNewsAdminDTO,
  GetNewsListResultAdminDTO,
  ModifyNewsAdminDTO,
} from "@models/admin/dto/NewsAdminDTO";
import api from "common/api";

export async function modifyNewsAdmin(data: ModifyNewsAdmin) {
  return api.post(
    "/admin/news/modify",
    {
      ...data,
      // date to "yyyy-MM-dd"
      date: data.date.toISOString().split("T")[0],
    } satisfies ModifyNewsAdminDTO,
    {
      withCredentials: true,
    }
  );
}

export async function createNewsAdmin(data: CreateNewsAdmin) {
  return api.post(
    "/admin/news/create",
    {
      ...data,
      // date to "yyyy-MM-dd"
      date: data.date.toISOString().split("T")[0],
    } satisfies CreateNewsAdminDTO,
    {
      withCredentials: true,
    }
  );
}

export async function getNewsListAdmin(
  pageNum: number,
  perPage: number
): Promise<GetNewsListResultAdmin> {
  const result = (
    await api.get("/admin/news/list", {
      params: {
        pageNum,
        perPage,
      },
    })
  ).data as GetNewsListResultAdminDTO;

  return {
    ...result,
    list: result.list.map((news) => ({
      ...news,
      // "yyyy-mm-dd" to Date
      date: new Date(news.date),
    })),
  } satisfies GetNewsListResultAdmin;
}

export async function getDetailNewsAdmin(
  newsId: number
): Promise<DetailNewsAdmin> {
  const result = (
    await api.get(`/admin/news/detail`, {
      params: {
        newsId,
      },
      withCredentials: true,
    })
  ).data as DetailNewsAdminDTO;

  return {
    ...result,
    // "yyyy-mm-dd" to Date
    date: new Date(result.date),
  } satisfies DetailNewsAdmin;
}

export async function deleteNewsAdmin(newsId: number) {
  return api.delete(`/admin/news/delete`, {
    params: {
      newsId,
    },
    withCredentials: true,
  });
}
