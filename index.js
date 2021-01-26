// reactivity 响应式实现

// const { effect, reactive } = require('@vue/reactivity')
// const { effectWatch, reactive } = require('./core/reactivity')
import { effectWatch, reactive } from './core/reactivity/index.js'

// v1
// let a = 10
// let b = a + 10
// console.log(b)

// a = 20
// b = a + 10
// console.log(b)

// v2
// let a = 10
// let b
// update()
// function update() {
//     b = a + 10
//     console.log(b)
// }

// a = 20
// update()

// v3
// a 发生变更了，我想让 b 自动更新
// 声明一个响应式对象
let a = reactive({
    value: 1,
})
let b
effectWatch(() => {
    // 函数
    // 1. 会执行以下
    b = a.value + 10
    console.log(b)
})

// a 响应式对象的值发生改变之后 再次执行
a.value = 30