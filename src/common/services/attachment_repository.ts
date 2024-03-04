import axios from "axios";
import WebConstants from "@constants";

export interface IAttachment {
    filename: string;
    size: string;
}

export class Attachment {
    filename: string;

    size: string;

    constructor(data: IAttachment) {
        this.filename = data.filename;
        this.size = data.size;
    }
}

export default class AttachmentRepository {
    public static async getAttachment(id: number): Promise<Attachment> {
        const params = {
            attachmentId: id,
        };
        try {
            const response = await axios.get(
                `${WebConstants.API_URL}/attachment`,
                { params }
            );

            let filename = '';

            const contentDispositionHeader =
                response.headers["content-disposition"];
            if (contentDispositionHeader) {
                const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                const matches = filenameRegex.exec(contentDispositionHeader);
                if (matches != null && matches[1]) {
                    filename = matches[1].replace(/['"]/g, ""); // 따옴표 등 제거
                    console.log("다운로드된 파일 이름:", filename);
                }
            }

            // 파일 크기도 필요하다면 아래와 같이 content-length 헤더를 이용할 수 있습니다.
            const contentLength = response.headers["content-length"];
            if (contentLength) {
                console.log("다운로드된 파일 크기:", contentLength);
            }
            return new Attachment({filename: filename, size: contentDispositionHeader ?? ""});
        } catch (err) {
            console.error("뭔 에러여", err);
            throw err;
        }
    }
}
