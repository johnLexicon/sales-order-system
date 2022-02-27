export class Item {
  #weight;
  #description;

  get weight() {
    return this.#weight;
  }

  set weight(value) {
    this.#weight = value;
  }

  get description() {
    return this.#description;
  }

  set description(value) {
    this.#description = value;
  }

  constructor(weight, description) {
    this.weight = weight;
    this.description = description;
  }
}
