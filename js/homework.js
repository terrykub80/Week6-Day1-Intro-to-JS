console.log("hello from the homework.js file!");

//==================Exercise #1 ==========//
/*
    Given the array [1, 2, 3, 5, 6, 7],  finds the index of the first non-consecutive element in the array.
    It should log out 3 because the array at index 3 is 5 which is not consecutive.
*/


let exerciseOneArr = [1, 2, 3, 5, 6, 7]

for (let x in exerciseOneArr){
    if (x != exerciseOneArr[x]-1){
        console.log(x)
        break;
    }
};

//============Exercise #2 ============//
/*
Given the two array of numbers below, loop through them both individually and the sum all of the positives elements.

Example 1:
Input: [10, 12, -9, 3, -1, 0, 15] 
Output: 40
Explain: 10 + 12 + 3 + 15 = 40

Example 2:
Input: [3, 5, 7, 9, -10, 2, -22, -1] 
Output: 26

Note: if there is nothing to sum, the sum is default to 0.
*/

let numbers1 = [10, 12, -9, 3, -1, 0, 15] 
let sum = 0
console.log(numbers1)
for (num in numbers1){
    if (num >= 0){
        console.log(num + sum)
    }    
};


let numbers2 = [3, 5, 7, 9, -10, 2, -22, -1] 



