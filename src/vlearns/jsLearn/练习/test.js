/* 
addEventListener addEventListener addEventListener addEventListener addEventListener
addEventListener addEventListener addEventListener addEventListener addEventListener
defineProperty  defineProperty defineProperty defineProperty defineProperty
*/

/* 
justify-content justify-content justify-content justify-content
justify-content
align-items align-items align-items align-items align-items
flex flex flex flex flex
flex-grow, flex-grow flex-grow flex-grow flex-grow
flex-shrink shrink shrink shrink shrink
basis basis basis basis basis
ceil ceil ceil ceil ceil 
*/

/* 
    数组
    push push push push push
    pop pop pop pop pop
    reverse reverse reverse reverse reverse
    sort sort sort sort sort
    concat concat concat concat concat
    unshift unshift unshift unshift unshift
    shift shift shift shift shift
    slice slice slice slice slice
    splice splice splice splice splice
    indexOf indexOf indexOf indexOf indexOf
    lastIndexOf lastIndexOf lastIndexOf lastIndexOf lastIndexOf
    every every every every every 
    some some some some some
    filter filter filter filter filter
    map map map map map
    forEach forEach forEach forEach
    reduce reduce reduce reduce reduce
    join join join join join
    isArray isArray isArray isArray isArray
    keys keys keys keys keys
    values values values values values
    entries entries entries entries entries
    fill fill fill fill fill
    find find find find find
    findIndex findIndex findIndex findIndex findIndex
    Array.from Array.from Array.from Array.from Array.froms

    concat concat concat concat concat
    slice slice slice slice slice
    filter filter filter filter filter
    map map map map map
    push push push push push
    pop pop pop pop pop
    unshift unshift unshift unshift unshift
    shift shift shift shift shift
    reverse reverse reverse reverse reverse
    sort sort sort sort sort
    concat concat concat concat concat
    slice slice slice slice slice
    splice splice splice splice splice
    indexOf indexOf indexOf indexOf indexOf
    lastIndexOf lastIndexOf lastInexOf lastIndexOf lastIndexOf
    every every every every every
    some some some some some
    filter filter filter filter filter
    map map map map map
    forEach forEach forEach forEach
    reduce reduce reduce reduce reduce
    join join join join join
    isArray isArray isArray isArray isArray
    keys keys keys keys keys
    values values values values values
    entries entries entries entries entries
    fill fill fill fill fill
    find find find find find 
    findIndex findIndex findIndex findIndex findIndex
    Array.from Array.from Array.from Array.from
    replace replace replace replace replace
    indexOf indexOf indexOf indexOf indexOf

*/

/* 
    字符串
    concat concat concat concat concat
    slice slice slice slice slice
    substring substring substring substring substring
    substr substr substr substr substr
    indexOf indexOf indexOf indexOf indexOf indexOf
    lastIndexOf lastIndexOf lastIndexOf lastIndexOf lastIndexOf
    includes includes includes includes includes
    trim trim trim trim trim
    repeat repeat repeat repeat repeat
    toUpperCase toUpperCase toUpperCase toUpperCase toUpperCase
    toLowerCase toLowerCase toLowerCase toLowerCase toLowerCase
    match match match match match
    search search search search search
    replace replace replace replace replace
    split split split split split

    concat concat concat concat concat
    slice slice slice slice slice
    substring substring substring substring substring
    substr substr substr substr substr
    trim trim trim trim trim 
    repeat repeat repeat repeat repeat
    replace replace replace replace replace

*/


/* 
const pattern = /{{\w.\d?\s*\d+[a-zA-Z]}}/g
*/
/* const arr = [1, 2, 3];
console.log(arr.findIndex(item => item > 1));
console.log(arr)
const arr2 = [
    {
        num: 1
    },
    {
        num: 2
    }
] */
// console.log(Array.from(arr.keys()))
/* 
arguments arguments arguments arguments arguments arguments
Date.now() Date.now() Date.now() Date.now() Date.now()
*/


