var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var str = "你好 ts"; //字符串类型
console.log(str);
var flag = true; //布尔类型
console.log(flag);
var a = 123; //number类型
console.log(a);
//第一种定义数组类型
var arr = [1, 2, 3]; //定义数字数组类型
// let arr:number[]=[1,2,'ss']; //错误写法
console.log(arr);
var arrstr = ['q', 'w', 'e']; //定义字符串数组类型
console.log(arrstr);
//第二种定义数组类型
var arrs = [12, 34, 56];
console.log(arrs);
var arrsww = ['qw', 'ed', 'fg'];
console.log(arrsww);
//远组类型(tuple) 属于数组的一种
var arrother = ['ts', 66, true];
console.log(arrother);
//枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
;
var f = Flag.success;
console.log(f);
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["blue"] = 1] = "blue";
    color[color["black"] = 6] = "black";
})(color || (color = {}));
;
var col = color.blue; //输出为1，没有赋值的时候打印的是索引值
var coll = color.black; //输出为6
console.log(col);
console.log(coll);
//任意类型,可以设置任意类型
var num = 123;
// num = 'guowuhou';
// num = false;
//null 和 undefined其它数据类型的子类型
var nums;
// nums = 123;
console.log(nums);
var numnull;
// numnull = 123; //指定了为空就不能赋值了
console.log(numnull);
//一个元素可能是number类型或者是null 可能又是undefined
var numunknow;
numunknow = 123; //要赋值只能是数字
console.log(numunknow);
//void类型: typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。
//es5写法
function sum() {
    console.log('run');
}
;
//typescript写法,定义方法的时候方法没有返回值用void
function run() {
    console.log('runing');
}
;
run();
//如果定义方法的时候方法有返回值。
function running() {
    return 123456;
}
;
console.log(running());
//匿名函数定义方法
var run2 = function () {
    return 'gwh456';
};
console.log(run2());
//never类型：是其它类型(包括null 和 undefined)的子类型，代表从不出现的值。很少使用
var aa;
// aa=123; //不能赋予数字，只能是undefined;
aa = undefined;
console.log(aa);
var bb;
// bb=123; //null;
bb = null;
console.log(bb);
// var abc:never;
// // ab = 123;
// abc = (()=>{
//     throw new Error('错误');
// })();
//ts定义函数方法传参数
function getInfo(name, age) {
    return name + "---" + age;
}
;
console.log(getInfo('guowuhou', 8));
//1.1没有返回值的写法
function info() {
    console.log('bbhhkk');
}
;
info();
//1.2方法可选参数
//es5里面方法的实参和形参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数
function getDetail(name, age) {
    if (age) {
        return name + "---" + age;
    }
    else {
        return name + "---\u5E74\u9F84\u4FDD\u5BC6";
    }
}
;
console.log(getDetail('guowuhou'));
console.log(getDetail('guowuhou', 123));
//1.2注意可选参数必须配置到参数的最后面
// function getDetails(name?:string, age:number):string{ //age为必选参数，应该在前面的位置
//     if(age){
//         return `${name}---${age}`;
//     }else{
//         return `${name}---年龄保密`;
//     }
// };
// console.log(getDetails('guowuhou'));
//1.3 es5里面没法设置默认参数，es6和ts中可以设置默认参数
function getFun(name, age) {
    if (age === void 0) { age = 20; }
    if (age) {
        return name + "---" + age;
    }
    else {
        return name + "---\u5E74\u9F84\u4FDD\u5BC6";
    }
}
;
console.log(getFun('guowuhou'));
console.log(getFun('guowuhou', 22));
//1.4剩余参数，使用三点运算符 接受新参传过来的值
function sumnum() {
    var result = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        result[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, result_1 = result; _a < result_1.length; _a++) {
        var item = result_1[_a];
        sum += item;
    }
    ;
    return sum;
}
;
console.log(sumnum(1, 2, 3, 4));
//或者写成这样也可以
function sumnums(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var sum = a;
    for (var _a = 0, result_2 = result; _a < result_2.length; _a++) {
        var item = result_2[_a];
        sum += item;
    }
    ;
    return sum;
}
;
console.log(sumnums(1, 2, 3, 4));
function getResult(str) {
    if (typeof str === "string") {
        return '我叫' + str;
    }
    else {
        return '我的年龄是' + str;
    }
}
;
console.log(getResult(12));
console.log(getResult('gwh'));
function getTotal(str, age) {
    if (age) {
        return '我叫' + str + '我的年龄' + age;
    }
    else {
        return '我叫' + str;
    }
}
;
console.log(getTotal('gwh'));
console.log(getTotal('gwh', 18));
//es定义类的方法
/* function person(name){
     this.name = name;
     this.run = function(){
         console.log(this,name)
     }
 };

 var p = new person('张三');
 p.run(); */
