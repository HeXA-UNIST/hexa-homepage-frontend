import { MdKeyboardArrowLeft } from "react-icons/md";

export default function BackButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      className="w-10 h-10 flex items-center justify-center text-white rounded-full hover:bg-gray-800"
      onClick={onClick}
      type="button"
      aria-label="뒤로가기 버튼"
    >
      <MdKeyboardArrowLeft className="text-lg" />
    </button>
  );
}
