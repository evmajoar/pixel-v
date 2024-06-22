import {Link, LinkProps} from "react-router-dom";
import {ReactElement} from "react";
import './NavigationItem.scss';

interface INavigationItemProps extends LinkProps {
  icon: ReactElement,
}

export function NavigationItem({title, to, icon}: INavigationItemProps) {
  return (
    <li className="navigation__item">
      <Link to={to}>
        <span className="navigation__item-icon">{icon}</span>
        {title}
      </Link>
    </li>
  );
}
