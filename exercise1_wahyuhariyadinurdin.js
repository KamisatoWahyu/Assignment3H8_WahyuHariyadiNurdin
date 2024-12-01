// Wahyu Hariyadi Nurdin
// RCJ03S010

function isArithmeticProgression(numbers){
    let a = numbers[1] - numbers[0];
    let cek = true;

    for(let i = 0; i < numbers.length-1; i++){
        if(numbers[i+1] - numbers[i] !== a){
            cek = false;
        }
    }
    return cek;
}

console.log(isArithmeticProgression([1, 2, 3, 4, 5]));  // true
console.log(isArithmeticProgression([2, 4, 6, 8, 10]));  // true
console.log(isArithmeticProgression([1, 3, 4, 5, 8]));  // false
console.log(isArithmeticProgression([1, 2, 7, 9, 12]));  // false
console.log(isArithmeticProgression([1, 4, 8, 16, 20]));  // false
