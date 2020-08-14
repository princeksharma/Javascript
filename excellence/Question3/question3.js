function repeatedNumber(array) {
    const object = {};
    const result = [];

    array.forEach(item => {
      if(!object[item])
          object[item] = 0;
        object[item] += 1;
    })

    for (const prop in object) {
       if(object[prop] >= 2) {
           result.push(prop);
       }
    }

    return result;

}

console.log(repeatedNumber([0,1,2,3,4,5,6,7,7,8,9,10 ]));