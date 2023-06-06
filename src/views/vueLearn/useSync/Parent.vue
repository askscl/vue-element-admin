<template>
    <div>
        <div class="tips">
            我的钱：{{ money }}
            <MyChild :ccMoney.sync="money" />
        </div>
    </div>
</template>
<script>
import MyChild from './MyChild.vue'
export default {
    components:{
        MyChild
    },
    data() {
        return {
            money: 100
        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
</style>
