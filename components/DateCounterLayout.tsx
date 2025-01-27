"use client";

import { useEffect, useState } from "react";
import { cls } from "@libs/client/Utility";

interface DateCounterLayoutProps {
  date: string; // 카운트다운 목표 날짜
  name: string; // 대상 이름
  providedStyle?: string;
}

export const DateCounterLayout = ({
  date,
  name,
  providedStyle,
}: DateCounterLayoutProps) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(date.replace(".", "-").replace(".", "-"));

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeRemaining({ days, hours, minutes, seconds });
    };

    updateCountdown(); // 초기 계산
    const interval = setInterval(updateCountdown, 1000); // 1초마다 업데이트

    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, [date]);

  return (
    <div className={cls("flex flex-col items-center space-y-5", providedStyle)}>
      <div className="flex space-x-2 items-center">
        <DateCounterItem type={"DAYS"} time={timeRemaining.days} />
        <div className="text-[#726265]">:</div>
        <DateCounterItem type={"HOUR"} time={timeRemaining.hours} />
        <div className="text-[#726265]">:</div>
        <DateCounterItem type={"MIN"} time={timeRemaining.minutes} />
        <div className="text-[#726265]">:</div>
        <DateCounterItem type={"SEC"} time={timeRemaining.seconds} />
      </div>
      <div className="text-15s">
        {name}의 생일이{" "}
        <span className="text-main-color">{timeRemaining.days}일</span>{" "}
        남았습니다.
      </div>
    </div>
  );
};

interface DateCounterItemProps {
  type: "DAYS" | "HOUR" | "MIN" | "SEC";
  time: number;
}

const DateCounterItem = ({ type, time }: DateCounterItemProps) => {
  return (
    <div className="rounded-[8px] bg-[#f8efef] flex flex-col items-center p-1.5 w-11">
      <div className="text-20 font-weight-700 text-[#726265]">{time}</div>
      <div className="text-10 text-[#726265]">{type}</div>
    </div>
  );
};
