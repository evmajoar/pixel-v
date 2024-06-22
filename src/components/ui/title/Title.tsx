import {createElement, HtmlHTMLAttributes} from "react";
import cn from "classnames";
import './Title.scss';

interface ITitleProps extends HtmlHTMLAttributes<HTMLDivElement> {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  text: string,
}

export function Title({className, tag, text}: ITitleProps) {
  const cl = cn("title", className)

  return createElement(
    (tag || 'strong'),
    { className: cl },
    text
  );
}
