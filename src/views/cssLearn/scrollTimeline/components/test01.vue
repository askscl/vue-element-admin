<template>
    <div>
         <div class="tips">
             练习01
         </div>
         <div id="g-content">
             <div id="g-box">F</div>
         </div>
         
    </div>
</template>
<script>
export default {
    name: 'stepThree',
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
#g-content{
    width: 300px;
    height: 170vh;
    background: #999;
    padding: 70vh 0 0;
}
#g-box{
    font-size: 150px;
    animation-name: rotate;
    animation-duration: 3s;
    animation-direction: alternate;
    animation-easing-function: linear;
    animation-timeline: box-rotate;
}
@keyframes rotate{
    0%{ transform: rotate(0); }
    100%{ transform: rotate(360deg); }
}
@scroll-timeline box-rotate {
    source: selector("#g-content");
}
</style>
<style scoped>

</style>