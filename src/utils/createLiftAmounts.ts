import { calcWarmup } from "./calcWarmup";

export const mondayLift = (amount: number) => [
  calcWarmup(amount, 4),
  calcWarmup(amount, 3),
  calcWarmup(amount, 2),
  calcWarmup(amount, 1),
  amount
];

export const wedSquat = (amount: number) => [
  calcWarmup(amount, 4),
  calcWarmup(amount, 3),
  calcWarmup(amount, 2),
  calcWarmup(amount, 2)
];

export const wedLift = (amount: number) => [
  calcWarmup(amount, 3),
  calcWarmup(amount, 2),
  calcWarmup(amount, 1),
  amount
];

export const fridayLift = (amount: number) => [
  calcWarmup(amount, 4),
  calcWarmup(amount, 3),
  calcWarmup(amount, 2),
  calcWarmup(amount, 1),
  amount,
  calcWarmup(amount, 2)
];
