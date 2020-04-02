// Code your solution in this file!
function distanceFromHqInBlocks(integer) {
  let distance = 42 - integer;
  if (distance < 0) {
    distance = distance * -1;
  }
  return distance;
}

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet(start, end) {
  if (start > end) {
    return (start - end) * 264;
  } else {
    return (end - start) * 264;
  }
}

function calculatesFarePrice(start, end) {
  const distance = distanceTravelledInFeet(start, end);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
