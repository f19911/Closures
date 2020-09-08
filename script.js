function sum(a, b, c, d) { return a + b + c + d };

const curry = (argument, a = 0, b = 0) => (c = 0, d = 0) => argument(a, b, c, d);
const curriedFunction = curry(sum, 1, 2); // запоминает для вызова sum 2 параметра

console.log(curriedFunction(3, 4)) // выводит 10 т.е. выполняется функционал sum(1,2,3,4).


const counter = (value = 0) => {
    return {
        inc: () => value++,
        dec: () => value--,
        value: () => value,
    };
};
const iterator = counter();

iterator.inc() // увеличивает значение на 1
iterator.inc() // еще на 1
iterator.dec() // уменьшает на 1

console.log(iterator.value()); // выводит 1