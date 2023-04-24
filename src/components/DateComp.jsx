import { useEffect, useState } from "react";

export default function DateComp() {
  let [date, setDate] = useState(new Date());
  // useEffect(() => {
  //   let timer = setInterval(() => setDate(new Date()), 1000);

  //   return function cleanup() {
  //     clearInterval(timer);
  //   };
  // });
  const monthNames = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const dayNames = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];
  console.log(date);
  return (
    <div className="Date">
      <div className="today-date">
        <div className="digit-container">{date.getDate()}</div>
        <div className="month-year-container">
          <div className="month">{monthNames[date.getMonth() - 1]}</div>
          <div className="year">{date.getFullYear()}</div>
        </div>
      </div>
      <div className="day">{dayNames[date.getDay() - 1]}</div>
    </div>
  );
}
