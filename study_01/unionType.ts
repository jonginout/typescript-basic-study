let a : any;
let b : string | number;

type StringOrNumber = string | number;
let c: StringOrNumber;

b = '스트링';
b = 0;

c = '스트링';
c = 0;

function test(arg: string | number): string | number {
    return arg
}

function test2(arg: StringOrNumber): StringOrNumber {
    return arg
}