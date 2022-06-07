import { buildAnchor } from "./anchor";

describe("buildAnchor", () => {
  it("Handles undefined input", () => {
    expect(buildAnchor(undefined)).toBeUndefined();
  });

  it("Handles strings", () => {
    expect(buildAnchor("left")).toBe("left");
    expect(buildAnchor("-10,1")).toBe("-10,1");
  });

  it("Handles point", () => {
    expect(buildAnchor({ x: -10, y: 1 })).toBe("-10,1");
  });
})
