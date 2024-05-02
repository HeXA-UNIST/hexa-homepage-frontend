import axios from "axios";
import WebConstants from "@constants";

import { useState, useEffect } from "react";

export function Image({ id, className }: { id: number; className: string }) {
    const defaultPath = "";
    const [path, setPath] = useState<string>(defaultPath);

    useEffect(() => {
        setPath(defaultPath);

        (async () => {
            await new Promise(resolve => {
                setTimeout(resolve, 1000);
            });
            setPath("/images/loadingIcon.svg");
        })();

        // const params = {
        //     attachmentId: id,
        // };
        // try {
        //     axios
        //         .get(`${WebConstants.API_URL}/attachment`, {
        //             params,
        //             responseType: "blob",
        //         })
        //         .then((response) => {
        //             setPath(window.URL.createObjectURL(response.data));
        //         });
        // } catch (error) {
        //     console.log(error);
        //     throw error;
        // }
    }, [id]);
    return <img className={className} src={path} alt="" />;
}

export function FileDownload({
    id,
    className,
}: {
    id: number;
    className: string;
}) {
    const handleDownload = async () => {
        const params = {
            attachmentId: id,
        };
        try {
            const response = await axios.get(
                `${WebConstants.API_URL}/attachment`,
                {
                    params,
                    method: "GET",
                    responseType: "blob",
                }
            );

            const downloadUrl = window.URL.createObjectURL(
                new Blob([response.data])
            );
            const link = document.createElement("a");
            link.href = downloadUrl;
            link.setAttribute("download", "example.pdf");
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            console.error("파일 다운로드 실패:", error);
        }
    };

    return (
        <div className={className}>
            <button type="button" onClick={handleDownload}>파일 다운로드</button>
        </div>
    );
}
