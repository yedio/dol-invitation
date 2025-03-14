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
    <div className="w-full py-2 bg-main-color overflow-hidden whitespace-nowrap">
      <div
        className="inline-block"
        style={{
          animation: "marquee 30s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <span
              key={index}
              className="text-white text-15 font-serif mx-5 font-weight-500"
            >
              🎉 yeonz's 1st birthday 🎉
            </span>
          ))}
      </div>
    </div>
  );
};
