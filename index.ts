
let str:string = "你好 ts"; //字符串类型
console.log(str);

let flag:boolean=true; //布尔类型
console.log(flag);

let a:number=123; //number类型
console.log(a);


//第一种定义数组类型
let arr:number[]=[1,2,3]; //定义数字数组类型
// let arr:number[]=[1,2,'ss']; //错误写法
console.log(arr);

let arrstr:string[]=['q','w','e']; //定义字符串数组类型
console.log(arrstr);

//第二种定义数组类型
let arrs:Array<number>=[12,34,56];
console.log(arrs);

let arrsww:Array<string>=['qw','ed','fg'];
console.log(arrsww);


//远组类型(tuple) 属于数组的一种
let arrother:[string,number,boolean] = ['ts', 66, true];
console.log(arrother);

//枚举类型
enum Flag {success=1,error=-1};
var f:Flag=Flag.success;
console.log(f);

enum color {red,blue,black=6};
var col:color=color.blue; //输出为1，没有赋值的时候打印的是索引值
var coll:color=color.black; //输出为6
console.log(col);
console.log(coll);



//任意类型,可以设置任意类型
var num:any = 123;
// num = 'guowuhou';
// num = false;


//null 和 undefined其它数据类型的子类型
var nums:number | undefined;
// nums = 123;
console.log(nums);

var numnull:null;
// numnull = 123; //指定了为空就不能赋值了
console.log(numnull);

//一个元素可能是number类型或者是null 可能又是undefined
var numunknow:number | null | undefined;
numunknow=123; //要赋值只能是数字
console.log(numunknow);



//void类型: typescript中的void表示没有任何类型，一般用于定义方法的时候方法没有返回值。
//es5写法
function sum(){
    console.log('run');
};

//typescript写法,定义方法的时候方法没有返回值用void
function run():void{
    console.log('runing');
};
run();

//如果定义方法的时候方法有返回值。
function running():number{ //声明函数定义
    return 123456;
};
console.log(running());

//匿名函数定义方法
let run2 = function():string{
    return 'gwh456';
};
console.log(run2());


//never类型：是其它类型(包括null 和 undefined)的子类型，代表从不出现的值。很少使用
var aa:undefined;
// aa=123; //不能赋予数字，只能是undefined;
aa = undefined;
console.log(aa);

var bb:null;
// bb=123; //null;
bb = null;
console.log(bb);

// var abc:never;
// // ab = 123;
// abc = (()=>{
//     throw new Error('错误');
// })();






//ts定义函数方法传参数
function getInfo(name:string, age:number):string{
    return `${name}---${age}`;
};
console.log(getInfo('guowuhou',8));

//1.1没有返回值的写法
function info():void{
    console.log('bbhhkk');
};
info();

//1.2方法可选参数
//es5里面方法的实参和形参可以不一样，但是ts中必须一样，如果不一样就需要配置可选参数
function getDetail(name:string, age?:number):string{ //?表示age可以传也可以不传
    if(age){
        return `${name}---${age}`;
    }else{
        return `${name}---年龄保密`;
    }
};
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
function getFun(name:string,age:number=20):string{ //设置默认参数
    if(age){
        return `${name}---${age}`;
    }else{
        return `${name}---年龄保密`;
    }
};
console.log(getFun('guowuhou'));
console.log(getFun('guowuhou', 22));

//1.4剩余参数，使用三点运算符 接受新参传过来的值
function sumnum(...result:number[]):number{
    let sum = 0;
    for(let item of result){
        sum+=item;
    };
    return sum;
};
console.log(sumnum(1,2,3,4));
//或者写成这样也可以
function sumnums(a:number,...result:number[]){ //会把1复制给a
    let sum = a;
    for(let item of result){
        sum+=item;
    };
    return sum;
};
console.log(sumnums(1,2,3,4));



//函数的重载
//java中方法的重载指的是两个或者两个以上同名的函数，但他们的参数不一样，这时会出现函数重载的情况。
//typescript中的重载，通过同一个函数提供多个函数类型定义来实现多种功能的目的。
//ts为了兼容es5和es6 重载的写法和java中有区别。

