import classNames from "classnames";
import { SIZES } from "@/utils/constants";
import "./InputLabel.css";
import { Info } from "lucide-react";

type InputLabelProps = {
  id: string;
  size?: SIZES;
  required?: boolean;
  disabled?: boolean;
  withHint?: boolean;
  label: string;
};

export const InputLabel = (props: InputLabelProps) => {
  const { id, size, withHint, required, disabled, label } = props;

  return (
    <label
      htmlFor={id}
      className={classNames("inputLabel", {
        inputLabelLarge: [SIZES.L, SIZES.XL].includes(size!),
        inputLabelDisabled: disabled,
      })}
    >
      {label}
      {!disabled && required && <i className="asterisk"> *</i>}
      {withHint && <Info size={12} className="hint" />}
    </label>
  );
};
