import {ButtonHTMLAttributes, ForwardedRef, forwardRef} from 'react';
import cn from 'classnames';
import './Button.scss';


interface IKitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  isLoading?: boolean;
}


export const Button = forwardRef(
  (props: IKitButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
      className,
      label,
      isLoading = false,
      type = 'button',
      ...otherProps
    } = props;

    const cl = cn(
      'button',
      isLoading && 'button--loading',
      className,
    );

    return (
      <button ref={ref} className={cl} type={type} {...otherProps}>
        <span className="button__label">{label}</span>
      </button>
    );
  },
);
