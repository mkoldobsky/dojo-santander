export default class Balance {
  constructor(aValue) {
    this.value = aValue;
  }
  equalTo(otherBalance) {
    return otherBalance.value === this.value;
  }
}
