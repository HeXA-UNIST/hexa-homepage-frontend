function DateField({
  value,
  onChange,
  readOnly = false,
  placeholder = "",
  allowClear = false,
}: {
  value: Date | null;
  onChange: (value: Date | null) => void;
  readOnly?: boolean;
  placeholder?: string;
  allowClear?: boolean;
}) {
  return (
    <input
      className={`w-full px-4 py-2 border border-gray-700 rounded-md
      ${readOnly ? "bg-transparent text-gray-300" : "bg-gray-900 text-white "}
        `}
      type="date"
      value={value?.toISOString().split("T")[0] ?? ""}
      onChange={(e) => {
        if (e.target.value === "" && !allowClear) {
          return;
        }
        onChange(e.target.value !== "" ? new Date(e.target.value) : null);
      }}
      readOnly={readOnly}
      placeholder={placeholder}
    />
  );
}

DateField.defaultProps = {
  readOnly: false,
  allowClear: false,
  placeholder: "",
};

export default DateField;
