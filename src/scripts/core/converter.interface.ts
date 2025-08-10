
export interface IConverter<T> {
  // Convert a value from one unit to another
  convert(value: number, from: T, to: T): number;

  // List of supported units for the converter
  getSupportedUnits(): T[];
}
