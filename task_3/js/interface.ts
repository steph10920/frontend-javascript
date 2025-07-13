// Define types for database rows

export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}
