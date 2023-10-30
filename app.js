function hasOddNumber(arr){
    return arr.some(function(val){
        return (val % 2) === 1;
    });
}
function hasZero(num){
    return num.toString().split('').some(function(val){
        return val === 0;
    });
}
function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
        return val % 2 === 1;
    });
}
function hasNoDuplicates(arr){
    return arr.every(function(val){
        return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}
function hasCertainKey(objArr, key){
    return objArr.every(function(obj){
        return obj[key] !== undefined;
    })
}
function hasCertainValue(objArr, key, value){
    return objArr.every(function(obj){
        return obj[key] === value;
    })
}