/*

 定义一个数据库的库 支持 mysql mongodb
 */

interface DBI<T>{
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(info:T,id:number):boolean;
    get(info:T):any[];
}

//定义一个操作mysql数据库的类 。注意：要实现泛型接口 这个类也应该是一个泛型类
class mongoDbInter<T> implements DBI<T>{
    constructor(){
        console.log('数据库建立连接');
    }
    add(info:T):boolean{
        console.log(info);
        return true;
    };
    update(info:T,id:number):boolean{
        return true;
    };
    delete(info:T, id:number):boolean{
        return true;
    };
    get(info:T):any[]{
        return []
    };
}

class UserCustomer{
    username:string;
    password:string;
};

var customer = new UserCustomer();
customer.username = 'guowuhou';
customer.password = '87654321';

var pubmongoDb = new mongoDbInter<UserCustomer>();
pubmongoDb.add(customer);


export {mongoDbInter}; //暴露出方法