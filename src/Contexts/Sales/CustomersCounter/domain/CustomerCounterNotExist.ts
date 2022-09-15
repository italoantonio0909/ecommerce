export class CustomerCounterNotExist extends Error {
  constructor() {
    super('The customer counter does not exists');
  }
}
