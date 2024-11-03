function firstNonRep(str){
    //Create a object to store the count of each char
    const charCount = {};

    //loop through the string, updating the character count in obj
    for(let char of str){
        charCount[char] = (charCount[char] || 0) + 1;
    }

    //Loop through the string again, checking if any character’s count is 1.
    for(let char in charCount){
        if(charCount[char] === 1) 
        return char;
    }
}

console.log(firstNonRep("calling"));