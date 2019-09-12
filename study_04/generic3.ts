class Person2<T extends string | number> {
    private _name: T

    constructor(name: T) {
        this._name = name
    }
    
}

const jongin2 = new Person2('Jongin')
const numberMan2 = new Person2<number>(1321)


class Person3<T, K> {
    private _name: T
    private _age: K

    constructor(name: T, age: K) {
        this._name = name
        this._age = age
    }
}

new Person3<string, number>('Jongin3', 123)