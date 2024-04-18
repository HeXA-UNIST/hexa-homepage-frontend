function MultilineTextField({
  value,
  onChange,
  readOnly = false,
  placeholder = "",
}: {
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  placeholder?: string;
}) {
  return (
    <textarea
      className={`w-full px-4 py-2 border border-gray-700 rounded-md h-80 resize-none
        ${readOnly ? "bg-gray-800" : ""}
        `}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      readOnly={readOnly}
      placeholder={placeholder}
    />
  );
}

MultilineTextField.defaultProps = {
  readOnly: false,
  placeholder: "",
};

export default MultilineTextField;
