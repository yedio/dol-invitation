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
      className={cls(
        "w-full px-4 py-15 flex flex-col items-center",
        providedStyle
      )}
    >
      {children}
    </div>
  );
}

interface FormWithTileProps extends PropsWithChildren {
  title: string;
  providedStyle?: string;
}
export function FormWithTile({
  title,
  providedStyle,
  children,
}: FormWithTileProps) {
  return (
    <div
      className={cls(
        "w-full flex flex-col items-center space-y-4",
        providedStyle
      )}
    >
      <div className="text-main-color text-16 font-weight-500">{title}</div>
      {children}
    </div>
  );
}
