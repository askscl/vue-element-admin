<template>
    <div class="contentP">
        <h4>边界线功能</h4>
        <el-container class="content">
            <el-aside class="tree" :width="asideWidth + 'px'" :style="{ padding: asidePadding }">
                <div class="cont">
                    1
                </div>
            </el-aside>
            <el-main class="detail">
                <slidebar parent=".content" @changeWidth="handleChangeWidth" @changePadding="handleChangePadding" @dblclick="handleDblclickSlidebar" @mousedown="handleMousedownSlidebar" />
                <div class="cont">2</div>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import Slidebar from '@/components/Slidebar'
export default {
    name: 'testLine',
    components: {
        Slidebar
    },
    data() {
        return {
            asideWidth: 400,
            asidePadding: '8px 6px 0 15px',
        }
    },
    methods: {
        handleChangeWidth(val) {
            this.asideWidth = val
        },
        handleChangePadding(val) {
            this.asidePadding = val
        },
        // 分界栏双击
        handleDblclickSlidebar() {
            // this.initDraw()
        },
        // 分界栏鼠标松开
        handleMousedownSlidebar() {
            // this.initDraw()
        },
    }
}
</script>
<style lang="scss" scoped>
.contentP{
    background: #999;
}
.content{
    border-radius: 15px;
    width: 800px;
    overflow: hidden;
    margin-left: 100px;
    background: #fff;
}
.tree {
    height: 100%;
    margin-bottom: 0;
    padding-right: 20px !important;
    .cont{
        background: gray;
    }
    
}
.detail {
    background: greenyellow;
    position: relative;
    height: 300px;
}
</style>
