import { expect } from "chai";

import Account from "../src/account";
import Balance from "../src/balance";
import Amount from "../src/amount";

describe("#Bank", () => {
  describe("Account", () => {
    it("should return balance 0 on creation", () => {
      const account = new Account();
      const zeroBalance = new Balance(0);

      expect(account.balanceEqualTo(zeroBalance)).to.be.true;
    });

    it("should return balance 100 on deposit of 100", () => {
      const account = new Account();
      const finalBalance = new Balance(100);

      account.deposit(100);

      expect(account.balanceEqualTo(finalBalance)).to.be.true;
    });
  });
});
