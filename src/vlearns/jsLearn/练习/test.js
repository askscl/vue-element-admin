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
    { id: 5, title: '部门 5', pid: 4, children: [] },
    { id: 6, title: '部门 6', pid: 7, children: [] }
];

function buildTree(data) {
    let tree = [];
    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.pid === 0) {
            tree.push(item);
        } else {
            const parent = data.find(p => p.id === item.pid);
            if (parent) {
                const children = parent.children || [];
                children.push(item);
                parent.children = children;
            }
        }
    }
    return tree;
}

const tree = buildTree(data);
console.log(JSON.stringify(tree, null, 2));