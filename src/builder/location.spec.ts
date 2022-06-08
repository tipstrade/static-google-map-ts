import { buildLocation } from "./location";

describe("buildLocation", () => {
  it("Handles undefined input", () => {
    expect(buildLocation(undefined)).toBeUndefined();
  });

  it("Handles strings", () => {
    expect(buildLocation("TipsTrade")).toBe("TipsTrade");
    expect(buildLocation("-10,1")).toBe("-10,1");
  });

  it("Handles LatLngLiteral", () => {
    expect(buildLocation({ lat: 51, lng: -1 })).toBe("51,-1");
  });

  it("Handles LatLng", () => {
    const latlng = {
      lat: () => 51,
      lng: () => -1,
    }

    expect(buildLocation(latlng)).toBe("51,-1");
  });
})
