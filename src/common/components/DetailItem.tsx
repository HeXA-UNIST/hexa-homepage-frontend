import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { IAttachment } from "@models/seminar/Seminar";
import { Image, FileDownload } from "./ImageContent";

function DetailItem({
    returnLink,
    subTitle,
    title,
    image,
    contentTitle,
    content,
    attachments,
    children,
}: {
    returnLink: string;
    subTitle: string;
    title: string;
    image: number | undefined;
    contentTitle: string;
    content: string;
    attachments: IAttachment[] | undefined;
    children: React.ReactNode;
}) {
    console.log(attachments);
    return (
        <div className="grid gap-x-12 gap-y-6 grid-cols-[20rem_minmax(20rem,_1fr)] grid-rows-[3rem_min-content_min-content_auto]">
            <div className="text-left col-start-1 col-end-2 row-start-1 row-end-2 rounded-md">
                <Link
                    className=" px-5 py-2 rounded-2xl border-2 border-zinc-500 text-zinc-500"
                    to={returnLink}
                >
                    <FontAwesomeIcon className=" pr-2" icon={faArrowLeft} />
                    <span className=" font-semibold">돌아가기</span>
                </Link>
            </div>
            <div className="text-left col-start-1 col-end-2 row-start-2 row-end-3 h-fit">
                <div className="text-zinc-600 text-xl">{subTitle}</div>
                <div className="text-white text-3xl font-bold">{title}</div>
            </div>

            {image !== undefined && (
                <Image
                    id={image}
                    className=" rounded-2xl text-left col-start-1 col-end-2 row-start-3 row-end-4"
                />
            )}
            <div
                className={`col-start-1 col-end-2 ${
                    image !== undefined
                        ? "row-start-4 row-end-6"
                        : "row-start-3 row-end-4"
                }`}
            >
                {children}
            </div>
            {attachments !== undefined && (
                <div
                className="col-start-1 col-end-2 row-start-4 row-end-6 rounded-2xl p-4 bg-zinc-900 text-white flex flex-col gap-4"
            >
                {attachments.map(at => (
                   <FileDownload key={at.fileId} attachment={at} className="bg-zinc-800 rounded-xl p-2 text-left px-4"/>
                ))}
            </div>
            )

            }
            <div className="col-start-2 col-end-3 row-start-2 row-end-6 bg-zinc-900 rounded-2xl p-8 text-white flex flex-col">
                <div className=" px-4 mb-3 text-left text-xl">
                    {contentTitle}
                </div>
                <div className=" h-fit p-6 bg-zinc-800 rounded-2xl text-left break-words  w-full grow">
                    <div className="break-words whitespace-pre-wrap w-full">{content}</div>
                </div>
            </div>
        </div>
    );
}

export default DetailItem;
