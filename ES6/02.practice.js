const obj = {
    name: "홍길동",
    normalFn: function() {
        console.log("일반 함수:", this.name);
    },
    arrowFn: () => {
        console.log("화살표 함수:", this.name);
    }
};

obj.normalFn(); // 홍길동
obj.arrowFn();  // undefined

//2
const person = {
    name: "안찰스",
    greet: function() {
        const innerArrow = () => console.log(this.name);
        const innerNormal = function() { console.log(this.name); };
        
        innerArrow();
        innerNormal();
    }
};

person.greet();
// innerArrow 출력: 안찰스
// innerNormal 출력: undefined

function User(name) {
    this.name = name;
    setTimeout(() => {
        console.log("Hello, " + this.name);
    }, 1000);
}

new User("찰스"); // "Hello, undefined"


const tom = {
    name : 'Tom',
    sayName : function(){
        console.log(this.name);
    }
}

const alice = { name: "Alice" };

tom.sayName(); // tom
tom.sayName.call(alice); // Alice


this.tag = "Error";

function print() {
  console.log(this.tag); 
}
const obj1 = { tag: "OK" };

const boundPrint = print.bind(obj1);

print(); // error
boundPrint(); // ok