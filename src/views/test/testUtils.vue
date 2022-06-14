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
            {{showUtilsListApi}}
        </div>
    </div>
</template>
<script>
import { getUtilsNumber, getUtilsList, getUtilsList2 } from '@/utils'
export default {
    name: 'testUtils',//公共函数带异步操作测试
    data() {
        return {
            showUtilsNumber: 0,
            showUtilsList: 0,
            showUtilsListApi: [],
        }
    },
    async mounted() {
        this.showUtilsNumber = getUtilsNumber();
        this.showUtilsList = getUtilsList();
        //getUtilsList2是一个promise, 所有带async的函数，返回值都是一个promise
        this.showUtilsListApi = await getUtilsList2();
        //   console.log(this.showUtilsListApi)
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
</style>
