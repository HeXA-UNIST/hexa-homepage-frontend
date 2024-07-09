import { UploadFileResultDTO } from "@models/admin/dto/AttachmentAdminDTO";
import api from "common/api";

export async function uploadAttachment(
  file: File,
  fileName: string
): Promise<UploadFileResultDTO> {
  const formData = new FormData();

  // create new file that has fileName
  const newFile = new File([file], fileName, { type: file.type });
  formData.append("file", newFile);

  return (
    await api.post("/admin/upload", formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  ).data as UploadFileResultDTO;
}
