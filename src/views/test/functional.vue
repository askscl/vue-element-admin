<template functional>
    <div>
        <div class="tips">
            0N123758
        </div>
    </div>
</template>
<script>
/* 
函数式组件

加了functional后，
1.热重载失效


=======================================================
以下是ai提示生成
render函数中的this指向undefined，
因为functional组件没有实例，所以没有this，
但是可以通过第二个参数context来访问到当前的上下文，
context是一个对象，包含三个属性：
attrs: 包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。
slots: 一个对象，表示了父作用域中不作为 prop 被识别 (且获取) 的 (带 key 的) 插槽。每个键代表插槽的名字，对应的值是一个数组，表示了在该插槽中使用的所有子节点 (VNode)。
scopedSlots: 一个对象，表示了当前作用域中不作为 prop 被识别 (且获取) 的 (带 key 的) 作用域插槽。每个键代表插槽的名字，对应的值是一个函数，返回一个 VNode 数组。

*/
export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
</style>
