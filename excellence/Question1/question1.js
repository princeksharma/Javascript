var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArray = [];
 
for (var i = 0; i < array.length; ++i) { 
    if ((array[i] % 2) === 0) {
        newArray.push(array[i]);
    }
}

console.log(newArray);