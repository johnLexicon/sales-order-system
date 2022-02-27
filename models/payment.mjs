class Payment {
  #amount;

  get amount() {
    return this.#amount;
  }

  set amount(value) {
    this.#amount = value;
  }
}

export default Payment;
