<template>
  <div>
    <div class="tips">测试iframe通信111</div>
    <div class="tips">{{ message }}</div>
    <div v-show="message" class="tips">好个鬼</div>
  </div>
</template>
<script>
export default {
  name: 'Test01',
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    window.addEventListener('message', (e) => {
      const res = e.data
      if (res.code == 1) {
        this.message = e.data.content
        console.log('我收到了：', e.data.content)
        console.log('我回答：很好！')
      }
    })
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
</style>
