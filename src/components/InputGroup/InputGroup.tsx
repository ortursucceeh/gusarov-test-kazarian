import { ChangeEvent, ReactNode } from "react";

import styles from "./InputGroup.module.css";
import { SIZES } from "../../utils/constants";
import type { FieldError } from "react-hook-form";
import type { InputType } from "../../utils/types";
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
    <div className={styles.inputGroup}>
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
        iconRight={iconRight}
        value={value}
        onChange={onChange}
        error={error}
        isQuiet={isQuiet}
        disabled={disabled}
        required={required}
        {...rest}
      />

      <InputAnnotation text={text} isError={!!error} disabled={disabled} />
    </div>
  );
};
