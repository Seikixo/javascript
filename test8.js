// array chuncking

function chunkArray(arr, size){
    const chunked = [];
    //loop through the array, slicing the chunks of specified size, and pushing them in new array
    for(let i = 0; i < arr.length; arr += size){
        chunked.push(arr.slice(i, i + size));
    }

    return chunked;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6,], 4));