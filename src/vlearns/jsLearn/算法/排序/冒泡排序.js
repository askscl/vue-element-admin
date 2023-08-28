const arr = [7, 4, 2, 1, 3, 5, 6];

function sortArr(arr){
    for(let i = 0; i < arr.length -1; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

console.log(sortArr(arr));