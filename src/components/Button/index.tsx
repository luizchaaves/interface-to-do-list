import { PropsWithChildren } from 'react';
import { ButtonComponent } from './styles';

type ButtonProps = PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonComponent {...props}>{children}</ButtonComponent>;
};

export default Button;
