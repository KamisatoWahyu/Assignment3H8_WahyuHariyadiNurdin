// Wahyu Hariyadi Nurdin
// RCJ03S010

function arrSum(arr) {
    let max = 0; 
    let indeksAwal = 0
    let indeksAkhir = 0;

    for (let i = 0; i < arr.length; i++) {
        let total = 0;
        for (let j = i; j < arr.length; j++) {
            total += arr[j];
            if (total > max) {
                max = total;
                indeksAwal = i;
                indeksAkhir = j+1;
            }
        }
    }
    return [arr.slice(indeksAwal, indeksAkhir), max];
}

console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3])); // Output: [[4, -1, -2, 1, 5], 7]
