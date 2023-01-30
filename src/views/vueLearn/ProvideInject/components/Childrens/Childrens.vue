<template>
    <div>
        <div class="tips">
            我是一个子组件,{{message}}
        </div>
    </div>
</template>
<script>
// import {myInjectionKey} from '@/utils/keys.js'
export default {
    inject: ['message'],
    /* inject: {
        injected: {
            from: myInjectionKey
        }
    }, */
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
</style>