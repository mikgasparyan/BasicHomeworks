let arr = [5, 10, 67, -1, 34];
let max = 0;
let index = 0;
for (let i = 1; i < arr.length; ++i){
    if(arr[i] > max){
        max = arr[i];
        index = i;
    }
}
console.log(index);