//es5中出现同名方法，下面的会替换上面的方法。
//例如
 /*function css(config){

 };

 function css(config,value){
     
 };*/

 //ts中的函数重载,参数不一样
 function getResult(name:string):string;
 function getResult(age:number):number;
 function getResult(str:any):any{
     if(typeof str==="string"){
         return '我叫' + str;
     }else{
         return '我的年龄是' + str;
     }
 };

 console.log(getResult(12));
 console.log(getResult('gwh'));
//  console.log(getResult(true));错误的写法，因为里面没有定义boolean

//ts中的函数重载,参数一样
 function getTotal(name:string):string;
 function getTotal(name:string, age:number):string;
 function getTotal(str:any, age?:number):any{
     if(age){
         return '我叫' + str+'我的年龄'+ age; 
     }else{
         return '我叫' + str; 
     }
 };

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
class person1 {
     public name:string; //属性  前面可以省例了public关键词
     constructor(n:string){
         this.name = n;
     };
     getname():string{
         return this.name;
     };
     setname(name:string):void{
         this.name = name;
         console.log(this.name);
     };
 };
  var p2 = new person1('guowuhou11122223333');
  p2.getname();
  p2.setname('wangwu'); //改变name的值
  p2.getname();


  //ts中实现继承 extends/ super
  class persons {
     public name:string; //属性 前面可以省例了public关键词
     constructor(n:string){
         this.name = n;
     };
     runs():void{
         console.log(this.name);
     }
 };
 
 class web extends persons{
     constructor(name:string) {
         super(name);  //初始化父类的继承 super必须要写
     };
     work():void { //继承了persons，也可以扩展自己的方法 有自己的方法
         console.log(this.name + '在运动');
     };
 }

 let news = new web('hello world');
 news.runs();
 news.work();


 //类里面的修饰符 typescript里面定义属性的时候给我们提供了三种修饰符
 //public: 公有 在类里面/子类/类外面都可以访问
 //protected : 在类里面/子类/可以访问 . 类外面不可以访问
 //private:私有 在类里面可以访问  子类和外面都无法访问

 //属性public 不加修饰符 默认就是public公有 
  class person2 {
     public name:string; //公有属性
     constructor(n:string){
         this.name = n;
     };
     runs():void{
         console.log(this.name);
     }
 };

 class webs extends person2{
     constructor(name:string) {
         super(name);  //初始化父类的继承 super必须要写
     };
     work():void { 
         console.log(this.name + '在打球');
     };
 };

 var ws = new webs('james');
 ws.runs();
 ws.work();
 //在外部访问共有属性
 var pubs = new person2('harden');
 console.log(pubs.name);


  //属性修饰符protected
  class person3 {
     protected name:string; //保护类型
     constructor(n:string){
         this.name = n;
     };
     runs():void{
         console.log(this.name);
     }
 };

 class web1 extends person3{
     constructor(name:string) {
         super(name);  //初始化父类的继承 super必须要写
     };
     work():void { 
         console.log(this.name + '在打球');
     };
 };
//子类可以调用protected的name;
 var wss = new web1('westbrook');
 wss.work(); //子类也可以访问
//注意外面不可以调用protected的name
var wsr = new person3('westbrook');
wsr.runs(); //自己可以访问
// console.log(wsr.name); //外部不可以访问


//属性private 只能在当前使用
class person4 {
     private name:string; //私有类型
     constructor(n:string){
         this.name = n;
     };
     runs():void{
         console.log(this.name);
     }
};
//在外部调用不可以
var wert = new person4('哈哈哈');
// console.log(wert.name); //wert.name会报错

//private自己调用
console.log(wert.runs());

class web4 extends person4{
     constructor(name:string) {
         super(name);  //初始化父类的继承 super必须要写
     };
     work():void { 
        //  console.log(this.name + '在打球');  //this.name报错 在子类也访问不了this.name
     };
 };


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
 class person7 {
     public name:string;
     public age:number;
     //静态属性的定义
     static sex = "男人帮";
     constructor(name){
         this.name = name;
     }
     run() {
         console.log(`${this.name}在运动`);
     }
     work() {
         console.log(`${this.name}在工作`);
     }
     static print(){ //定义的静态方法
        //  console.log('print方法' + this.age); //静态方法不能调用类里面的属性age
         console.log('print方法' + this.sex); //静态方法调用静态属性
         console.log('print方法');
     }
 };

 var pbn = new person7('joke');
 console.log(pbn.run()); //实例方法的调用
 person7.print(); //调用静态方法
 console.log(person7.sex); //静态属性的调用




 //多态: 父类定义一个方法不去实现，让继承它的子类去实现 每一个子类有不同的表现
 //多态属于继承

 class animal {
     public name:string;
     constructor(name:string){
         this.name = name;
     };
     eat() { //具体吃什么 让继承它的子类去实现 每一个子类的表现不一样
         console.log('吃的方法')
     }
 };
