//reverse string

function reverseString(str){
    //split() converts string into array of char
    //reverse() reverses order of element in the array
    //join() converts back the string
    return str.split('').reverse().join('');
}

console.log(reverseString("hello"));