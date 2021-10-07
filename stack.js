var arr = [];
function stack (myArr, action, elem){
    if(action == 'set'){
myArr.push(elem);
return myArr;
    }
    if(action == 'get'){
        myArr.pop();
        return myArr;
    }
}
console.log(stack(arr, 'set', 15))
console.log(stack(arr, 'set', 120))
console.log(stack(arr, 'set', 58))
console.log(stack(arr, 'get'))
console.log(stack(arr, 'get'))
console.log(stack(arr, 'get'))