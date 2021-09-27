import { isNumericSync } from "https://x.nest.land/is_numeric@0.0.1/mod.ts";

export default function sumDigits(
  numberToSumDigits: number | string,
): Promise<number> {
  return Promise.resolve(sumDigitsSync(numberToSumDigits));
}

export function sumDigitsSync(numberToSumDigits: number | string): number {
  if (typeof numberToSumDigits === "string") {
    if (!isNumericSync(numberToSumDigits as string)) {
      throw new Error(`Got ${numberToSumDigits} which is not a number!`);
    }

    numberToSumDigits = Number(numberToSumDigits);
  }

  let sum = 0;

  while (numberToSumDigits) {
    sum += numberToSumDigits % 10;
    numberToSumDigits = Math.floor(numberToSumDigits / 10);
  }

  return sum;
}
