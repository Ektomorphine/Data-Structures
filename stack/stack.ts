export class Stack<T> {
  private _count: number = 0;
  private _storage = {};

  public push(item: T): void {
    this._storage[this._count] = item;
    this._count++;
  }

  public pop<T>(): T {
    if (this._count === 0) {
      return <T>{};
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
