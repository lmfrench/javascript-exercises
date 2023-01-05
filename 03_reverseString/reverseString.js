const reverseString = function(string) {
    const stringArray = string.split("");
    let newString = "";
    let count = 0;
    while (count < string.length){
        newString = stringArray[count] + newString;
        count ++;
    }

    return newString;
}

// Do not edit below this line
module.exports = reverseString;
