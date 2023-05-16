//---------------------------------------------------JavaScript-------------------------------------------------------------//

//     Hoisting function Declarationda va VARda Heap memoryda undefined bo'lib turadi!
//     TDZ o'lik zona

// let a = 5
// let b = 4
// let c =(a + b)
// console.log(c);

//---------------------------------------------------//

// let a = 16
// let b = 12
// let c = (a - b)
// console.log(c);

//---------------------------------------------------//

// let a = 12
// let b = 4
// let c = (a / b)
// console.log(c);

//---------------------------------------------------//

// let a = 4
// let b = 3
// let c = (a * b)
// console.log(c);

//---------------------------------------------------//

// let person = {
//         name:'sanjar',
//         lName:'usmonov',
//         age:17,
//         isMarried:false,
//         address:{
//                 counry:'UZB',
//                 city:'Tawkent',
//                 street:'bayrak',
//                 number:14,
//             },
//         }
//         let val;
//         val = person.name;
//         val = person.address.city
//         console.log(val);

//---------------------------------------------------//

// let numbers = [1,2,3,4,5,6,7,8,9,10]
// val = numbers.unshift('hello')             //oldiga qowiw
// val = numbers.length                       //oxirini koriw
// val = numbers.pop()                        //orqadan oliw
// val = numbers.push('pis')                  //orqaga qowiw
// val = numbers                                      //hammasini koriw
// console.log(val);

//---------------------------------------------------//

// let a = 12
// let b = 10
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
// console.log(number.toFixed(4));

//---------------------------------------------------//

// let number = 1212.9165116516
// console.log(number.toFixed(2));

//---------------------------------------------------//

// let number = 1212.9165116516
// console.log(number.toFixed(2));

//---------------------------------------------------//

// let number = 1212.9165116516
// console.log(number.toPrecision(6));

//---------------------------------------------------//

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//---------------------------------------------------//

// let nums = "8118"
// nums.split("")
// for(let i = 0; i < arr.length; i++){
// console.log(nums);}

//---------------------------------------------------//

// let letter = "World"
// let natija = ""
// for (let i = 1; i <= letter.length; i++) {
//     natija = natija + letter[letter.length -i]
// }
// console.log(natija);

//---------------------------------------------------//

// let nums = 20
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

//---------------------------------------------------//

// let text = "Biz bir nechta bollar bilan najot talimda oqiymiz. Bizning guruh juda zor"
// function find(text, b) {
//     let a = ""
//     let splitedText = text.split(" ")
//     for (let i = 0; i < b; i++) {
//          a = a + splitedText[i] + ' '
//     }
//     console.log(a);
// }
// console.log(find(text ,5));

//---------------------------------------------------//

// let arr = ["adac", "xsacsas", "casjtycaca", "xascas", "cascathnffcasccasca", "asf"]
// let a = 0
// for(let i = 0;i < arr.length; i++){
//     if(a < arr[i].length)
//     a = arr[i].length;
// }
// console.log(a);

//---------------------------------------------------//

// let nums = [1,2,3,4,5,6,7,8,9,10]
// function add(arr ,num) {
//     if (typeof num == 'number'){
//         return arr[num - 1 ]
//     }
// }
// console.log(add(nums, 7));

//---------------------------------------------------//

// let obj = {
//     a: 'd',
//     f: 23,
//     isMany:true
// }
// function inObject(a,b) {
//     return  Object.keys
// }

//---------------------------------------------------//

// let nums = [5 ,7]
// function value(a) {
//     let sum = null
//     for (let i = 0; i < a.length; i++) {
//         sum = sum + a[i]
//     }
//     return sum / a.length
// }
// console.log(value(nums));

//---------------------------------------------------//

// let name = "Akbar"
// let arr = ["name", 24, true, undefined, null]
// for(let i = 0;i < arr.length; i++)
// console.log(arr[i]);

//---------------------------------------------------//

// let arr = [0, -1, 2, -3, 1, -10]
// for (i=0; i<arr.length; i++){
//     if(arr[i] >= 0){
//         console.log("musbat");
//     }
//     else{
//         console.log('manfiy');
//     }
// }

//---------------------------------------------------//

// let arr = [0, -1, 2, -3, 1, -10]
// let musbat = null
// let manfiy = null
// for (i=0; i<arr.length; i++){
//         if(arr[i] >= 0){
//                 musbat += arr[i]
//             }
//     else{
//         manfiy += arr[i];
// }
// }
// console.log([musbat,manfiy]);

//---------------------------------------------------//

// let arr = [10, -11, 21, -31, 11, -10]
// let a = null
// let b = null
// for(i = 0; i < arr.length; i++){
//     if(arr[i] >= 0){
//         a += arr[i]
//     }
//     else{
//         b += arr[i]
//     }
// }
// console.log(a,b);

//---------------------------------------------------//

// function sanjar(a, b){
//     c = a + b
//     console.log(c);
// }
// sanjar(10, 20)

//---------------------------------------------------//

