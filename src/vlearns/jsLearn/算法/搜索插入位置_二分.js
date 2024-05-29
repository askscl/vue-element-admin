/**
 * 算法：搜索插入位置（二分）
 * 
 * 测试用例
 * 输入: arr =[1,3,5,6],target = 5
 * 输出:2
 * 必须使用时间复杂度为 o(log n) （以2为底）的算法
 * 
 * 解题思路
 * 先设定左侧下标left和右侧下标right,再计算中间下标mid
 * 每次根据arr[mid]和target之间的大小进行判断，相等则直接返回，arr[mid]<target则left右移，arr[mid]>target则right左移
 * 查找结束如果没有相等值则返回left，该值为插入位置
 * 
 * 思考：
 * 注意：
 * 1.左右指针，是 mid + 1的跳跃， mid -1 的跳跃
 * 
 */

const arr = [1, 3, 5, 6], target = 5;
const searchIndex = function (arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (right >= left) {//边界情况---如何确定？
        const mid = Math.floor((left + right) / 2);//二分法特色中间索引，作为比较参照物
        if (arr[mid] < target) {
            left = mid + 1;
        } else if (arr[mid] > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }

    return left;

}

const answer = searchIndex(arr, target);
console.log(answer);