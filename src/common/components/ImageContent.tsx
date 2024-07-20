import axios from "axios";
import WebConstants from "@constants";

import { IAttachment } from "@models/seminar/Seminar";
import { useState, useEffect } from "react";

export function Image({ id, className }: { id: number; className: string }) {
    const defaultPath = "";
    const [path, setPath] = useState<string>(defaultPath);

    useEffect(() => {
        setPath(defaultPath);

        // (async () => {
        //     await new Promise(resolve => {
        //         setTimeout(resolve, 1000);
        //     });
        //     setPath("/images/loadingIcon.svg");
        // })();

        const params = {
            attachmentId: id === 0 ? "" : id,
        };
        if (id !== 0) {
            try {
                axios
                    .get(`${WebConstants.API_URL}/attachment`, {
                        params,
                        responseType: "blob",
                    })
                    .then((response) => {
                        setPath(window.URL.createObjectURL(response.data));
                    });
            } catch (error) {
                console.log(error);
                throw error;
            }
        }
        console.log(id);
    }, [id]);
    return <img className={className} src={path} alt="" />;
}

export function FileDownload({
    attachment,
    className,
}: {
    attachment: IAttachment;
    className: string;
}) {
    // const [downloadUrl, setDownloadUrl] = useState<string>("/");

    const handleDownload = async () => {
        // const params = {
        //     attachmentId: attachment.fileId,
        // };
        try {
            // const res = await axios.get(`${WebConstants.API_URL}/attachment`, {
            //     params,
            //     responseType: "blob",
            // });
            const link = document.createElement("a");
            const url = `${WebConstants.API_URL}/attachment?attachmentId=${attachment.fileId}`;
            link.href = url;
            link.setAttribute("download", attachment.fileName);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (err) {
            console.error("파일 다운로드 실패:", err);
        }
    };

    return (
        <div className={className}>
            <button type="button" onClick={handleDownload}>
                {attachment.fileName}
            </button>
        </div>
    );
}
