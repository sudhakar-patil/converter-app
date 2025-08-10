// src/conversions/conversion.types.ts

// Length measurement units
export type LengthUnit = "m" | "km" | "mi" | "ft";

// Area measurement units
export type AreaUnit = "m²" | "km²" | "ac" | "ha";

// Generic type for a value-unit pair
export type UnitValue<T extends string> = {
  value: number;
  unit: T;
};
