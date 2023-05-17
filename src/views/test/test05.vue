<template>
    <div>
        <div class="tips">
            <h2>解决修改数组下标的值，响应式失效</h2>
            <ul>
                <li v-for="itemArr in arr" :key="Math.random()*10 + itemArr">{{itemArr}}</li>
            </ul>
            <el-button @click="arr[0]=10">改变</el-button>
            <el-button @click="changeArr">改变2</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            arr: [1, 2, 3, 4]
        }
    },
    methods: {
        changeArr(){
            const midArr = [...this.arr];
            midArr[0] = Math.floor(Math.random()*10);
            this.arr = midArr;
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
