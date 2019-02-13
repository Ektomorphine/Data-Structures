export class Stack<T> {
  private _count: number = 0;
  private _storage = {};

  public push(item: T): void {
    this._storage[this._count] = item;
    this._count++;
  }

  public pop<T>(): Error | T {
    if (this._count === 0) {
      return new Error(`You can't pop item from empty stack`);
    }

    this._count--;
    let result: T = this._storage[this._count];
    delete this._storage[this._count]
    return result;
  }

  public peek(): T {
    return this._storage[this._count];
  }

  public isEmpty(): boolean {
    return this._count === 0;
  }

  public swap(): Error | void {
    if (this._count <= 1) {
      return new Error('To swap stack peeks it must have at least 2 elements');
    }
    let temp: T = this._storage[this._count - 2];
    this._storage[this._count - 2] = this._storage[this._count - 1];
    this._storage[this._count - 1] = temp;
  }

  get length() {
    return this._count;
  }

  get value() {
    return this._storage;
  }
}

export interface IItem {
  id: number;
  value: string;
}


let stack = new Stack<IItem>();

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
for (let i = 0; i < 10; i++) {
  stack.push({
    id: i,
    value: `value-${i}`,
  })
}
stack.swap();
console.log(stack.value);
