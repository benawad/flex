import { optimizeNumPlates } from "../optimizeNumPlates";

describe("optimizeNumPlates", () => {
  it("135", () => {
    expect(optimizeNumPlates(135)).toEqual({ 45: 1 });
  });
});
