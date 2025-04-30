# 🏋️ one-rep-max

A lightweight TypeScript library to estimate your **one-rep max (1RM)** using scientifically recognized formulas. Useful for strength athletes, powerlifters, coaches, and developers building fitness tools.

---

## ✨ Features

- Supports **7 popular 1RM formulas**: Epley, Brzycki, Lombardi, Mayhew, O'Conner, Wathan, Landers
- Estimate 1RM from weight + reps
- Compare all formulas side-by-side
- Average estimation across all formulas

---

## 📦 Installation

```bash
npm install one-rep-max
# or
yarn add one-rep-max
```

## 🚀 Usage

### Estimate 1RM with a specific formula

getOneRepMax(weight, reps, decimals?, formula?)
• weight – number (kg or lbs)
• reps – number (recommended: 1–15)
• decimals – optional number (default: 2)
• formula – one of 'epley' | 'brzycki' | 'lombardi' | 'mayhew' | 'oconner' | 'wathan' | 'landers'
• Returns: estimated 1RM (number)

```
import { getOneRepMax } from 'one-rep-max';

const oneRepMax = getOneRepMax(100, 5, 2, 'brzycki');
```

### Use average across all formulas

```
import { getOneRepMax } from 'one-rep-max';

const oneRepMax = getOneRepMax(100, 5);
```

### Compare all formulas

```
import { getAllFormulas } from 'one-rep-max';

const allEstimates = getAllFormulas(100, 5);

/*
{
  epley: 116.67,
  brzycki: 117.65,
  lombardi: 112.20,
  mayhew: 118.13,
  oconner: 112.5,
  wathan: 116.36,
  landers: 116.99
}
*/
```

## 📄 License

MIT
