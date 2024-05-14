<template>
    <div>
        innerListeners{{ myListeners }}
    </div>
</template>
<script>
export default{
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
        this.$emit('m1', {name: 'innerData'});
        this.$emit('m2', {name: 'innerData2'});

    }
}
</script>