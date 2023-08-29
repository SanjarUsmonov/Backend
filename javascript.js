//--------------------------------------------------JavaScript-------------------------------------------------------------//

// let a = 5;
// let b = 5;
// let c = a +-/* b;
// console.log(c);

//---------------------------------------------------//

// let person = {
//   name: "sanjar",
//   lName: "usmonov",
//   age: 17,
//   isMarried: false,
//   address: {
//     counry: "UZB",
//     city: "Tawkent",
//     street: "bayrak",
//     number: 14,
//   },
// };
// let val;
// val = person.name;
// val = person.address.city;
// console.log(val);

//---------------------------------------------------//

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// val = numbers.unshift("hello");                 //oldiga qowiw
// val = numbers.length;                           //oxirini koriw
// val = numbers.pop();                            //orqadan oliw
// val = numbers.push("hello");                    //orqaga qowiw
// console.log(numbers);

//---------------------------------------------------//

// let a = 12;
// let b = 24;
// console.log(Math.max(a, b));

//---------------------------------------------------//

// let a = 12
// let b = 10
// console.log(Math.min(a, b));

//---------------------------------------------------//

// let number = 1212.9165116516
// console.log(number.toFixed(3));

//---------------------------------------------------//

// let number = 1212.9165116516
// console.log(number.toPrecision(6));

//---------------------------------------------------//

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

//---------------------------------------------------//

// let letter = "World";
// let natija = "";
// for (let i = 1; i <= letter.length; i++) {
//   natija = natija + letter[letter.length - i];
// }
// console.log(natija);

//---------------------------------------------------//

// let nums = 29;
// let k = 0;
// for (let i = 0; i <= nums; i++) {
//   if (nums % i == 0) {
//     k += 1;
//   }
// }
// if (k == 2) {
//   console.log("Tub son");
// } else {
//   console.log("Tub emas");
// }

//---------------------------------------------------//

// let text =
//   "Biz bir nechta bollar bilan najot talimda oqiymiz. Bizning guruh juda zor";
// function find(text, b) {
//   let a = "";
//   let splitedText = text.split(" ");
//   for (let i = 0; i < b; i++) {
//     a = a + splitedText[i] + " ";
//   }
//   console.log(a);
// }
// console.log(find(text, 8));

//---------------------------------------------------//

// let arr = [
//   "adac",
//   "xsacsas",
//   "casjtycaca",
//   "xascas",
//   "cascathnffcasccasca",
//   "asf",
// ];
// let a = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (a < arr[i].length) a = arr[i].length;
// }
// console.log(a);

//---------------------------------------------------//

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function add(arr, num) {
//   if (typeof num == "number") {
//     return arr[num - 1];
//   }
// }
// console.log(add(nums, 9));

//---------------------------------------------------//

// let nums = [5, 15];
// function value(a) {
//   let sum = null;
//   for (let i = 0; i < a.length; i++) {
//     sum = sum + a[i];
//   }
//   return sum / a.length;
// }
// console.log(value(nums));

//---------------------------------------------------//

// let name = "Akbar";
// let arr = ["name", 24, true, undefined, null];
// for (let i = 0; i < arr.length; i++) console.log(arr[i]);

//---------------------------------------------------//

// let arr = [0, -1, 2, -3, 1, -10];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] >= 0) {
//     console.log("musbat");
//   } else {
//     console.log("manfiy");
//   }
// }

//---------------------------------------------------//

// let arr = [0, -1, 2, -3, 1, -10];
// let musbat = null;
// let manfiy = null;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] >= 0) {
//     musbat += arr[i];
//   } else {
//     manfiy += arr[i];
//   }
// }
// console.log([musbat, manfiy]);

//---------------------------------------------------//

// let arr = [10, -11, 21, -31, 11, -10];
// let a = null;
// let b = null;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] >= 0) {
//     a += arr[i];
//   } else {
//     b += arr[i];
//   }
// }
// console.log(a, b);

//---------------------------------------------------//

// let arr = ["Sanjar", "Xasan", "Abdulaziz", "Pirimqul", "Muhammadqodir"];
// function instagram(name) {
//   for (let i = 1; i < name.length; i++) {
//     if (name[i].toUpperCase() === name[i]) {
//       console.log(name.indexOf(name[i]));
//     }
//   }
// }
// instagram("AkbabjbburValiyev");

//---------------------------------------------------//

// function ajratish(name) {
//   console.log(name);
//   let index = 0;
//   for (i = 1; i < name.length; i++) {
//     if (name[i].toUpperCase() === name[i]) {
//       console.log(name[i]);
//       index = i;
//     }
//   }
//   console.log(name.slice(0, index) + " " + name.slice(index, name.length));
// }
// ajratish("UsmonovSanjar");

//---------------------------------------------------//

// let ism = "Akbarjon";
// let copy = ism.slice(ism.length - 3, ism.length);
// console.log(copy);

//---------------------------------------------------//

// let ism = "Abdulaziz";
// let copy = ism.slice(4, ism.length);
// console.log(copy);

//---------------------------------------------------//

// let ism = "saidmuhhammadalixoja";
// let a = ism.split("");
// a.reverse("");
// let n = a.join("");
// console.log(n);

//---------------------------------------------------//

// let sana = "12/09/2022";
// let splited = sana.split("/");
// console.log(splited.join("."));

//---------------------------------------------------//

// let ism = "sanjar";
// let a = ism[0].toUpperCase();
// let b = a.toUpperCase();
// let d = ism.slice(1, ism.length);
// console.log(b + d);

//---------------------------------------------------//

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11];
// arr.splice(1, 5);
// console.log(arr);

