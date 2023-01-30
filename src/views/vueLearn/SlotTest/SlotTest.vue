<template>
    <div>
        <!-- 具名插槽测试 -->
        <div v-if="false">
            <div class="tips">具名插槽测试</div>
            <TestLayout>

                <template v-slot:ttt>
                    <h5>我是一个标题</h5>
                </template>

                <p>我是一段文字</p>

                <template v-slot:footer>
                    <p>尾巴</p>
                </template>

            </TestLayout>
        </div>

        <!-- 作用域插槽 -->
        <h5>作用域插槽</h5>
        <MyConmponent v-slot="slotProps">
            {{ slotProps.text}} {{ slotProps.count}}
        </MyConmponent>
        <MyConmponent v-slot="{text, count}">
            {{ text}} {{ count}}
        </MyConmponent>
        <h5>作用域插槽--具名作用域插槽</h5>
        <MyConmponent>
            <template #header="headerProps">
                {{ headerProps }}
            </template>
            <template #default="defaultProps">
                {{ defaultProps }}
            </template>
            <template #footer="footerProps">
                {{ footerProps}}
            </template>
        </MyConmponent>
        <MyConmponent>
            <template #default="{ message }">
                <p>{{message}}</p>
            </template>
            <template #footer>
                <p>Here's some contact info</p>
            </template>
        </MyConmponent>

        <!-- 高级列表组件示例 -->
        <div>
            <h5>作用域插槽--高级列表组件示例</h5>
            <FancyList :api-url="url" :per-page="10">
                <template #item="{body, username, like }">
                    <div>
                        <p>{{ body }}</p>
                        <p> by {{ username }} | {{ like}} likes </p>
                    </div>
                </template>
            </FancyList>
        </div>

        <!-- 无渲染组件 -->
        <div>
            <h5>作用域插槽--无渲染组件</h5>
            <FancyList :api-url="url" :per-page="10">
                <template #item="{body, username, like }">
                    <div>
                        <p>{{ body }}</p>
                        <p> by {{ username }} | {{ like}} likes </p>
                    </div>
                </template>
            </FancyList>
        </div>

    </div>
</template>
<script>
import TestLayout from './components/TestLayout/TestLayout'
import MyConmponent from './components/MyConmponent/MyConmponent'
import FancyList from './components/FancyList/FancyList'
export default {
    components: {
        TestLayout,
        MyConmponent,
        FancyList
    },
    data() {
        return {
            url: 'abc'
        };
    },
    methods: {},
};
</script>
<style lang="scss" scoped>
</style>
