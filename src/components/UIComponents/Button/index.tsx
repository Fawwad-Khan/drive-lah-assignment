import style from "./Button.module.scss";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  [key: string]: unknown;
};

const Button = (props: Props) => {
  const { children } = props;
  return (
    <button className={`${style.button} ${props.className || ""}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
