<template>
    <div>
        <div>{{ myListeners }}</div>
        <InnerChild v-on="$listeners" />
    </div>
</template>
<script>
import InnerChild from './components/InnerChild'
export default{
    components:{
        InnerChild
    },
    data(){
        return {
            myListeners: {a:1}
        }
    },
    mounted(){
        console.log(this.$listeners);
        const obj = this.$listeners;
        for(let i in obj){
            if(obj.hasOwnProperty(i)){
                this.$set(this.myListeners, i, 1);
                // this.myListeners[i] = i;
            }
        }

    }
}
</script>