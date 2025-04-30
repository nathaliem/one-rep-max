import * as formulas from "./formulas";

export type FormulaName =
  | "epley"
  | "brzycki"
  | "lombardi"
  | "mayhew"
  | "oconner"
  | "wathan"
  | "landers";

/**
 * Calculates one-rep max based on a selected formula.
 * If no formula is provided, it returns the average of all formulas.
 *
 * @param weight - The weight lifted.
 * @param reps - The number of reps performed.
 * @param decimals - Number of decimals to round to (default: 2).
 * @param formula - The formula to use ('epley', 'brzycki', etc.). If omitted, the average of all is returned.
 */
export function getOneRepMax(
  weight: number,
  reps: number,
  decimals: number = 2,
  formula?: FormulaName,
): number {
  if (!formula) {
    return parseFloat(averageOneRepMax(weight, reps).toFixed(decimals));
  }

  const fn = formulas[formula];
  if (!fn) throw new Error("Unknown formula");

  return parseFloat(fn(weight, reps).toFixed(decimals));
}

/**
 * Calculates the average estimated one-rep max using all supported formulas.
 *
 * This is useful when you want a balanced estimate rather than relying on a single formula,
 * as different formulas can vary slightly based on rep ranges and assumptions.
 *
 * @param weight - The amount of weight lifted (in kg or lbs).
 * @param reps - The number of reps performed with that weight.
 * @returns The average one-rep max calculated from all available formulas.
 *
 * @example
 * averageOneRepMax(80, 6); // returns ~100.5
 */
export function averageOneRepMax(weight: number, reps: number): number {
  const formulas: FormulaName[] = [
    "epley",
    "brzycki",
    "lombardi",
    "mayhew",
    "oconner",
    "wathan",
    "landers",
  ];
  const estimates = formulas.map((f) => getOneRepMax(weight, reps, 2, f));
  return estimates.reduce((a, b) => a + b, 0) / estimates.length;
}

/**
 * Returns one-rep max estimates from all supported formulas for comparison.
 *
 * This function is useful when you want to analyze how each formula calculates 1RM
 * for the same weight and rep input. It returns a map of formula names to their
 * respective 1RM estimates, rounded to the specified number of decimals.
 *
 * @param weight - The weight lifted (in kg or lbs).
 * @param reps - The number of repetitions performed.
 * @param decimals - Number of decimal places to round the results to (default: 2).
 * @returns An object mapping each formula name to its estimated one-rep max.
 *
 * @example
 * getAllFormulas(100, 5);
 * // {
 * //   epley: 116.67,
 * //   brzycki: 117.65,
 * //   lombardi: 112.20,
 * //   ...
 * // }
 */
export function getAllFormulas(
  weight: number,
  reps: number,
  decimals = 2,
): Record<FormulaName, number> {
  return Object.fromEntries(
    (Object.keys(formulas) as FormulaName[]).map((f) => [
      f,
      +formulas[f](weight, reps).toFixed(decimals),
    ]),
  ) as Record<FormulaName, number>;
}
