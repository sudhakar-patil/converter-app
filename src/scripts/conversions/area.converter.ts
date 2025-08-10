// src/conversions/area.converter.ts

import type { IConverter } from "../core/converter.interface";
import type { AreaUnit } from "./conversion.types";

export class AreaConverter implements IConverter<AreaUnit> {
  // Conversion rates relative to 1 square meter
  private conversionRates: Record<AreaUnit, number> = {
    "m²": 1,
    "km²": 1_000_000,
    ac: 4046.86,
    ha: 10_000,
  };

  convert(value: number, from: AreaUnit, to: AreaUnit): number {
    // Step 1: Convert from 'from' unit to square meters
    const valueInSqMeters = value * this.conversionRates[from];

    // Step 2: Convert from square meters to 'to' unit
    return valueInSqMeters / this.conversionRates[to];
  }

  getSupportedUnits(): AreaUnit[] {
    return Object.keys(this.conversionRates) as AreaUnit[];
  }
}
