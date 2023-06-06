<template>
    <div>
        <div class="tips">
            <button @click="btn_change">改变</button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['ccMoney'],
    data() {
        return {

        }
    },
    methods: {
        btn_change(){
            this.$emit('update:ccMoney', this.ccMoney - 100);
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
