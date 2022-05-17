function quicksort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
   if (arr.length <= 1){
     return arr;
   }
  // Pick the first value as the pivot
  let pivot = arr.shift();
  let left = array.filter((el) => el < pivot );
  let right = array.filter((el) => el > pivot);
  // Orient the pivot so that...
      // every number smaller than the pivot is to the left
      // every number larger (or equal) than the pivot is to the right

  // Recursively sort the left
  let leftSorted = quicksort(left);
  let rightSorted = quicksort(right)
  // Recursively sort the right

  // Return the left, pivot and right in sorted order
  return [...leftSorted, pivot, ...rightSorted];

}


module.exports = [quicksort];