//---------------------------------------------------//

// for (let a = 1; a <= 20; a++) console.log(a);

//---------------------------------------------------//

// let ism = "sanjar";
// let p = 0;
// for (n = 0; n <= ism.length; n++) {
//   p = n;
// }
// console.log(p);

//---------------------------------------------------//

// let word = "kiyik";
// function isPalidron(word) {
//   if (word === word.split("").reverse().join("")) {
//     return true;
//   }
//   return false;
// }
// console.log(isPalidron(word));

//---------------------------------------------------//

// let str = ["some", "somsa", "is", "men", "slide", "cycle", "cylindir"];
// let arr = [];
// function findWord(char) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i][0].toLowerCase() === char.toLowerCase()) {
//       arr.push(str[i]);
//     }
//   }
//   return arr;
// }
// console.log(findWord("s"));

//---------------------------------------------------//

// let words = [
//   "Salom men nemoman",
//   "Nemo bu masxaraboz baliq",
//   "Biz uni yaxshi ko'ramiz",
//   "U mulfilmda bor",
//   "menda nemoning rasmi bor",
// ];
// let w = "NEmo";
// function findNemo(char) {
//   let arr = [];
//   for (i = 0; i < char.length; i++) {
//     if (words[i].toLowerCase().includes(w.toLowerCase())) {
//       arr.push(words[i]);
//     }
//   }
//   return arr;
// }
// console.log(findNemo(words));

//---------------------------------------------------//

// let arr = [9, 20];
// let summ = 0;
// function plus(a, b) {
//   for (let i = a; i <= b; i++) {
//     summ += i;
//   }
//   return summ;
// }
// console.log(plus(9, 20));

//---------------------------------------------------//

// let summ = 1;
// function plus(a) {
//   for (let i = 1; i <= a; i++) {
//     summ *= i;
//   }
//   return summ;
// }
// console.log(plus(4));

//---------------------------------------------------//

// let val1 = prompt("H");
// let val2 = alert("Q");
// let val3 = confirm("W");

//---------------------------------------------------//

//     For OF

// let arr = ['sanjar', 'xasan', 'abdulaziz', 'husniddin']
// for(let str of arr){
//     console.log(str);
// }

//---------------------------------------------------//

//     For IN

// let arr = {
//     name1: 'sanjar',
//     name2: 17,
//     name3: 'sanjar',
//     name4: 'sanjar',

// };
// for(let str in arr){
//     str === 'name1' ?console.log('True') : 'Error';
// }

//---------------------------------------------------//

// let i = 0;
// while (i < 10) {
//   console.log("Ok");
//   i++;
// }

//---------------------------------------------------//

