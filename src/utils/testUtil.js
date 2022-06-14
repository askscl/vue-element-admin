// 公共方法测试 start
import { fetchPv as getUtilsListApi } from '@/api/article'
export function getUtilsNumber() {
    return 99
}
export function getUtilsList() {
    let list = []
    // list = [1, 99, 100]
    list = [
        { key: 'PC', pv: 1024 },
        { key: 'mobile', pv: 1024 },
        { key: 'ios', pv: 1024 },
        { key: 'android', pv: 1024 }
    ]
    return list
}
export async function getUtilsList2() {
    let list = []
    list = [1, 99, 100]
    let res = await getUtilsListApi()
    // console.log(res)
    list = res.data.pvData
    // console.log(list)
    return list
}

// 公共方法测试 end