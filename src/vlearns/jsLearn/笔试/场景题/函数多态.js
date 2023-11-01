/* 
根据以下输出，实现函 range([start,]stop[step])返回一个数组(step 大于 0)。 
range(l,11); => [1,2,3,4,5,6,7,8,9,10]
range(0); =>[]
range(10); => [0,1,2,3,4,5,6,7,8,9]
range(0,30,5); => [0,5,10,15,20,25]
*/

function range(start, stop, step){
    const argLength = arguments.length;
    let resultList = [];
    if(argLength === 1){
        for(let i = 0; i < start; i++){
            resultList.push(i);
        }
    }else if(argLength === 2){
        for(let i = start; i < stop; i++){
            resultList.push(i)
        }
    }else if(argLength === 3){
        for(let i = start; i < stop; i+= step ){
            resultList.push(i)
        }
    }

    return resultList;
}

function range2(start, stop, step){
    const argLength = arguments.length;
    let resultList = [];
    if(argLength === 1){
        stop = start;
        start = 0;
        step = 1; 
    }else if(argLength === 2){
        step = 1; 
    }
    for(let i = start; i < stop; i+= step ){
        resultList.push(i)
    }

    return resultList;
}



console.log(range2(0))
console.log(range2(5))
console.log(range2(5,10))

console.log(range2(0,40, 5))
