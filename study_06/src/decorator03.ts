/**
    method decorator
    https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
    real decorator 함수 즉, 시크니쳐에 
    target: any, propName: string, description: PropertyDescriptor가
    인자에 들어가야 한다.
 */

function editable(canBeEditable: boolean) {
    // 시그니쳐
    return function (target: any, propName: string, description: PropertyDescriptor) {
        console.log(target) // Person3 {} (class)
        console.log(propName)   // hello3
        console.log(description)
                                /**
                                    { value: [Function: hello3],
                                    writable: true,
                                    enumerable: false,
                                    configurable: true }
                                */
        description.writable = canBeEditable
    }
}

class Person3 {
    constructor () {
        console.log('new Person3()')
    }

    @editable(true)
    hello3() {
        console.log('hello3')
    }
}

const p3 = new Person3();
p3.hello3()
p3.hello3 = function () {
    console.log('hello world')
}
p3.hello3()
