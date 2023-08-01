<template>
    <div id="app">
        <input type="text" v-model.number="dataLength">条 

        <div >
            <!-- 列表总高 -->
            <ul class="phantom" ref="scrollsss" @scroll="onScroll">
                <!-- 列表偏移量 -->
                <Item :style="{'transform': `translateY(${scrollTop}px)`}" v-for="item in visibleList" 
                    :item="item" :index="item.index" :key="item.brandId" @update-height="updateItemHeight" />
            </ul>
        </div>


    </div>
</template>
   
<script>
import Item from '../vScrollPro/Item.vue';
export default {
    components: {
        Item
    },
    data() {
        /* 
            不定高度的虚拟滚动    

            此为加强精简版，去掉第一版无用的数据逻辑
            
            思路：
                1.比定高的虚拟滚动多开辟两个数组，用来存储每一个li的高度，每一个li距离顶部的高度
                2.渲染后更新，每个索引位置的li高度，及每一个li距离顶部的高度（直接for循环即可）liHeight[i] = liTopHeight[i-1] + liHeight[i-1]
                3.监听滚动距离，将其在li距离顶部高度的数组里，进行二分查找，然后找到对应的索引，作为起始索引
        */
        return {
            visibleCount: 10, // 可视窗口展示项
            dataLength: 100, // 模拟列表项
            startIndex: 0, // 截取数组的 起始 索引
            endIndex: 10, // 截取数组的 结束 索引
            scrollTop: 0, // 距离顶部的偏移量
            bufferItemCount: 4,  // 缓冲加载项

            dataList: [], // 数据列表
            itemHeightCache: [], // 每一项高度
            itemTopCache: [] // 每一项距顶部的实际高度
        };
    },
    computed: {
        // 截取要展示的数据
        visibleList() {
            return this.dataList.slice(this.startIndex, this.endIndex + this.bufferItemCount);
        }
    },
    created() {
        // 初始化demo的列表数据项
        this.dataList = this.getDataList();
    },
    methods: {
        getDataList() {
            console.log(this.dataLength);
            // 100展开为数组后为每一条数据添加属性
            const newDataList = [...Array(this.dataLength || 0).keys()].map((v, i) => ({
                index: i,
                brandId: i + 1,
                name: `第${i + 1}项`,
                height: Math.floor(Math.max(Math.random() * 10, 5)) * 10
            }));
            console.log(newDataList);
            return newDataList;
        },
        //渲染时，更新每一项的高度数组，和每一项距离顶部的高度数组
        updateItemHeight({ index, height }) {
            // dom元素加载后得到实际高度 重新赋值回去
            this.itemHeightCache[index] = height;
            
            let newItemTopCache = [0];
            for (let i = 1, l = this.itemHeightCache.length; i < l; i++) {
                // 虚拟每项距顶部高度 + 实际每项高度
                newItemTopCache[i] = this.itemTopCache[i - 1] + this.itemHeightCache[i - 1]
            };
            // 获得每一项距顶部的实际高度
            this.itemTopCache = newItemTopCache;
        },
        // 获取渲染项起始索引
        getStartIndex(scrollTop) {
            // 每一项距顶部的距离
            let arr = this.itemTopCache;
            let index = -1;
            let left = 0,
                right = arr.length - 1,
                mid = Math.floor((left + right) / 2);
            // 判断 有可循环项时进入
            while (right - left > 1) {
                /*
                  二分法：拿每一次获得到的 距顶部距离 scrollTop 同 获得到的模拟每个列表据顶部的距离作比较。
                  arr[mid] 为虚拟列高度的中间项 
                  不断while 循环，利用二分之一将数组分割，减小搜索范围
                  直到最终定位到 目标index 值
                */
                // 目标数在左侧
                if (scrollTop < arr[mid]) {
                    right = mid;
                    mid = Math.floor((left + right) / 2);
                } else if (scrollTop > arr[mid]) {
                    // 目标数在右侧
                    left = mid;
                    mid = Math.floor((left + right) / 2);
                } else {
                    index = mid;
                    return index;
                }
            }
            index = left;
            return index;
        },
        onScroll() {
            
            // console.log(this.$refs.scrollsss.scrollTop);
            const scrollTop = this.$refs.scrollsss.scrollTop;
            // console.log('scrollTop', scrollTop);
            let startIndex = this.getStartIndex(scrollTop);
            // 如果是奇数开始，就取其前一位偶数
            if (startIndex % 2 !== 0) {
                this.startIndex = startIndex - 1;
            } else {
                this.startIndex = startIndex;
            }
            this.endIndex = this.startIndex + this.visibleCount;
            this.scrollTop = this.itemTopCache[this.startIndex] || 0;
        }
    }
};
</script>
   
<style scoped lang="scss">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.phantom {
    border: solid 1px #eee;
    margin-top: 10px;
    height: 600px;
    overflow: auto;
}

ul {
    background: #ccc;
    list-style: none;
    padding: 0;
    margin: 0;
    li {
        outline: solid 1px #fff;
        &:nth-child(2n) {
            background: #fff;
        }
    }
}
</style>