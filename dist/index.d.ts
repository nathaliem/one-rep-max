type FormulaName = "epley" | "brzycki" | "lombardi" | "mayhew" | "oconner" | "wathan" | "landers";
/**
 * Calculates one-rep max based on a selected formula.
 * If no formula is provided, it returns the average of all formulas.
 *
 * @param weight - The weight lifted.
 * @param reps - The number of reps performed.
 * @param decimals - Number of decimals to round to (default: 2).
 * @param formula - The formula to use ('epley', 'brzycki', etc.). If omitted, the average of all is returned.
 */
declare function getOneRepMax(weight: number, reps: number, decimals?: number, formula?: FormulaName): number;
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
declare function averageOneRepMax(weight: number, reps: number): number;
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
declare function getAllFormulas(weight: number, reps: number, decimals?: number): Record<FormulaName, number>;

export { type FormulaName, averageOneRepMax, getAllFormulas, getOneRepMax };