/* const num = {
    a: 10,
    add(){ return this.a +2;},
    reduce: () => this.a - 2
};

console.log(num.add());
console.log(num.reduce());

const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
        console.log("timerStart");
        resolve("success");
        console.log("timerEnd");
    }, 0);
    console.log(2);
});
promise.then((res) => {
    console.log(res);
})

console.log(4); */

/* (function(){
    var a = b = 5;
})();
console.log(window);
console.log(b);
console.log(a);
 */


/* const sortedListToBST = function(head){
    if(!head) return null;
    const nums = [];

    while(head){
        nums.push(head.val);
        head = head.next;
    }
    return d(nums, 0, nums.length - 1);

    function TreeNode(val){
        this.val = val;
        this.left = this.right = null;
    }

    function d(arr, low, high){
        if(low > hight) return null;
        const mid = Math.floor((low + high)/2);
        const node = new TreeNode(arr[mid]);

        node.left = d(arr, low, mid - 1);
        node.right = d(arr, mid + 1, high);

        return node;
    }
}; */

/* const promise = new PromiseRejectionEvent((resovle, reject) => {
    setTimeout(() =>{
        reject(new Error("error"));
    }, 1000);
});

promise.then(res =>{
    console.log(res);;
}).catch(error => {
    console.error('捕获到错误： ', error);
});

function stringToNumber(str){
    let result = 0;
    let powerOfTen = 1;
    for(let i = str.length - 1; i >= 0; i--){
        const charCode = str.charCodeAt(i);

        if(charCode < 48 || charCode > 57){
            throw new Error("Invalid input");
        }

        result += (charCode - 48) * powerOfTen;
        powerOfTen *= 10;
    }

    return result;
} */

/* const arr = [1, 2, 3, 4, 5];
function bianArr(arr){
    if(arr == null) return 
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

// bianArr(arr);

function Node(val){
    this.value = val;
    this.next = null;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);


node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;

function bianLink(root){
    if(root == null) return;
    let temp = root;
    while(true){
        if(temp != null){
            console.log(temp.value);
        }else{
            break;
        }
        temp = temp.next;
    }
}
// bianLink(node1);

function bianLink2(root){
    if(root == null) return;
    let temp = root;
    while(temp != null){
        console.log(temp.value);
        temp = temp.next;
    }
}

// bianLink2(node1);

function bianLink3(root){
    if(root == null) return;
    console.log(root.value);
    bianLink3(root.next);
}

bianLink3(node1); */

/* const arr2 = [3,9,2,7,1,5,8,6,4];

function quickSort(arr, begin = 0, end=arr.length - 1){
    if(arr == null || arr.length === 0) return;
    if(begin < end){
        const midIndex = partition(arr, begin , end);
        quickSort(arr, begin, midIndex - 1);
        quickSort(arr, midIndex + 1, end);
    }
    
}

function partition(arr, left, right){
    const midItem = arr[left];
    let i = left + 1;
    let j = right;
    while(i <= j){
        if(arr[i] < midItem){
            i++
        }else if(arr[j] > midItem){
            j--
        }else{
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }
    [arr[left], arr[j]] = [arr[j], arr[left]];
    return j;
}

quickSort(arr2);
console.log(arr2); */

/* class Stack{
    constructor(){
        this.arr = []
    }
    push(val){
        this.arr.push(val);
    }
    pop(){
        this.arr.pop();
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.arr);
stack.pop();
console.log(stack.arr);
stack.pop();
console.log(stack.arr); */

class Queue{
    constructor(){
        this.arr = [];
    }
    push(val){
        this.arr.push(val);
    }
    pop(){
        this.arr.shift();
    }
}

const queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
console.log(queue.arr);

queue.pop()
console.log(queue.arr);
queue.pop()
console.log(queue.arr);
