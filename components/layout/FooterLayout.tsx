import { LineBreaker } from "@libs/client/Utility";

export default function FooterLayout() {
  // const { image, text, parent, location } = info;

  return (
    <div className="py-8 w-full flex flex-col items-center bg-gray-100 space-y-5">
      <div className="flex flex-col items-center space-y-1">
        <div className="font-sans">카카오톡 공유하기</div>
        <div>링크주소 복사하기</div>
      </div>
      <div className="text-10 text-gray-500">
        Copyright 2025.{" "}
        <span className="text-grey-700 font-weight-700">FROM YEJU-GOMO.</span>{" "}
        All rights reserved.
      </div>
    </div>
  );
}

interface WayToComeFormProps {
  title: string;
  descriptions: string[];
}
export function WayToComeForm({ title, descriptions }: WayToComeFormProps) {
  return (
    <div className="w-full flex flex-col space-y-2">
      <div className="text-gray-500">{title}</div>
      <div className="flex flex-col space-y-2">
        {descriptions.map((desc, index) => (
          <div key={index} className="">
            {LineBreaker(desc)}
          </div>
        ))}
      </div>
    </div>
  );
}
