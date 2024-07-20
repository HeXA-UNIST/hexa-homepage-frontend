import { useRef, useState } from "react";
import Button from "../Button";
import OneLineTextField from "../OneLineTextField";

function FileListUploadField({
  initialFiles,
  value,
  onUpload,
  onChange,
  readOnly = false,
}: {
  initialFiles: { fileId: number; fileName: string; fileSize: number }[];
  value: { fileId: number; fileName: string; fileSize: number }[];
  onUpload: (files: File, fileName: string) => Promise<void>;
  onChange: (
    value: { fileId: number; fileName: string; fileSize: number }[]
  ) => void;
  readOnly?: boolean;
}) {
  const [fileUploadSetting, setFileUploadSetting] = useState<{
    isConfirming: boolean;
    file: File;
    fileName: string;
  }>({
    isConfirming: false,
    file: {} as File,
    fileName: "",
  });

  const [isUploading, setIsUploading] = useState(false);
  const FileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="w-full flex flex-col gap-2">
      <input
        className="hidden"
        type="file"
        accept="*"
        ref={FileInputRef}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) {
            return;
          }

          setFileUploadSetting({
            isConfirming: true,
            file,
            fileName: file.name,
          });
        }}
      />
      {!readOnly && (
        <Button
          label="파일 추가"
          onClick={() => {
            FileInputRef.current?.click();
          }}
          disabled={isUploading || readOnly}
        />
      )}
      {!readOnly && fileUploadSetting.isConfirming && (
        <div className="flex flex-row gap-2 items-center justify-between">
          <OneLineTextField
            value={fileUploadSetting.fileName}
            onChange={(v) =>
              setFileUploadSetting({ ...fileUploadSetting, fileName: v })
            }
            readOnly={isUploading || readOnly}
            placeholder="파일 이름"
          />
          <div className="flex flex-row gap-2 shrink-0">
            <Button
              label="취소"
              onClick={() => {
                setFileUploadSetting({
                  isConfirming: false,
                  file: {} as File,
                  fileName: "",
                });
              }}
              disabled={isUploading || readOnly}
            />
            <Button
              label="업로드"
              onClick={() => {
                setIsUploading(true);
                onUpload(
                  fileUploadSetting.file,
                  fileUploadSetting.fileName
                ).finally(() => {
                  setIsUploading(false);
                  setFileUploadSetting({
                    isConfirming: false,
                    file: {} as File,
                    fileName: "",
                  });
                });
              }}
              disabled={isUploading || readOnly}
            />
          </div>
        </div>
      )}
      {!readOnly &&
        value
          .filter((v) => !initialFiles.some((file) => file.fileId === v.fileId))
          .map((file) => (
            <div
              key={file.fileId}
              className="flex flex-row gap-2 items-center justify-between"
            >
              <div className="text-sm text-white font-bold">
                {file.fileName}
              </div>
              <Button
                label="삭제"
                onClick={() => {
                  onChange(value.filter((v) => v.fileId !== file.fileId));
                }}
                disabled={isUploading || readOnly}
              />
            </div>
          ))}

      {initialFiles.map((file) => (
        <div
          key={file.fileId}
          className="flex flex-row gap-2 items-center justify-between"
        >
          <div className="text-sm text-white font-bold">{file.fileName}</div>
          {!readOnly && (
            <Button
              label={
                value.some((v) => v.fileId === file.fileId) ? "삭제" : "추가"
              }
              onClick={() => {
                if (value.some((v) => v.fileId === file.fileId)) {
                  onChange(value.filter((v) => v.fileId !== file.fileId));
                  return;
                }
                onChange([...value, file]);
              }}
              disabled={isUploading || readOnly}
            />
          )}
        </div>
      ))}
    </div>
  );
}

FileListUploadField.defaultProps = {
  readOnly: false,
};

export default FileListUploadField;
