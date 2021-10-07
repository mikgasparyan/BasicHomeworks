const arr = [10, 20, 0, 40, 50];
const arr1 = [50, 60, 70, 80];
function concate(arr, arr1) {
    const newArr = [];
    for (let i = 0; i < arr.length; ++i) {
        newArr.push(arr[i]);
    }
    for (let j = 0; j < arr1.length; ++j ){
        newArr.push(arr1[j]);
        
    }
    return newArr;
}
console.log(concate(arr, arr1));
