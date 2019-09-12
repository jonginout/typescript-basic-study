/**
    property decorator
    target: any, propName: string
    description이 없다
*/
function writable(canBeWritable: boolean) {
    // 시그니쳐
    return function (target: any, propName: string): any {
        console.log(target) // Person4 {}
        console.log(propName)   // name

        // return이 description
        return {
            writable: canBeWritable
        }
    }
}

class Person4 {

    @writable(true)
    name: string = 'Jongin'

    constructor() {
        console.log('new Person4()')
    }
}

const p4 = new Person4()
console.log(p4.name)
p4.name = 'JongKi';
console.log(p4.name)