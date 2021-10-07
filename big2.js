let arr = [5, 10, 67, 34, -1,];
let first = 0;
let second = 0;
let index = 0;
for(let i = 0; i < arr.length; ++i){
if(arr[i] > first){
    first = arr[i]
}if(arr[i] > second && arr[i] < first){
    second = arr[i];
    index = i;
}
}
console.log(index)