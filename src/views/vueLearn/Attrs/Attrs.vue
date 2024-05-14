<template>
    <Child ref="childContainer" name="childAAA" :isOk="false" :option="{a:1, b:true, c: 'ddd'}"></Child>
</template>
<script>
import Child from './components/Child.vue'

export default {
    data(){
        return {}
    },
    components: {
        Child,
    }
}
</script>