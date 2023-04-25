
export default function DateComp() {
  let date = new Date()
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
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    
  ];
  // console.log(date);
  return (
    <div className="Date">
      <div className="today-date">
        <div className="digit-container">{date.getDate()}</div>
        <div className="month-year-container">
          <div className="month">{monthNames[date.getMonth()]}</div>
          <div className="year">{date.getFullYear()}</div>
        </div>
      </div>
      <div className="day">{dayNames[date.getDay()]}</div>
    </div>
  );
}
