import { twMerge } from 'tailwind-merge';

type Props = {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

function Button({
  children,
  onClick,
  className = '',
}: Props) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
