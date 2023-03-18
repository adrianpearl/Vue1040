import { InputType, TextField, CheckboxField, NumericField, W2 } from "@/types";

function newTextField(label?: string, value?: string): TextField {
  return {
    inputType: InputType.TEXT,
    label: label ?? "",
    value: value ?? "",
  };
}

function newCheckboxField(label?: string, value?: boolean): CheckboxField {
  return {
    inputType: InputType.CHECKBOX,
    label: label ?? "",
    value: value ?? false,
  };
}

function newNumericField(label?: string, value?: string): NumericField {
  return {
    inputType: InputType.TEXT,
    label: label ?? "",
    value: value ?? "",
  };
}

const emptyw2: () => W2 = () => ({
  1: newNumericField("1"),
  2: newNumericField("2"),
  3: newNumericField("3"),
  4: newNumericField("4"),
  5: newNumericField("5"),
  6: newNumericField("6"),
  7: newNumericField("7"),
  8: newNumericField("8"),
  10: newNumericField("10"),
  11: newNumericField("11"),
  "12a Code": newNumericField("12a Code"),
  12: newNumericField("12"),
  a: newNumericField("a"),
  b: newNumericField("b"),
  c: newNumericField("c"),
  d: newNumericField("d"),
  e: newNumericField("e"),
});

export { emptyw2 };
