import React, { FC } from "react";
import { useField } from "formik";
import { Field, Text, Textarea } from "@chakra-ui/react";
import { TextInputProps } from "./FormInput";

interface FormTextAreaProps extends TextInputProps {
  minHeight?: string;
}

const FormTextArea: FC<FormTextAreaProps> = ({
  required,
  label,
  value,
  onChangeFunction,
  name,
  placeholder,
  width,
  height,
  localErrorMsg,
  isReadOnly,
  isDisabled,
  validate,
}) => {
  const fieldHookConfig = {
    name,
    validate,
  };

  const [field, { touched, error }] = useField(fieldHookConfig);
  const isError = isReadOnly ? !!error : !!(touched && error);

  return (
    <Field.Root id={name} invalid={isError}>
      {label && (
        <Field.Label display={"flex"} gap={"4px"}>
          {label}
          {required && <Text color={"red"}> * </Text>}
        </Field.Label>
      )}
      <Textarea
        {...field}
        color={"black"}
        borderColor={isError ? "red.500" : "gray.300"}
        placeholder={placeholder ?? ""}
        width={width}
        height={height}
        p={3}
        borderRadius={"12px"}
        value={value ?? field.value}
        bgColor={"white"}
        onChange={(event: never) => {
          onChangeFunction(event);
        }}
        readOnly={isReadOnly}
        disabled={isDisabled}
        onBlur={(e) => {
          field.onBlur(e);
        }}
        _placeholder={{ color: isError ? "red.500" : "black" }}
      />
      {isError && <Field.ErrorText>{error}</Field.ErrorText>}
      {localErrorMsg && (
        <Field.HelperText p={1}>{localErrorMsg}</Field.HelperText>
      )}
    </Field.Root>
  );
};

export default FormTextArea;
