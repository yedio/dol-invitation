import { JSX } from "react";

export function cls(...classnames: (string | undefined)[]) {
  return classnames.filter((name) => !!name).join(" ");
}

export const LineBreaker = (
  text?: string,
  keyword?: string
): JSX.Element[] | string => {
  if (!text) return "";

  return text.split("\n").map((line, index) => (
    <span key={index}>
      {index > 0 && <br />}
      {keyword ? HighlightKeyword(line, keyword) : line}
    </span>
  ));
};

export const HighlightKeyword = (text?: string, keyword?: string) => {
  if (!text) {
    text = "";
  }

  if (!keyword || keyword.trim() === "") {
    return text;
  }

  const regex = new RegExp(`(${keyword})`, "gi");
  const parts = text.split(regex);

  return (
    <span className="text-15">
      {parts.map((part, index) =>
        regex.test(part) ? (
          <span key={index} className="text-kgreen-50 font-weight-500">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};
