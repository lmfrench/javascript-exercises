const repeatString = function(string, num) {
    let stringStore = '';
    if (num < 0){
        stringStore ="ERROR";
    } 
    for (let i = 0; i < num; i++){
        stringStore += string;
    }
    return stringStore;
};

repeatString('hey', 3);

// Do not edit below this line
module.exports = repeatString;
