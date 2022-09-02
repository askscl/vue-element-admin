<!--
 * @Author: hewei
 * @Date: 2020-12-07 19:02:25
 * @Descripttion:
 * @version: 1.0
 * @Copyright: 北京先进数通信息技术股份公司
 * @LastEditors: hewei
 * @LastEditTime: 2021-09-26 16:15:55
-->
<template>
  <div class="vertical-expand-tool"
       :style="{left: placement === 'left' ? 0 : 'unset', right: placement === 'right' ? 0 : 'unset'}"
       @mousedown="handleMousedown"
       @dblclick="handleDblclick">
    <div>
      <span />
      <span />
      <span />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Slidebar',
  props: {
    initWidth: {
      type: Number,
      default: 280
    },
    miniWidth: {
      type: Number,
      default: 2
    },
    maxWidth: {
      type: Number,
      default: 600
    },
    initPadding: {
      type: String,
      default: '8px 15px'
    },
    miniPadding: {
      type: String,
      default: '8px 1px'
    },
    parent: {
      type: String | Object,
      default: '#app .main-container'
    },
    placement: {
      type: String,
      default: 'left'
    }
  },
  data() {
    return {
      asideWidth: this.initWidth,
      asidePadding: this.initPadding,
      expand: true
    }
  },
  watch: {
    asideWidth(newVal) {
      this.$emit('changeWidth', newVal)
    },
    asidePadding(newVal) {
      this.$emit('changePadding', newVal)
    }
  },
  methods: {
    handleMousedown(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else{
            e.returnValue=false;
        }
      document.onmousemove = e1 => {
        this.handleMousemove(e1.clientX)
      }

      document.onmouseup = e1 => {
        document.onmouseup = null
        document.onmousemove = null
      }
      this.$emit('mousedown', e)
    },
    handleMousemove(x) {
      let parentObj = null
      if (typeof (this.parent) === 'string') {
        parentObj = document.querySelector(this.parent)
      } else {
        parentObj = this.parent
      }
      let sidebarW = parentObj.offsetLeft
      let pp = parentObj.offsetParent
      let pleft = 0
      while (pp && pp.tagName !== 'BODY') {
        pleft += pp.offsetLeft
        pp = pp.offsetParent
      }
      sidebarW = sidebarW + pleft
      let w = x - sidebarW
      if (w <= this.miniWidth) {
        w = this.miniWidth
      }
      if (w > this.maxWidth) {
        w = this.maxWidth
      }
      this.$nextTick(() => {
        this.asideWidth = w
        if (w <= 40) {
          this.asidePadding = this.miniPadding
        } else {
          this.asidePadding = this.initPadding
        }
      })
    },
    handleDblclick(e) {
      if (this.expand) {
        this.asidePadding = this.miniPadding
        this.asideWidth = this.miniWidth
        this.expand = false
      } else {
        this.asideWidth = this.initWidth
        this.asidePadding = this.initPadding
        this.expand = true
      }
      this.$emit('dblclick', e)
    },

  }
}
</script>

<style lang="scss" scoped>
.vertical-expand-tool {
  width: 6px;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #dcdfe6;
  cursor: ew-resize;
  display: flex;
  align-items: center; /*垂直居中*/
  justify-content: center; /*水平居中*/
  border-radius: 10px;
  z-index: 2;
  span {
    height: 2px;
    width: 6px;
    background: #909399;
    display: block;
    margin: 5px 0;
    border-radius: 10px;
    box-shadow: 0px 1px 3px rgba(34, 25, 25, 0.2);
  }
}
</style>
