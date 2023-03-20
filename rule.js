//---------------------------------------BACKEND---------------------------------------------------//

//Hoisting function Declarationda va VARda Heap memoryda undefined bo'lib turadi!

//-----------------------------------------------//

//TDZ o'lik zona

//-----------------------------------------------//

//Inpure function
//Tashqi tasir boganda va returnda hechnma qaytmasa inpure function

//-----------------------------------------------//

//Pure function
//Function ichida elon qilinsa yoki parametr orqali kirasa va tashqi tasir bomasa pure function

//-----------------------------------------------//

//Recourse function
//Wu functionni ozini ichiga ozini chaqiriw

//-----------------------------------------------//

//Metod substr
//Bu stringlarni slice kabi qirqib beradi faqat slice arraylar uchun

//-----------------------------------------------//

//WebApi
//Bu ozida Callstackdan kegan Timer, Promise, DOM va fetchlarni ozida vaqtincha saqlaydi

//-----------------------------------------------//

//Callback queue
//Bu navbat. Bu 2ga bo'linadi Microtask va Macrotask

//-----------------------------------------------//

//Microtask
//Bu oziga Promiseni qabul qiladi

//-----------------------------------------------//

//Macrotask
//Bu oziga Timer, DOM va fetchlarni qabul qiladi

//-----------------------------------------------//

//Use Strict
//'use strict' deb yoziladi va u thisni ishlatganda undifined chiqaradi

//-----------------------------------------------//

//bind()
//Bu metod Objectlar uchun ishlidi

//call()
//Bu metod bind() bilan oxshash faqat u functionni ozi bilan chaqiradi va cheksiz parametr qabul qiladi

//apply()
//Bu metod call bilan bir xil faqat 2ta parametr qabul qiladi va 2 parametr array boladi

//-----------------------------------------------//

//This
//Function ichida function ishlatilsa va uni ichida this bolsa Windowga murojat qiladi

//-----------------------------------------------//

//Stack overflow
//Stack to'lsa RangeError beradi

//-----------------------------------------------//

//Scope
//3 xil bo'ladi Global, Function, Block

//-----------------------------------------------//

//Scope chaining
//Bu ichma-ich functionda ozidan oldingi ozgaruvchiga murojat qilish

//-----------------------------------------------//

//Garbage collection
//Buni vazifasi biz iwlatmagan codelarni tozalaydi va bu JS tomonidan qilinadi

//-----------------------------------------------//

//Errors

//TypeError
//Yoq narsani ichidagi narsaga murojat qilsa chiqadi

//RangeError
//Call stack to'lsa

//ReferenceError
//Mavjud bo'lmagan narsaga murojat qilinsa

//SyntasticError
//Code yozganda xato bo'lsa

//URI
//URLda xato bo'lsa

//-----------------------------------------------//

//typyOf
//typyOf bergan javobi stringda bo'ladi va 2 marta typeOf ketma-ket iwlatsak faqat va faqat string beradi

//-----------------------------------------------//

//Incapsulation
//# bilan berkitib qoyish

//-----------------------------------------------//

//Abstraction
//# bilan berkitilganni narsani function orqali olib beradi va Yoq narsa namoyon etib beradi. Agar metod ozi ham privite bolsa u ham metod orqali chiqarib olinadi

//-----------------------------------------------//

//Inheritance
//Bu meros olish paarametrlarni umumumiy olgan holda ikkinchisiga shundoq ornatib

//-----------------------------------------------//

//Polymorphizm
//Bitta metodga murojat qilganda ikkita javob qaytarsa bu Polymorphizm deyiladi

//-----------------------------------------------//

//OverRide
//Yangi soz kelishi bilan eskisini ustiga yozib ketaveradi

//-----------------------------------------------//

//OverLoad
//U yangi sozni eskisi oldiga qoshib qoyadi

//-----------------------------------------------//

//http
//Yaqqol saytni nomini yaqqol korsatib turadi

//-----------------------------------------------//

//https
//Bu esa sayt nomini shriftlab beradi

//-----------------------------------------------//

