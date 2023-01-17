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
    }
};
