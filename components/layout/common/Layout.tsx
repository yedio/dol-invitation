import { cls } from "@libs/client/Utility";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="relative h-full overflow-hidden max-w-[440px] mx-auto bg-white">
      {children}
    </div>
  );
}

interface WrapperProps extends PropsWithChildren {
  providedStyle?: string;
}
export function Wrapper({ providedStyle, children }: WrapperProps) {
  return (
    <div
      className={cls("w-full py-15 flex flex-col items-center", providedStyle)}
    >
      {children}
    </div>
  );
}

interface FormWithTitleProps extends PropsWithChildren {
  title?: string;
  providedStyle?: string;
}
export function FormWithTitle({
  title,
  providedStyle,
  children,
}: FormWithTitleProps) {
  return (
    <div
      className={cls(
        "w-full flex flex-col items-center space-y-6",
        providedStyle
      )}
    >
      {title && (
        <div className="text-main-color text-17 font-weight-600">{title}</div>
      )}
      {children}
    </div>
  );
}
