/**
    paramater decorator
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// 인자를 특별히 받을게 없으면 바로 시그니쳐
function printInfo(target, methodName, paramaterIndex) {
    console.log(target);
    console.log(methodName);
    console.log(paramaterIndex);
}
let Person5 = class Person5 {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    hello(message) {
        console.log(message);
    }
};
__decorate([
    __param(0, printInfo)
], Person5.prototype, "hello", null);
Person5 = __decorate([
    __param(1, printInfo)
], Person5);
const p5 = new Person5('Jongin', 12);
