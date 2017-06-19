 /*
 * Insertion sort algorithm !
 * Class	Sorting algorithm
 * Data structure	Array
 * Worst-case performance	О(n2) comparisons, swaps
 * Best-case performance	O(n) comparisons, O(1) swaps
 * Average performance	О(n2) comparisons, swaps
 * Worst-case space complexity
 */

exports.insertionSort = function(inputArray) {
  if(!inputArray) return -1;
  if(inputArray.length === undefined) return -1;

  return exports.is(inputArray);
}

exports.is = function(arr) {

        var n = arr.length;
        for (i=1; i<n; ++i)
        {
            var key = arr[i];
            var j = i-1;
 
            // Move elements of arr[0..i-1], that are
            //   greater than key, to one position ahead
            //   of their current position 
            while (j>=0 && arr[j] > key)
            {
                arr[j+1] = arr[j];
                j = j-1;
            }
            arr[j+1] = key;
        }

      return arr;
   };