//              IIFE

// (() => {
//   console.log("Ok");
// })();

//---------------------------------------------------//

//              Funtion Declaration

// function f(a, b) {
//     console.log('Ok');
// }
// f()

//---------------------------------------------------//

//               Funtion Expretion

// let a = function (a, b){
//     console.log('Ok');
// }
// a()

//---------------------------------------------------//

//     Radar

// let a = prompt('Tezlikni Kiriting')
// function f(d){
//     let s = 138000
//     if (+d <= 30) {
//        console.log('Jarima summasi:' + ' ' + 0 + 'sum');
//    }else if(30 < +d && +d <= 70){
//     console.log('Jarima summasi:' + ' ' + s + 'sum');
// }else if(70 < +d && +d <= 150) {
//        console.log('Jarima summasi:' + ' ' + (s+s) + 'sum');
//    }
//    else if(150 < +d && +d <= 180) {
//     console.log('Jarima summasi:' + ' ' + (s*5) + 'sum');
// }
// else if(180 < +d && +d <= 220) {
//     console.log('Jarima summasi:' + ' ' + (s*10) + 'sum');
// }else {
//     console.log('Tugadi!');
//    }
// }
// f(a)

//---------------------------------------------------//

// let a = 3;
// let array = ["a", "b", "c", "d", "e", "f"];
// for (let i = 0; i < array.length; i++) {
//   let splited = array.slice(0, array.length - a);
//   for (let i = 0; i <= a; i++) {
//     let plus = splited.unshift(" ");
//   }
//   console.log(splited);
// }

//---------------------------------------------------//

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let fill = nums.fill("joke", 4, 7);
// console.log(fill);

//---------------------------------------------------//

//    Type find

// let arr = [
//   "a",
//   3,
//   true,
//   undefined,
//   { id: 86004516516 },
//   "boolean",
//   "null",
//   null,
// ];
// let findType = arr.find(function (arr) {
//   return typeof arr === "boolean";
// });
// console.log(findType);

//---------------------------------------------------//

//     Katta || Kichik

// let arr = [ 1, 8, 6, 4, 2]
// let n = arr.filter(function(all){
//     return all = all < 5
// })
// console.log(n);

//---------------------------------------------------//

//     Arrayni metodlari

// let arr = [true, 1, 2, 'sanjar']
// let val = arr[2]                                                                     Index bn topish!
// let val = arr[arr.length -1].split('').reverse().join('').toUpperCase()              Ismni teskari qilish!
// let val = arr.push('vali')                                                           Orqaga qoshish!
// let val = arr.unshift('valijon')                                                     Boshiga qoshish!
// let val = arr.includes(5)                                                            Qaytaradi True || False!
// let val = arr.concat(['olma', 'olcha'])                                              Arrayga array qoshish!
// let val = arr.pop()                                                                  Arraydan chopadi!
// let val = arr.reverse()                                                              Arrayni teskari qilish!
// console.log(val);

//--------- ARRAY METHODS ---------//

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const result = arr.concat(10, 11, 12, 13, 14);
// const result = arr.copyWithin(1, 9)
// const result = arr.fill(0, 7, 9);
// const result = arr.filter((el) => el < 5);
// const result = arr.find((el) => el === 9);
// const result = arr.flat(Infinity)
// const result = arr.includes(5)
// const result = arr.indexOf(5)
// const result = arr.join(5)
// const result = arr.lastIndexOf(5)
// const result = arr.length
// const result = arr.pop()
// const result = arr.push(10)
// const result = arr.reduce((a, b) => a + b);
// const result = arr.reverse()
// const result = arr.shift()
// const result = arr.unshift(10)
// const result = arr.slice(0,5)
// const result = arr.splice(0,5)
// const result = arr.toString()
// const result = arr.sort()
// const result = arr.some((el) => el % 2 === 0);

//--------- OBJECT METHODS ---------//

// const obj = {
//   username: "usmonov",
//   password: 12345678,
// };

