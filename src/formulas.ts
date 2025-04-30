export function epley(weight: number, reps: number): number {
  return weight * (1 + reps / 30);
}

export function brzycki(weight: number, reps: number): number {
  return weight * (36 / (37 - reps));
}

export function lombardi(weight: number, reps: number): number {
  return weight * Math.pow(reps, 0.1);
}

export function mayhew(weight: number, reps: number): number {
  return (100 * weight) / (52.2 + 41.9 * Math.exp(-0.055 * reps));
}

export function oconner(weight: number, reps: number): number {
  return weight * (1 + 0.025 * reps);
}

export function wathan(weight: number, reps: number): number {
  return (100 * weight) / (48.8 + 53.8 * Math.exp(-0.075 * reps));
}

export function landers(weight: number, reps: number): number {
  return (100 * weight) / (101.3 - 2.67123 * reps);
}
