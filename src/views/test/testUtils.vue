<template>
    <div>
        <!-- 返回单个字符 -->
        <div class="tips">
            {{showUtilsNumber}}
        </div>
        <!-- 返回一个数组 -->
        <div class="tips">
            {{showUtilsList}}
        </div>
        <!-- 通过api返回一个数组 -->
        <div class="tips">
            <p>{{showUtilsListApi}}</p>
            <p>
                <el-select v-model="selectValue" placeholder="请选择">
                    <el-option v-for="item in showUtilsListApi" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </p>
        </div>
    </div>
</template>
<script>
// import { getUtilsNumber, getUtilsList, getUtilsList2 } from '@/utils'
import { getUtilsNumber, getUtilsList, getUtilsList2 } from '@/utils/testUtil'
export default {
    name: 'testUtils',//公共函数带异步操作测试
    data() {
        return {
            showUtilsNumber: 0,
            showUtilsList: 0,
            showUtilsListApi: [],
            selectValue:''
        }
    },
    mounted() {
        this.showUtilsNumber = getUtilsNumber();
        this.showUtilsList = getUtilsList();
        //getUtilsList2是一个promise, 所有带async的函数，返回值都是一个promise
        // this.showUtilsListApi = await getUtilsList2();
        //   console.log(this.showUtilsListApi)
        getUtilsList2().then((res) => {
            this.showUtilsListApi = res
        })
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
</style>
