import {
  CreateProjectAdmin,
  DetailProjectAdmin,
  GetProjectListResultAdmin,
  ModifyProjectAdmin,
  ProjectStateAdmin,
} from "@models/admin/ProjectAdmin";
import {
  CreateProjectAdminDTO,
  DetailProjectAdminDTO,
  GetProjectListResultAdminDTO,
  ModifyProjectAdminDTO,
} from "@models/admin/dto/ProjectAdminDTO";
import api from "common/api";

export async function modifyProjectAdmin(
  projectId: number,
  data: ModifyProjectAdmin
) {
  return api.post(
    "/admin/project/modify",
    {
      projectId,
      ...data,
      // date to "yyyy-MM-dd"
      startDate: data.startDate.toISOString().split("T")[0],
      endDate: data.endDate?.toISOString().split("T")[0] ?? "",
    } satisfies ModifyProjectAdminDTO,
    {
      withCredentials: true,
    }
  );
}

export async function createProjectAdmin(data: CreateProjectAdmin) {
  return api.post(
    "/admin/project/create",
    {
      ...data,
      // date to "yyyy-MM-dd"
      startDate: data.startDate.toISOString().split("T")[0],
      endDate: data.endDate?.toISOString().split("T")[0] ?? "",
    } satisfies CreateProjectAdminDTO,
    {
      withCredentials: true,
    }
  );
}

export async function getProjectListAdmin(
  pageNum: number,
  perPage: number
): Promise<GetProjectListResultAdmin> {
  const result = (
    await api.get("/admin/project/list", {
      params: {
        pageNum,
        perPage,
      },
      withCredentials: true,
    })
  ).data as GetProjectListResultAdminDTO;

  return {
    totalPage: result.totalPage,
    list: result.list.map((project) => ({
      ...project,
      state: ((state): ProjectStateAdmin => {
        switch (state) {
          case "승인중":
            return "승인중";
          case "모집중":
            return "모집중";
          case "진행중":
            return "진행중";
          case "진행완료":
            return "진행완료";
          default:
            throw new Error(`Invalid state: ${state}`);
        }
      })(project.state),
    })),
  } satisfies GetProjectListResultAdmin;
}

export async function getDetailProjectAdmin(
  projectId: number
): Promise<DetailProjectAdmin> {
  const result = (
    await api.get(`/admin/project/detail`, {
      params: {
        projectId,
      },
      withCredentials: true,
    })
  ).data as DetailProjectAdminDTO;

  return {
    ...result,
    // "yyyy-mm-dd" to Date
    startDate: new Date(result.startDate),
    endDate:
      result.endDate && result.endDate.length > 0
        ? new Date(result.endDate)
        : null,
    state: ((state): ProjectStateAdmin => {
      switch (state) {
        case "승인중":
          return "승인중";
        case "모집중":
          return "모집중";
        case "진행중":
          return "진행중";
        case "진행완료":
          return "진행완료";
        default:
          throw new Error(`Invalid state: ${state}`);
      }
    })(result.state),
  } satisfies DetailProjectAdmin;
}

export async function deleteProjectAdmin(projectId: number) {
  return api.delete(`/admin/project/delete`, {
    params: {
      projectId,
    },
    withCredentials: true,
  });
}
