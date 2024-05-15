<template>
    <p>孙子组件：{{ msg }}</p>
</template>
<script>
export default{
    data(){
        return {
            msg: '456'
        }
    },
    mounted(){
        this.$EventBus.$on('recevie', (msg) => {
            this.msg = msg;
        })
    }
}
</script>