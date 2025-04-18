const arr1 = [
    {
        id: 1,
        data:'你好的'
    },
    {
        id: 3,
        data:'你好的'
    },
    {
        id: 4,
        data:'你好的'
    },
    {
        id: 5,
        data:'我在数组1'
    },
    {
        id: 2,
        data:'我在数组1'
    }
];

const arr2 = [
    {
        id: 9,
        data:'你好的'
    },
    {
        id: 8,
        data:'你好的'
    },
    {
        id: 7,
        data:'你好的'
    },
    {
        id: 5,
        data:'我在数组2'
    },
    {
        id: 2,
        data:'我在数组2'
    }
];

/**
 * 运行方式：
 * cd src\views\jsLearn
 * node findSameItem.js
 */


//=======================以下方法，空间换时间============================
/**
 * 要拿到布尔值的方法有：
 * 1、find
 * 2. set\map的has方法
 * 3. obj和键
 * 4. includes
*/




/**
 * 推荐指数：5星  🌟🌟🌟🌟🌟
 * 点评：代码最简洁
 * 方法一：
 * filter、find结合
 */

function findSameItem2(arr1, arr2){

    return arr1.filter( item1 => arr2.find( item2 => item1.id === item2.id))
}

// const result2 = findSameItem2(arr1, arr2);
// console.log('result2: ',result2);


/**
 * 方法二：
 * filter、set结合
 */

 function findSameItem4(arr1, arr2){
    const arr22 = new Set(arr2.map(item => item.id));
    return arr1.filter(item => arr22.has(item.id));
}

// const result4 = findSameItem4(arr1, arr2);
// console.log('result4: ',result4);

/**
 * 方法三：
 * filter、map结合
 */

 function findSameItem5(arr1, arr2){
    const arr22 = new Map(arr2.map(item => [item.id, item]));
    return arr1.filter(item => arr22.has(item.id));
}

// const result5 = findSameItem5(arr1, arr2);
// console.log('result5: ',result5);


/**
 * 方法四：
 * filter、object结合
 */

 function findSameItem6(arr1, arr2){
    const arrObj22 = arr2.reduce((acc, cur) => {
        acc[cur.id] = cur;
        return acc;
    }, {});
    return arr1.filter(item => arrObj22[item.id]);
}

// const result6 = findSameItem6(arr1, arr2);
// console.log('result6: ',result6);



/**
 * 方法五：
 * reduce和includes结合（ES7）
 */

function findSameItem3(arr1, arr2){
    const idList = arr2.map(item => item.id);
    return arr1.reduce((acc, cur) => {
        if(idList.includes(cur.id)){
            acc.push(cur);
        }
        return acc;
    }, []);
}

const result3 = findSameItem3(arr1, arr2);
console.log('result3: ',result3);











/**
 * 推荐指数：不推荐  🌟
 *
 *
 * 方法六：
 * 归并查找相同的数组元素,
 * 数组1，有id，
 *
 *
 * 归并思想:
 * 前提：两个升序的数组
 * 设置两个指针，在相同的时候，同时位移，如果不相同，则谁小谁++，
 * @param {} arr1
 * @param {*} arr2
 * @returns Array
 */
 function findSameItem(arr1, arr2){
    const arr = [];
    const arrIn1 = getSort([...arr1]);
    const arrIn2 = getSort([...arr2]);
    console.log(arrIn1);
    console.log(arrIn2);
    let i = 0, j = 0;
    while(i < arrIn1.length && j < arrIn2.length){//边界条件！
        if(arrIn1[i].id == arrIn2[j].id){
            // 当两个数组只有id相同，其它属性不相同时，则都加入arr；
            // 如果《属性全相同》，则只加入一个
            arr.push(arrIn1[i]);
            arr.push(arrIn2[j]);
            i++;
            j++;
        }else if(arrIn1[i].id < arrIn2[j].id){
            i++;
        }else{
            j++;
        }
    }
    return arr;
}

/**
 * 通过id升序排序
 * @param {} arr
 * @returns Array
 */
function getSort(arr){
    return arr.sort((a,b) => {
        return a.id - b.id
    });
}

// const result = findSameItem(arr1, arr2);
// console.log(result);
