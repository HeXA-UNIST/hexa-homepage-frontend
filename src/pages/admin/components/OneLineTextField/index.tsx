function OneLineTextField({
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
    <input
      className={`w-full px-4 py-2 border border-gray-700 rounded-md
      ${readOnly ? "bg-transparent text-gray-300" : "bg-gray-900 text-white "}
      `}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      readOnly={readOnly}
      placeholder={placeholder}
    />
  );
}

OneLineTextField.defaultProps = {
  readOnly: false,
  placeholder: "",
};

export default OneLineTextField;
