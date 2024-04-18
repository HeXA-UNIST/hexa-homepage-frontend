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
          className={`rounded-md flex flex-row items-center justify-between 
          border border-gray-700 text-white text-sm px-2 py-1`}
        >
          <div>{v}</div>
          {!readOnly && (
            <button
              className="w-4 h-4 flex items-center justify-center"
              type="button"
              onClick={() => {
                onChange(value.filter((vv) => vv !== v));
              }}
              aria-label="삭제"
            >
              <MdClose className="text-white text-sm" />
            </button>
          )}
        </div>
      ))}
      {!readOnly && (
        <div
          className={`rounded-md flex flex-row items-center justify-between 
          bg-gray-800 border border-gray-700`}
        >
          <input
            className="px-2 py-1 text-white text-sm"
            type="text"
            onChange={(e) => setNewItem(e.target.value)}
            value={newItem}
          />

          <button
            className="w-4 h-4 flex items-center justify-center"
            type="button"
            onClick={() => {
              onChange([...value, newItem]);
              setNewItem("");
            }}
            aria-label="삭제"
          >
            <MdAdd className="text-white text-sm" />
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
