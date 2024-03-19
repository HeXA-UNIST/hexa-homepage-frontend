import axios from "axios";
import WebConstants from "@constants";

import { useState, useEffect } from "react";

export function Image({
    id,
    className,
}: {
    id: number;
    className: string;
}) {
    const defaultPath: string = "";
    const [path, setPath] = useState<string>(defaultPath);

    useEffect(() => {
        setPath(defaultPath);
        const params = {
            attachmentId: id,
        };
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
    }, [id]);
    return <img className={className} src={path} alt="" />;
}


export function FileDownload({
    id,
    className
}: {
    id: number;
    className: string;
}){
    // todo
}