function distanceFromHqInBlocks(val){
    return Math.abs(42 - val)
}

function distanceFromHqInFeet(val){
    return distanceFromHqInBlocks(val) * 264
}

function distanceTravelledInFeet(start, end){
    return (Math.abs(end - start)) * 264
}

function calculatesFarePrice(start, end){
    const amt = distanceTravelledInFeet(start, end)
    let fare
    if (amt < 400) fare = 0
    else if (amt >= 400 && amt <=2000) fare = (amt-400) * 2 / 100
    else if (amt > 2000 && amt < 2500) fare = 25
    else {fare = 'cannot travel that far'} 
    return fare
}