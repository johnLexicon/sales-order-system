export class OrderDetail {
  #item;
  #quantity;

  get item() {
    return this.#item;
  }

  set item(value) {
    this.#item = value;
  }

  get quantity() {
    return this.#quantity;
  }

  set quantity(value) {
    this.#quantity = value;
  }

  calculateSubTotal() {
    return this.item.price * this.quantity;
  }

  calculateWeight() {
    return this.item.weight * this.quantity;
  }
}
