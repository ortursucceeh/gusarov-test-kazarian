import clsx from "clsx";
import { SIZES } from "@/utils/constants";
import styles from "./InputAnnotation.module.css";

type InputAnnotationProps = {
  size?: SIZES;
  disabled?: boolean;
  isError?: boolean;
  text: string;
};

export const InputAnnotation = (props: InputAnnotationProps) => {
  const { text, size, isError, disabled } = props;

  return (
    <span
      className={clsx(styles.inputAnnotation, {
        [styles.L]: [SIZES.L, SIZES.XL].includes(size!),
        [styles.error]: isError,
        [styles.disabled]: disabled,
      })}
    >
      {text}
    </span>
  );
};
