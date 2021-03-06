export class Stack<T> {
  private _count: number = 0;
  private _storage = <T>{};

  public push(item: T): void {
    this._storage[this._count] = item;
    this._count++;
  }

  public pop<T>(): T {
    if (this.isEmpty()) {
      return <T>{};
    }

    this._count--;
    let result: T = this._storage[this._count];
    delete this._storage[this._count]
    return result;
  }

  public isEmpty(): boolean {
    return !this._count;
  }

  public swap(): Error | void {
    if (this._count <= 1) {
      return new Error('To swap stack peeks it must have at least 2 elements');
    }
    let temp: T = this._storage[this._count - 2];
    this._storage[this._count - 2] = this._storage[this._count - 1];
    this._storage[this._count - 1] = temp;
  }

  public get peek(): T {
    return this._storage[this._count - 1];
  }

  public get length(): number {
    return this._count;
  }

  public get value(): T {
    return this._storage;
  }
}
