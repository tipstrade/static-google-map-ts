import { Path } from "../models";
import { buildPath } from "./path";

describe("buildPath", () => {
  it("Builds path", () => {
    expect(buildPath(PathMock)).toBe(PathString);
  });
});

const PathMock: Path = {
  weight: 1,
  color: "red",
  fillColor: "green",
  geodesic: true,
  points: ["51,-1", { lat: 53, lng: -2 }, "TipsTrade"],
}
const PathString = "weight:1|color:red|fillcolor:green|geodesic:true|51,-1|53,-2|TipsTrade";
