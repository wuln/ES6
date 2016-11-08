'use strict';

// function test(resolve, reject) {
//     var timeOut = (Math.random() * 2).toFixed(1);
//     console.log('set timeout to: ' + timeOut + ' seconds.');
//     setTimeout(function () {
//         if (timeOut < 1) {
//             console.log('call resolve()...');
//             resolve('200 OK');
//         }
//         else {
//             console.log('call reject()...');
//             reject('timeout in ' + timeOut + ' seconds.');
//         }
//     }, timeOut * 1000);
// }

// // Promise对象负责执行test函数,异步执行
// var p = new Promise(test).then(function (result) {
//     console.log('成功：' + result);
// }).catch(function (reason) {
//     console.log('失败：' + reason);
// });


var p = new Promise((resolve, reject) => {
    var timeOut = (Math.random() * 2).toFixed(1);
    console.log('set timeout to: ' + timeOut + ' seconds.');
    setTimeout(() => {
        if (timeOut < 1) {
            console.log('call resolve()...');
            resolve('200 OK');
        } else {
            console.log('call reject()...');
            reject('timeout in ' + timeOut + ' seconds.');
        }
    }, timeOut * 1000);
}).then((result) => {
    console.log('成功：' + result);
}).catch((err) => {
    console.log('失败：' + err);
});