function main() {
    let arr = [1,5,8,2,4,10,24,6,8,9];
    change(arr, 0, arr.length - 1);
    console.log(arr);
}

function change(arr, startIndex, endIndex) {
    let patternKey = arr[endIndex];
    let cursor = startIndex;
    for (let i = startIndex; i <= endIndex; i++) {
        if (arr[i] < patternKey) {
            if (i == cursor) {
                cursor++;
            } else {
                swap(arr, i, cursor);
                cursor++;
            }
        }
    }
    swap(arr, endIndex, cursor);
    if (cursor - startIndex + 1 >= 2) {
        change(arr, startIndex, cursor - 1);
    }
    if (endIndex - cursor - 1 >= 1) {
        change(arr, cursor + 1, endIndex);
    }
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

main();
