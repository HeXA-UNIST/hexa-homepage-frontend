import { useRef, useState } from "react";
import Button from "../Button";

function ImageUploadField({
  url,
  onUpload,
  readOnly = false,
}: {
  url: string | null;
  onUpload: (file: File | null) => Promise<void>;
  readOnly?: boolean;
}) {
  const [isUploading, setIsUploading] = useState(false);
  const FileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-row gap-2 items-end">
      <input
        className="hidden"
        type="file"
        accept="image/*"
        ref={FileInputRef}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) {
            return;
          }
          setIsUploading(true);
          onUpload(file).finally(() => {
            setIsUploading(false);
          });
        }}
      />
      <img
        className="w-[140px] rounded-md overflow-hidden bg-gray-800"
        src={url ?? ""}
        alt="프로젝트 이미지"
      />

      {!readOnly && (
        <div className="flex flex-col gap-2 justify-end">
          {isUploading && (
            <div className="text-sm text-white font-bold">업로드 중...</div>
          )}
          <Button
            label="이미지 업로드"
            onClick={() => {
              FileInputRef.current?.click();
            }}
            disabled={isUploading || readOnly}
          />
        </div>
      )}
    </div>
  );
}

ImageUploadField.defaultProps = {
  readOnly: false,
};

export default ImageUploadField;
