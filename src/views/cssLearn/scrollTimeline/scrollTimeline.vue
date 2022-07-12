<template>
    <div>
        <div class="tips">
            滚动时间线学习
        </div>

        <el-tabs type="border-card">
            <el-tab-pane label="练习02"><test-02/></el-tab-pane>
            <el-tab-pane label="练习01" lazy="true"><test-01/></el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
import test01 from './components/test01.vue'
import Test02 from './components/test02.vue'
export default {
    components: { test01, Test02 },
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