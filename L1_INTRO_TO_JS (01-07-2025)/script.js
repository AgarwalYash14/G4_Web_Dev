// console.log('HELLO WORLD')

// var a = 123

// console.log(a)

// function abc() {
//     console.log('THIS IS FUNCTION ABC')

//     function hgf() {
//         console.log('THIS IS HGF')
//     }
//     hgf()
// }

// def()

// function def() {
//     console.log('THIS IS FUNCTION DEF')
// }

// abc()

// var b = 300

// console.log(b)

// var a = 200

// console.log(a)

// xyz()

// var xyz = () => {
//     console.log('XYZ FUNCTION CALLED')
// }

// console.log(b)

// let b = 300

//Lexical Scope
// {
//     //Compound Statement

//     // Grandparent
//     let a = 100
//     let b = 200
//     let c = 300
//     console.log(a)
//     console.log(b)
//     console.log(c)

//     {
//         //Parent
//         console.log(a)
//         console.log(b)
//         console.log(c)

//         console.log(d)

//         {
//             //Child
//             let d = 2000
//             console.log(a)
//             console.log(b)
//             console.log(c)
//         }
//     }
// }

// function abc() {
//     var a = 100
//     var b = 200
//     var c = 300
//     console.log(a)
//     console.log(b)
//     console.log(c)

//     function def() {
//         var d = 400

//         function ghi() {
//             console.log(a)
//             console.log(b)
//             console.log(c)
//             console.log(d)
//         }
//         ghi()
//     }
//     def()
// }
// abc()

// for (var i = 0; i <= 5; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 2000)
// }

// for (var i = 0; i <= 5; i++) {
//     function closure(i) {
//         setTimeout(() => {
//             console.log(i)
//         }, 2000)
//     }
//     closure(i)
// }

//HOF

// function xyz(cb) {
//     console.log('I AM XYZ FUNCTION')
//     cb()
// }

// function cb() {
//     console.log('I AM CB FUNCTION')
// }

// xyz(cb)
