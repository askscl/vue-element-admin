<template>
    <div class="content" >
        <div class="layer1"></div>
        <div class="layer2"></div>
        <div class="layer3"></div>
    </div>
</template>

<script>
    export default {

    }
</script>
<!-- 
    思考：
    1.使用什么思路去实现---利用阴影可以多个，不同位置展现的特性
    2.生成随机数如何写---random(100)
    3.return语法是什么？--@return
    4.for循环遍历如何写？--@for $i from x through  y{}
    5.动画如何写？？--学过但遗忘了--@keyframes xxx{ 100%{}}--animation: 动画名 时间 运动曲线  如何循环；
        5.1 伪元素如何写？
        5.2 伪元素的top高度是多少？
    6.三层如何设计--使用@for 循环
        6.1 逐级递增星星半径
        6.2 逐级递减 星星个数 和 运行时间 （近大远小，近得运动速度快）


    注意事项：
    1.calc语法注意不要写成cal
    2.scss没有``的语法，只有''语法表示字符串
    3.插值写法: #{}
    4.伪元素的content记得置空
 -->
<style lang="scss" scoped>
@import url(star.scss);

.content{background: #000; width: 100%; height: calc(100vh - 84px); position: relative;}

@function getShadows($n){
    $shadows: '#{random(100)}vw #{random(100)}vh #fff';
    @for $i from 2 through $n{
        $shadows: '#{$shadows}, #{random(100)}vw #{random(100)}vh #fff';
    }
    @return unquote($shadows);
}

$duration: 400s;
$count: 1000;
@for $i from 1 through 3{
    $duration: floor($duration/2);
    $count: floor($count/2);
    .layer#{$i}{
        // $size: unquote('#{random(100)}px');
        $size: #{$i}px;
        width: $size;
        height: $size;
        border-radius: 50%;
        background: #fff;
        position: absolute;
        left: 0;
        top: 0;
        box-shadow: getShadows($count);
        //100s 匀速 无穷运动
        animation: moveUp $duration linear infinite;
        &::after{
            content: '';
            width: $size;
            height: $size;
            border-radius: 50%;
            background: #fff;
            position: absolute;
            left: 0;
            top: calc(100vh - 84px);
            box-shadow: getShadows($count);
        }
    }
}


@keyframes moveUp{
    100%{
        transform: translateY(calc(-100vh + 84px));
    }
}


</style>