//ts定义类
var person1 = /** @class */ (function () {
    function person1(n) {
        this.name = n;
    }
    ;
    person1.prototype.getname = function () {
        return this.name;
    };
    ;
    person1.prototype.setname = function (name) {
        this.name = name;
        console.log(this.name);
    };
    ;
    return person1;
}());
;
var p2 = new person1('guowuhou11122223333');
p2.getname();
p2.setname('wangwu'); //改变name的值
p2.getname();
//ts中实现继承 extends/ super
var persons = /** @class */ (function () {
    function persons(n) {
        this.name = n;
    }
    ;
    persons.prototype.runs = function () {
        console.log(this.name);
    };
    return persons;
}());
;
var web = /** @class */ (function (_super) {
    __extends(web, _super);
    function web(name) {
        return _super.call(this, name) || this;
    }
    ;
    web.prototype.work = function () {
        console.log(this.name + '在运动');
    };
    ;
    return web;
}(persons));
var news = new web('hello world');
news.runs();
news.work();
//类里面的修饰符 typescript里面定义属性的时候给我们提供了三种修饰符
//public: 公有 在类里面/子类/类外面都可以访问
//protected : 在类里面/子类/可以访问 . 类外面不可以访问
//private:私有 在类里面可以访问  子类和外面都无法访问
//属性public 不加修饰符 默认就是public公有 
var person2 = /** @class */ (function () {
    function person2(n) {
        this.name = n;
    }
    ;
    person2.prototype.runs = function () {
        console.log(this.name);
    };
    return person2;
}());
;
var webs = /** @class */ (function (_super) {
    __extends(webs, _super);
    function webs(name) {
        return _super.call(this, name) || this;
    }
    ;
    webs.prototype.work = function () {
        console.log(this.name + '在打球');
    };
    ;
    return webs;
}(person2));
;
var ws = new webs('james');
ws.runs();
ws.work();
//在外部访问共有属性
var pubs = new person2('harden');
console.log(pubs.name);
//属性修饰符protected
var person3 = /** @class */ (function () {
    function person3(n) {
        this.name = n;
    }
    ;
    person3.prototype.runs = function () {
        console.log(this.name);
    };
    return person3;
}());
;
var web1 = /** @class */ (function (_super) {
    __extends(web1, _super);
    function web1(name) {
        return _super.call(this, name) || this;
    }
    ;
    web1.prototype.work = function () {
        console.log(this.name + '在打球');
    };
    ;
    return web1;
}(person3));
;
//子类可以调用protected的name;
var wss = new web1('westbrook');
wss.work(); //子类也可以访问
//注意外面不可以调用protected的name
var wsr = new person3('westbrook');
wsr.runs(); //自己可以访问
// console.log(wsr.name); //外部不可以访问
//属性private 只能在当前使用
var person4 = /** @class */ (function () {
    function person4(n) {
        this.name = n;
    }
    ;
    person4.prototype.runs = function () {
        console.log(this.name);
    };
    return person4;
}());
;
//在外部调用不可以
var wert = new person4('哈哈哈');
// console.log(wert.name); //wert.name会报错
//private自己调用
console.log(wert.runs());
var web4 = /** @class */ (function (_super) {
    __extends(web4, _super);
    function web4(name) {
        return _super.call(this, name) || this;
    }
    ;
    web4.prototype.work = function () {
        //  console.log(this.name + '在打球');  //this.name报错 在子类也访问不了this.name
    };
    ;
    return web4;
}(person4));
;
//类的静态方法调用
//es5静态方法的调用
/*
   function person6(){
       this.run1 = ()=>{ //实例方法
           console.log('ggg');
       }
   };
   person6.run2 = function() { //静态方法

   };
   var p = new person6();
   p.run1(); //实例方法的调用
   person6.run2(); //静态方法的调用;
*/
//ts静态方法 static
var person7 = /** @class */ (function () {
    function person7(name) {
        this.name = name;
    }
    person7.prototype.run = function () {
        console.log(this.name + "\u5728\u8FD0\u52A8");
    };
    person7.prototype.work = function () {
        console.log(this.name + "\u5728\u5DE5\u4F5C");
    };
    person7.print = function () {
        //  console.log('print方法' + this.age); //静态方法不能调用类里面的属性age
        console.log('print方法' + this.sex); //静态方法调用静态属性
        console.log('print方法');
    };
    //静态属性的定义
    person7.sex = "男人帮";
    return person7;
}());
;
var pbn = new person7('joke');
console.log(pbn.run()); //实例方法的调用
person7.print(); //调用静态方法
console.log(person7.sex); //静态属性的调用
//多态: 父类定义一个方法不去实现，让继承它的子类去实现 每一个子类有不同的表现
//多态属于继承
var animal = /** @class */ (function () {
    function animal(name) {
        this.name = name;
    }
    ;
    animal.prototype.eat = function () {
        console.log('吃的方法');
    };
    return animal;
}());
;
//
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog(name) {
        return _super.call(this, name) || this;
    }
    ;
    dog.prototype.eat = function () {
        return this.name + '吃粮食';
    };
    return dog;
}(animal));
var cat = /** @class */ (function (_super) {
    __extends(cat, _super);
    function cat(name) {
        return _super.call(this, name) || this;
    }
    ;
    cat.prototype.eat = function () {
        return this.name + '吃老鼠';
    };
    return cat;
}(animal));
//typescript抽象方法,他是提供其它类继承的基类，不能直接被实例化。
//abstract抽象方法只能放在抽象类里面
//抽象类和抽象方法用来定义标准,标准：animals 这个类要求它的子类必须包含eat方法
//标准：
var animals = /** @class */ (function () {
    function animals(name) {
        this.name = name;
        console.log(this.name);
    }
    return animals;
}());
//var a = new animals() //错误写法，不能直接实例化
var horser = /** @class */ (function (_super) {
    __extends(horser, _super);
    function horser(name) {
        return _super.call(this, name) || this;
    }
    ;
    //抽象类的子类必须实现抽象类里面的抽象方法,就是eat方法,这里面不能没有eat方法，否则会报错.
    horser.prototype.eat = function () {
        console.log(this.name + '吃石榴');
    };
    ;
    return horser;
}(animals));
var hors = new horser('马儿');
console.log(hors.eat());
//接口的作用，在面向对象的编程中，接口是一种规范的定义,它定义了行为和动作规范，在程序设计里面，接口起到一种限制和规范的作用。
//接口定义了某一批类所需要遵守的规范， 接口不关心这些类内部状态数据，也不关心这些类方法的实现细节，它只规定这批类里面必须
//提供某些方法，提供这些方法的类就可以满足实际需求。typescript中的接口类似于java，同时还增加了更灵活的
//接口类型，包括属性/函数/可索引和类等。
//（一）属性接口 1.1对json的约束  
//ts定义方法 传入参数对json进行约束
/*function printFun(name:string):void{
    console.log(name)
};
printFun('wade');*/
function printFunction(labelObj) {
    console.log(labelObj.label);
}
;
// printFunction('wade'); //错误写法
printFunction({ label: 'wadeing' }); //正确写法
function cloneFun(name) {
    //必须传入对象 要有firstname secondname
    console.log(name.firstname + '--' + name.secondname);
}
// cloneFun('123') //错误写法
// cloneFun({age: 20}) //错误写法
var obj = { age: 20, firstname: 'guowuhou', secondname: 'guoer' };
/*注意和下面写法的区别 直接写在里面只能是两种，用对象接受只要包含就可以*/
cloneFun(obj); //正确写法
// cloneFun({age: 20, firstname: 'guowuhou', secondname:'guoer'}) //错误写法
cloneFun({ firstname: 'guowuhou', secondname: 'guoer' }); //正确写法
;
function getInfos(option) {
    console.log(option);
}
;
getInfos({
    age: 20,
    sex: 'man'
});
getInfos({
    // age:20, //age也可以不传
    sex: 'man'
});
;
//用原生的js封装的ajax
function ajax(config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('成功');
            if (config.dataType == 'json') {
                console.log(JSON.parse(xhr.responseText));
            }
            else {
                console.log(xhr.responseText);
            }
        }
    };
}
;
ajax({
    type: 'get',
    url: 'http://a.itying.com/api/productlist',
    data: '',
    dataType: 'json'
});
var md5 = function (key, value) {
    //模拟操作
    return key + value;
};
console.log(md5('name', 'zhangsan'));
;
var arrrss = ['aaa', 'ccc'];
// var arrrss:userArr = [222, 'ccc']; //错误写法
console.log(arrrss[0]);
;
var arrobj = { name: 'zhangsan' };
var copyanimal = /** @class */ (function () {
    function copyanimal(name) {
        this.name = name;
    }
    ;
    copyanimal.prototype.eat = function () {
        console.log(this.name + "吃杂粮");
    };
    return copyanimal;
}());
var dds = new copyanimal('piggers');
dds.eat();
var chickens = /** @class */ (function () {
    function chickens(name) {
        this.name = name;
    }
    ;
    chickens.prototype.eat = function (anname) {
        console.log(this.name + "吃蚯蚓" + anname);
    };
    return chickens;
}());
var ccc = new chickens('小鸡');
ccc.eat('小马');
var unknow = /** @class */ (function () {
    function unknow(name) {
        this.name = name;
    }
    ;
    unknow.prototype.eat = function () {
        console.log(this.name + '喜欢吃馒头');
    };
    ;
    unknow.prototype.work = function () {
        console.log(this.name + '喜欢写代码');
    };
    return unknow;
}());
;
var nbgh = new unknow('shiyuzhu');
nbgh.work();
nbgh.eat();
//typescript中的泛型
//1.泛型的定义
//2.泛型函数
//3.泛型类
//4.泛型接口
/*
泛型：软件工程中，我们不仅要创造一致的定义良好的api，同时也要考虑可重用性。组件不仅能够支持当前的
数据类型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
在像c#和java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种数据类型的数据。
这样用户就可以以自己的数据类型来使用组件。
  通俗理解就是泛型是解决类 接口 方法的复用性以及对不特定数据类型的支持
 */
