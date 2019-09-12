/**
    method decorator
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
    real decorator 함수에 target: any, propName: string, description: PropertyDescriptor가
    인자에 들어가야 한다.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function editable(canBeEditable) {
    return function (target, propName, description) {
        console.log(target); // Person3 {} (class)
        console.log(propName); // hello3
        console.log(description);
        /**
            { value: [Function: hello3],
            writable: true,
            enumerable: false,
            configurable: true }
        */
        description.writable = canBeEditable;
    };
}
class Person3 {
    constructor() {
        console.log('new Person3()');
    }
    hello3() {
        console.log('hello3');
    }
}
__decorate([
    editable(true)
], Person3.prototype, "hello3", null);
const p3 = new Person3();
p3.hello3();
p3.hello3 = function () {
    console.log('hello world');
};
p3.hello3();
