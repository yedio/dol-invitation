import { cls } from "@libs/client/Utility";

interface MarqueeContainerProps {
  text: string;
  providedStyle?: string;
}

export const MarqueeContainer = ({
  text,
  providedStyle,
}: MarqueeContainerProps) => {
  return (
    <div
      className={cls(
        "w-full py-2 bg-main-color overflow-hidden whitespace-nowrap",
        providedStyle
      )}
    >
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
              {text}
            </span>
          ))}
      </div>
    </div>
  );
};