//ts写法这种只能返回string类型，现在需要返回的适合任何类型的
/*
    function getDataInfo(value:string):string{
        return value
    };
    getDataInfo('hello ts')
*/
//ts的any写法这种可以支持返回多种类型，但是放弃了类型检查 比如：传的参数是string 返回的可以number或者string等其它类型
/*
    function getDataInfos(value:any):any{
        return 123
    }
    getDataInfos('hello world');
*/
//以上的例子都不太符合，约束不到我们想要的
//泛型：可以支持不特定的数据类型 要求:传入的参数和返回的参数一致
//T表示泛型，具体的什么类型是调用这个方法的时候决定的
function getResultss(value) {
    return value;
}
;
getResultss(123);
getResultss('123');
// getResultss<number>('123'); //错误写法
function getResuewewlt1(value) {
    return '1234';
}
;
getResuewewlt1(123); //参数必须是number
getResuewewlt1('123'); //参数必须是string
//泛型类：比如有个最小算法，需要同时支持返回数字和字符窜两种类型。通过泛型的类来实现
/*  原先定义的方法
    class minClass{
        public list:number[]=[];
        add(num:number){
            this.list.push(num);
        };
        min(){
            var minNum = this.list[0];
            this.list.forEach((item) => {
                if(minNum > item){
                    minNum = item;
                }
            });
            return minNum;
        }
    };

    var mm = new minClass();
    mm.add(3);
    mm.add(22);
    mm.add(24);
    mm.add(5);
    console.log(mm.min());
*/
//类的泛型
var minClass = /** @class */ (function () {
    function minClass() {
        this.list = [];
    }
    minClass.prototype.add = function (value) {
        this.list.push(value);
    };
    ;
    minClass.prototype.min = function () {
        var minNum = this.list[0];
        this.list.forEach(function (item) {
            if (minNum > item) {
                minNum = item;
            }
        });
        return minNum;
    };
    return minClass;
}());
;
var m1 = new minClass(); //实例化类 并指定类类的T代表的类型是number
m1.add(1);
m1.add(22);
m1.add(5);
console.log(m1.min());
var m2 = new minClass(); //实例化类 string
m2.add('a');
m2.add('c');
m2.add('v');
console.log(m2.min());
var setDataS = function (value1) {
    return value1;
};
setDataS('gwh6666000');
setDataS(1238888);
function getDatafun(value1) {
    return value1;
}
;
var myGetData = getDatafun;
myGetData('20');
// myGetData(20); //错误写法
/*
类的泛型 泛型类可以帮助我们避免重复的代码以及对不特定数据类型的支持(类型的校验)，下面我们看看把类当作参数的泛型类
1 定义类
2 把类作为参数来约束数据传入的类型

*/
//比如有个最小的推算法 普通类型
/*
定义一个user类，这个类的作用就是映射数据库的字段
然后定义一个mysqldb的类 这个类用于操作数据库
然后把user类作为参数传入到mysqldb中
 */