// const result = Object.values(obj)
// const result = Object.keys(obj)
// const result = Object.assign(obj, obj2)
// const result = Object.create(obj2)
// const result = Object.hasOwn(obj, 'username')
// const result = Object.is(1,5)
// const result = Object.seal(obj)
// const result = Object.isSealed(obj)
// const result = Object.freeze(obj)
// const result = Object.isFrozen(obj)

//--------- STRING METHODS ---------//

// const str = "UsmOnoV"
// const str2 = "SanjaR"

// const result = str.charAt(5)
// const result = str.charCodeAt(5)
// const result = str.concat(' ', str2)
// const result = str.endsWith("V")
// const result = str.includes('U')
// const result = str.indexOf("UsmOnoV")
// const result = str.length
// const result = str.localeCompare(str2)
// const result = str.match(/[A-Z]/g)
// const result = str.trim()
// const result = str.padEnd(10, ".")
// const result = str.padStart(11, "*")
// const result = str.repeat(5)
// const result = str.replace("U", "O")
// const result = str.search("V")
// const result = str.startsWith("U")
// const result = str.substring(0, 3)

//---------------------------------------------------//

// let arr = [1, 2, true,undefined, 'sanjar',
// {
//     ism:'sanjar',
//     age:17,
//     addres:{
//         country:'uzb',
//         city:'taw',
//         st:'bayraq'
//     },
//     id:181652165156
// }
// ];
// let val = arr.length;
// console.log(val);

//---------------------------------------------------//

// let arr = [
// {name:'sanjar', age:17 ,adderess:'uzbekistan'},
// {name:'abdulloh', age:24, adderess:'tajikistan'}]
// let findMe = arr[0].age+arr[1].age
// console.log(findMe);

//---------------------------------------------------//

// let arr = [
//     {name:'sanjar', age:27 ,adderess:'uzbekistan',salary:2000},
//     {name:'abdulloh', age:25, adderess:'tajikistan',salary:2000},
//     {name:'abdulloh', age:23, adderess:'tajikistan',salary:2000}];
//     let r = (a,n) => {
//         return a + n.salary
//     }
//     let reducedAge = arr.reduce(r,0)
//     console.log(reducedAge);

//---------------------------------------------------//

// let a = Infinity
// console.log(typeof a);

//---------------------------------------------------//

// let client = [{
//     id:1,
//     ism:'Vali',
//     oylik: 3000
// },
// {
//     id:2,
//     ism:"Ulug'bek",
//     oylik: 5000
// },
// {
//     id:3,
//     ism:'Sanjar',
//     oylik: 1000
// },
// ];

// let arr = []
// function all(n) {
//     for (let i = 0; index < users.length; i++) {
//         sum = users.salary[n];
//         console.log(sum);
//     }
// }
// all()

// function moneyUser(m){
//     let sum = 0
//     for(let i=0;i<users.length;i++){
//         sum += users.salary[i]
//     }
//     return sum
// }
// console.log(moneyUser(sum));

// let find = users.find(function(users){
//     return users.username.toLowerCase() === 'joseipe'.toLowerCase()
// })

// console.log(find);
// let foundUser = users.filter(function(user){
//     return(user.salary > 2000)
// })
// console.log(foundUser);

// let findUser = users.filter(function (users) {
//     return users.salary > 2000
// })
// console.log(findUser);

//---------------------------------------------------//

// let arr = [1,2,3,4,5,6,7,8,9,10]
// // let s = arr.find(n => n > 4)
// // let s = arr.filter(n => n > 4)
// console.log(s);

//---------------------------------------------------//

// let user = [{
//     name:'Valijon',
//     age: 11,
//     address:{
//         country:'Uzb',
//         city:'Taw',
//         st:'Bayraq'
//     },
//     number:997243819
// },
// {
//     name:'Alijon',
//     age: 19,
//     address:{
//         country:'Uzb',
//         city:'And',
//         st:'Bayraq'
//     },
//     number:997258729
// },
// {
//     name:'Ganijon',
//     age: 18,
//     address:{
//         country:'Taj',
//         city:'Duw',
//         st:'Iraq'
//     },
//     number:9973253819
// }
// ];

