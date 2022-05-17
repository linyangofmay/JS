// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
   let result = [];
  // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if (arr.length <= 1){
      return arr;
    }

  // Divide the array in half
  let middleindex = Math.floor(arr.length /2);

  // Recursively sort the left half
  let leftarr = arr.slice(0, middleindex);
  let leftsorted = mergeSort(leftarr);

  // Recursively sort the right half
  let rightarr = arr.slice(middleindex);

  let rightsorted = mergeSort(rightarr)
  // Merge the halves together and return
   return merge(leftsorted, rightsorted);
}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  let result = [];
  // Create an empty return array

  // Point to the first value of each array
  while (arrA.length || arrB.length){
    let ele1 = arrA.length ? arrA[0] : Infinity;
    let ele2 = arrB.length? arrB[0] :Infinity;
    let next ;
    if(ele1 < ele2){
      next = arrA.shift();
    } else {
      next = arrB.shift();
    }
    result.push(next);
  }
  // While there are still values in each array...
    // Compare the first values of each array
    // Add the smaller value to the return array
    // Move the pointer to the next value in that array

  // Return the return array
  return result;

}

module.exports = [merge, mergeSort];
