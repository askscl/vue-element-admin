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
    align-items: strectch;
    height: calc(100vh - 84px);
    .box{
        flex: 1;
        &:nth-child(1){
            background: #666;
        }
        &:nth-child(2){
            background: green;
        }
    }
}

</style>
