import { ChangeEvent, ReactNode } from "react";
import "./InputText.css";
import classNames from "classnames";
import { InputType } from "@/utils/types";
import { SIZES } from "@/utils/constants";

type InputTextProps = {
  id: string;
  type: InputType;
  placeholder?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  isError?: boolean;
  size?: SIZES;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isQuiet?: boolean;
  required?: boolean;
  disabled?: boolean;
};

export const InputText = (props: InputTextProps) => {
  const { iconLeft, iconRight, size, isQuiet, isError, disabled, ...rest } = props;

  return (
    <div
      className={classNames("inputWrapper", {
        inputWrapperExraSmall: size === SIZES.XS,
        inputWrapperLarge: size === SIZES.L,
        inputWrapperExtraLarge: size === SIZES.XL,
        inputWrapperQuiet: isQuiet,
        inputWrapperError: !!isError,
        inputWrapperDisabled: disabled,
      })}
    >
      {iconLeft && <span className="iconLeft">{iconLeft}</span>}
      {iconRight && <span className="iconRight">{iconRight}</span>}
      <input className="inputText" {...rest} />
    </div>
  );
};
