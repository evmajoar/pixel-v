import cn from "classnames";
import {HtmlHTMLAttributes, PropsWithChildren} from "react";
import './Card.scss';

interface ICardProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export function Card({children, className, ...otherProps}: PropsWithChildren<ICardProps>) {
  const cl = cn('card', className);

  return(
    <div className={cl} {...otherProps}>
      {children}
    </div>
  );
}
