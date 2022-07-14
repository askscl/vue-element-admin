<template>
    <div>
         <div class="tips">
             <!-- 旋转的F -->
         </div>
         <div class="g-pre">
            <!-- 只能1，（2，3），分两组展示 -->
            <!-- <div class="g-content">
                <div id="g-box1" class="g-box">F</div>
            </div> -->

            <div class="g-content">
                <div id="g-box2" class="g-box">F</div>
            </div>

            <div class="g-content">
                <div id="g-box3" class="g-box">F</div>
            </div>
         </div>
         
         
    </div>
</template>
<script>
export default {
    name: 'test03',
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>
<style lang="scss" scoped>
.g-pre{
    display: flex;
    justify-content: space-between;
}
.g-content{
    width: 300px;
    height: 170vh;
    background: #999;
    margin: 0 auto;
    padding: 70vh 0 0;
}
.g-box{
    font-size: 150px;
    background: rgba(218, 115, 20, 0.658);
    animation-name: move;
    animation-duration: 3s;
    animation-fill-mode: both;
    
}
#g-box1{ animation-timeline: box-move1;}
#g-box2{ animation-timeline: box-move2;}
#g-box3{ animation-timeline: box-move3;}

@keyframes move {
    0%{
        transform: translate(-100%, 0);
        opacity: 0;
    }
    100%{
        transform: translate(0, 0);
        opacity: 1;
    }
}
/* @scroll-timeline box-move1 {
    source: auto;
    orientation: 'vertical';
    scroll-offsets:
        selector(#g-box1) end 0,
        selector(#g-box1) end 1;
    // 旧的语法
    start: selector(#g-box1) end 0;
    end: selector(#g-box1) end 1;
    time-range: 1s;
} */
@scroll-timeline box-move2 {
    source: auto;
    orientation: 'vertical';
    scroll-offsets:
        selector(#g-box2) end 1,
        selector(#g-box2) start 1;
    // 旧的语法
    start: selector(#g-box2) end 1;
    end: selector(#g-box2) start 1;
    time-range: 1s;
}
@scroll-timeline box-move3 {
    source: auto;
    orientation: 'vertical';
    scroll-offsets:
        selector(#g-box3) start 1,
        selector(#g-box3) start 0;
    // 旧的语法
    start: selector(#g-box3) start 1;
    end: selector(#g-box3) start 0;
    time-range: 1s;
} 
</style>
<style scoped>

</style>