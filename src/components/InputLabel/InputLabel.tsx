import clsx from "clsx";
import { SIZES } from "../../utils/constants";
import styles from "./InputLabel.module.css";
import { Info } from "lucide-react";

type InputLabelProps = {
  id: string;
  size?: SIZES;
  required?: boolean;
  disabled?: boolean;
  withHint?: boolean;
  label: string;
};

// sm md - 12px lg xl - 14px

export const InputLabel = (props: InputLabelProps) => {
  const { id, size, withHint, required, disabled, label } = props;

  return (
    <label
      htmlFor={id}
      className={clsx(styles.inputLabel, {
        [styles.L]: [SIZES.L, SIZES.XL].includes(size!),
        [styles.required]: required,
        [styles.disabled]: disabled,
      })}
    >
      {label}
      {!disabled && required && <i className={styles.asterisk}> *</i>}
      {withHint && <Info size={12} className={styles.hint} />}
    </label>
  );
};
