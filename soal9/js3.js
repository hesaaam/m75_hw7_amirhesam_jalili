let search = function(nums, target) {
    let start = 0;
    let end = nums.length;
    return oneMore(nums, start, end, target);
};

let oneMore = (data, left, right, target) => {
    let middle = Math.floor(left + (right - left) / 2);
    if (data[middle] === target) {
        return middle;
    }
    if (left >= right) {
        return -1;
    }
    if (data[middle] > target) {
        return oneMore(data, left, middle, target);
    } else {
        return oneMore(data, middle+1, right, target);
    }
}

// Binary Search


// function binarySearch(value, list) {
//     let first = 0;    //left endpoint
//     let last = list.length - 1;   //right endpoint
//     let position = -1;
//     let found = false;
//     let middle;
 
//     while (found === false && first <= last) {
//         middle = Math.floor((first + last)/2);
//         if (list[middle] == value) {
//             found = true;
//             position = middle;
//         } else if (list[middle] > value) {  //if in lower half
//             last = middle - 1;
//         } else {  //in in upper half
//             first = middle + 1;
//         }
//     }
//     return position;
// }