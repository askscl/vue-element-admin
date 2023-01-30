<template>
    <div>
        <div class="tips">
            注入别名 {{localMessage}} {{user.name}}
        </div>
    </div>
</template>
<script>

export default {
    inject: {
        localMessage: {
            from: 'message',
            default: 'default value'
        },
        user: {
            default: () => ({name: 'John'})
        }
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>
<style lang="scss" scoped>
</style>