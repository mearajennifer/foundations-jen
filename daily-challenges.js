///// W1D3: Max of Two
// let x = 2;
// let y = 2;

// if (x > y) {
//     console.log(x);
// } else if (y > x) {
//     console.log(y);
// } else {
//     console.log("The values are identical");
// }

///// W1D4: Fizz Buzz
// for (i = 1; i < 51; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log("fizzbuzz");
//     } else if (i % 5 === 0) {
//         console.log("buzz");
//     } else if (i % 3 === 0) {
//         console.log("fizz");
//     } else {
//         console.log(i);
//     }
// }

///// W2D6: Find the Range
// let nums = [1, 4, 11, 2, 37, -4];
// let small = nums[0];
// let large = nums[0];

// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] < small) {
//         small = nums[i];
//     } else if (nums[i] > large) {
//         large = nums[i];
//     }
// }
// console.log(small, large);

///// W2D7: Add to Zero
// const addToZero = (nums) => {
//     let doesAddToZero = false;
//     for (let i = 0; i < nums.length-1; i++) {
//         for (let j = i+1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === 0) {
//                 doesAddToZero = true;
//             }
//         }
//     }
//     return doesAddToZero;
// }
// console.log(addToZero([0, 1, 2, 3, 4, 5]));

///// W2D8: Find Lucky Number
// const findLuckyNums = (n) => {
//     let luckyNums = [];
//     let possibleNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//     for (let i = 0; i < n; i++) {
//         let index = Math.floor(Math.random() * possibleNums.length);
//         luckyNums.push(possibleNums[index]);
//         possibleNums.splice(index, 1);
//     }
//     return luckyNums;
// }
// console.log(findLuckyNums(5));
