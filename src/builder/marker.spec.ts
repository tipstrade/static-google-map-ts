import { MarkerGroup } from "../models";
import { buildMarker } from "./marker";

describe("buildMarker", () => {
  it("Builds single marker", () => {
    expect(buildMarker(MarkerMockSingle)).toBe(MarkerStringSingle);
  });

  it("Builds multiple markers", () => {
    expect(buildMarker(MarkerMockMulti)).toBe(MarkerStringMulti);
  });
});

const MarkerMockSingle: MarkerGroup = {
  size: "mid",
  color: "red",
  label: "work",
  scale: 2,
  iconURL: "https://foo.com?size=100",
  anchor: "top",
  location: "TipsTrade",
}
const MarkerStringSingle = "size:mid|color:red|label:W|scale:2|icon:https%3A%2F%2Ffoo.com%3Fsize%3D100|anchor:top|TipsTrade";

const MarkerMockMulti: MarkerGroup = {
  ...MarkerMockSingle,
  location: ["TipsTrade", { lat: 51, lng: -1 }],
}
const MarkerStringMulti = "size:mid|color:red|label:W|scale:2|icon:https%3A%2F%2Ffoo.com%3Fsize%3D100|anchor:top|TipsTrade|51,-1";