// // let findUser = user.filter(n => n.age > 15)
// // let findUser = user.concat({
// //     name:'Abdullajon',
// //     age: 34,
// //     address:{
// //         country:'Krz',
// //         city:'Osh',
// //         st:'Quduq'
// //     },
// //     number:8873283899
// // })
// // let findUser = user.filter(n => n.address.country === 'Taj')
// // let findUser = user.filter(n => n.age === 18 && n.address.city === 'Duw')

// console.log(findUser);

//---------------------------------------------------//

// let arr = [1,8,7,2,9,3,7,5,3,1,7,6,5,]
// let filtered = arr.filter(n => n > 5)
// let reduced = arr.reduce((a, b) => a + b,0)
// console.log(reduced);

//---------------------------------------------------//

// let companies = [{
//     name: 'Auto',
//     started: 1980,
//     finished: 2000,
// },
// {
//     name: 'Choco',
//     started: 1980,
//     finished: 2010,
// },
// {
//     name: 'Milk',
//     started: 2000,
//     finished: 2020,
// },
// {
//     name: 'Bread',
//     started: 1970,
//     finished: 1980,
// }
// ];
// // let findCom = companies.reduce((a, b) => a + (b.finished - b.started),0)          Hamma yillari topildi!
// let forEach = companies.forEach(function(company){
//     console.log(company.name);
// })

//---------------------------------------------------//

// let arr = [10,9,8,7,6,5,4,3,2,1,]
// let all = null
// for (a of arr) {
//     all += a % 3
// }
// console.log(all);

//---------------------------------------------------//

// let obj = {
//   name: "Musk",
//   surname: "",
//   age: 60,
// };
// let n = "";
// for (a in obj) {
//   if (Object.keys == n) {
//     return;
//   }
// }

//---------------------------------------------------//

// let  a = 'V'
// let  b = 't'

// function Uppercaseed(n,m) {
//     if (n.toUpperCase() == m.toUpperCase()) {
//         return 1
//     }else if (n.toLowerCase() == m.toLowerCase()){
//         return 0
//     }
// }
// console.log(Uppercaseed(a,b));

//---------------------------------------------------//

// let nums = "8118"
// nums.split(" ")
// for(let i = 0; i < arr.length; i++){
// console.log(nums);}

// let letter = "World"
// let natija = ""
// for (let i = 1; i <= letter.length; i++) {
//     natija = natija + letter[letter.length -i]
// }
// console.log(natija);

// let nums = 17
// let k = 0
// for (let i = 0; i <= nums; i++){
//     if (nums % i == 0) {
//         k += 1;
//     }
// }
// if (k == 2){
//     console.log("Tub son");
// }
// else{
//     console.log("Tub emas");
// }

// let text = "Biz bir nechta bollar bilan najot talimda oqiymiz. Bizning guruh juda zor"
// function find(text, b) {
//     let a = ""
//     let splitedText = text.split(" ")
//     for (let i = 0; i < b; i++) {
//          a = a + splitedText[i] + ' '
//     }
//     console.log(a);
// }
// console.log(find(text ,12));

//---------------------------------------------------//

// function all(all){
// let like = 0
// let dislike = 0
// let Like = ("Likes are more than dislikes")
// let Dislike = ("Dislikes are more than likes")
// let empty = ("Similar")
// for (let n = 0; n < all.length; n++) {
//     if (all[n] == "like") {
//         like += 1;
//     }
//     if (all[n] == "dislike") {
//         dislike += 1;
//     }
// }
// if (like > dislike) {
//     return Like
// }
// else if (dislike > like){
//     return Dislike
// }
// else{
//     return empty
// }
// }
// console.log(all(["dislike", "like", "dislike", "like", "dislike"]));

//---------------------------------------------------//

// let elUsernameInp = document.getElementById('username');
// let elPasswordInp = document.getElementById('password');
// let elSubmitBtn = document.getElementById('btn-submit');

