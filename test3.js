let numbers = [1, 2, 3];
let size = 3;
let j = 0;
let total = 0;

while (j < size) {
    let k = j;
    while (k < size) {
        total = total + numbers[k];
        k++;
    }
    j++;
}

console.log(total);
