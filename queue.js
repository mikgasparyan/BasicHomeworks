let arr = [];
function queue(arr, action, elem){
if(action == 'set'){
    arr.push(elem);
    console.log(arr);
}
if(action == 'get'){
    console.log(arr[0]);
    arr.shift();
}
}
queue(arr, 'set', 5)
queue(arr, 'set', 10)
queue(arr, 'set', 15)
queue(arr, 'get')
queue(arr, 'get')
queue(arr, 'get')