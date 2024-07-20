import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm';
import styled from '@emotion/styled';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { IAttachment } from "@models/seminar/Seminar";
import { Image, FileDownload } from "./ImageContent";

const StyledAnchor = styled.a`
  color: #1e90ff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledH1 = styled.h1`
  font-size: 2.5em !important;
  color: #fff !important;
  margin-bottom: 0.5em !important;
  border-bottom: 2px solid #555 !important;
  padding-bottom: 0.3em !important;
`;

const StyledH2 = styled.h2`
  font-size: 2em !important;
  color: #ddd !important;
  margin-bottom: 0.5em !important;
  border-bottom: 1px solid #555 !important;
  padding-bottom: 0.2em !important;
`;

const StyledH3 = styled.h3`
  font-size: 1.75em !important;
  color: #bbb !important;
  margin-bottom: 0.5em !important;
`;

const StyledLi = styled.li`
  font-size: 1em !important;
  color: #aaa !important;
  margin-bottom: 0.5em !important;
  line-height: 1.5 !important;
`;

const StyledCode = styled.code`
  background: #333 !important;
  padding: 2px 4px !important;
  border-radius: 4px !important;
  font-family: 'Courier New', Courier, monospace !important;
  color: #d6336c !important;
`;

const StyledPre = styled.pre`
  background: #333 !important;
  padding: 10px !important;
  border-radius: 4px !important;
  overflow-x: auto !important;
  font-family: 'Courier New', Courier, monospace !important;
  color: #d6336c !important;
`;

const StyledStrong = styled.strong`
  font-weight: bold !important;
  color: #fff !important;
`;

const StyledDel = styled.del`
  text-decoration: line-through !important;
  color: #777 !important;
`;

const StyledEm = styled.em`
  font-style: italic !important;
  color: #ccc !important;
`;

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
        <div className="grid gap-x-12 gap-y-6 grid-cols-[20rem_minmax(20rem,_1fr)] grid-rows-[min-content_min-content]">
            <div className="col-start-1 col-end-2 row-start-1 row-end-2 grid gap-y-6 grid-cols-[20rem] grid-rows-[3rem_min-content_min-content_min-content]">
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
            </div>
            <div className="col-start-2 col-end-3 row-start-1 row-end-3 bg-zinc-900 rounded-2xl p-8 text-white flex flex-col">
                <div className=" px-4 mb-3 text-left text-xl">
                    {contentTitle}
                </div>
                <div className=" h-fit p-6 bg-zinc-800 rounded-2xl text-left break-words  w-full grow">
                    <div className="break-words whitespace-pre-wrap w-full">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}
                            components={{
                                a: StyledAnchor,
                                h1: StyledH1,
                                h2: StyledH2,
                                h3: StyledH3,
                                li: StyledLi,
                                code: StyledCode,
                                pre: StyledPre,
                                strong: StyledStrong,
                                del: StyledDel,
                                em: StyledEm,
                              }}
                        >
                            {content}
                        </ReactMarkdown>        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailItem;
