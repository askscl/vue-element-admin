<template>
    <div>
        <slot :text="greetingMessage" :count="1" message="默认值：我在子组件"></slot>
        <slot name="header" message="头部: hello world"></slot>
        <slot name="footer"></slot>
    </div>
</template>
<script>
export default {
    data(){
        return {
            greetingMessage: '子组件的数据'
        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>

</style>