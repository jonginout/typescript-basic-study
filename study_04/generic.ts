/**
    최대한 any를 쓰지말자
*/
function helloString(message: string): string {
    return message;
}

function helloAny(message: any): any {
    return message;
}

function hello<T>(message: T): T {
    return message;
}

hello('Jongin');
// hello<string>(32);
hello<string>('Jongin2');
hello<string>('Jongin2').toLowerCase()

// 아래 두개가 똑같은 것
const arr1: string[] = [];
const arr2: Array<string> = [];

function helloArray<T>(arr: T[]): Array<T> {
    return arr
}
