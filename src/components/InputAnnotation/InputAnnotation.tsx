import "./InputAnnotation.css";

import { SIZES } from "@/utils/constants";
import classNames from "classnames";

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
      className={classNames("inputAnnotation", {
        inputAnnotationLarge: [SIZES.L, SIZES.XL].includes(size!),
        inputAnnotationError: isError,
        inputAnnotationDisabled: disabled,
      })}
    >
      {text}
    </span>
  );
};