// 例子(一)
// class userNames{
//     username: string | undefined;
//     password: string | undefined;
// }
// class mysqldb{
//     add(user:userNames):boolean{
//         console.log(user);
//         return true;
//     }
// }
// var UN = new userNames();
// UN.username = 'zhangsan';
// UN.password = '123456';
// var dbFun = new mysqldb();
// dbFun.add(UN);
// 例子(二)
// class articleCate{
//     title: string | undefined;
//     desc: string | undefined;
//     status: number | undefined;
// }
// class artMysqldb{
//     add(info:articleCate):boolean{
//         console.log(info.title);
//         return true;
//     }
// }
// var at= new articleCate();
// at.title = 'zhangsan';
// at.desc = '123456';
// at.status = 123;
// var dbArtMysql = new artMysqldb();
// dbArtMysql.add(at);
//针对以上例子1 2 的定义不灵活 会照成代码的冗余 故引入泛型
var MysqlDnFun = /** @class */ (function () {
    function MysqlDnFun() {
    }
    MysqlDnFun.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return MysqlDnFun;
}());
//1 定义一个userInfo类 和数据库进行映射
// class userInfo{
//     userId:string | undefined;
//     userAdress:string | undefined;
// }
// var userDetail = new userInfo();
// userDetail.userId = 'hahahaha';
// userDetail.userAdress = 'jiangxishengshangraoshi';
// var newMysqlDb = new MysqlDnFun<userInfo>();
// newMysqlDb.add(userDetail);
// newMysqlDb.add(u); //错误写法
//2 定义一个articleNew类 和数据进行映射 
var articleNew = /** @class */ (function () {
    function articleNew(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return articleNew;
}());
var ayu = new articleNew({
    title: '分类',
    desc: '1111',
    status: 5
});
var newMysqlDbFun = new MysqlDnFun();
newMysqlDbFun.add(ayu);
//定义一个操作mysql数据库的类 。注意：要实现泛型接口 这个类也应该是一个泛型类
var mongoDbInter = /** @class */ (function () {
    function mongoDbInter() {
        console.log('数据库建立连接');
    }
    mongoDbInter.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    ;
    mongoDbInter.prototype.update = function (info, id) {
        return true;
    };
    ;
    mongoDbInter.prototype["delete"] = function (info, id) {
        return true;
    };
    ;
    mongoDbInter.prototype.get = function (info) {
        return [];
    };
    ;
    return mongoDbInter;
}());
var UserCustomer = /** @class */ (function () {
    function UserCustomer() {
    }
    return UserCustomer;
}());
;
var customer = new UserCustomer();
customer.username = 'guowuhou';
customer.password = '87654321';
var pubmongoDb = new mongoDbInter();
pubmongoDb.add(customer);
