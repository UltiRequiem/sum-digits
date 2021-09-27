# Sum Digits

[![GitMoji](https://img.shields.io/badge/Gitmoji-%F0%9F%8E%A8%20-FFDD67.svg)](https://gitmoji.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![Lines Of Code](https://img.shields.io/tokei/lines/github.com/UltiRequiem/deno-sum-digits?color=blue&label=Total%20Lines)
![CodeQL](https://github.com/UltiRequiem/deno-sum-digits/workflows/CodeQL/badge.svg)

You can get this package by [nest.land](https://nest.land/package/sum_digits) or
[deno.land](https://deno.land/x/sum_digits).

## Usage

This package exposes two Functions,
[sumDigits](https://github.com/UltiRequiem/deno-sum-digits/blob/main/mod.ts#L9)
and
[sumDigitsSync](https://github.com/UltiRequiem/deno-sum-digits/blob/main/mod.ts#L18).

```typescript
import sumDigits, {
  sumDigitsSync,
} from "https://deno.land/x/sum_digits/mod.ts";

console.log(await sumDigits(45)); // 9
console.log(await sumDigits("450")); // 9

async function somethingAsync() {
  console.log(await sumDigits("92"));
}

somethingAsync(); // 11

sumDigits(123).then((number) => console.log(number)); // 6

console.log(sumDigitsSync(1231)); // 7
```

### License

[This project](https://deno.land/x/sum_digits) is licensed under the
[MIT License](./LICENSE.md).
