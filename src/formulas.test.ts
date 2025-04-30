import { describe, it, expect } from "vitest";
import { getOneRepMax } from "./";

describe("1RM formulas", () => {
  it("getOneRepMax handles each formula", () => {
    expect(getOneRepMax(100, 5)).toBeCloseTo(115.49, 1);
    expect(getOneRepMax(100, 5, 2, "epley")).toBeCloseTo(116.67, 1);
    expect(getOneRepMax(100, 5, 2, "brzycki")).toBeCloseTo(112.5, 1);
    expect(getOneRepMax(100, 5, 2, "lombardi")).toBeCloseTo(117.5, 1);
    expect(getOneRepMax(100, 5, 2, "mayhew")).toBeCloseTo(119.01, 1);
    expect(getOneRepMax(100, 5, 2, "oconner")).toBeCloseTo(112.5, 1);
    expect(getOneRepMax(100, 5, 2, "wathan")).toBeCloseTo(116.58, 1);
    expect(getOneRepMax(100, 5, 2, "landers")).toBeCloseTo(113.71, 1);
  });

  it("throws on unknown formula", () => {
    // @ts-expect-error: testing bad input
    expect(() => getOneRepMax(100, 5, 2, "invalid")).toThrow();
  });
});
