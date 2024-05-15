<template>
    <div>
        <p><el-button @click="sendMsg">A组件点击</el-button></p>
        <EventBusB/>
    </div>
</template>
<script>
import EventBusB from './EventBusB.vue';

export default{
    methods: {
        sendMsg() {
            this.$EventBus.$emit('recevie', 'A消息');
        }
    },
    components: { EventBusB }
}
</script>