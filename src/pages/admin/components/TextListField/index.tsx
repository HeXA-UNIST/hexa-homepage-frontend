import { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

function TextListField({
  value,
  onChange,
  readOnly = false,
}: {
  value: string[];
  onChange: (v: string[]) => void;
  readOnly?: boolean;
}) {
  const [newItem, setNewItem] = useState("");

  return (
    <div className="w-full flex flex-row flex-wrap gap-2">
      {value.map((v) => (
        <div
          className={`rounded-md flex flex-row items-center justify-between gap-2
          border border-gray-700 text-sm px-1 py-1
          ${readOnly ? "text-gray-300" : "text-white "}
          `}
        >
          <div className="ml-1">{v}</div>
          {!readOnly && (
            <button
              className="p-2 flex items-center justify-center rounded-md bg-transparent hover:bg-gray-800"
              type="button"
              onClick={() => {
                onChange(value.filter((vv) => vv !== v));
              }}
              aria-label="삭제"
            >
              <MdClose className="text-white text-base" />
            </button>
          )}
        </div>
      ))}
      {!readOnly && (
        <div
          className={`rounded-md flex flex-row items-center justify-between gap-2 p-1
          bg-gray-900 text-white border border-gray-700`}
        >
          <input
            className="px-2 py-1 text-white text-sm bg-transparent flex-1 outline-none"
            type="text"
            onChange={(e) => setNewItem(e.target.value)}
            value={newItem}
          />

          <button
            className="rounded-md p-2 flex items-center justify-center shrink-0 bg-transparent hover:bg-gray-800"
            type="button"
            onClick={() => {
              onChange([...value, newItem]);
              setNewItem("");
            }}
            aria-label="삭제"
          >
            <MdAdd className="text-white text-base" />
          </button>
        </div>
      )}
    </div>
  );
}

TextListField.defaultProps = {
  readOnly: false,
};

export default TextListField;
