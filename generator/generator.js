'use strict';
function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

// 直接调用一个generator和调用函数不一样，helloWorldGenerator()仅仅是创建了一个generator指针对象（遍历器）
// 还没有去执行它。调用generator对象有两个方法

var hw = helloWorldGenerator();

// 一是不断地调用generator对象的next()方法

// 每次遇到yield x;就返回一个对象{value: x, done: true/false}，然后“暂停”

// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());
// console.log(hw.next());

// 第二个方法是直接用for ... of循环迭代generator对象，不需要自己判断done
for (var x of hw) {
    console.log(x); 
}

// eg1:自增生成id
function* next_id(){
    var i=0;
    while(i < 10){
        yield ++i;
    }        
}

var x,
    pass = true,
    g = next_id();
for (x = 1; x < 10; x++) {
    if (g.next().value !== x) {
        pass = false;
        console.log('测试失败!');
        break;
    }
}
if (pass) {
    console.log('测试通过!');
}

// eg2:暂缓执行函数
function* f() {
  console.log('执行了！')
}

var generator = f();

setTimeout(function () {
  generator.next();
}, 2000);