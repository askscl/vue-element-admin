<template>
    <div>
        <div id="header">#header</div>
        <div id="container">
            <div id="left" class="column">#left</div>
            <div id="center" class="column">#center</div>
            <div id="right" class="column">#right</div>
        </div>
        <div id="footer">#footer</div>
    </div>
</template>
<script>
export default {
    name: 'Test0N',
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
body {
    min-width: 550px;
    font-weight: bold;
    font-size: 20px;
}
#header,
#footer {
    background: rgba(29, 27, 27, 0.726);
    text-align: center;
    height: 60px;
    line-height: 60px;
}
#container {
    display: flex;
}
#container .column {
    text-align: center;
    height: 300px;
    line-height: 300px;
}
#center {
    flex: 1;
    background: rgb(206, 201, 201);
}
#left {
    width: 200px;
    background: rgba(95, 179, 235, 0.972);
}
#right {
    width: 150px;
    background: rgb(231, 105, 2);
}
</style>
