const str = 'adb_ab_c';


/* 
function的4个参数说明
matchStr：本次匹配到的结果
$1,...$9：正则表达式中有几个 ()，就会传递几个参数，$1~$9 分别代表本次匹配中每个()提取的结果，最多9个---没有括号，则只有三个参数
offset：记录本次匹配的开始位置
source：接受匹配的原始字符串
*/
const str2 = str.replace(/_([a-z])([a-z])/g, function(matchStr, p1, p2,y, z){
    console.log(matchStr)
    console.log(p1)
    console.log(p2)
    console.log('y:', y)
    console.log('z:',z)
    return p1.toUpperCase();
});

console.log(str2);

