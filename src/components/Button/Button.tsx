import styles from "./Button.module.css";

type ButtonProps = { children: string; type?: "button" | "submit" };

export const Button = (props: ButtonProps) => {
  const { children } = props;

  return (
    <button className={styles.Button} type="button">
      {children}
    </button>
  );
};
