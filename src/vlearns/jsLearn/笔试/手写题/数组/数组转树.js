/* 
将数组处理成以下 tree结构
const data = [
    { id: 2, title: '部门 2', pid: 1, children: [] },
    { id: 3, title: '部门 3', pid: 1, children: [] },
    { id: 4, title: '部门 4', pid: 3, children: [] },
    { id: 1, title: '部门 1', pid: 0, children: [] },
    { id: 5, title: '部门 5', pid: 4, children: [] }
];
[
  {
    "id": 1,
    "title": "部门 1",
    "pid": 0,
    "children": [
      {
        "id": 2,
        "title": "部门 2",
        "pid": 1,
        "children": []
      },
      {
        "id": 3,
        "title": "部门 3",
        "pid": 1,
        "children": [
          {
            "id": 4,
            "title": "部门 4",
            "pid": 3,
            "children": [
              {
                "id": 5,
                "title": "部门 5",
                "pid": 4,
                "children": []
              }
            ]
          }
        ]
      }
    ]
  }
]
*/

const data = [
    { id: 2, title: '部门 2', pid: 1, children: [] },
    { id: 3, title: '部门 3', pid: 1, children: [] },
    { id: 4, title: '部门 4', pid: 3, children: [] },
    { id: 1, title: '部门 1', pid: 0, children: [] },
    { id: 5, title: '部门 5', pid: 4, children: [] }
];
function buildTree(data){
    const tree =  [];
    data.forEach(item => {
        if(item.pid === 0 ){
            tree.push(item)
        }else{
            const parent = data.find(i => i.id === item.pid);
            if(parent){//注意考虑没找到的情况
                parent.children.push(item);
            }
            
        }
    });
    return tree;
}

console.log(JSON.stringify(buildTree(data), null, 2));