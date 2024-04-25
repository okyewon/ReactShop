/*
 * 여러가지 util들을 추가하는 파일입니다.
 * util.ts라고 하셔도 됩니다.
 */
const currencyFormat = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const toCurrencyFormat = (value: number) => currencyFormat.format(value);
