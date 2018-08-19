import { SMALLEST_PLATE } from "../contants";

export const calcWarmup = (amount: number, i: number) =>
  Math.round((amount * (1 - 0.125 * i)) / (2 * SMALLEST_PLATE)) *
  2 *
  SMALLEST_PLATE;
