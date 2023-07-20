<template>
    <div>
         <div class="tips">
             请双击参数值输入参数
         </div>
    </div>
</template>
<script>
export default {
    name: 'stepThree',
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
$color: ( a: red, b: green );//本质是个map, 不是对象
.tips{
    height: 100px;
    // background: map-get($map: $color, $key: 'a');//测试可以
    // background: map.get($color, 'b');//测试不行
    background: map-get($color, b);//测试可以

}
</style>