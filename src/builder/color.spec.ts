import { buildColor } from "./color";

describe("buildColor", () => {
  it("Handles strings", () => {
    expect(buildColor("green")).toBe("green");
    expect(buildColor("0xffffff")).toBe("0xffffff");
  });

  it("Pads 24-bit number", () => {
    expect(buildColor(0xab67)).toBe("0x00ab67");
  });

  it("Pads 32-bit number", () => {
    expect(buildColor(0xff00bb80)).toBe("0xff00bb80");
  });
})
