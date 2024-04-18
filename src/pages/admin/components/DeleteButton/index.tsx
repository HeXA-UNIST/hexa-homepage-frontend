import { useEffect, useState } from "react";

export default function DeleteButton({
  prefix = "",
  disabled = false,
  onClick,
}: {
  prefix?: string;
  disabled?: boolean;
  onClick: () => void;
}) {
  const [isConfirming, setIsConfirming] = useState(false);

  const [confirmCountDown, setConfirmCountDown] = useState(3);

  useEffect(() => {
    if (isConfirming) {
      const interval = setInterval(() => {
        setConfirmCountDown((prev) => {
          if (prev === 0) {
            clearInterval(interval);
            setIsConfirming(false);
            return 3;
          }
          return prev - 1;
        });
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }

    setConfirmCountDown(3);
    return () => {};
  }, [isConfirming]);

  const handleOnClick = () => {
    if (isConfirming) {
      onClick();
      setIsConfirming(false);
      return;
    }

    setIsConfirming(true);
  };

  return (
    <button
      className="rounded-md text-sm flex flex-row justify-between items-center gap-1 px-4 py-3 bg-rose-700 text-white hover:bg-white hover:text-black
        disabled:opacity-50
        "
      type="button"
      disabled={disabled}
      onClick={!disabled ? handleOnClick : undefined}
    >
      {!isConfirming
        ? `${prefix} 삭제`
        : `정말 삭제하시겠습니까? (${confirmCountDown}초 뒤 취소)`}
    </button>
  );
}

DeleteButton.defaultProps = {
  prefix: "",
  disabled: false,
};
