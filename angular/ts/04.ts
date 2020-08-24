// 访问权限词
/*
*public
*protected
*private
*/

class Demo{
    public name='tom';
    protected age=23;
    private married=true;
    show(){
        console.log(this.married);
    }
}

let a=new Demo();
a.name='jack'

class Son extends Demo{
    show(){
        console.log(this.name);
    }
}