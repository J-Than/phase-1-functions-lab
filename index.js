function distanceFromHqInBlocks(streetNumber){
    return Math.abs(streetNumber - 42)
}

function distanceFromHqInFeet(streetNumber){
    return distanceFromHqInBlocks(streetNumber) * 264
}

function distanceTravelledInFeet(block1,block2){
    return Math.abs(block1-block2) * 264
}

function calculatesFarePrice(block1,block2){
    const rideDistance = distanceTravelledInFeet(block1,block2);
    if (rideDistance <= 400){
        return 0;
    }
    if (rideDistance > 2500){
        return 'cannot travel that far';
    }
    if (rideDistance >= 2000){
        return 25;
    }
    return .02 * (rideDistance - 400);
}