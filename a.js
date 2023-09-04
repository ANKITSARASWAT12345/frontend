let arr=[1,2,3,4];
let arr2=[...arr];
arr2.push(345);
console.log(arr);
console.log(arr2);
let arr3=[...arr,...arr2];
console.log(arr3)
