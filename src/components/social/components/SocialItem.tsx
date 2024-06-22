import React, {ReactElement} from "react";
import cn from "classnames";
import "./SocialItem.scss";

interface SocialItemProps extends React.HTMLAttributes<HTMLLIElement> {
  href: string,
  icon: ReactElement,
}

export function SocialItem({className, href, icon}: SocialItemProps) {
  const cl = cn('social__item', className);

  return (
    <li className={cl}>
      <a
        className="social__link"
        href={href}
        target="_blank"
        rel="noreferrer"
      >
        {icon}
      </a>
    </li>
  );
}
