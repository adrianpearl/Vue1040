export enum InputType {
  TEXT,
  CHECKBOX,
}

export type PDFTextBox = {
  name: string;
  value: string;
};

export type TextField = {
  inputType: InputType.TEXT;
  label: string;
  value: string;
  placeholder?: string;
  format?: (v: string) => string;
  maxlen?: number;
};

export type NumericField = {
  inputType: InputType.TEXT;
  label: string;
  value: string;
  placeholder?: string;
  format?: (v: string) => string;
  maxlen?: number;
};

export type CheckboxField = {
  inputType: InputType.CHECKBOX;
  label: string;
  value: boolean;
};

export type FullRecord = {
  basicInfo: BasicInfo;
  w2s: W2[];
};

export type FieldSet = {
  [key: string]: TextField | CheckboxField | NumericField;
};

export interface BasicInfo extends FieldSet {
  firstName: TextField;
  middleInitial: TextField;
  lastName: TextField;
  ssn: TextField;
  address: TextField;
  aptNo: TextField;
  city: TextField;
  state: TextField;
  zipcode: TextField;
  digitalAssets: CheckboxField;
}

export interface W2 extends FieldSet {
  1: NumericField;
  2: NumericField;
  3: NumericField;
  4: NumericField;
  5: NumericField;
  6: NumericField;
  7: NumericField;
  8: NumericField;
  // no box 9
  10: NumericField;
  11: NumericField;
  "12a Code": TextField;
  12: TextField;
  a: TextField;
  b: TextField;
  c: TextField;
  d: TextField;
  e: TextField;
}
