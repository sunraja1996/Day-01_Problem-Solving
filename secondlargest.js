function findSecondLargestElement(arr) {
    if (arr.length < 2) {
        return "Array does not have enough elements";
    }

    let largest = arr[0];
    let secondLargest = arr[1];

    if (secondLargest > largest) {
        [largest, secondLargest] = [secondLargest, largest];
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}


const numbers = [10, 4, 23, 8, 15];
console.log("Second largest element:", findSecondLargestElement(numbers)); 