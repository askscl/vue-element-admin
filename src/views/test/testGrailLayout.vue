<template>
    <div>
        <div id="header">#header</div>
        <div id="container">
            <div id="left" class="column">#left</div>
            <div id="center" class="column">#center</div>
            <div id="right" class="column">#right</div>
        </div>
        <div id="footer">#footer</div>
    </div>
</template>
<script>
export default {
    name: 'Test0N',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
body {
    min-width: 550px;
    font-weight: bold;
    font-size: 20px;
}
#header,
#footer {
    background: rgba(29, 27, 27, 0.726);
    text-align: center;
    height: 60px;
    line-height: 60px;
}
#container {
    display: flex;
}
#container .column {
    text-align: center;
    height: 300px;
    line-height: 300px;
}
#center {
    // flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
    //flex-grow定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。--grow英文意思是<扩大，扩展，增加>,这就代表当父元素的宽度大于子元素宽度之和时，并且父元素有剩余，这时，flex-grow就会说我要成长，我要长大，怎么样才能成长呢，当然是分享父元素的空间了。见下面第二个属性的内容
    //flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
    //flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。
    flex: 1;
    // flex: 1 1 auto;
    // flex-grow: 1;
    background: rgb(206, 201, 201);
}
#left {
    width: 200px;
    background: rgba(95, 179, 235, 0.972);
}
#right {
    width: 150px;
    background: rgb(231, 105, 2);
}
</style>
