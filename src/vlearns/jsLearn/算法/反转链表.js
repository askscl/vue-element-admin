/**
 * 反转链表（单链表）
 * 
 *         1 =》2 =》3 =》4 =》5 =》 null
 * null《= 1《= 2《= 3《= 4《= 5
 * 
 * 解题思路：
    * 遍历，改变每个节点的next
    * 设置一个前指针pre和推进指针cur,推进直到cur为空、pre指向最后一个节点，  返回pre
    * 1.通过双指针遍历-------prev指针指向已经反转的部分，curr指针用于遍历未反转部分
 * 
 * 思考：
    * 1.为什么最后要返回pre-----返回的链表的头
    * 2. while的条件为什么是cur---当前节点为空时，结束遍历
    * 3.无法理解为啥这么换--根据示意图，已理解
    * 4.时间复杂度是：O(n)
    * 5.空间复杂度是：O(1)---为什么是1而不是 2，3？
    * 原因：
    * 当我们谈论空间复杂度时，我们关注的是算法在执行过程中所需的最大空间。在这个情况下，虽然我们使用了三个指针，但是这些指针都是用来进行链表反转的操作，而这个操作的空间需求是固定的。
    * 具体来说，这三个指针（prev、curr和next）都是用来跟踪链表节点的，它们在链表反转的过程中是必需的。但是，无论链表的长度如何，这三个指针的空间需求都是固定的，不会随着输入规模的增长而增长。因此，空间复杂度仍然是O(1)。
    * 我们不能简单地把这三个指针的空间需求加在一起得到O(3)，因为这样忽略了它们之间相互关系以及在算法中的共同作用。在计算空间复杂度时，我们应该考虑算法所需的最大空间，而不仅仅是单独考虑每个指针的空间需求。
    * 5.1这个操作的空间需求是固定的
    * 5.2不会随着输入规模的增长而增长。
    * 5.3考虑算法所需的最大空间，而不仅仅是单独考虑每个指针的空间需求
 */

//双指针遍历方法
function reverseLink1(root){
    let pre = null;
    let cur = root;
    while(cur){
        //第1步，先把1的next设为默认值 的null
        const temp = cur.next;
        cur.next = pre; 
        
        //第2步，移动双指针
        pre = cur;
        cur = temp;       
    }
    return pre;
}

//递归方法--（尾递归法）
/* 
时间复杂度为O(n), 空间复杂度为O(1);
特点：从最后一个开始
点评：
1.比3好理解，而且代码量少
2.有抖音视频，有演示动画可看
*/
function reverseLink2(root){
    //多判断一个root == null, 是为了做非空判断， root.next == null是递归的终止条件
    if(root == null || root.next == null){ 
        return root
    }

    //拿到下一个节点，开始递归，最终找到最后一个节点
    const lastNode = reverseLink2(root.next);//每个递归过程中，传递着最后一个节点5

    //每轮递归的参数，拿来改变指向，-------注意不能写成cur,用2个数验证
    //倒数第二个开始
    root.next.next = root;
    root.next = null; // 目的是，断开1=》2，让1=》null，中间的是否指向null,其实无所谓
    // 4:  4 <= 5  4=> null
    // 3:  3 <= 4  3=> null
    // 2:  2 <= 3  2=> null
    // 1:  1 <= 2  1=> null

    return lastNode;
}

/* 
    递归方法--（尾递归法2）
    特点：从倒数第二个开始
    点评：
    1.比2难理解，且代码量多
    2.本质和2是一样的方法思路
*/
function reverseLink3(root){
    if(root == null || root.next.next == null){//找到倒数第二个节点
        //找4，进而找到5，目的还是为了操作5
        root.next.next = root;// 最后一个节点指向倒数第二个节点
        return root.next; // 返回最后一个节点5
    }else{
        //如果不是4，启动递归
        const result = reverseLink3(root.next);
        root.next.next = root;
        root.next = null;
        // console.log(root);
        return result;
    }
}

/* 
    1.


*/

function Node(val){
    this.val = val;
    this.next = null;
}

const node1 = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);

    node1.next = node2;
    node2.next = node3;
    node3.next = node4;
node4.next = node5;

function printLink(root){
    if(root == null) return;
    console.log(root.val);
    // console.log(root);
    printLink(root.next);
}
printLink(node1);

printLink(reverseLink2(node1));

function findLastNode(root){
    if(root.next != null){
        return findLastNode(root.next);
    }else{
        return root
    }
}

// const lastNode = findLastNode(node1);
// console.log(lastNode);

// reverseLink3(node1);
// printLink(node5);
