"use strict";
exports.__esModule = true;
var Stack = /** @class */ (function () {
    function Stack() {
        this._count = 0;
        this._storage = {};
    }
    Stack.prototype.push = function (item) {
        this._storage[this._count] = item;
        this._count++;
    };
    Stack.prototype.pop = function () {
        if (this._count === 0) {
            return new Error("You can't pop item from empty stack");
        }
        this._count--;
        var result = this._storage[this._count];
        delete this._storage[this._count];
        return result;
    };
    Stack.prototype.peek = function () {
        return this._storage[this._count];
    };
    Stack.prototype.isEmpty = function () {
        return this._count === 0;
    };
    Stack.prototype.swap = function () {
        if (this._count <= 1) {
            return new Error('To swap stack peeks it must have at least 2 elements');
        }
        var temp = this._storage[this._count - 2];
        this._storage[this._count - 2] = this._storage[this._count - 1];
        this._storage[this._count - 1] = temp;
    };
    Object.defineProperty(Stack.prototype, "length", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stack.prototype, "value", {
        get: function () {
            return this._storage;
        },
        enumerable: true,
        configurable: true
    });
    return Stack;
}());
exports.Stack = Stack;
var stack = new Stack();
/////
// console.log(stack.isEmpty(), ' | There should be true');
// stack.push({
//   id: 1,
//   value: 'Psina',
// });
// console.log(stack.isEmpty(), ' | There should be false');
// console.log(stack.length,  ' | There should be 1');
// console.log(stack.pop(),  ' | There should be popped item');
// console.log(stack.value);
// stack.push({
//   id: 1,
//   value: 'Psina',
// })
// stack.push({
//   id: 2,
//   value: 'Psina Eblivaya',
// })
// console.log(stack.value);
for (var i = 0; i < 10; i++) {
    stack.push({
        id: i,
        value: "value-" + i
    });
}
stack.swap();
console.log(stack.value);