// elSubmitBtn.addEventListener('click', async () => {
// 	try {
// 		let username = elUsernameInp.value;
// 		let password = elPasswordInp.value;
// 		if (username !== '' && password !== '') {
// 			let auth = await fetch('https://dummyjson.com/auth/login', {
// 				headers: { 'Content-Type': 'application/json' },
// 				method: 'POST',
// 				body: JSON.stringify({
// 					username,
// 					password,
// 				}),
// 			});
// 			let res = await auth.json();
// 			if (res.token) {
// 				localStorage.setItem('access_token', res.token);
// 				localStorage.setItem('userId', res.id);
// 				location.href = '/pages/users.html';
// 			} else {
// 				localStorage.removeItem('access_token');
// 				location.reload();
// 			}
// 		}
// 	} catch (err) {
// 		console.log(err);
// 	}
// });

//---------------------------------------------------//

// function birthdayCakeCandles(ar) {
//   let a = 0;
//   let max = 0;

//   for (let i = 0; i < ar.length; i++) {
//     if (ar[i] > max) {
//       max = ar[i];
//       a = 1;
//     } else {
//       if (max == ar[i]) {
//         a++;
//       }
//     }
//   }
//   return a;
// }

//---------------------------------------------------//

//find(), filter(), includes(), reduce(), reverse(), slice(a, b), splice(a, b), sort(), some()
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const metod = arr.find((el)=> el == 5)
// const metod = arr.filter((el)=> el > 5)
// const metod = arr.includes(5)
// const metod = arr.reduce((a, b) => a + b);
// const metod = arr.reverse()
// const metod = arr.slice(0,5)
// const metod = arr.splice(0,5)
// const metod = arr.sort() //sort() => 1)array, 2)number, 3)object, 4)string, 5)boolean, 6)undifined
// const metod = arr.some((el) => el == 4)
// console.log(metod);

//---------------------------------------------------//

// function Width(a) {
//     let L = 100
//     console.log(L * a);
// }
// Width(5)

//---------------------------------------------------//

// function Weight(a) {
//     let M = 1000
//     console.log(M * a);
// }
// Weight(5)

//---------------------------------------------------//

// function Bayt(a) {
//     let B = 1024
//     console.log(B * a);
// }
// Bayt(5)

//---------------------------------------------------//

// function TwoNum(a) {
//   let b = a.toString().split('')
//   for (let i = 0; i < b.length; i++) {
//     const el = parseInt(b[i]);
//     console.log(el);
//   }
// }
// TwoNum(78)

//---------------------------------------------------//

// function Plus(a) {
//     let b = a.toString().split('')
//     for (let i = 0; i < b.length; i++) {
//         let r = parseInt(b[0])
//         let t = parseInt(b[1])
//         let all = r + t
//         console.log(all);
//     }
// }
// Plus(75)

//---------------------------------------------------//

// function Reverse(a) {
//     let Reverse = a.toString().split('').reverse().join('')
//     let Final = parseInt(Reverse)
//     console.log(Final)
// }
// Reverse(75)

//---------------------------------------------------//

// function func(a) {
//     let Final = parseInt(a.toString().split('').slice(0,1).join())
//     console.log(Final);
// }
// func(456)

//---------------------------------------------------//

// function func() {
//     let a = 321
//     let Final = parseInt(a.toString().split('').slice(1,3).reverse().join('') )
//     console.log(Final);
// }
// func()

//---------------------------------------------------//

// function All(a) {
//     let Final = a.toString().split('')
//     for (let i = 0; i < Final.length; i++) {
//         let el1 = parseInt(Final[0])
//         let el2 = parseInt(Final[1])
//         let el3 = parseInt(Final[2])
//         let All = el1 +el2 + el3
//         console.log(All);
//     }
// }
// All(325)

//---------------------------------------------------//

// function a(s) {

//     let Final = parseInt(s.toString().split('').reverse().join(''))
//     console.log(Final);
// }
// a(321)

//---------------------------------------------------//

// function Change(son) {
//     let a = son.toString().split('').slice(0,2).reverse().join('') + son.toString().split('').slice(2,3)
//     let Final = parseInt(a)
//     console.log(Final);
// }
// Change(546)

//---------------------------------------------------//

// function Change(son) {
//     let a =  son.toString().split('').slice(0,1) + son.toString().split('').slice(1,3).reverse().join('')
//     let Final = parseInt(a)
//     console.log(Final);
// }
// Change(576)

//---------------------------------------------------//

