export default function Button({
  label,
  disabled = false,
  onClick,
}: {
  label: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className="rounded-md text-sm flex flex-row justify-between items-center gap-1 px-4 py-3 bg-[#1B83BE] text-white hover:bg-white hover:text-black
      disabled:opacity-50
      "
      type="button"
      disabled={disabled}
      onClick={!disabled ? onClick : undefined}
    >
      {label}
    </button>
  );
}

Button.defaultProps = {
  disabled: false,
};
