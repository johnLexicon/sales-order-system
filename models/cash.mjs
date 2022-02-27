import Payment from './payment.mjs';

export class Cash extends Payment {
  #cashTendered;

  get cashTendered() {
    return this.#cashTendered;
  }

  set cashTendered(value) {
    this.#cashTendered = value;
  }
}
