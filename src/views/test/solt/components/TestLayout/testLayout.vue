<template>
    <div>
        
        <p>模版</p>
        <!-- header,main,footer是html5标签，不是组件 -->

        <header>
            <slot name="ttt"></slot>
        </header>
        
        <main>
            <slot></slot>
        </main>
        
        <footer>
            <slot name="footer"></slot>
        </footer>

    </div>
</template>
<script>
export default {
    name: "testLayout",
    components:{
    },
    data() {
        return {};
    },
    methods: {},
};
</script>
<style lang="scss" scoped>
</style>