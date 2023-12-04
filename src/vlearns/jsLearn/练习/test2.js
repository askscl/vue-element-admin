function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      let pivotIndex = partition(arr, left, right);
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
  }
  
  function partition(arr, left, right) {
    let pivot = arr[left];
    let i = left + 1;
    let j = right;
    while (i <= j) {
      if (arr[i] < pivot) {
        i++;
      } else if (arr[j] >= pivot) {
        j--;
      } else {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
      }
    }
    [arr[left], arr[j]] = [arr[j], arr[left]];
    return j;
  }
  
  // 测试用例
  const arr = [9, 3, 2, 7, 1, 5, 8, 6, 4];
  quickSort(arr); 
  console.log(arr);
  //123