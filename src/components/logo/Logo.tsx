import React, {HtmlHTMLAttributes} from "react";
import logo from '../../assets/images/logo.svg';
import './Logo.scss';
import cn from "classnames";

interface ILogoProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export function Logo({className}: ILogoProps) {
  const cl = cn('logo', className);

  return (
    <div className={cl}>
      <img src={logo} alt="Pixel Verse"/>
    </div>
  );
}
