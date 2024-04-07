function findLargestElement(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }

    let maxElement = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }
    return maxElement;
}

const numbers = [10, 4, 23, 8, 15];
console.log("Largest element:", findLargestElement(numbers));