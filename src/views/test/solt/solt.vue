<template>
    <div>
        <div class="tips">具名插槽测试</div>
        <TestLayout>
            
            <template v-slot:ttt>
                <h1>我是一个标题</h1>
            </template>

            <p>我是一段文字</p>

            <template v-slot:footer>
                <p>尾巴</p>
            </template>

        </TestLayout>
    </div>
</template>
<script>
import TestLayout from './components/TestLayout/testLayout'
export default {
    name: "solt",
    components:{
        TestLayout
    },
    data() {
        return {};
    },
    methods: {},
};
</script>
<style lang="scss" scoped>
</style>
