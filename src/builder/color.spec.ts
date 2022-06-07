import { buildColor } from "./color";

describe("buildColor", () => {
  it("Handles strings", () => {
    expect(buildColor("green")).toBe("green");
    expect(buildColor("0xffffff")).toBe("0xffffff");
  });

  it("Handles number", () => {
    expect(buildColor(0xab67)).toBe("0x00ab67");
  });
})
