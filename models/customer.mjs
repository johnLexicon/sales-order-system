export class Customer {
  #id;
  #name;
  #deliveryAddress;
  #contact;
  #active;
  #orders = [];

  get id() {
    return this.#id;
  }

  set id(value) {
    this.#id = value;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get deliveryAddress() {
    return this.#deliveryAddress;
  }

  set deliveryAddress(value) {
    this.#deliveryAddress = value;
  }

  get contact() {
    return this.#contact;
  }

  set contact(value) {
    this.#contact = value;
  }

  get active() {
    return this.#active;
  }

  set active(value) {
    this.#active = value;
  }

  get orders() {
    return this.#orders.slice();
  }

  constructor(name) {
    this.id = Date.now();
    this.name = name;
    this.#active = false;
  }

  addOrder(order) {
    this.#orders.push(order);
  }
}
