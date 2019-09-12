var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
    class decorator
    인자로 생성자 함수를 받아야 한다.
 */
function hello2(construct) {
    /**
        runtime에 추가하는 느낌
        스프링에서 AOP 같은 느낌
    */
    construct.prototype.hi = function () {
        console.log(hello2);
    };
}
let Person2 = class Person2 {
};
Person2 = __decorate([
    hello2
], Person2);
const p = new Person2();
p.hi();
