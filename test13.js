//Array Methods

//concat(array1, array2)
let arr1 = [1, 2];
let arr2 = ["3", "4"];
console.log(arr1.concat(arr2));

//filter(callback)
let arr3 = [1, 2, 3, 4];
console.log(arr3.filter(filter => filter > 2));

//find(callback)
let arr4 = [1, 2, 3, 4];
console.log(arr4.find(num => num < 3));

//map(callback)
let arr5 = [1, 2, 3, 4];
console.log(arr5.map(num => num * 2));

//push(element)
let arr6 = [1, 2, 3, 4];
arr6.push(6);
console.log(arr6);

//pop()
let arr7 = [1, 2, 3, 4];
arr7.pop();
console.log(arr7);