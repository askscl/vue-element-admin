<template>
    <div>
        
        <div class="tips">
            滚动时间线学习
        </div>

        <el-tabs type="border-card">
            <el-tab-pane label="精确控制动画触发时机"><test-03/></el-tab-pane>
            <el-tab-pane label="顶部进度条" :lazy="true"><test-02/></el-tab-pane>
            <el-tab-pane label="旋转的F" :lazy="true"><test-01/></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import test01 from './components/test01.vue'
import Test02 from './components/test02.vue'
import Test03 from './components/test03.vue'
export default {
    components: { test01, Test02, Test03 },
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

</style>
<style scoped>

</style>