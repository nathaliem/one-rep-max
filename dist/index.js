"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  averageOneRepMax: () => averageOneRepMax,
  getAllFormulas: () => getAllFormulas,
  getOneRepMax: () => getOneRepMax
});
module.exports = __toCommonJS(index_exports);

// src/formulas.ts
function epley(weight, reps) {
  return weight * (1 + reps / 30);
}
function brzycki(weight, reps) {
  return weight * (36 / (37 - reps));
}
function lombardi(weight, reps) {
  return weight * Math.pow(reps, 0.1);
}
function mayhew(weight, reps) {
  return 100 * weight / (52.2 + 41.9 * Math.exp(-0.055 * reps));
}
function oconner(weight, reps) {
  return weight * (1 + 0.025 * reps);
}
function wathan(weight, reps) {
  return 100 * weight / (48.8 + 53.8 * Math.exp(-0.075 * reps));
}
function landers(weight, reps) {
  return 100 * weight / (101.3 - 2.67123 * reps);
}

// src/index.ts
function getOneRepMax(weight, reps, decimals = 2, formula) {
  if (!formula) {
    return parseFloat(averageOneRepMax(weight, reps).toFixed(decimals));
  }
  switch (formula) {
    case "epley":
      return parseFloat(epley(weight, reps).toFixed(decimals));
    case "brzycki":
      return parseFloat(brzycki(weight, reps).toFixed(decimals));
    case "lombardi":
      return parseFloat(lombardi(weight, reps).toFixed(decimals));
    case "mayhew":
      return parseFloat(mayhew(weight, reps).toFixed(decimals));
    case "oconner":
      return parseFloat(oconner(weight, reps).toFixed(decimals));
    case "wathan":
      return parseFloat(wathan(weight, reps).toFixed(decimals));
    case "landers":
      return parseFloat(landers(weight, reps).toFixed(decimals));
    default:
      throw new Error("Unknown formula");
  }
}
function averageOneRepMax(weight, reps) {
  const formulas = [
    "epley",
    "brzycki",
    "lombardi",
    "mayhew",
    "oconner",
    "wathan",
    "landers"
  ];
  const estimates = formulas.map((f) => getOneRepMax(weight, reps, 2, f));
  return estimates.reduce((a, b) => a + b, 0) / estimates.length;
}
function getAllFormulas(weight, reps, decimals = 2) {
  return {
    epley: +epley(weight, reps).toFixed(decimals),
    brzycki: +brzycki(weight, reps).toFixed(decimals),
    lombardi: +lombardi(weight, reps).toFixed(decimals),
    mayhew: +mayhew(weight, reps).toFixed(decimals),
    oconner: +oconner(weight, reps).toFixed(decimals),
    wathan: +wathan(weight, reps).toFixed(decimals),
    landers: +landers(weight, reps).toFixed(decimals)
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  averageOneRepMax,
  getAllFormulas,
  getOneRepMax
});
