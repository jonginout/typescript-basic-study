var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
    property decorator
    target: any, propName: string
    description이 없다
*/
function writable(canBeWritable) {
    // 시그니쳐
    return function (target, propName) {
        console.log(target); // Person4 {}
        console.log(propName); // name
        // return이 description
        return {
            writable: canBeWritable
        };
    };
}
class Person4 {
    constructor() {
        this.name = 'Jongin';
        console.log('new Person4()');
    }
}
__decorate([
    writable(true)
], Person4.prototype, "name", void 0);
const p4 = new Person4();
console.log(p4.name);
p4.name = 'JongKi';
console.log(p4.name);
