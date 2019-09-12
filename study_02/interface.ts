interface Person {
    /**
     * 이 인터페이스의 인덱스는 string 이고 값으로 뭐가 들어와 도 된다.
     */
    [index: string]: any;
    name: string;
    age: number;
    gender?: string; // 없어도 된다.
}

interface Person2 {
    /**
     * indexable 타입을 약간 변수처럼 사용
     * person[1] = {}
     */
    [index: number]: any;
}

interface Person3 {
    name: string,
    hello?(): void;    // function을 인터페이스에
}

class CPerson implements Person3 {
    name: string = null;

    constructor(name: string) {
        this.name = name
        
    }

    // 구현
    hello(): void {
        console.log(`hello world!`)
    }

    hi(): void {
        console.log(`hi world!`)
    }
}

interface Person4 extends Person3 {

}

interface HelloPersion {
    (name: string, age?: number): void;
}

let helloPersion: HelloPersion = function (name: string, age?: number) {
    
}

helloPersion(`dsa`, 1)

const cperson: CPerson = new CPerson('종인');

const person: Person3 = {
    name: 'Jongin',
    // hello: (): void => {
        // }
    // 아래와 같다
    hello(): void {
    }
}

function hello(p: Person): void {
    console.log(`안녕하세요 ${p.name} 입니다.`);
}