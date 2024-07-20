import {
  CreateServiceAdmin,
  DetailServiceAdmin,
  GetServiceListResultAdmin,
  ModifyServiceAdmin,
} from "@models/admin/ServiceAdmin";
import {
  CreateServiceAdminDTO,
  DetailServiceAdminDTO,
  GetServiceListResultAdminDTO,
  ModifyServiceAdminDTO,
} from "@models/admin/dto/ServiceAdminDTO";
import api from "common/api";

export async function modifyServiceAdmin(
  serviceId: number,
  data: ModifyServiceAdmin
) {
  return api.post(
    "/admin/service/modify",
    { serviceId, ...data } satisfies ModifyServiceAdminDTO,
    {
      withCredentials: true,
    }
  );
}

export async function createServiceAdmin(data: CreateServiceAdmin) {
  return api.post(
    "/admin/service/create",
    data satisfies CreateServiceAdminDTO,
    {
      withCredentials: true,
    }
  );
}

export async function getServiceListAdmin(): Promise<GetServiceListResultAdmin> {
  return (
    await api.get("/admin/service/list", {
      withCredentials: true,
    })
  ).data as GetServiceListResultAdminDTO as GetServiceListResultAdmin;
}

export async function getDetailServiceAdmin(
  serviceId: number
): Promise<DetailServiceAdmin> {
  return (
    await api.get(`/admin/service/detail`, {
      params: {
        serviceId,
      },
      withCredentials: true,
    })
  ).data as DetailServiceAdminDTO satisfies DetailServiceAdmin;
}

export async function deleteServiceAdmin(serviceId: number) {
  return api.delete(`/admin/service/delete`, {
    params: {
      serviceId,
    },
    withCredentials: true,
  });
}
