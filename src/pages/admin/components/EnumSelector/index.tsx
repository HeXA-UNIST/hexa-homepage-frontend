/* eslint-disable react/require-default-props */
function EnumItem({
  label,
  readOnly,
  onClick,
  isSelected,
}: {
  label: string;
  readOnly: boolean;
  onClick: () => void;
  isSelected: boolean;
}) {
  let cn = "";

  if (readOnly) {
    if (isSelected) {
      cn = "border border-[#1B83BE] text-[#1B83BE]";
    } else {
      cn = "text-gray-700";
    }
  } else if (isSelected) {
    cn = "border border-[#1B83BE] text-[#1B83BE] bg-gray-800";
  } else {
    cn = "text-gray-700 bg-gray-800";
  }
  return (
    <button
      className={`rounded-md px-3 py-2 ${cn}`}
      disabled={readOnly}
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}

function EnumSelector<T extends { toString(): string }>({
  value,
  onLabel = (v) => v.toString(),
  options,
  readOnly = false,
  onChange,
}: {
  value: T;
  onLabel?: (value: T) => string;
  options: T[];
  readOnly?: boolean;
  onChange: (value: T) => void;
}) {
  return (
    <div className="w-full flex-row flex wrap gap-2">
      {Array.from(options).map((option) => (
        <EnumItem
          key={onLabel(option)}
          label={onLabel(option)}
          readOnly={readOnly}
          isSelected={value === option}
          onClick={() => {
            if (readOnly) {
              return;
            }
            onChange(option);
          }}
        />
      ))}
    </div>
  );
}

export default EnumSelector;
