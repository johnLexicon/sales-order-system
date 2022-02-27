import { orderStatus } from './orderStatus.mjs';

export class Order {
  #id;
  #createDate;
  #status;
  #orderDetails = [];
  #payments = [];

  get id() {
    return this.#id;
  }

  get createDate() {
    return this.#createDate.toLocaleString();
  }

  get status() {
    return this.#status;
  }

  set status(value) {
    this.#status = value;
  }

  get orderDetails() {
    return this.#orderDetails.slice();
  }

  get payment() {
    return this.#payments.slice();
  }

  constructor() {
    this.#id = Date.now();
    this.#createDate = new Date();
    this.status = orderStatus.CREATE;
  }

  addOrderDetail(orderDetail) {
    this.#orderDetails.push(orderDetail);
  }

  addPayment(payment) {
    this.#payments.push(payment);
  }
}
