<template>
    <div>
        <div class="tips">
            请双击参数值输入参数
        </div>
        <Childrens />
        <InjectOtherName />
    </div>
</template>
<script>
// import {computed } from 'vue'
import {myInjectionKey } from '@/utils/keys.js'
import Childrens from './components/Childrens/Childrens.vue'
import InjectOtherName from './components/InjectOtherName/InjectOtherName.vue'
export default {
    components: { Childrens, InjectOtherName },
    provide: {
        message: 'hello!',
    },
    /* provide(){
        return {
            message: computed(() => this.message)
        }
    }, */
    /* provide(){
        return {
            [myInjectionKey]: {
                
            }
        }
    }, */
    data() {
        return {
            message: 'hello2!',
        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
</style>