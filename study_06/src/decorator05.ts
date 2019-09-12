/**
    paramater decorator
*/

// 인자를 특별히 받을게 없으면 바로 시그니쳐
function printInfo(target: any, methodName: string, paramaterIndex: number) {
    console.log(target)
    console.log(methodName)
    console.log(paramaterIndex)
}

class Person5 {
    private _name: string
    private _age: number

    constructor(name: string, @printInfo age: number) {
        this._name = name
        this._age = age
    }

    hello(@printInfo message: string) {
        console.log(message)
    }
}

const p5 = new Person5('Jongin', 12);