// Wahyu Hariyadi Nurdin
// RCJ03S010

function sumArray(arr, int){
    let output = [];
    
    for(let i = 0; i < arr.length-1; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] == int){
                output.push([arr[i], arr[j]]);
            }
        }
    }
    return output;
}

console.log(sumArray([2, 1, 4, 3], 5)); // output: [[2, 3], [1, 4]]
console.log(sumArray([1, 8, 10, 3], 11)); // output: [[1, 10], [8, 3]]