import "./Button.css";

type ButtonProps = { children: string; type?: "button" | "submit" };

export const Button = (props: ButtonProps) => {
  const { children } = props;

  return (
    <button className="button" type="button">
      {children}
    </button>
  );
};
