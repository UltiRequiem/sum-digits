import sumDigits, { sumDigitsSync } from "./mod.ts";
import { assertEquals } from "./test_deps.ts";

Deno.test("Test Sum Digits: number", async () => {
  assertEquals(await sumDigits(145), 10);
});

Deno.test("Test Sum Digits: string", async () => {
  assertEquals(await sumDigits("145"), 10);
});

Deno.test("Test Sum Digits: string", () => {
  sumDigits("123").then(((value) => assertEquals(value, 6)));
});

Deno.test("Test Sum Digits Sync: number", () => {
  assertEquals(sumDigitsSync(145), 10);
});

Deno.test("Test Sum Digits: string", () => {
  assertEquals(sumDigitsSync("145"), 10);
});
