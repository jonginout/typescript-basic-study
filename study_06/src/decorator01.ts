/**
    class decorator
    인자로 생성자 함수를 받아야 한다.
 */        
function hello(construct: Function) {
    console.log(construct)
}

function helloFactory(show: boolean) {
    if (show) {
        return hello
    } else {
        return null
    }
}

@helloFactory(true)
class Person{

}