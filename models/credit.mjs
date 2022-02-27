import Payment from './payment.mjs';

export class Credit extends Payment {
  #number;
  #type;
  #expireDate;

  get number() {
    return this.#number;
  }

  set number(value) {
    this.#number = value;
  }

  get type() {
    return this.#type;
  }

  set type(value) {
    this.#type = value;
  }

  get expireDate() {
    return this.#expireDate;
  }

  set expireDate(value) {
    this.#expireDate = value;
  }
}
