import {
  CreateSeminarAdmin,
  DetailSeminarAdmin,
  GetSeminarListResultAdmin,
  ModifySeminarAdmin,
} from "@models/admin/SeminarAdmin";
import {
  CreateSeminarAdminDTO,
  DetailSeminarAdminDTO,
  GetSeminarListResultAdminDTO,
  ModifySeminarAdminDTO,
} from "@models/admin/dto/SeminarAdminDTO";
import api from "common/api";

export async function modifySeminarAdmin(
  seminarId: number,
  data: ModifySeminarAdmin
) {
  return api.post(
    "/admin/seminar/modify",
    {
      ...data,
      seminarId,
      attachments: data.attachments.map((attachment) => attachment.fileId),
      // date to "yyyy-MM-dd"
      date: data.date.toISOString().split("T")[0],
    } satisfies ModifySeminarAdminDTO,
    {
      withCredentials: true,
    }
  );
}

export async function createSeminarAdmin(data: CreateSeminarAdmin) {
  return api.post(
    "/admin/seminar/create",
    {
      ...data,
      attachments: data.attachments.map((attachment) => attachment.fileId),
      // date to "yyyy-MM-dd"
      date: data.date.toISOString().split("T")[0],
    } satisfies CreateSeminarAdminDTO,
    {
      withCredentials: true,
    }
  );
}

export async function getSeminarListAdmin(
  pageNum: number,
  perPage: number
): Promise<GetSeminarListResultAdmin> {
  const result = (
    await api.get("/admin/seminar/list", {
      params: {
        pageNum,
        perPage,
      },
      withCredentials: true,
    })
  ).data as GetSeminarListResultAdminDTO;

  return {
    ...result,
    list: result.list.map((seminar) => ({
      ...seminar,
      // "yyyy-mm-dd" to Date
      date: new Date(seminar.date),
    })),
  } satisfies GetSeminarListResultAdmin;
}

export async function getDetailSeminarAdmin(
  seminarId: number
): Promise<DetailSeminarAdmin> {
  const result = (
    await api.get(`/admin/seminar/detail`, {
      params: {
        seminarId,
      },
      withCredentials: true,
    })
  ).data as DetailSeminarAdminDTO;

  return {
    ...result,
    // "yyyy-mm-dd" to Date
    date: new Date(result.date),
  } satisfies DetailSeminarAdmin;
}

export async function deleteSeminarAdmin(seminarId: number) {
  return api.delete(`/admin/seminar/delete`, {
    params: {
      seminarId,
    },
    withCredentials: true,
  });
}
