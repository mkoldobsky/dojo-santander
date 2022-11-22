import { expect } from "chai";

import Kata from "../src/kata";

describe("#Dojo", () => {
  describe("Kata", () => {
    it("sensei should be Mariano", () => {
      const kata = new Kata();

      expect(kata.represent()).to.be.equal("Mariano");
    });
  });
});
