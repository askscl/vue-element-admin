<template>
    <div>
        <div>{{ myAttrs }}</div>
        <InnerChild v-bind="$attrs" />
    </div>
</template>
<script>
import InnerChild from './components/InnerChild.vue';
export default{
    components:{
        InnerChild
    },
    data(){
        return {
            myAttrs: {}
        };
    },
    props:{
        option: {
            type: Object,
            default : function(){
                return {}
            }
        }
    },
    mounted(){
        console.log(this.$attrs);
        const obj = this.$attrs;
        for(let i in obj){
            if(obj.hasOwnProperty(i)){
                this.$set(this.myAttrs, i, obj[i]);
                // this.myAttrs[i] = i;
            }
        }
    },
    methods: {}
}
</script>