//NodeJS
//Runtime engine. Ya'ni JavaScript kodni brauzerdan tashqarida ishlatib beruvchi engine. 2009-yilgacha JavaScript faqat brauzerda ishlatilgan. NodeJs esa brauzerdan tashqarida ishlatish uchun yechim tariqasida ishlab chiqilgan. NodeJS C++ ustiga qurilgan

//-----------------------------------------------//

//AutoCannon
//Terminalni cmd joyiga yoziladi
//npm i autocannon -g
// autocannon -c 100 -d 10 http//:192.168.

//-----------------------------------------------//

//NODE JS core modules

//200 status
//500 status backenda ayb

//OS
//Operation System asosan computer haqida info yigish bilan shug'ullanadi

//FS
//File System aslida object va uning metodlari bor

//HTTP
//Protokollar bilan ishlash uchun

//EVENTS
//Hodisalar bilan ishlaydi

//Path
//Pathlar bilan ishlaydigan module

//-----------------------------------------------//

//Express js
//NodeJS uchun tezkor va moslashuvchan framework

//-----------------------------------------------//

//res.send()
//String yuboradi => "Ishladi"

//res.json()
//Object yuboradi => { message: Ok }

//res.status()
//Status yuboradi (200)

//-----------------------------------------------//

//app.use(express.json())
//Bu bodyParse ga teng

//-----------------------------------------------//

// .env muhit o'zgaruvchilarni ozida saqlovchi joy
// 1 chi => npm i dotenv
// 2 chi => require("dotenv").config()
// 3 chi => process.env.O'zgaruvchi

//-----------------------------------------------//

//argv
//Terminaldagi sozlarni bosh joy boyicha array qilib qaytaradi

//-----------------------------------------------//

//request
//Bu frontend dan keladigan so'rov

//-----------------------------------------------//

//response
//Bu biz frontend ga yuboradigan javob

//-----------------------------------------------//

//Asnc
//Bu data ni keyingisi kelguncha keyingisiga otib ketadi

//-----------------------------------------------//

//Sync
//Bu data ni keyingisi kelguncha kutib turadi

//-----------------------------------------------//

//NodeJS da 3 xil module bor

//Locall module
//Biz o'zimiz yozgan

//Core module
//NodeJS da mavjud

//Third party module
//npm i orqali o'rnatgan

//-----------------------------------------------//

//<pending>
//Kelmagan data ni log ga chiaqarganda beradi

//-----------------------------------------------//

//resolve
//success

//reject
//unsuccess

//-----------------------------------------------//

//json
//Java Script Object Notetion

//-----------------------------------------------//

//req.query
//request ni url ni o'qib beradi

//req.params
//request ni url ni / dan keyingisini o'qib beradi

//req.body
//request dan kelayotgan data ni o'qib beradi

//-----------------------------------------------//

//uuid
//Universal Unick ID 32 tadan iborat harflar bilan nom qo'yib beradi

//joi
//Bu frontdan kealyotgan data ni validate qilish

//jwt
//JsonWebToken Token yaratish va uni verify qilib o'qib olish

//cors
//frontdan kelayotgan IP ga dostup

//-----------------------------------------------//

//cookie-parser
//Bu xotira
//res.cookie("key", value)  data joylash
//req.cookies(req.cookie)  data olish

//-----------------------------------------------//

//Architectura
//SSR => Server Site Rendering
//MVC => Model View Controller
//DDD => Domain Driven Design

//-----------------------------------------------//

//app.use(express.urlencoded({extended: true}))
//Bu HTML da formdan kelayotgan data ni formatga o'giruv beruvchi

//-----------------------------------------------//

//ejs
//Bu backend da frontend yozish
//app.set("view engine", "ejs")
//app.set("views", "process.cwd()" + "src/views")

//-----------------------------------------------//

//Socket
//Fronted bilan Backendni bir vaqtni o'zida ushlab turuvchi tool
//npm i socket.io
//https://blog.logrocket.com/building-real-time-location-app-node-js-socket-io/

//-----------------------------------------------//

//PostgreSQL
//SQL dasturlash turi ustiga qurilgan

//-----------------------------------------------//

//DataBase 2 xil bo'ladi
//Relatsion
//NoRelatsion

//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
//-----------------------------------------------//
