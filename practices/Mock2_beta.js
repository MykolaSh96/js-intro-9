const doubleOrTripleWord = str => {
    if(str.length % 2  === 0){   
    return str + str + str
    }else if (str.length % 2 !== 0 ){
        return str + str;
    }else{
        return '';
    }
}

console.log(doubleOrTripleWord("Tech"));
console.log(doubleOrTripleWord("Apple"));
console.log(doubleOrTripleWord(" "));
console.log(doubleOrTripleWord(""));


const firstlastWord = (string) =>{
    
}


function count3OrLess(string){
   let count = 0;
   let string1 = string.split(' ');
   for(const str of string1)
   if(str.length <= 3){
    count++
   }
   return count
}
console.log(count3OrLess('fghj fgh tyui'))
console.log(count3OrLess(''))


function removeDuplicates(arr){
    const newAarr = [];

    for(let i = 0; i < arr.length; i++){
        if(!newAarr.includes(arr[i])){
            newAarr.push(arr[i])
        }
    }
    return newAarr
}

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60]));// -> [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3]));// -> [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1]));// -> [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]));// -> ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"]));// -> ["1", "2", "3"]


