const removeFromArray = function(array, ...removeArray) {
    for (let element of removeArray){
        let countArray = 0;
        while (countArray < array.length){
            if (array[countArray] === element){
                array.splice(countArray, 1);
                countArray++;
            } else countArray++
        }
    }
    return array;
}

// Do not edit below this line
module.exports = removeFromArray;