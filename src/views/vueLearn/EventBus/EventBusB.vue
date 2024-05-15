<template>
    <div>
        <p>B组件：{{ msg }}</p>
        <Child />
    </div>
</template>
<script>
import Child from './Child.vue';

export default {
    data() {
        return {
            msg: '123'
        };
    },
    mounted() {
        this.$EventBus.$on('recevie', (msg) => {
            this.msg = msg;
        });
    },
    components: { Child }
}
</script>