class Person<T> {
    private _name: T

    constructor(name: T) {
        this._name = name
    }
    
}

const jongin = new Person('Jongin')
const numberMan = new Person<number>(1321)