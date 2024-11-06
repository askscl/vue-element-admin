<template>
    <div
      class="el-tree-node"
      @click.stop="handleClick"
      @contextmenu="($event) => this.handleContextMenu($event)"
      v-show="node.visible"
      :class="{
        'is-expanded': expanded,
        'is-current': node.isCurrent,
        'is-hidden': !node.visible,
        'is-focusable': !node.disabled,
        'is-checked': !node.disabled && node.checked
      }"
      role="treeitem"
      tabindex="-1"
      :aria-expanded="expanded"
      :aria-disabled="node.disabled"
      :aria-checked="node.checked"
      :draggable="tree.draggable"
      @dragstart.stop="handleDragStart"
      @dragover.stop="handleDragOver"
      @dragend.stop="handleDragEnd"
      @drop.stop="handleDrop"
      ref="node"
      :style="node.level ===3 ?`min-height:${liHei}px; transform: translateY(${scrollLiHeis}px)` : ''"
    >
      <div class="el-tree-node__content"
        :style="{ 'padding-left': (node.level - 1) * tree.indent + 'px' }">
        <span
          @click.stop="handleExpandIconClick"
          :class="[
            { 'is-leaf': node.isLeaf, expanded: !node.isLeaf && expanded },
            'el-tree-node__expand-icon',
            tree.iconClass ? tree.iconClass : 'el-icon-caret-right'
          ]"
        >
        </span>
        <el-checkbox
          v-if="showCheckbox"
          v-model="node.checked"
          :indeterminate="node.indeterminate"
          :disabled="!!node.disabled"
          @click.native.stop
          @change="handleCheckChange"
        >
        </el-checkbox>
        <span
          v-if="node.loading"
          class="el-tree-node__loading-icon el-icon-loading">
        </span>
        <node-content :node="node"></node-content>
      </div>
      <el-collapse-transition>
        <div
          class="el-tree-node__children"
          v-if="!renderAfterExpand || childNodeRendered"
          v-show="expanded"
          role="group"
          :aria-expanded="expanded"
          @scroll="liScroll"
        >
          <el-tree-node
            :render-content="renderContent"
            v-for="child in node.childNodes"
            :render-after-expand="renderAfterExpand"
            :show-checkbox="showCheckbox"
            :key="getNodeKey(child)"
            :node="child"
            @node-expand="handleChildNodeExpand">
          </el-tree-node>
        </div>
      </el-collapse-transition>
    </div>
  </template>
<script>
/*
卡点：
0.v-for="child in node.childNodes" 这里的node.childNodes替换成动态的居然不可以
1.子节点的列表是递归获取的，不知道如何替换成动态的
2.每个子节点列表的高度是不固定的
3.模块化：每个子节点列表是一个模块，用一个对象来管理数据？
*/
import  ElTreeNode from 'element-ui/packages/tree/src/tree-node.vue'
// console.log('===========111111');
export default {
    extends: ElTreeNode,
    name: 'ElTreeNode',
    componentName: 'ElTreeNode',
    mounted(){
        // console.log(this.node);
    },
    computed:{
        getChildNodes(){
            console.log(this.node.level);
            if(this.node.childNodes.length > 0 && this.node.level === 2){
                return this.liList
            }else{
                console.log('this.node.childNodes111: ', this.node.childNodes);
                return this.node.childNodes
            }
        }
    },
    data(){
        return {
            tableList: [], //this.node.childNodes
            liList: [],

            liHei: 26,
            ulHei: 500,
            liLen: 0,//一页显示多少条

            scrollHei: 0,//滚动条滚动的距离
            scrollLiHeis: 0,//已经滚动的li距离=======自身-余数 = liHei的整数倍,这个变量是整个虚拟滚动的核心
            lastTime: 0
        }
    },
    methods: {
        liScroll(e) {
            if(this.node.childNodes.length > 0 && this.node.level === 2 && (new Date().getTime() - this.lastTime) > 40){
                this.scrollHei = e.target.scrollTop;
                // console.log(this.scrollLiHeis);
                this.scrollLiHeis = this.scrollHei - this.scrollHei % this.liHei; //自身-余数 = liHei的整数倍：为了让hasScrollLiNum的计算结果是整数，这个变量是整个虚拟滚动的核心
                const hasScrollLiNum = this.scrollLiHeis / this.liHei;
                // console.log('hasScrollLiNum:',hasScrollLiNum);
                this.liList = this.tableList.slice(hasScrollLiNum, hasScrollLiNum + this.liLen);
                this.lastTime = new Date().getTime();
            }
        },
        /**初始化数据
         * --不知道要在哪里开始，展开的时候开始，居然不行？为什么？
         * */
        virtualScrolling() {
            console.log('初始化数据this.node.childNodes: ', this.node.childNodes);
            this.tableList = this.node.childNodes;

            //此外+4,让滚动条可滚动足够的距离来触发改变页面的内容 ，不加也可以，但是可以滚动的距离太短用户体验不好
            this.liLen = Math.floor(this.ulHei / this.liHei) + 4;
            this.liList = this.tableList.slice(0, this.liLen);
            this.lastTime = new Date().getTime();

        },
        handleChildNodeExpand(nodeData, node, instance) {
            this.broadcast('ElTreeNode', 'tree-node-expand', node);
            this.tree.$emit('node-expand', nodeData, node, instance);
            /* if(this.node.childNodes.length > 0 && this.node.level === 2){
                this.virtualScrolling()
            } */
        },
    }
}
</script>
<style lang="scss" scoped>
    .el-tree-node.is-expanded > .el-tree-node__children{
        max-height: 300px;
        overflow-y: auto;
    }
    .el-tree-node{

    }
</style>
