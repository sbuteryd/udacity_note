function average(...nums) {
    if(nums.length === 0) return 0;
    let sum = 0;
    for(let num of nums){
        sum += num;
    }
    return sum / nums.length;
}

console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());