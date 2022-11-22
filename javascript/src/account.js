import Balance from "./balance";

export default class Account {
    contructor(){
        this.balance = new Balance(0);
    }
  balanceEqualTo(otherBalance) {
    return otherBalance.equalTo(this.balance);

  }

  deposit(amount) {
    return;
  }
}
