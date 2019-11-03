// Example #1
// const Singleton = new function() {
//     const single = this;

//     return function() {
//         this.test = 111;

//         return single;
//     };
// }();

// const obj1 = new Singleton();
// const obj2 = new Singleton();
// console.log(obj1 === obj2);

// Example #2
// const Singleton = (function() {
//     let instance;
//     const SERVER = "localhost";

//     function Singleton() {
//         if (!instance) {
//             instance = this;
//         }
//         return instance;
//     }

//     Singleton.prototype.connect = function() {
//         console.log(`Connect to ${SERVER}`);
//     };

//     return Singleton;
// }());

// const obj1 = new Singleton();
// const obj2 = new Singleton();
// console.log(obj1 === obj2);

// obj1.connect();

// // Example  #3
// const Singleton = (() => {
//     const instance = { param1: "111", param2: "222" };

//     return () => instance;
// })();

// const obj1 = new Singleton();
// const obj2 = new Singleton();
// console.log(obj1 === obj2);

// // Example #4
// const Singleton = (instance => {
//     return () => {
//         return instance;
//     };
// })({});

// const obj1 = Singleton();
// const obj2 = Singleton();
// console.log(obj1 === obj2);

// Example #5
const singleton = {};
const obj1 = singleton;
const obj2 = singleton;
console.log(obj1 === obj2);
