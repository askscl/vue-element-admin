// 面试题:上传20张图片，保持5张5张上传，5张里如果有一张已经上传成功，然后就补上一张，就一直维持5张图片在上传，这个怎么实现

// 上传若干张图片，保持5张5张上传，5张里如果有一张已经上传成功，然后就补上一张，就一直维持5张图片在上传，这个怎么实现？



function limitPromise(promises, limit) {
    const result = [];
    return new Promise(resolve => {
      // 命名一个递归函数来处理 Promise
      function next() {
        // 如果 Promise 列表已经空了，则只需要进行最后一次 allPromise，然后输出结果。
        if (promises.length === 0) {
          Promise.all(result).then(resolve);
          return;
        }
        // 如果 Promise 列表中还有元素，则先取出前 limit 个元素，然后进行一次 allPromise
        const list = promises.splice(0, limit);
        Promise.all(list).then(res => {
          // 再次全部处理完毕后，将当前的结果 push 到 result 列表中
          result.push(...res);
          // 继续递归执行 next 函数，处理余下的 Promise
          next();
        });
      }
      next();
    });
  }


(async () => {
    async function limitPromise(promises, limit) {
      const result = [];
      return new Promise(resolve => {
        let count = 0, queue = promises.concat([]);
        const initP = [];
        const p = () => {
          if (queue.length === 0) return;
          const cur = queue.shift();
          cur().then(res => {
            console.log('resultCur', result)
            result.push(res);
            count++;
            if (count >= promises.length) {
              resolve(result);
            } else {
              p();
            }
          })
        }
        for (let i = 0; i < limit; i++) {
          initP.push(p());
        }
        Promise.all(initP)
      });
    }
  
    const promises = [
      () => new Promise(resolve => setTimeout(() => { console.log(1); resolve(1); }, 3000)),
      () => new Promise(resolve => setTimeout(() => { console.log(2); resolve(2); }, 4000)),
      () => new Promise(resolve => setTimeout(() => { console.log(3); resolve(3); }, 5000)),
      () => new Promise(resolve => setTimeout(() => { console.log(4); resolve(4); }, 6000)),
      () => new Promise(resolve => setTimeout(() => { console.log(5); resolve(5); }, 7000)),
      () => new Promise(resolve => setTimeout(() => { console.log(6); resolve(6); }, 8000)),
      () => new Promise(resolve => setTimeout(() => { console.log(7); resolve(7); }, 8000)),
      () => new Promise(resolve => setTimeout(() => { console.log(8); resolve(8); }, 8000)),
      () => new Promise(resolve => setTimeout(() => { console.log(9); resolve(9); }, 8000)),
      () => new Promise(resolve => setTimeout(() => { console.log(10); resolve(10); }, 8000)),
      () => new Promise(resolve => setTimeout(() => { console.log(11); resolve(11); }, 8000)),
      () => new Promise(resolve => setTimeout(() => { console.log(12); resolve(12); }, 8000)),
    ]
    const res = await limitPromise(promises, 5)
    console.log('result', res)
  })()




  const urls = [
    'http://1.jpg',
    'http://2.jpg',
    'http://3.jpg',
    'http://4.jpg',
    'http://5.jpg',
    'http://6.jpg',
    'http://7.jpg',
    'http://8.jpg',
    'http://9.jpg',
    'http://10.jpg',
    'http://11.jpg',
    'http://12.jpg',
    'http://13.jpg',
    'http://14.jpg',
    'http://15.jpg',
    'http://16.jpg',
    'http://17.jpg',
    'http://18.jpg',
    'http://19.jpg',
    'http://20.jpg'
  ]
  
  // 模拟上传
  const uploadImg = (url) => {
    return new Promise(resolve => {
      console.log(`[开始]${url}`);
      setTimeout(() => {
        resolve(url);
        console.log(`[上传完成]${url}`);
      }, 3000 * Math.random());
    });
  }
  
  // 1. 并发5张
  // 2. 补充间隔 100ms，上传下一张
  const warpRequest = (imgList) => {
    // 请求状态标记位
    const resultMap = {};
    imgList.forEach(url => {
      resultMap[url] = false;
    });
    
    let index = 0;
    
    return new Promise(resolve => {
      const download = () => {
        // 跳出条件
        if (index >= imgList.length) {
          if (!Object.keys(resultMap).find(key => resultMap[key] === false)) {
            resolve(resultMap);
          }
          return ;
        }
  
        // 上传图片
        const tempUrl = imgList[index];
        uploadImg(tempUrl).then(res => {
          resultMap[tempUrl] = res;
          setTimeout(download, 100);
        });
  
        // 计数器 +1
        ++index;
      }
  
      while (index < 5) {
        download();
      }
    });
  }
  
  (async () => {  
    const result = await warpRequest(urls);
    console.log(result);
  })();