function maxCharacter(str){

    //Create a object to store the count of each char
    const charMap = {};
    let maxChar = '';
    let maxCount = 0;

    //loop through the string, updating the character count in obj
    for(let char of str){
        //"for...of" iterates over values
        charMap[char] = (charMap[char] || 0) + 1;
    }

    //loop through the obj to find the char with highest count
    for(let char in charMap){
        //"for...in" iterates over keys
        if(charMap[char] > maxCount){
            maxCount = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(maxCharacter('stress'));