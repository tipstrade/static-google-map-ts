import { GoogleMapImage, staticMapUrl } from "./index";

describe("Module", () => {
  describe("staticMapUrl", () => {
    it("Builds URI", () => {
      expect(staticMapUrl(SimpleMock)).toBe(SimpleUrl);
    });

    it("Throws with no center or markers", () => {
      expect(() => {
        staticMapUrl({
          ...SimpleMock,
          center: undefined,
        })
      }).toThrow();

      expect(() => {
        staticMapUrl({
          ...SimpleMock,
          zoom: undefined,
        })
      }).toThrow();
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