// let arr = ['Sanjar', 'Xasan', 'Abdulaziz', 'Pirimqul', 'Muhammadqodir']
// function instagram(name){
//     for (let i = 1; i < name.length; i++){
//        if(name[i].toUpperCase()=== name[i]){
//            console.log(name.indexOf(name[i]));
//        }
//     }
// }
// instagram("AkbabjbburValiyev")

//---------------------------------------------------//

// function ajratish(name){
//     console.log(name);
//     let index = 0
//     for(i=1; i<name.length;i++){
//         if(name[i].toUpperCase() === name[i]){
//         console.log(name[i]);
//         index = i
//     }
// }
//     console.log(name.slice(0, index)+ " " + name.slice(index,name.length));
// }
// ajratish("UsmonovSanjar")

//---------------------------------------------------//

// let ism = "Akbarjon";
// let copy = ism.slice(ism.length - 3, ism.length);
// console.log(copy);

//---------------------------------------------------//

// let ism = "Abdulaziz"
// let copy = ism.slice(4,ism.length);
// console.log(copy);

//---------------------------------------------------//

// let ism = "saidmuhhammadalixoja"
// let a = ism.split('')
// a.reverse('')
// let n = a.join('')
// console.log(n);

//---------------------------------------------------//

// let sana = "12/09/2022"
// let splited = sana.split("/")
// console.log(splited.join('.'));

//---------------------------------------------------//

// let ism = "sanjar"
// let a = ism[0].toUpperCase()
// let b = a.toUpperCase()
// let d = ism.slice(1, ism.length)
// console.log(b + d)

//---------------------------------------------------//

// let arr = [1,2,3,4,5,6,7,8,9,11]
// arr.splice(1,5)
// console.log(arr);

//---------------------------------------------------//

// for (let a = 1; a <= 20; a++)
// console.log(a);

//---------------------------------------------------//

// let ism = "sanjar"
// let p = 0
// for(n = 0; n <= ism.length; n++){
//   p = n
// }
// console.log(p);

//---------------------------------------------------//

// let sum = [3, 9, 13, 7]
// let a = 0
// let b = 0
// function on(a,b){
// }
// on()

//---------------------------------------------------//

// let word = "kiyik"
// function isPalidron(word){
//     if(word === word.split('').reverse().join('')){
//         return true
//     }
//     return false
// }
// console.log(isPalidron(word));

//---------------------------------------------------//

// let str = ['some', 'somsa', 'is', 'men', 'slide', 'cycle', 'cylindir']
// let arr = []
// function findWord(char){
//     for(let i = 0; i < str.length; i++){
//         if (str[i][0].toLowerCase()=== char.toLowerCase()) {
//             arr.push(str[i])
//         }
//     }
//     return arr
// }
// console.log(findWord('s'));

//---------------------------------------------------//

// let words = ['Salom men nemoman','Nemo bu masxaraboz baliq',"Biz uni yaxshi ko'ramiz",'U mulfilmda bor','menda nemoning rasmi bor'];
//   let w = 'NEmo'
// function findNemo(char){
//     let arr = []
//       for (i = 0; i < char.length; i++ ) {
//           if(words[i].toLowerCase().includes(w.toLowerCase())){
//             arr.push(words[i]);
//           }
//     }
//     return arr
// }
// console.log(findNemo(words));

//---------------------------------------------------//

// let arr = [9, 20]
// let summ = 0
// function plus(a, b) {
//     for(let i = a ;i <= b; i++){
//         summ += i
//     }
//     return summ
// }
// console.log(plus(9, 20));

//---------------------------------------------------//

// let summ = 1
// function plus(a) {
//     for(let i = 1 ;i <= a; i++){
//         summ *= i
//     }
//     return summ
// }
// console.log(plus(4));

//---------------------------------------------------//

// let val1 = prompt('H')
// let val2 = alert('Q')
// let val3 = confirm('W')

//---------------------------------------------------//

// let sana = "       SanjarUsmonov      "
// let splited = sana.slice(" ").join('')
// console.log(splited);

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

// let i = 0
// while (i < 10) {
//     console.log('Ok');
//     i++;
// }

//---------------------------------------------------//

//              IIFE

// (()=>{
//     console.log('Ok');
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

// let a = 3
// let array = ['a', 'b', 'c', 'd', 'e', 'f']
// for(let i = 0; i < array.length; i++){
//     let splited = array.slice(0,array.length - a)
//     for(let i = 0; i <= a; i++){
//         let plus = splited.unshift(" ")
//     }
//     console.log(splited);
// }

//---------------------------------------------------//

// let nums = [1,2,3,4,5,6,7,8,9,10]
// let fill = nums.fill('joke', 4,7)
// console.log(fill);

//---------------------------------------------------//

//    Type find

// let arr = ['a', 3, true, undefined, {id:86004516516},'boolean', 'null', null]
// let findType = arr.find(function (arr) {
//     return typeof arr === 'boolean'
// })
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

//Last Homework
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
