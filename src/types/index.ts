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

export type CheckboxField = {
  inputType: InputType.CHECKBOX;
  label: string;
  value: boolean;
};

export type FullRecord = {
  basicInfo: BasicInfo;
  w2s: W2[];
};

type BasicInfo = {
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
};

type W2 = {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  // no box 9
  10: number;
  11: number;
};
