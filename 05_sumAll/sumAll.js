const sumAll = function(firstInt, secondInt) {
   
    if (Number.isInteger(firstInt) && Number.isInteger(secondInt)
        && (firstInt >= 0) && (secondInt >= 0)){
        
        const largeInt = Math.max(firstInt,secondInt);
        const smallInt = Math.min(firstInt,secondInt);
        let sum = 0;

        for (let i = smallInt; i<=largeInt; i++){
            sum += i; 
        }
        return sum;

    } else return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
