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
    "/admin/modifyService",
    { serviceId, ...data } satisfies ModifyServiceAdminDTO,
    {
      withCredentials: true,
    }
  );
}

export async function createServiceAdmin(data: CreateServiceAdmin) {
  return api.post(
    "/admin/createService",
    data satisfies CreateServiceAdminDTO,
    {
      withCredentials: true,
    }
  );
}

export async function getServiceListAdmin(
  pageNum: number,
  perPage: number
): Promise<GetServiceListResultAdmin> {
  return (
    await api.get("/admin/serviceList", {
      params: {
        pageNum,
        perPage,
      },
      withCredentials: true,
    })
  ).data as GetServiceListResultAdminDTO satisfies GetServiceListResultAdmin;
}

export async function getDetailServiceAdmin(
  serviceId: number
): Promise<DetailServiceAdmin> {
  return (
    await api.get(`/admin/serviceDetail`, {
      params: {
        serviceId,
      },
      withCredentials: true,
    })
  ).data as DetailServiceAdminDTO satisfies DetailServiceAdmin;
}

export async function deleteServiceAdmin(serviceId: number) {
  return api.delete(`/admin/deleteService`, {
    params: {
      serviceId,
    },
    withCredentials: true,
  });
}
