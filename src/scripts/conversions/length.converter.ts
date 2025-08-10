// src/conversions/length.converter.ts

import type { IConverter } from "../core/converter.interface";
import type { LengthUnit } from "./conversion.types";

export class LengthConverter implements IConverter<LengthUnit> {
  // Conversion rates relative to 1 meter
  private conversionRates: Record<LengthUnit, number> = {
    m: 1,
    km: 1000,
    mi: 1609.34,
    ft: 0.3048,
  };

  convert(value: number, from: LengthUnit, to: LengthUnit): number {
    // Step 1: Convert from 'from' unit to meters
    const valueInMeters = value * this.conversionRates[from];

    // Step 2: Convert from meters to 'to' unit
    return valueInMeters / this.conversionRates[to];
  }

  getSupportedUnits(): LengthUnit[] {
    return Object.keys(this.conversionRates) as LengthUnit[];
  }
}
