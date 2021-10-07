const arr = [10,20,30,40,50,60];

function filter(arr){
let tmp = [];
for (let i = 0; i < arr.length; ++i ){
    if( arr[i] < 40){
    tmp.push(arr[i]);
}
}
console.log(tmp);
}
filter(arr);