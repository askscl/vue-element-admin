/**
 * 反转链表
 * 
 * 1 =》2 =》3 =》4 =》5
 * 5 =》4 =》3 =》2 =》1
 * 
 * 解题思路：
 * 设置一个前指针pre和推进指针cur,推进直到cur为空，返回pre
 * 
 * 思考：
 * 1.为什么最后要返回pre
 * 2. while的条件为什么是cur
 * 3.无法理解为啥这么换--根据示意图，已理解
 * 
 * 示意图
 * 一个数据
 * pre
 * cur
 * next
 * ||
 * pre
 * cur
 * next
 */

function reverseList(head){
    let cur = head;
    let pre = null;
    while(cur){
        let flag = cur.next;
        cur.next = pre; //第一步，先把1的pre设为默认值 的null
        pre = cur;
        cur = flag;       
    }
    return pre;
}