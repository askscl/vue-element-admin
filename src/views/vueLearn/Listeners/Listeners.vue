<template>
    <div>
        <Child ref="kkkk" v-on:m1="m1" v-on:m2="m2" @m3="m3" @m4="m4" @click.native="testClick"></Child>
    </div>
</template>
<script>
import Child from './components/Child.vue';
export default{
    components: {
        Child
    },
    data(){
        return {}
    },
    methods: {
        m1(message){
            console.log(1);
            console.log(message.name);
        },
        m2(obj){
            console.log(2);
            console.log(obj.name);
        },
        m3(){
            console.log(3);
        },
        m4(){
            console.log(4);
        },
        testClick(){
            console.log(5);
        }
    }
    
}
</script>