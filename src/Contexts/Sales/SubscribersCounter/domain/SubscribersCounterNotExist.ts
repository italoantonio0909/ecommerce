export class SubscribersCounterNotExist extends Error {
  constructor() {
    super('The customer counter does not exists');
  }
}
