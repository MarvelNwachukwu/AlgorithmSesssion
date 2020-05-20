  const FullDate = new Date();
  console.log(FullDate)

  const MonthList = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

  const DayList = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    
  ]

  setInterval(() => {
    const FullDate = new Date();
    const Second = FullDate.getSeconds();
    const MonthName = MonthList[FullDate.getMonth()];
    const TodayDate = FullDate.getDate();
    const Year = FullDate.getFullYear();
    const Hour = FullDate.getHours();
    const Minute = FullDate.getMinutes();
    const day = DayList[FullDate.getDay()];

    const DateText = `${day}, ${TodayDate} ${MonthName} ${Year}`;
    const currentTime =Hour +':' + Minute + ':' + Second;

    document.querySelector('h3').innerHTML = currentTime;
    document.querySelector('p').innerHTML = DateText;
  }, 1000);


  