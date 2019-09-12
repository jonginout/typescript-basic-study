iterator


es3
- for(var i = 0; i < array.length; i++)

es5
- array.forEach
- 단점 : return 으로 순회 탈출 불가

es6
- for(const item of array)
- for(const key in object)
    - for in문은 오브젝트 순회용으로만 쓰는것을 추천
    - 이유는 array index가 number가 아니라 string으로 나옴

iterator
- Symbol.iterator 구현체가 있으면 iterable이라고 한다.