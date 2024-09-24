import styles from "./Button.module.css";

type ButtonProps = { children: string };

export const Button = (props: ButtonProps) => {
  const { children } = props;

  return (
    <button className={styles.Button} type="submit">
      {children}
    </button>
  );
};
