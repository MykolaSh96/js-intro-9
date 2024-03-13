//task 1
function firstPos(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            return arr[i]
        }
    }
}
console.log(firstPos([0, 3, -9, 5, 8]))



//task 2
function lastNeg(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 0)
            return arr[i]
    }
}
console.log(lastNeg([-2, 0, -7, 10, -5]))



//task 3
function firstLongest(arr) {
    let longest = arr[0]
    for (let i = 0; i < arr.length; i++)
        if (arr[i].length > longest.length)
            longest = arr[i]
    return longest
}
console.log(firstLongest(["red", "blue", "yellow", "white"]))



//task 4
function lastShortest(arr) {
    let shortest = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        if (arr[i].length <= shortest.length) {
            shortest = arr[i];
        }
    }
    return shortest;
}
console.log(lastShortest(["red", "blue", "yellow", "white"]));
console.log(lastShortest(["Apple", "Banana", "Mango"]));
console.log(lastShortest(["white", "yellow", "brown"]));



//task 5
function max(arr) {
    let max1 = arr[0]
    for (let i = 0; i < arr.length; i++)
        if (arr[i] > max1)
            max1 = arr[i]
            return max1
}
console.log(max([0, 3, -9,  5, 8]))




//task 6
function min(arr){
let min = arr[0]
for (let i = 0; i < arr.length; i++)
    if (arr[i] < min)
        min = arr[i]
        return min
}
console.log(min([0, 3,  5, 8]))
console.log(min([-2, 0, -7, 10, -5]))




//task 7
function commonElements(arr1, arr2) {
    let common = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i])) {
        common.push(arr1[i]);
      }
    }
    return common;
  }
  console.log(commonElements([10, 20, 30, 50, 70], [20, 50, 70]));
  console.log(commonElements([30, 50, 70], [20, 100, 300, 70, 50]));
  console.log(commonElements(["30", "abc", "hi"], [30, "Hi", "abc"]));









