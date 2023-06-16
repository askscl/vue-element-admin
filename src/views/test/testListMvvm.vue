<template>
    <div>
        <div class="tips">
            <h2>解决修改数组下标的值，响应式失效</h2>
            <ul>
                <li v-for="itemArr in arr" :key="Math.random()*10 + itemArr">{{itemArr}}</li>
            </ul>
            <el-button @click="arr[0]=10">改变</el-button>
            <el-button @click="changeArr">替换数组方法改变</el-button>
            <el-button @click="changeArrAsVue">set方法改变</el-button>
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
        getNewRandomValue(){
            return Math.floor(Math.random()*100);
        },
        //拷贝原数组，然后改变整个数组
        changeArr(){
            const midArr = [...this.arr];
            midArr[0] = this.getNewRandomValue();
            this.arr = midArr;
        },
        //vue自带响应式处理方法
        changeArrAsVue(){
            this.$set(this.arr, 0, this.getNewRandomValue());
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
