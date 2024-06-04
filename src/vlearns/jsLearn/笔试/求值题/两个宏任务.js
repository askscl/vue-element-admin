// h0 - 最外层同步任务
console.log(0)   
      
// h1   
setTimeout(() => {      
    // h3     
  setTimeout(()=>{console.log(6)},0)    
  console.log(1) //
  var p2 = new Promise((n1, n2) => {
    n1(1000)
  })
  p2.then(()=>{console.log(7)}) //
}, 0)

// h2
setTimeout(() => {
    // h4
  setTimeout(() => {console.log(2)}, 200) //
  var p3 = new Promise((n1, n2) => {
    n1(1000)
  })
  p3.then(()=>{console.log(8)})//
  console.log(2)//
}, 0)

var p1 = new Promise((n1, n2) => {
  n1(1000)
})

p1.then(() => {console.log(3)})             //

console.log(5) 