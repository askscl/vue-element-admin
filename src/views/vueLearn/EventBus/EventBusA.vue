<template>
    <div>
        <p><el-button @click="sendMsg">A组件点击</el-button></p>
        <EventBusB/>
    </div>
</template>
<script>
import EventBusB from './EventBusB.vue';

export default{
    destroyed(){
        this.$EventBus.$off('recevie');
    },
    methods: {
        sendMsg() {
            this.$EventBus.$emit('recevie', '收到A消息');
        }
    },
    components: { EventBusB }
}
</script>