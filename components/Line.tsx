import { cls } from "@libs/client/Utility";

interface LineProps {
  type?: "short";
  providedStyle?: string; //tw
  providedLineStyle?: string; //tw
}
const Line = ({ type, providedStyle, providedLineStyle }: LineProps) => {
  return (
    <div className={cls(type === "short" ? "w-3" : "w-full", providedStyle)}>
      <div
        className={cls("w-full h-0.25 bg-main-color", providedLineStyle)}
      ></div>
    </div>
  );
};

export default Line;