//
 class dog extends animal{
     constructor(name:string){
         super(name);
     };
     eat():string {
         return this.name+'吃粮食'
     }
 }

class cat extends animal{
     constructor(name:string){
         super(name);
     };
     eat():string {
         return this.name+'吃老鼠'
     }
 }



 //typescript抽象方法,他是提供其它类继承的基类，不能直接被实例化。
 //abstract抽象方法只能放在抽象类里面
 //抽象类和抽象方法用来定义标准,标准：animals 这个类要求它的子类必须包含eat方法
 //标准：

 abstract class animals{ //抽象类
     public name:string;
     constructor(name:string){
         this.name = name;
         console.log(this.name);
     }
     abstract eat():any;  //抽象方法不包含具体的实现并且必须在派生类中实现
 } 

 //var a = new animals() //错误写法，不能直接实例化

 class horser extends animals{
     constructor(name:any){
         super(name);
     };
     //抽象类的子类必须实现抽象类里面的抽象方法,就是eat方法,这里面不能没有eat方法，否则会报错.
     eat() {
         console.log(this.name+ '吃石榴');
     };
 }

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
function printFunction(labelObj:{label:string}):void{ //传入的为对象
    console.log(labelObj.label)
};
// printFunction('wade'); //错误写法
printFunction({label:'wadeing'}) //正确写法

//属性接口 1.2对批量方法传入的参数进行约束 行为和动作规范
interface fullname{
    firstname: string; //注意;约束
    secondname: string;
}
function cloneFun(name:fullname):void{
    //必须传入对象 要有firstname secondname
    console.log(name.firstname + '--' + name.secondname)
}
// cloneFun('123') //错误写法
// cloneFun({age: 20}) //错误写法
let obj = {age: 20, firstname: 'guowuhou', secondname:'guoer'}; 
/*注意和下面写法的区别 直接写在里面只能是两种，用对象接受只要包含就可以*/
cloneFun(obj); //正确写法
// cloneFun({age: 20, firstname: 'guowuhou', secondname:'guoer'}) //错误写法
cloneFun({firstname: 'guowuhou', secondname:'guoer'}); //正确写法

//属性接口 1.3可选属性
interface rules{
    sex:string;
    age?:number; //加?表示可以传可以不传
};
function getInfos(option:rules):void {
    console.log(option);
};
getInfos({ //里面的参数顺序可以不一样
    age:20,
    sex:'man'
});
getInfos({ 
    // age:20, //age也可以不传
    sex:'man'
})

//以下为上面属性接口的例子
/*
   $.ajax({
       type: 'GET',
       url: 'test.json',
       data: {username:$("#root").val(),content:$("#content").val()},
       dataType: 'json
   })
*/

interface config{ 
    type:string,
    url:string,
    data?:string,
    dataType:string
};
//用原生的js封装的ajax
function ajax(config:config):void{
    var xhr=new XMLHttpRequest();
    xhr.open(config.type, config.url, true);
    xhr.send(config.data);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            console.log('成功');
            if(config.dataType == 'json'){
                console.log(JSON.parse(xhr.responseText));
            }else{
                console.log(xhr.responseText)
            }
        }
    }
};
ajax({
    type:'get',
    url: 'http://a.itying.com/api/productlist',
    data: '', //可传可不传
    dataType: 'json'
})


//（二）函数类型接口：2.1对方法传入的参数 以及返回值进行约束

//加密的函数类型接口
interface encrypt{
    (key:string,value:string):string; 
    //(key:string,value:string)表示传入的参数的约束 :string表示对返回结果的约束
}

var md5:encrypt = function(key:string,value:string):string{
    //模拟操作
    return key + value;
}

