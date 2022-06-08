import { GoogleMapImage, staticMapUrl } from "./index";

describe("Module", () => {
  describe("staticMapUrl", () => {
    it("Builds URI", () => {
      expect(staticMapUrl(SimpleMock)).toBe(SimpleUrl);
    });

    it("Contains markers", () => {
      expect(staticMapUrl({
        ...SimpleMock,
        markers: { location: "TipsTrade" },
      })).toContain("markers")
    });

    it("Contains paths", () => {
      expect(staticMapUrl({
        ...SimpleMock,
        paths: { points: "abc" },
      })).toContain("path")
    });

    it("Contains visible", () => {
      expect(staticMapUrl({
        ...SimpleMock,
        visible: "TipsTrade",
      })).toContain("visible")
    });

  });
});

const SimpleMock: GoogleMapImage = {
  key: "ABC",
  size: { width: 600, height: 600 },
  center: "TipsTrade",
  zoom: 8,
};
const SimpleUrl = "https://maps.googleapis.com/maps/api/staticmap?center=TipsTrade&zoom=8&size=600x600&key=ABC";
