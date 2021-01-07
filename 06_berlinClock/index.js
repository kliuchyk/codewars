const LIGHT_OFF = "O";
const RED_LIGHT = "R";
const YELLOW_LIGHT = "Y";

const getLightOffSells = (times = 1) => LIGHT_OFF.repeat(times);
const getRedLights = (times = 1) => RED_LIGHT.repeat(times);
const getYellowLights = (times = 1) => YELLOW_LIGHT.repeat(times);

function berlinClock(time) {
  let seconds = "";
  let minutes = "";
  let hours = "";

  time.split(":").forEach((time, idx, arr) => {
    if (idx === 0) {
      hours = getHours(time);
    }

    if (idx === 1) {
      minutes = getMinutes(time);
    }

    if (idx === 2) {
      seconds =
        time % 2 === 0 ? `${getYellowLights()}` : `${getLightOffSells()}`;
    }
  });
  
  return seconds + hours + minutes;
}

function getHours(hours) {
  if (hours === "00") {
    return `\n${getLightOffSells(4)}\n${getLightOffSells(4)}`;
  }

  if (hours > 4) {
    const fullFiveHours = hours / 5;
    const lessThanFive = hours % 5;

    const firstRow = `\n${getRedLights(fullFiveHours)}${getLightOffSells(
      4 - Math.floor(fullFiveHours)
    )}`;
    const secondRow = `\n${getRedLights(lessThanFive)}${getLightOffSells(
      4 - lessThanFive
    )}`;

    return firstRow + secondRow;
  }

  return `\n${getRedLights(hours)}${getLightOffSells(4 - Math.floor(hours))}`;
}

function getMinutes(minutes) {
  if (minutes === "00") {
    return `\n${getLightOffSells(11)}\n${getLightOffSells(4)}`;
  }

  if (minutes <= 4) {
    return `\n${getLightOffSells(11)}\n${getYellowLights(
      minutes
    )}${getLightOffSells(4 - minutes)}`;
  }

  const firstRowCount = Math.floor(minutes / 5);
  const firstRowLights = Array.from(Array(firstRowCount).keys()).map(
    (el, idx) => {
      if ((idx + 1) % 3 === 0) {
        return getRedLights();
      }
      return getYellowLights();
    }
  );

  const firstRow = `\n${firstRowLights.join("")}${getLightOffSells(
    11 - firstRowCount
  )}`;

  const secondRowCount = minutes - firstRowCount * 5;
  const secondRow = `\n${getYellowLights(secondRowCount)}${getLightOffSells(
    4 - secondRowCount
  )}`;

  return firstRow + secondRow;
}