// function Musbat(a) {
//   if (a > 0) {
//     return `${a} musbat son`;
//   } else if (a === 0) {
//     return `${a} neytral son`;
//   } else {
//     return `${a} manfiy son`;
//   }
// }
// console.log(Musbat(10));

//---------------------------------------------------//

// function Toq(a) {
//   if (a % 2 !== 0) {
//     return `${a} toq son`;
//   } else {
//     return `${a} toq son emas`;
//   }
// }
// console.log(Toq(17));

//---------------------------------------------------//

// function Juft(a) {
//   if (a % 2 === 0) {
//     return `${a} juft son`;
//   } else {
//     return `${a} juft son emas`;
//   }
// }
// console.log(Juft(17));

//---------------------------------------------------//

// function func(a, b) {
//   if (a > 2 && b <= 3) {
//     return `${a} katta 2 dan\n${b} kichik yoki teng 3 dan`;
//   } else {
//     return `${a} soni 2 dan kichik\n${b} katta 3 dan`;
//   }
// }
// console.log(func(1, 8));

//---------------------------------------------------//

// function func(a, b) {
//   if (a >= 0 && b < -2) {
//     return `${a} katta 0 dan\n${b} kichik -2 dan`;
//   } else {
//     return `Amalda xatolik mavjud`;
//   }
// }
// console.log(func(7, -3));

//---------------------------------------------------//

// function func(a, b, c) {
//   if (a <= b <= c) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(func(30, 20, 10));

//---------------------------------------------------//

// function func(a, b, c) {
//   if (a < b && c > b) {
//     return `${b} soni ${a} va ${c} sonlari orasida yotuvchi son`;
//   } else {
//     return `${b} soni ${a} dan kichik yoki ${c} dan katta`;
//   }
// }
// console.log(func(14, 19, 24));

//---------------------------------------------------//

// function func(a, b) {
//   if (a % 2 !== 0 && b % 2 !== 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(func(17, 15));

//---------------------------------------------------//

// function func(a, b) {
//   if (a % 2 !== 0 || b % 2 !== 0) {
//     return `${a} yoki ${b} sonlarining biri toq`;
//   } else {
//     return `${a} va ${b} sonlari juft`;
//   }
// }
// console.log(func(17, 224));

//---------------------------------------------------//

// function func(a, b) {
//   if (a % 2 !== 0 || b % 2 !== 0) {
//     return `Bu sonlardan biri toq`;
//   } else {
//     return `Bu sonlarning ikkisi ham juft`;
//   }
// }
// console.log(func(18, 224));

//---------------------------------------------------//

// function ToqJuft(a, b) {
//   if (a % 2 !== 0 && b % 2 !== 0) {
//     return `${a} va ${b} toq sonlar`;
//   } else if (a % 2 === 0 && b % 2 === 0) {
//     return `${a} va ${b} juft sonlar`;
//   } else {
//     return `Biri juft va biri toq sonlar`;
//   }
// }
// console.log(ToqJuft(100, 1000));

//---------------------------------------------------//

// function musbat(a, b, c) {
//   if (a > 0 && b > 0 && c > 0) {
//     return `${a} , ${b} , ${c} sonlar musbat`;
//   } else {
//     return `${a} , ${b} , ${c} sonlar orasida manfiy son bor`;
//   }
// }
// console.log(musbat(10, -5, 3));

//---------------------------------------------------//

// function func(a,b,c) {
//   if (a > 0 || b > 0 || c > 0) {
//     return true;
//   }else{
//     return false
//   }
// }
// console.log(func(14,12,-16));

//---------------------------------------------------//

// function func(a) {
//   let xonalarSoni = a.toString().split("").length;
//   if (a % 2 == 0) {
//     return `${a} juft son ${xonalarSoni} xonali`;
//   } else {
//     return `${a} toq son ${xonalarSoni} xonali`;
//   }
// }
// console.log(func(18));

//---------------------------------------------------//

// function func(a, b, c) {
//   if (a == b || b == c || a == c) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(func(12, 14, 14));

//---------------------------------------------------//

