// Push Front

// pushFront([5,7,2,3], 8)
// pushFront([99], 7)
function pushFront(arr, val) {
    for(let i = arr.length; i >= 0; i--) {
        arr[i] = arr[i -1]
    }

    arr[0] = val

    return arr 
}

console.log(pushFront([5,7,2,3], 8))
console.log(pushFront([99], 7))


// Pop Front

//popFront([0,5,10,15])
function popFront(arr) {
    // Save the first value in the array
    let firstValue = arr[0]
    // loop through the array shifting all values to the left
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    // decrease the length of the array by one
    arr.length = arr.length - 1
    // log the array
    console.log(arr)
    // return the removed value
    return firstValue
}

console.log(popFront([0,5,10,15]))

// Insert At
function insertAt(arr, index, value) {
    for(let i = arr.length; i >= index; i--) {
        arr[i] = arr[i - 1]
    }

    arr[index] = value 

    return arr 
}

console.log(insertAt([100,200,5], 2, 311))