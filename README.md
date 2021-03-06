[![Build Status](https://secure.travis-ci.org/soldair/node-binarysearch.png)](https://github.com/pooyahatami/Algorithm-Sort-Insertion/)
# Algorithm-Sort-Insertion

## About Insertion Sort 
The insertion sort algorithm is the sort unknowingly used by most card players when sorting the cards in their hands. When holding a hand of cards, players will often scan their cards from left to right, looking for the first card that is out of place. For example, if the first three cards of a player's hand are 4, 5, 2, he will often be satisfied that the 4 and the 5 are in order relative to each other, but, upon getting to the 2, desires to place it before the 4 and the 5. In that case, the player typically removes the 2 from the list, shifts the 4 and the 5 one spot to the right, and then places the 2 into the first slot on the left. This is insertion sort. Unlike other simple sorts like selection sort and bubble sort which rely primarily on comparing and swapping, the insertion sort achieves a sorted data set by identifying an element that out of order relative to the elements around it, removing it from the list, shifting elements up one place and then placing the removed element in its correct location. Follow the step by step process of sorting the following small list.

```javascript
 * Insertion sort algorithm !
 * Class	Sorting algorithm
 * Data structure	Array
 * Category : Comparison sorts.
 * Worst-case performance	О(n2) comparisons, swaps
 * Best-case performance	O(n) comparisons, O(1) swaps
 * Average performance	О(n2) comparisons, swaps
 * Worst-case space complexity
 *   where n is the size of the input array.
 *   Note: Insertion sort is very similar to selection sort.
 *
 * Author: Pooya Hatami
 ```

## Installation

If you are using a browser, you can download **node-sort-insertion.js** from GitHub or just bellow hotlink to it:

```js
<script src="https://raw.githubusercontent.com/pooyahatami/Algorithm-Sort-Insertion/master/node-sort-insertion.js"></script>
```

If you are using node, you can install **node-sort-insertion** with npm.

```
npm install node-sort-insertion
```

## Usage :
```js
var nodesort = require('./node-sort-insertion');
var displaymode = "No"; //"Yes";  // "Yes" for more details of algorithm progress 
...
nodesort(inputArray, displaymode, function(err,sortRef) {
        if (err) {
            // TODO error handeling 
            }
	      else {
           var result = sortRef.insertionSort(inputArray);
           // TODO output 
	            }
    });
```

## Ruls :
 * Sort Array of integers / float .
 * Array's element could be negative and positive .
 * Returns error mesage if not found valid input.
 * Turn On details of Algorithms progress useing : displaymode = "Yes"  
 ```js
 var displaymode = "No"; //"Yes";
 ```

## Example
```js
var nodesort = require('./node-sort-insertion');
var displaymode = "No"; //"Yes";  // "Yes" for more details of algorithm progress 

var arrin00 = [20, 8 , -11, 12, 22 , 9 , 10 ];
var arrin01 = [20, 8 , 48, 120, 220 , 390 , 1000 ];
var arrin02 = [20, 8 , 480 , 120, 220 , 390 , 1000 ];
var arrin03 = [1120, 800 , 480 , 120, 20 , 390 , 1000 ];
var arrin04 = ['g', 'e', 'e', 'k', 's', 'f', 'o',
                      'r', 'g', 'e', 'e', 'k', 's'];
var arrin05 = [1, 3, 7, 25, 12, 9, 8,
                      121, 221, 10, 18, 29, 49];
var arrin06 = [1, 3, -7, 25, 12, 9, 8,
                      121, 221, -10, 18, 29, 49];
var arrin07 = [1, 3, 7000000000000000000, 25, 12, 9, 8,
                      121, 221, 100000000000000000000000000 , 18, 290000000000000000000, 49];
var arrin08 = [1, 3, 75432, 25, 12, 9, 8,
                      121, 221, 976562 , 18, 299999, 49];
var arrin09 = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434 , 0.611 , 0.621 ];
var arrin10 = [1,342, 14,293 , 0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434 , 0.611 , 0.621 ];
var arrin11 = [5, 8 , 11, 12, 2 , 9 , 10 , 4 , 11, 10, 12, 7, 9 ];
var arrin12 = "";

function solveSorting(inputArray) {
    var arr_original = inputArray.toString() ;
    var sortedArray = inputArray;

    nodesort(inputArray, displaymode,  function(err,sortRef) {
        if (err) {
	         console.log(err);
	                }
	      else {
           var result = sortRef.insertionSort(inputArray);
	         console.log("Success attempt to sort array \r\n \t ["+arr_original+" ] \r\n and result is : \r\n \t [ "
                + result + " ]" );
  
	      sortedArray = result;
	            }
	      console.log("----------------------------------------------------------"); 
    });
    
    return sortedArray;
};

solveSorting(arrin09);
solveSorting(arrin00);
solveSorting(arrin10);
solveSorting(arrin11);
solveSorting(arrin12);
```

![Insertion Sort](https://raw.githubusercontent.com/pooyahatami/Algorithm-Sort-Insertion/master/img/Insertion_sort.gif)

**The Insertion Sort Algorithm**
// Sort an arr[] of size n
insertionSort(arr, n)
Loop from i = 1 to n-1.

……a) Pick element arr[i] and insert it into sorted sequence arr[0…i-1]

![Insertion Sort](https://raw.githubusercontent.com/pooyahatami/Algorithm-Sort-Insertion/master/img/insertion-sort.png)

Let us understand it with the help of an example.

```javascript
12, 11, 13, 5, 6

Let us loop for i = 1 (second element of the array) to 5 (Size of input array)

i = 1. Since 11 is smaller than 12, move 12 and insert 11 before 12
11, 12, 13, 5, 6

i = 2. 13 will remain at its position as all elements in A[0..I-1] are smaller than 13
11, 12, 13, 5, 6

i = 3. 5 will move to the beginning and all other elements from 11 to 13 will move one position ahead of their current position.
5, 11, 12, 13, 6

i = 4. 6 will move to position after 5, and elements from 11 to 13 will move one position ahead of their current position.
5, 6, 11, 12, 13
```

![insertion Sort](https://raw.githubusercontent.com/pooyahatami/Algorithm-Sort-Insertion/master/img/Insertion-sort-example-300px.gif)

**Time Complexity:** O(n*n)

**Auxiliary Space:** O(1)

**Boundary Cases:** Insertion sort takes maximum time to sort if elements are sorted in reverse order. And it takes minimum time (Order of n) when elements are already sorted.

**Algorithmic Paradigm:** Incremental Approach

**Sorting In Place:** Yes

**Stable:** Yes

**Online:** Yes

**Uses:** Insertion sort is used when number of elements is small. It can also be useful when input array is almost sorted, only few elements are misplaced in complete big array.

**What is Binary Insertion Sort?**

We can use binary search to reduce the number of comparisons in normal insertion sort. Binary Insertion Sort find use binary search to find the proper location to insert the selected item at each iteration. In normal insertion, sort it takes O(i) (at ith iteration) in worst case. we can reduce it to O(logi) by using binary search. The algorithm as a whole still has a running worst case running time of O(n2) because of the series of swaps required for each insertion. Refer this for implementation.

**How to implement Insertion Sort for Linked List?**

Below is simple insertion sort algorithm for linked list.
```
1) Create an empty sorted (or result) list
2) Traverse the given list, do following for every node.
......a) Insert current node in sorted way in sorted or result list.
3) Change head of given linked list to head of sorted (or result) list. 
```
**Implementation of Insertion Sort**
Following is a simple C++ implementation of Insertion Sort. 
```C
// C program for insertion sort
#include <stdio.h>
#include <math.h>
 
/* Function to sort an array using insertion sort*/
void insertionSort(int arr[], int n)
{
   int i, key, j;
   for (i = 1; i < n; i++)
   {
       key = arr[i];
       j = i-1;
 
       /* Move elements of arr[0..i-1], that are
          greater than key, to one position ahead
          of their current position */
       while (j >= 0 && arr[j] > key)
       {
           arr[j+1] = arr[j];
           j = j-1;
       }
       arr[j+1] = key;
   }
}
 
// A utility function ot print an array of size n
void printArray(int arr[], int n)
{
   int i;
   for (i=0; i < n; i++)
       printf("%d ", arr[i]);
   printf("\n");
}
 
 
 
/* Driver program to test insertion sort */
int main()
{
    int arr[] = {12, 11, 13, 5, 6};
    int n = sizeof(arr)/sizeof(arr[0]);
 
    insertionSort(arr, n);
    printArray(arr, n);
 
    return 0;
}
```
Following is a simple Java implementation of Insertion Sort. 
```java
// Java program for implementation of Insertion Sort
class InsertionSort
{
    /*Function to sort array using insertion sort*/
    void sort(int arr[])
    {
        int n = arr.length;
        for (int i=1; i<n; ++i)
        {
            int key = arr[i];
            int j = i-1;
 
            /* Move elements of arr[0..i-1], that are
               greater than key, to one position ahead
               of their current position */
            while (j>=0 && arr[j] > key)
            {
                arr[j+1] = arr[j];
                j = j-1;
            }
            arr[j+1] = key;
        }
    }
 
    /* A utility function to print array of size n*/
    static void printArray(int arr[])
    {
        int n = arr.length;
        for (int i=0; i<n; ++i)
            System.out.print(arr[i] + " ");
 
        System.out.println();
    }
 
    // Driver method
    public static void main(String args[])
    {        
        int arr[] = {12, 11, 13, 5, 6};
 
        InsertionSort ob = new InsertionSort();        
        ob.sort(arr);
         
        printArray(arr);
    }
} /* This code is contributed by Rajat Mishra. */
/* This code is contributed by Devesh Agrawal */
```
Following is a simple Python implementation of Insertion Sort. 
```python
# Python program for implementation of Insertion Sort
 
# Function to do insertion sort
def insertionSort(arr):
 
    # Traverse through 1 to len(arr)
    for i in range(1, len(arr)):
 
        key = arr[i]
 
        # Move elements of arr[0..i-1], that are
        # greater than key, to one position ahead
        # of their current position
        j = i-1
        while j >=0 and key < arr[j] :
                arr[j+1] = arr[j]
                j -= 1
        arr[j+1] = key
 
 
# Driver code to test above
arr = [12, 11, 13, 5, 6]
insertionSort(arr)
print ("Sorted array is:")
for i in range(len(arr)):
    print ("%d" %arr[i])
 
# This code is contributed by Mohit Kumra
```
Output:
```5 6 11 12 13```

Other Sorting Algorithms :
=====
 * Selection Sort
 * Bubble Sort
 * [Insertion Sort](https://github.com/pooyahatami/Algorithm-Sort-Insertion)
 * Merge Sort
 * Heap Sort
 * QuickSort
 * [Counting Sort](https://github.com/pooyahatami/Algorithm-Sort-Counting)
 * [Radix Sort](https://github.com/pooyahatami/Algorithm-Sort-Radix)
 * Bucket Sort
 * ShellSort

## References:
 * https://en.wikipedia.org/wiki/Insertion_sort
 * http://www.geeksforgeeks.org/insertion-sort
