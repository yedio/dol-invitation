"use client";
import { CommonImage } from "./image/CommonImage";
import { useState } from "react";
import { CopyButton } from "./buttons/CopyButton";
import { cls } from "@libs/client/Utility";

interface AccordionAccountLayoutProps {
  title: string;
  accountHolder: string;
  bankName: string;
  account: string;
  providedStyle?: string;
}

export const AccordionAccountLayout = ({
  title,
  accountHolder,
  bankName,
  account,
  providedStyle,
}: AccordionAccountLayoutProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full flex flex-col">
      <div
        className={cls(
          "relative  bg-[#F3EEEE] p-3 cursor-pointer",
          isOpen ? "rounded-t-[8px]" : "rounded-[8px]"
        )}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="text-center text-[#524548] text-14">{title}</div>
        <CommonImage
          src={"/img/icons/arrow_down.svg"}
          width={15}
          providedStyle={cls(
            "absolute top-4 right-4 transition-transform duration-300",
            isOpen ? "rotate-180" : "rotate-0"
          )}
        />
      </div>
      {isOpen && (
        <div className="w-full flex  items-start bg-[#fffcfc] rounded-b-[8px] p-3 justify-between">
          <div className="flex flex-col space-y-1 text-[#524548] text-15">
            <div>
              {bankName} | {account}
            </div>
            <div>{accountHolder}</div>
          </div>
          <div className="flex flex-col space-y-1 ">
            <CopyButton
              copyText={account}
              successMessage="계좌번호를 복사하였습니다."
            />
          </div>
        </div>
      )}
    </div>
  );
};
