<template>
    <div>
        <div class="tips">
            树的测试
        </div>
        <el-tree :props="props" :load="loadNode" lazy>
        </el-tree>
    </div>
</template>
<script>
export default {
    name: 'TestN',
    data() {
        return {
            props: {
                label: 'name',
                children: 'zones',
                isLeaf: 'leaf'
            },
        }
    },
    methods: {
        loadNode(node, resolve) {
            console.log(node);
            if (node.level === 0) {
                return resolve([{ name: 'region' }]);
            }
            if (node.level > 1) return resolve([{
                name: '公司',
                leaf: true
            }]);

            setTimeout(() => {
                const data = [{
                    name: 'leaf',
                    leaf: true
                }, {
                    name: 'zone'
                }];

                resolve(data);
            }, 500);
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
