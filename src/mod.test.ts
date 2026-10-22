import { expect, it } from "vitest";
import sumDigits, { sumDigitsSync } from "./index.js";

it("Test Sum Digits: number", async () => {
  expect(await sumDigits(145)).toEqual(10);
});

it("Test Sum Digits: string", async () => {
  expect(await sumDigits("145")).toEqual(10);
});

it("Test Sum Digits: string", () => {
  sumDigits("123").then((value) => expect(value).toEqual(6));
});

it("Test Sum Digits Sync: number", () => {
  expect(sumDigitsSync(145)).toEqual(10);
});

it("Test Sum Digits: string", () => {
  expect(sumDigitsSync("145")).toEqual(10);
});
