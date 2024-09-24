import "./Form.css";

import { Button } from "../Button";
import { InputGroup } from "../InputGroup/InputGroup";

import { Controller, SubmitHandler, useForm } from "react-hook-form";

import type { FormOptions } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInSchema, SignInSchemaType } from "@/utils/schemas";
import { SIZES } from "@/utils/constants";
import { CircleHelp, KeyRound, Mail } from "lucide-react";

export const Form = () => {
  const { handleSubmit, control, formState } = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { errors } = formState;

  const submit: SubmitHandler<FormOptions> = (data) => {
    console.log(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(submit)}>
      <div className="formHeader">
        <h2>Login</h2>
        <p>Please enter your credentials to login</p>
      </div>

      <Controller
        name="email"
        control={control}
        render={({ field: { value, onChange } }) => (
          <InputGroup
            id="email"
            label="Email"
            withHint
            required
            size={SIZES.L}
            inputType="email"
            placeholder="Email"
            iconLeft={<Mail size={16} />}
            iconRight={<CircleHelp size={16} />}
            value={value}
            onChange={onChange}
            error={errors.email}
            text={errors.email ? errors.email.message! : "This is a hint to help user."}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        render={({ field: { value, onChange } }) => (
          <InputGroup
            id="password"
            label="Password"
            withHint
            required
            size={SIZES.L}
            inputType="password"
            placeholder="Password"
            iconRight={<KeyRound size={16} />}
            value={value}
            onChange={onChange}
            error={errors.password}
            text={errors.password ? errors.password.message! : "This is a hint to help user."}
          />
        )}
      />

      <Button type="submit">Sign in</Button>
    </form>
  );
};
