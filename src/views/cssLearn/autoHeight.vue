<template>
  <div class="content">
    <div class="box"></div>
    <div class="box"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content{
    display: flex;
    // align-items: strectch;//子项高度占满容器
    height: calc(100vh - 84px);
    .box{
        flex: 1; //flex: 1 1 auto; flex-grow: 1; flex-shrink: 1; flex-basis: auto;
        &:nth-child(1){
            background: #666;
        }
        &:nth-child(2){
            background: green;
        }
    }
}

</style>
