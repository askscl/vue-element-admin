<template>
    <div class="content">
         <div class="tips">
            <h2>撑满高度的方法</h2>
            <ul>
                <li>1.父亲元素有固定的高度，子元素高度设为100%</li>
                <li>2.父亲元素有固定的高度,并且display: flex;子元素flex: 1</li>
                <li>3.获取父亲的高度，用js给子元素的高度设值</li>
            </ul>
         </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    mounted(){
        this.setHeightFull();
        this.resizeHeight();
    },
    beforeDestroy(){
        window.removeEventListener('resize');
    },
    methods:{
        setHeightFull(){
            const appDom = window.document.querySelector('.app-main');
            const tipDom = window.document.querySelector('.tips');
            const heightVal = appDom.clientHeight;
            console.log(heightVal);
            tipDom.style.height = heightVal + 'px';
        },
        resizeHeight(){
            window.addEventListener('resize', () =>{
                this.setHeightFull();
            })
        }
    }
}
</script>
<style lang="scss" scoped>

.content{
    
}
.tips{
    h2{ margin: 0;}
    background: greenyellow;
}
</style>