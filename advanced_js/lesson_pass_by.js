var a = 5;
var b = a;

b++;

let obj = {
    a: 'a',
    b: 'b',
    c: {
        deep: 'try and copy me'
    }
};

let clone = Object.assign({}, obj);
let clone2 = {...obj};
let superClone = JSON.parse(JSON.stringify(obj));

obj.c.deep = 'hahaha';
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);