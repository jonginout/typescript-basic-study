interface Person5 {
    name: string;
    age: number;
}

// Person5의 key들
type Test = keyof Person5;

/**
    Test 타입은 
    문자열 "name"이라는 리터럴 타입이고
    문자열 "age"이라는 리터럴 타입이다

    리터럴이라는건 그 문자열 그 자체를 말한다.
*/

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key]
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
    obj[key] = value
}

const person: Person5 = {
    name: 'Jongin5',
    age: 121
}

// 컴파일전에 오류 찾아낸다 상당히 타입세이프 하다.
// getProperty(person, 'age1')
getProperty(person, 'age')
setProperty(person, 'name', 'Jongin6')