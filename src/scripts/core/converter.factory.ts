// src/core/converter.factory.ts

import { LengthConverter } from "../conversions/length.converter";
import { AreaConverter } from "../conversions/area.converter";
import type { LengthUnit, AreaUnit } from "../conversions/conversion.types";
import type { IConverter } from "./converter.interface";

// Link each category to its unit type
export type ConversionCategoryMap = {
  length: LengthUnit;
  area: AreaUnit;
};

export type ConversionCategory = keyof ConversionCategoryMap;

export class ConverterFactory {
  static getConverter<C extends ConversionCategory>(
    category: C
  ): IConverter<ConversionCategoryMap[C]> {
    switch (category) {
      case "length":
        return new LengthConverter() as unknown as IConverter<ConversionCategoryMap[C]>;
      case "area":
        return new AreaConverter() as unknown as IConverter<ConversionCategoryMap[C]>;
      default:
        throw new Error(`Unknown conversion category: ${category}`);
    }
  }
}
