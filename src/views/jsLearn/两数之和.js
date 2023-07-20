/**
 * 两数之和(leetcode1)
 * 
测试用例
输入: nums =[2,7,11,15], target =9
输出:[0,1]
解释:因为 nums[0] +nums[1] ==9，返回[0,1]。
使用时间复杂度为 0(n) 的算法。

解题思路
1.通过Map对象存储遍历过的元素和对应的索引
2.每遍历一个元素，看看Map对象中是否存在满足要求的目标数字
3.一次循环即能够找到符合条件的索引组


思考：
1.为什么要采用Map
因为Map,可以存储键值对，可以方便获取值的键，在该例子中键是数组的下标索引
2.出题目的
一道题考了Map的三种使用方法：has(), get(), set()

注意：
1.map的值放要找的索引，便于用map的，get查找到
 */

const nums =[2,7,11,15], target =9;

function twoSum(arr, target){
    let map = new Map();
    let res = [];
    arr.forEach((item, index) =>{
        if(map.has(target - item)){
            res = [index, map.get(target - item)];
        }else{
            map.set(item, index)
        }
    });
    console.log(map)
    console.log(res)
    return res;
}


twoSum(nums, target);