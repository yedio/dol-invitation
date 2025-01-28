import { CommonImage } from "@components/image/CommonImage";
import { CopyToClipBoard } from "@libs/client/Utility";

interface CopyButtonProps {
  copyText: string;
  successMessage?: string;
}

export const CopyButton = ({
  copyText,
  successMessage = "복사하였습니다.",
}: CopyButtonProps) => {
  return (
    <button
      className="flex space-x-1 rounded-[4px] border bg-white text-[#333] text-12 px-2 py-1 items-center cursor-pointer"
      onClick={() => {
        CopyToClipBoard(copyText.replaceAll("-", ""), successMessage);
      }}
    >
      <CommonImage src="/img/icons/copy.svg" width={12} />
      <span>복사</span>
    </button>
  );
};
