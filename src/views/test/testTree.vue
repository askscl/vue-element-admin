<template>
    <div>
        <div class="tips">
            懒加载树测试
        </div>
        <div class="content">
            <el-tree :props="props" :load="loadNode" lazy class="myTree">
            </el-tree>
            <el-tree2 :props="props" :load="loadNode" lazy class="myTree">
            </el-tree2>
        </div>

    </div>
</template>
<script>
export default {
    mounted() {
        this.makeData();
    },
    data() {
        return {
            props: {
                label: 'name',
                children: 'zones',
                isLeaf: 'leaf'
            },
            childrenData: []
        }
    },
    methods: {
        makeData(maxNums = 500) {
            for (let i = 0; i < maxNums; i++) {
                this.childrenData.push({
                    name: `${i}-传播的同学们分享一下真实的个体经验`,
                    leaf: true
                })
            }
        },
        loadNode(node, resolve) {

            // console.log(node);

            if (node.level === 0) {
                return resolve([{ name: 'region' }]);
            }
            if (node.level > 1) return resolve(this.childrenData);

            setTimeout(() => {
                const data = [
                    {
                        name: 'leaf',
                        leaf: true
                    }, {
                        name: 'zone'
                    }
                ];

                resolve(data);
            }, 1000);
        }
    }
}
</script>
<style lang="scss" scoped>
.content {
    display: flex;
    justify-content: space-around;
    height: 100%;
    .myTree {
        width: 400px;
        border: 1px solid #ccc;
        overflow: auto;
    }
}
</style>
