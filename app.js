function SecondlargestNumber(arr){

    // lowest than the given array numbers assumed as largest and second-Largest numbers
    let largest = -1, secondLargest = -2;
    
    for(let i=0; i<=arr.length-1; i++){
        // check whether i index value of array is greater than largest number
        if(arr[i] > largest) {
        // if value of array is greater than largest number perform swaping of two variables
            secondLargest = largest;
            largest = arr[i];
        } else {
        /* if not(if first if condition failes), check whether i index value of array number
         greater than secondLargest number and NOT equl to largest number */  
         if(arr[i] > secondLargest && arr[i] != largest) {
            /* if true, store the array value into secondLargest varaible.
            At last it becomes the desired output. */
            secondLargest = arr[i];
            }
        }
    }
    console.log('The second Largest number from the given array is:  ', secondLargest);
    }
    
    let arr = [6,13,22,18,0,3,45,57,5,12];
    SecondlargestNumber(arr);