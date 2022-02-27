export class Address {
  #street;
  #postalCode;
  #region;
  #country;

  get street() {
    return this.#street;
  }

  set street(value) {
    this.#street = value;
  }

  get postalCode() {
    return this.#postalCode;
  }

  set postalCode(value) {
    this.#postalCode = value;
  }

  get region() {
    return this.#region;
  }

  set region(value) {
    this.#region = value;
  }

  get country() {
    return this.#country;
  }

  set country(value) {
    this.#country = value;
  }
}