console.log(md5('name','zhangsan'));
// console.log(md5('name',zhangsan)); //错误写法


//(三) 可索引接口，数组的约束（不常用）

//ts定义数组的方式
// var arrrs:number[]=[1,2,3];
// var arrrs:Array<string>=['1','2','3'];
//可索引接口，对数组的约束
interface userArr {
    [index:number]:string
};

var arrrss:userArr = ['aaa', 'ccc'];
// var arrrss:userArr = [222, 'ccc']; //错误写法
console.log(arrrss[0]);

//可索引接口，对对象的约束
interface userObj {
    [index:string]:string
};

var arrobj:userObj={name:'zhangsan'}; 
// var arrobj:userObj={name:123}; //错误写法



//(四)类类型接口：对类的约束 和抽象类有点相识
interface animanObj {
    name:string;
    eat(str:string):void;
}

class copyanimal implements animanObj{
    name: string;
    constructor(name:string){
        this.name = name;
    };
    eat():void{ //eat里面可以不传参数,但是eat方法一定要写
        console.log(this.name + "吃杂粮")
    }
}

var dds = new copyanimal('piggers');
dds.eat();

class chickens implements animanObj{
    name: string;
    constructor(name:string){
        this.name = name;
    };
    eat(anname:string):void{ //eat里面可以不传参数,但是eat方法一定要写
        console.log(this.name + "吃蚯蚓" + anname);
    }
}

var ccc = new chickens('小鸡');
ccc.eat('小马');



//接口的扩展，接口可以继承
interface food {
    eat():void
}

interface noodle extends food{
    work():void;
}

class unknow implements noodle{
    public name:string;
    constructor(name:string){
        this.name = name;
    };
    eat():void { //这个方法必须要写
        console.log(this.name + '喜欢吃馒头');
    };
    work():void { //这个方法必须要写
        console.log(this.name + '喜欢写代码');
    }
};

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
function getResultss<T>(value:T):T{ //T这种写法表示为传入什么返回什么
    return value;
};
getResultss<number>(123);
getResultss<string>('123');
// getResultss<number>('123'); //错误写法

function getResuewewlt1<T>(value:T):any{ //T这种写法表示为传入什么返回的可以为任意的
    return '1234';
};
getResuewewlt1<number>(123); //参数必须是number
getResuewewlt1<string>('123'); //参数必须是string


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
class minClass<T>{
    public list:T[]=[];
    add(value:T){
        this.list.push(value);
    };
    min():T{
        var minNum = this.list[0];
        this.list.forEach((item) => {
            if(minNum > item){
                minNum = item;
            }   
        });
        return minNum;
    }
};

var m1 = new minClass<number>(); //实例化类 并指定类类的T代表的类型是number
m1.add(1);
m1.add(22);
m1.add(5);
console.log(m1.min());


var m2 = new minClass<string>(); //实例化类 string
m2.add('a');
m2.add('c');
m2.add('v');
console.log(m2.min());

//泛型接口 
//函数类型接口
// interface configFn{
//     (value1:string, value2:string):string;
// }

// var setData:configFn = function(value1:string,value2:string):string{
//     return value1 + value2;
// };

// setData('gwh', 'xlj');
// setData(123, 456); //错误写法

//第一种1:泛型接口
interface configFns{
    <T>(value1:T):T;
}

var setDataS:configFns = function<T>(value1:T):T{
    return value1;
};

setDataS<string>('gwh6666000');
setDataS<number>(1238888);

//第二种2:泛型接口
interface configF1<T>{
    (value1:T):T;
}
function getDatafun<T>(value1:T):T{
    return value1;
};

var myGetData:configF1<string>=getDatafun;

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
class MysqlDnFun<T>{
    add(info:T):boolean{
        console.log(info);
        return true;
    }
}
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
class articleNew{
    title: string | undefined;
    desc: string | undefined;
    status: number | undefined;
    constructor(params:{
        title: string | undefined;
        desc: string | undefined;
        status?: number | undefined;
    }){
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
}

var ayu = new articleNew({
    title:'分类',
    desc: '1111',
    status: 5
});

 var newMysqlDbFun = new MysqlDnFun<articleNew>();

newMysqlDbFun.add(ayu); 

//详细的例子 如mongoDb增删改的封装见modules下的db.ts文件


