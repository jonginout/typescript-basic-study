/**
    class decorator
    인자로 생성자 함수를 받아야 한다.
 */        
function hello2(construct: Function) {
    /**
        runtime에 추가하는 느낌
        스프링에서 AOP 같은 느낌
    */
    construct.prototype.hi = function () {
        console.log(hello2);
    }
}

@hello2
class Person2{

}

const p = new Person2();

(<any>p).hi();