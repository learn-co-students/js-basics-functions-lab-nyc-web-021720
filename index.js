// Code your solution in this file!

let distance;
let fare;

function distanceFromHqInBlocks(block) {
   if (block >= 42) {
     distance = block - 42;
   }
   else if (block < 42) {
       distance = 42 - block;
   }
   console.log(distance);
   return distance;
}

function distanceFromHqInFeet(block) {
    distance = distanceFromHqInBlocks(block) * 264;
    return distance; 
}

function distanceTravelledInFeet(startingblock, endingblock){
    if (startingblock >= endingblock){
        distance = (startingblock - endingblock) * 264;
    }
    else if (startingblock < endingblock){
        distance = (endingblock - startingblock) * 264;
    }
    return distance
}

function calculatesFarePrice(startingblock, endingblock){
    distance = distanceTravelledInFeet(startingblock, endingblock);
    if (distance <= 400) {
        return fare = 0;
    }
    else if (distance > 400 && distance <= 2000){
        return fare = ((distance - 400) * .02);
    }
    else if (distance > 2000 && distance <= 2500){
        return fare = 25;
    }
    else if (distance > 2500) {
        return "cannot travel that far"
    }
}
