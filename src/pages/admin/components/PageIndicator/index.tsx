export interface PageIndicatorProps {
  totalPage: number;
  currentIndex: number;
  onChange: (index: number) => void;
}

function IndexButton({
  num,
  selected,
  onClick,
}: {
  num: number;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`w-4 h-4 flex items-center justify-center text-sm rounded-md
      ${
        selected
          ? "bg-stone-300 text-white hover:bg-stone-500"
          : "bg-white text-stone-600 hover:bg-stone-200"
      }
      `}
      onClick={onClick}
      type="button"
    >
      {num}
    </button>
  );
}

export default function PageIndicator({
  totalPage,
  currentIndex,
  onChange,
}: PageIndicatorProps) {
  // TODO: totalPage가 클 경우를 고려하기 (일단은 어거지로 만들어놓음)
  return (
    <div className="w-full flex flex-row items-center justify-center gap-2">
      {Array.from({ length: totalPage }).map((_, index) => (
        <IndexButton
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          num={index + 1}
          selected={currentIndex === index}
          onClick={() => onChange(index)}
        />
      ))}
    </div>
  );
}
