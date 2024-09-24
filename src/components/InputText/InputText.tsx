import { ChangeEvent, ReactNode } from "react";
import styles from "./InputText.module.css";
import { FieldError } from "react-hook-form";
import clsx from "clsx";
import { InputType } from "../../utils/types";
import { SIZES } from "../../utils/constants";

type InputTextProps = {
  id: string;
  type: InputType;
  placeholder?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  error?: FieldError | undefined;
  size?: SIZES;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isQuiet?: boolean;
  required?: boolean;
  disabled?: boolean;
};

export const InputText = (props: InputTextProps) => {
  const { iconLeft, iconRight, size, isQuiet, error, disabled, ...rest } = props;

  return (
    <div
      className={clsx(styles.inputWrapper, {
        [styles.error]: !!error,
        [styles.quiet]: isQuiet,
        [styles.xs]: size === SIZES.XS,
        [styles.l]: size === SIZES.L,
        [styles.xl]: size === SIZES.XL,
        [styles.disabled]: disabled,
      })}
    >
      {iconLeft && <span className={styles.iconLeft}>{iconLeft}</span>}
      {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
      <input className={styles.inputText} {...rest} />
    </div>
  );
};
