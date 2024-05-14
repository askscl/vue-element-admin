<template>
    <div>
        innerAttrs: {{ myAttrs }}
    </div>
</template>
<script>
export default {
    data(){
        return {
            myAttrs: {}
        };
    },
    mounted(){
        console.log('innerAttrs:', this.$attrs);
        const obj = this.$attrs;
        for(let i in obj){
            if(obj.hasOwnProperty(i)){
                this.$set(this.myAttrs, i, obj[i]);
                // this.myAttrs[i] = i;
            }
        }
    },
}
</script>