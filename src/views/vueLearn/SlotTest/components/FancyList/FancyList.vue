<template>
    <div>
        <ul>
            <li v-for="item in items" :key="item.username">
                <slot name="item" v-bind="item"></slot>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items:[
                {
                    body: '我是一段话',
                    username: '小军',
                    likes: 99
                },
                {
                    body: '我是一段话2',
                    username: '小绿',
                    likes: 58
                },
            ]
        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
</style>