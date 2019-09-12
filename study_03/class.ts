class Person {
    // default 가 public
    name: string;
    age: number = null;
    private _gender: string = null;
    protected _address: string = null;  // 부모자식간 스코프
    /**
        저렇게하면 컴파일시 undefined가 되니깐
        null을 기본값으로 주는것을 추천
    */

    /**
        기본생성자 오버로드
     */
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    /**
        getter, setter
    */
    get gender(): string{
        return this._gender
    }
    set gender(gender: string) {
        this._gender = gender
    }

    /**
        method
    */
    hello = (): string => {
        return 'hello'
    }

    /**
        static
    */
    static job: string = 'teacher'
}

interface IChild {
    getGender()
}

class Child extends Person implements IChild {
    constructor() {
        super('Jongin3', 123);
        this.name
    }
    // 공식적인 getter setter를 사용하는게 싫다면
    // 저렇게 자바 컨벤션처럼 인터페이스를 만들어서
    // getter setter를 강제하는것이 좋아보인다.
    getGender() {
        return this._address;
    }
}

abstract class APerson {
    // new 생성불가
}

// 외부에서는 인스턴스화 불가
// 프라이빗 생성자
// 싱글톤 패턴
class Teacher {
    private static Instance: Teacher = null

    public static getInstance(): Teacher {
        if (Teacher.Instance === null) {
            Teacher.Instance = new Teacher()
        }
        return Teacher.Instance
    }

    private constructor() {
        
    }
    
    hello() {
        console.log('???')
    }
}
const teacher1 = Teacher.getInstance();
teacher1.hello()


// 당연히 static이니깐 인스턴스가 없어도 접근 가능
console.log(Person.job)

const person2 = new Person('Jongin', 12);

person2.name = 'Jongin2';
person2.age = 123;

console.log(person2.gender)
console.log(person2.hello())

const child1 = new Child()