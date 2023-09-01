/**
 * 题目：
 * data = { a : 123, b : 456 , c : 789 }
 * temp = `a={{a}}, b={{b}}`
 * 写出render(data, temp)函数, 将data的值放入temp中
 * 
 * 注意细节：
 * 1.做这种题无需要写思路，可以直接上手写代码，边写边思考
 * 2.map产生新的数组，不改变原数组
 * 3.replace产生新的字符串，不改变原字符串，--需要归纳出各种方法是否有
 * 4.substring
 *      4.1产生的字符串，不改变原字符串，
 *      4.2索引起始位置，包含要截取的字符串
 *      4.3索引结束位置，不包含要截取的字符串，表示索引之前
 * 
 * 总结：
 * 要拿到目标字符串，可以使用以下方法：
 * 1.使用正则拿到，配合replace
 * 2.使用索引拿到，配合slice, substring, replace
 * 3.使用分割拿到，配合split
 */

const data = { a : 123, b : 456 , c : 789 };
const temp = `a={{a}}, b={{b}}`;

/**
 * 方法一：转成数组，切割到目标字符串
 * @param {} data 
 * @param {*} temp 
 * @returns 
 */
function render(data, temp){
    const list1 = temp.split(',');
    const list4 = list1.map(item =>{
        const list2 = item.split('=');
        const list3 = list2.map(itemInner => {
            if(itemInner.indexOf('{{') === 0){
                const key = itemInner.replace('{{','').replace('}}','');
                return itemInner = data[key];
            }else{
                return itemInner;
            }
        });
        return item = list3.join('=');
    });
    temp = list4.join(',');
    return temp;
}
// console.log(render(data, temp));

/**
 * 方法二：通过{}索引位置，计算出变量的索引
 * @param {} data 
 * @param {*} temp 
 * @returns 
 */
function render2(data, temp){
    
    while(temp.indexOf('{') > 0 ){
        // const starIndex = temp.indexOf('{');
        const endIndex = temp.indexOf('}');
        // const targetIndex = endIndex - (starIndex + 1) + starIndex;
        const targetIndex = endIndex - 1;
        // console.log(temp[targetIndex]);
        const targetKey = temp[targetIndex];
        temp = temp.replace(`{{${targetKey}}}`, data[targetKey]);
    }
    
    return temp;
}
// console.log(render2(data, temp));


/**
 * 方法三：方法二加强版，当变量长度不是为1的情况，通过索引动态截取目标变量的key
 * @param {*} data 
 * @param {*} temp 
 * @returns 
 */
function render3(data, temp){
    
    while(temp.indexOf('{') > 0 ){
        const starIndex = temp.indexOf('{');
        const endIndex = temp.indexOf('}');
        // console.log(temp[targetIndex]);
        const targetKey = temp.substring(starIndex+2, endIndex);
        // console.log(targetKey);
        temp = temp.replace(`{{${targetKey}}}`, data[targetKey]);
    }
    
    return temp;
}
// console.log(render3(data, temp));

/**
 * 方法四：使用正则匹配
 * @param {*} data 
 * @param {*} temp 
 * @returns 
 */
function render4(data, temp){
    const pattern = /{{\w+}}/g;
    const replaceStr = temp.replace(pattern, function(matchStr){
        const key = matchStr[2];
        return data[key];
    });
    return replaceStr;
}
// console.log(render4(data, temp));


//===========================================================================================
const sti ='0123456789';
const str ='we are you';
// console.log(str);
// console.log(str.substring(3,6));
// console.log(str.slice(3,6));
// console.log(str.substr(3, 3)); //substr已弃用
/* *
 * 空格：\s
 * 正数字：\d
 * 正数字或者字母：\w
 * 除换行以外的任意字符：.
 * 0或者1个： ?
 * 0或者多个：*
 * 至少1个字符：+
 */
function testReplace(){
    const pattern =  /{{\w+}}/g
    // const matchResults = temp.match(pattern);
    // console.log(matchResults);
    /**
     * matchStr:匹配到的字符串
     * $1,...$9：正则表达式中有几个 ()，就会传递几个参数，$1~$9 分别代表本次匹配中每个()提取的结果，最多9个
     * matchIndex:匹配到的字符串，在原字符串的索引
     * originalText:原字符串
     */
    const replaceStr = temp.replace(pattern, function(matchStr, matchIndex, originalText){
        // console.log(matchstr);
        // console.log(matchIndex);
        // console.log(originalText);
        const key = matchStr[2];
        return data[key];
    });
    console.log(replaceStr)
}
// testReplace();


/* 
function的4个参数说明
matchStr：本次匹配到的结果
$1,...$9：正则表达式中有几个 ()，就会传递几个参数，$1~$9 分别代表本次匹配中每个()提取的结果，最多9个---没有括号，则只有三个参数
offset：记录本次匹配的开始位置
source：接受匹配的原始字符串
*/
function testReplace2(){
    const pattern = /{{([a-z])}}/g;
    const replaceStr = temp.replace(pattern, (matchStr, p1) =>{
        return data[p1];
    });
    console.log('testReplace2:\n', replaceStr);
}
testReplace2();
