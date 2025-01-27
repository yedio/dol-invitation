"use client";
import { cls } from "@libs/client/Utility";
import { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface CalendarCaptureProps {
  date: string;
  providedStyle?: string;
}

export const CalendarCapture = ({
  date,
  providedStyle,
}: CalendarCaptureProps) => {
  const [selectedDate, setSelectedDate] = useState<Date>();

  useEffect(() => {
    if (date) {
      // 입력받은 date 문자열을 Date 객체로 변환
      const parsedDate = new Date(date.replace(/\./g, "-"));

      setSelectedDate(parsedDate);
    }
  }, [date]);

  return (
    <div className={cls("w-[280px]", providedStyle)}>
      <Calendar
        value={selectedDate}
        showNavigation={false}
        calendarType="gregory" // 일요일이 맨 앞에 오도록 설정
        formatDay={(locale, date) => date.getDate().toString()} // 날짜 뒤 "일" 제거
        tileDisabled={({ date, view }) => {
          // 해당 달 이외의 날짜 숨기기
          if (view === "month" && selectedDate) {
            return date.getMonth() !== selectedDate.getMonth();
          }
          return false;
        }}
        tileClassName={({ date }) => {
          // 일요일만 특별 스타일 적용
          const isSunday = date.getDay() === 0;
          if (isSunday) {
            return "holiday";
          }
          return "";
        }}
      />
    </div>
  );
};
