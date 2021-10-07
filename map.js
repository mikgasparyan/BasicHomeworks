
const arr = [10,20,30,40,50]

function map(myArr){
let arrMap = [];
for(let i = 0; i < myArr.length; ++i){
   arrMap.push(myArr[i] + 5);
}
console.log(arrMap);
}
map(arr);