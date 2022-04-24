const sumAll = function(limit1, limit2) {
    
    if((typeof limit1 != 'number') || (typeof limit2 != 'number') ||
        (limit1 < 0) || limit2 < 0){
        return "ERROR";
    }

    let upperLimit = limit2;
    let lowerLimit = limit1;
    let sum = 0;

    if (limit2 < limit1){
        upperLimit = limit1;
        lowerLimit = limit2;

        console.log(`${lowerLimit} ${upperLimit}`);
    }

    for(let i = lowerLimit; i <= upperLimit; i++){
        sum += i;
    }

    return sum;

};

console.log(sumAll(123,1));
// Do not edit below this line
module.exports = sumAll;
