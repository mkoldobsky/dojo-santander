import { expect } from "chai";

import Sensei from "../src/sensei";

describe("#Dojo", () => {
  describe("Sensei", () => {
    it("sensei should be Mariano", () => {
      const sensei = new Sensei();

      expect(sensei.represent()).to.be.equal("Mariano");
    });
  });
});
