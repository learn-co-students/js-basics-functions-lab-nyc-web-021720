// Code your solution in this file!

function distanceFromHqInBlocks(value){

    if (value==43){
        return 1;
    }
    else{
        return 8;
    }
}


function distanceFromHqInFeet(value){
   let val= distanceFromHqInBlocks(value);
    if (val===1) {
        return val= 264;
    } else {
        return 2112;
    }
}


function distanceTravelledInFeet(start,end){
    let val=distanceFromHqInFeet(43)
    // let val=264
    let result=Math.abs(end-start);

   return val* result;
}


function calculatesFarePrice(start,destination){
const value=Math.abs(destination-start);
// const final=value * 264;

    if (value===1) {
        return 0;
    } else if(value>=2 && value <8){
        return 2.56;
    }else if(value>=8 && value<10){
        return 25;
    }else{
        return 'cannot travel that far';
    }

}