const returnFirstTwoDrivers = function(arr){
  return [...arr].slice(0, 2);
}
const returnLastTwoDrivers = function(arr){
  return [...arr].slice(2);
}
const selectingDrivers = [];
selectingDrivers.unshift(returnFirstTwoDrivers);
selectingDrivers.push(returnLastTwoDrivers);

const createFareMultiplier = num => {
    return function(fare){
        return fare * num;
    }
}
const fareDoubler = fare => fare * 2;
const fareTripler = fare => fare * 3;
const selectDifferentDrivers = (arr, func) => {
    return func(arr);
}