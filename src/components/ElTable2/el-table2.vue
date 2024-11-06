<script>
/**
 * 修复element-ui table组件在外层table在设置maxHeight为百分比/vh时，表格身体高度计算错误的问题
 *
 * 源码查找：
 *  1.先关闭排除文件的过滤规则，再通过css类名，在全局搜索里找Table组件
 *
 * 修复方案：
 *  1.继承原有的Table组件
 *  2.重写fixedBodyHeight计算属性
 *  3.在fixedBodyHeight计算属性中，判断maxHeight是否为百分比，如果是，则使用calc()计算高度
 *  4.在calc()计算高度时，需要判断表格是否有横向滚动条，如果有，则需要减去gutterWidth
 *  5.在calc()计算高度时，需要减去表格的header和footer的高度
 * */
import { Table } from 'element-ui';
import { parseHeight } from 'element-ui/packages/table/src/util.js';
export default {
    extends: Table,
    computed: {
        fixedBodyHeight() {
            // console.log('==========1111=========')
            if (this.height) {
                return {
                    height: this.layout.fixedBodyHeight ? this.layout.fixedBodyHeight + 'px' : ''
                };
            } else if (this.maxHeight) {
                let maxHeight = parseHeight(this.maxHeight);
                if (typeof maxHeight === 'number') {
                    maxHeight = this.layout.scrollX ? maxHeight - this.layout.gutterWidth : maxHeight;
                    if (this.showHeader) {
                        maxHeight -= this.layout.headerHeight;
                    }
                    maxHeight -= this.layout.footerHeight;
                    return {
                        'max-height': maxHeight + 'px'
                    };
                }else if(maxHeight.match(/\d+(vh|%)/g)){
                    // 整个if为修复后的代码--此处修复=====vh和百分比======的问题
                    let resHeight = this.layout.scrollX ? `100% - ${this.layout.gutterWidth}px`: "100%"; //判断表格是否有横向滚动条，如果有，则需要减去gutterWidth
                    if (this.showHeader) {
                        resHeight = `${resHeight} - ${this.layout.headerHeight}px`;
                    }
                    resHeight = `${resHeight} - ${this.layout.footerHeight}px`;
                    return {
                        'max-height': `calc(${resHeight})`
                    };
                }
            }
            return {};
        },
    }
}
</script>
<style scoped>
/* 以下三个css修复=====更改表格的布局方式为flex布局=======的问题 */
.el-table{
    display: flex;
    flex-direction: column;
}
.el-table >>> .el-table__header-wrapper{
    flex-shrink: 0;
}
.el-table >>> .el-table__body-wrapper{
    flex-grow: 1;
}
</style>
