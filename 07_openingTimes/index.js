// Library Opening Times
// https://www.codewars.com/kata/56898ff4c115980dd8000051

const SCHEDULE = {
  sunday: {
    open: "12:00",
    close: "16:30",
  },
  monday: {
    open: "08:00",
    close: "20:00",
  },
  tuesday: {
    open: "08:00",
    close: "20:00",
  },
  wednesday: {
    open: "08:00",
    close: "20:00",
  },
  thursday: {
    open: "08:00",
    close: "20:00",
  },
  friday: {
    open: "08:00",
    close: "20:00",
  },
  saturday: {
    open: "10:00",
    close: "18:00",
  },
};

const DAYS = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const formatTime = (time) => time.split(":").join("");

function openingTimes(str) {
  let [d, h, m] = str.toLowerCase().split(/ |:/);
  const time = h + m;
  
  if (!validateStr(d, h, m)) return "Invalid time!";

  if (time == 0 || time < formatTime(SCHEDULE[d].open)) {
    return `Library opens: today ${SCHEDULE[d].open}`;
  }

  if (
    time >= formatTime(SCHEDULE[d].open) &&
    time < formatTime(SCHEDULE[d].close)
  ) {
    return `Library closes at ${SCHEDULE[d].close}`;
  }

  if (time >= formatTime(SCHEDULE[d].close) || h === 24) {
    const nextDayIndex =
      DAYS.indexOf(d) === DAYS.length - 1 ? 0 : DAYS.indexOf(d) + 1;

    const weekDay =
      Object.keys(SCHEDULE)[nextDayIndex].charAt(0).toUpperCase() +
      Object.keys(SCHEDULE)[nextDayIndex].slice(1);

    return `Library opens: ${weekDay} ${
      SCHEDULE[weekDay.toLocaleLowerCase()].open
    }`;
  }
}

function validateStr(d, h, m) {
  if (!DAYS.includes(d) || h > 23 || (h == 24 && m > 0) || m > 59) return false;
  return true;
}


