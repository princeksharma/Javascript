var MaxConsecutiveOnes = function(num) {
    var maxCount = 0;
    
    var count = 0;
    for (var i in num) {
        count = num[i] === 1 ? count + 1 : 0;
        if (count > maxCount) {
            maxCount = count;
        }
    }
    
    return maxCount;
};

console.log(MaxConsecutiveOnes([1,1,0,1,1,1,0,0,1,1,1,1]));