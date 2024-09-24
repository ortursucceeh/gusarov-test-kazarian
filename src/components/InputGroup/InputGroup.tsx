import { ChangeEvent, ReactNode } from "react";

import "./InputGroup.css";
import { SIZES } from "@/utils/constants";
import type { FieldError } from "react-hook-form";
import type { InputType } from "@/utils/types";
import { InputAnnotation } from "../InputAnnotation/InputAnnotation";
import { InputLabel } from "../InputLabel/InputLabel";
import { InputText } from "../InputText";

type InputGroupProps = {
  id: string;
  size?: SIZES;
  required?: boolean;
  disabled?: boolean;

  label: string;
  withHint?: boolean;

  inputType: InputType;
  placeholder?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  isQuiet?: boolean;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: FieldError | undefined;

  text: string;
};

export const InputGroup = (props: InputGroupProps) => {
  const {
    id,
    label,
    size,
    required,
    disabled,
    withHint,

    inputType,
    placeholder,
    iconLeft,
    iconRight,
    isQuiet,
    value,
    onChange,
    error,

    text,

    ...rest
  } = props;

  return (
    <div className="inputGroup">
      <InputLabel
        id={id}
        label={label}
        withHint={withHint}
        required={required}
        disabled={disabled}
        size={size}
      />

      <InputText
        id={id}
        type={inputType}
        placeholder={placeholder}
        iconLeft={iconLeft}
        size={size}
        iconRight={iconRight}
        value={value}
        onChange={onChange}
        isError={!!error}
        isQuiet={isQuiet}
        disabled={disabled}
        required={required}
        {...rest}
      />

      <InputAnnotation text={text} size={size} isError={!!error} disabled={disabled} />
    </div>
  );
};
