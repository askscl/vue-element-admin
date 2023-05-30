<template>
    <div>
        <h2>两栏布局</h2>
        <div class="tips">
            <div class="left"></div>
            <div class="content"></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
.tips{
    display: flex;
}
.left{
    width: 200px;
    height: 80vh;
    background: yellowgreen;
}
.content{
    flex-grow: 1;
    background: wheat;
}
</style>
