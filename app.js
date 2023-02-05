//----------------------------------BACKEND MASALALAR--------------------------------------------//

// let a = "AZIZA";
// function ot(a) {
//   if (a === a.split("").reverse().join("")) {
//     return true;
//   }
//   return false;
// }
// console.log(ot(a));

//-----------------------------------------------//

// let nums = [1, 4, 9, 7, 6, 3, 8, 5, 2];
// let target = 9;
// const num = () => {
//   for (const a of nums) {
//     for (const b of nums) {
//       if (nums[a] + nums[b] === target) {
//         console.log(nums[a], nums[b]);
//       }
//     }
//   }
// };
// num();

//-----------------------------------------------//

// const nums = [0, 1, 1, 2, 4, 3, 0, 3, 4, 4, 5, 6]
// const arr = []

// nums.map((num) => {
//     if (!arr.includes(num)) {
//         arr.push(num)
//     } else {
//         arr.push('_')
//     }
// })
// const natija = arr.sort()
// console.log(natija)

//-----------------------------------------------//

// const arr = [1, 5, 3, [1, 3, 2, [2, [[1, [4]]]]]]
// console.log(arr.flat(Infinity))

//-----------------------------------------------//

// setTimeout(()=>{
//     setTimeout(()=>{
//         console.log(1);
//         setTimeout(()=>{
//             console.log(2);
//         })
//     })
//     console.log(3);
// })
// setTimeout(()=>{
//     setTimeout(()=>{
//         setTimeout(()=>{
//             console.log(4);
//         })
//         console.log(5);
//     })
//     console.log(6);
// Promise.reject().catch(()=> console.log(7));

// })
// console.log(8);
// Promise.reject().catch(()=> {console.log(9);
// setTimeout(()=>{console.log(10);})
// }
// );

//-----------------------------------------------//

// String.prototype.addOne = function () {
//   let arr = this.trim().split(" ");
//   return arr[arr.length - 1].length;
// };
// let string1 = "Man bugun vohli turdim";
// console.log(string1.addOne());

//-----------------------------------------------//

// let car = {
//     name:'Spark',
//     year:2023,
//     sayName: function (model) {
//         console.log(`name:${this.name}`);
//         console.log(`model:${model}`);
//     }
// }
// let car2 = {
//     name:'Malibu',
//     year:2022,
// }

// car.sayName.bind(car2, 'Chevrolet')()

//-----------------------------------------------//

// let animal_1 = {
//     turi: 'xonaki',
//     rangi: 'sariq',
//     yoshi: 4,
//     info: function () {
//         console.log(`Color:${this.rangi}`);
//         console.log(`Age:${this.yoshi}`);
//     }
// }
// let animal_2 = {
//     turi: 'yovvoyi',
//     rangi: 'kulrang',
//     yoshi: 7
// }
// let animal_3 = {
//     turi: 'xonaki',
//     rangi: 'oq',
//     yoshi: 0.5
// }

// animal_1.info.apply(animal_1,['xonaki'])
// animal_1.info.bind(animal_2,'xonaki',4,'red')()
// animal_1.info.call(animal_3,'xonaki')

//-----------------------------------------------//

// let arr = [3,2,1,2]
// let arr1 = [1,4,5,3,5]
// console.log(arr.sort());

//-----------------------------------------------//

// function summ(num, add = 0) {
//   if (num % 2 !== 0) {
//     return `${add} marta bo'lindi \n ${num} eng kichik bo'linmagan son`;
//   } else {
//     return summ(num / 2, add + 1);
//   }
// }
// console.log(summ(20));

//-----------------------------------------------//

// let a = 7;
// let b = 19;

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(a);
// console.log(b);

//-----------------------------------------------//

// class Person {
//   constructor(age, name) {
//     this.age = age;
//     this.name = name;
//   }
//   sayName() {
//     return `Mening ismim ${this.name}, Yoshim esa ${this.age}da `;
//   }
// }

// let person_1 = new Person(17, "Sanjar");
// let person_2 = new Person(12, "Valijon");

// console.log(person_1.sayName());
// console.log(person_2.sayName());

//-----------------------------------------------//

// class Animal {
//   constructor(name1, age) {
//     this.name1 = name1;
//     this.age = age;
//   }
//   say() {
//     return true;
//   }
// }

// let a = new Animal("Dog", 4);
// let b = new Animal("Parrot", 1);
// let c = new Animal("Cat", 7);

// console.log(b.say());

//-----------------------------------------------//

// const Person = function (name, age) {
//   this.name = name;
//   this.age = age;
// };

// const person_1 = new Person("Sanjar", 17);

// console.log(person_1);

//-----------------------------------------------//

// let obj = {
//   age: 17,
// };

// Object.freeze(obj);

// obj.age = 18;

// console.log(obj.age);

//-----------------------------------------------//

class Animal {
  #age; //Incapsulation
  name;
  country;
  constructor(age, name, country) {
    this.#age = age;
    this.name = name;
    this.country = country;
  }
  say() {
    return `Uning yoshi ${this.#age}`; //Abstraction
  }
}
const animal_1 = new Animal(4, "Peter", "Russia");
console.log(animal_1.say());
console.log(animal_1.age); //undifined chunki Animal scope ichida age # bilan privite

//-----------------------------------------------//
//-----------------------------------------------//