// function func(a, b, c) {
//   if (a + b == 0 || b + c == 0 || a + c == 0) {
//     return "Qarama qarshi sonlar mavjud";
//   } else {
//     return "Unday son mavjud emas";
//   }
// }
// console.log(func(14, -14, 12));

//---------------------------------------------------//

// function func() {
//   let Default = 189;
//   const test = Default.toString().split("");
//   for (let i = 0; i < test.length; i++) {
//     const el1 = test[i];
//     for (let j = 0; j < test.length; j++) {
//       const el2 = test[j];
//       if (el1 !== el2) {
//         return true;
//       } else {
//         return false;
//       }
//     }
//   }
// }
// console.log(func());

//---------------------------------------------------//

// function func(Default) {
//   const sorted = parseInt(Default.toString().split("").sort().join(""));
//   if (Default === sorted) {
//     return `${Default} soni xonalari o'sish tartibida`;
//   } else {
//     return `${Default} soni xonalari o'sish tartibida emas`;
//   }
// }
// console.log(func(123456789));

//---------------------------------------------------//

// function func(Default) {
//   const sorted = parseInt(Default.toString().split("").sort().join(""));
//   const sortedReverse = parseInt(
//     sorted.toString().split("").reverse().join("")
//   );
//   const DefaultReverse = parseInt(
//     Default.toString().split("").reverse().join("")
//   );
//   if (sorted === Default && DefaultReverse === sortedReverse) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(func(1357));

//---------------------------------------------------//

// function test(Default) {
//   const Reverse = parseInt(Default.toString().split("").reverse().join(""));
//   if (Default === Reverse) {
//     return `${Default} can be palindrome`;
//   } else {
//     return `${Default} isn't palidrome `;
//   }
// }
// console.log(test(4334));

//---------------------------------------------------//

// function points(games) {
//     let Ball = 0;
//     for (let i = 0; i < games.length; i++) {
//       let el = games[i];
//       let Club_1 = parseInt(el.slice(0, 1));
//       let Club_2 = parseInt(el.slice(2, 3));
//       if (Club_1 > Club_2) {
//         Ball += 3;
//       } else if (Club_1 === Club_2) {
//         Ball += 1;
//       } else if (Club_1 < Club_2) {
//         Ball += 0;
//       }
//     }
//     return Ball;
//   }
//   console.log(
//     points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
//   );

//---------------------------------------------------//

// function Func(son) {
//   if (son > 0) {
//     return son + 1;
//   } else {
//     return son + 0;
//   }
// }
// console.log(Func(10));

//---------------------------------------------------//

// function Func(son) {
//   if (son > 0) {
//     return son + 1;
//   } else {
//     return son - 2;
//   }
// }
// console.log(Func(-10));

//---------------------------------------------------//

// function Func(son) {
//   if (son > 0) {
//     return son + 1;
//   } else if (son === 0) {
//     return son + 10;
//   } else {
//     return son - 2;
//   }
// }
// console.log(Func(0));

//---------------------------------------------------//

// function Func(son_1, son_2) {
//   if (son_1 > son_2) {
//     return son_1;
//   } else {
//     return son_2;
//   }
// }
// console.log(Func(30, 80));

//---------------------------------------------------//

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const pagenation = (page, limit) => {
//   return arr.slice(page * limit - limit, limit * page);
// };
// console.log(pagenation(1, 10));

//---------------------------------------------------//

// function Ticket(num) {
//     let str = num.toString().padStart(N, "0");
//     let half = str.length / 2;
//     let left = str.slice(0, half);
//     let right = str.slice(half);

//     let reduce_l = left.split("").reduce((a, b) => parseInt(a) + parseInt(b));
//     let reduce_r = right.split("").reduce((a, b) => parseInt(a) + parseInt(b));

//     return reduce_l === reduce_r;
//   }

//   function Count(length) {
//     if (length % 2 === 0) {
//       let count = 0;
//       let end = Math.pow(10, length) - 1;
//       for (let i = 0; i <= end; i++) {
//         if (Ticket(i)) {
//           count++;
//         }
//       }
//       return count;
//     } else {
//       return "ERROR : Juft xonali son kiritilsin !";
//     }
//   }

//   let N = 7;

//   console.log(Count(N));
