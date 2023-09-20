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
        <!-- 
            v-slot=将子组件的参数传递给父亲组件
         -->
        <h5>作用域插槽</h5>
        <MyConmponent v-slot="slotProps">
            {{ slotProps.text}} {{ slotProps.count}}
        </MyConmponent>
        <MyConmponent v-slot="{text, count}">
            {{ text}} {{ count}}
        </MyConmponent>

        <hr/>
        <hr/>

        <!-- 作用域插槽--具名作用域插槽 -->
        <!-- 
            #xxx=将子组件的参数传递给父亲组件
            #xxx排序顺序，以子组件内部为准
         -->
        <h5>作用域插槽--具名作用域插槽</h5>
        <MyConmponent>
            <template #default="defaultProps">
                {{ defaultProps }}
            </template>
            <template #header="headerProps">
                {{ headerProps }}
            </template>
            <template #footer="footerProps">
                {{ footerProps}}
            </template>
        </MyConmponent>

        <hr/>
        <hr/>

        <!-- 向子组件的插槽传值，
            1.使用template包裹，直接在标签内写html,（父传子）
            2.用#插槽名拿到子组件数据（子传父） -->
        <h5>向子组件的插槽传值</h5>
        <MyConmponent>
            <template #default="{ message }">
                <p>{{message}}</p>
            </template>
            <template #footer>
                <p>Here's some contact info</p>
            </template>
        </MyConmponent>

        <hr/>
        <hr/>

        <h2>作用域插槽</h2>
        <!-- 高级列表组件示例 -->
        <div>
            <h5>高级列表组件示例</h5>
            <FancyList :api-url="url" :per-page="10">
                <template #item="{body, username, likes }">
                    <div>
                        <p>{{ body }}</p>
                        <p> by {{ username }} | {{ likes}} likes </p>
                    </div>
                </template>
            </FancyList>
        </div>

        <hr/>

        <!-- 无渲染组件 -->
        <div>
            <h5>无渲染组件</h5>
            <FancyList :api-url="url" :per-page="10">
                <template #item="{body, username, likes }">
                    <div>
                        <p>{{ body }}</p>
                        <p> by {{ username }} | {{ likes }} likes </p>
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
