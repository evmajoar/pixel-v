import {routesConfig} from "../../settings/routing-config";
import cn from "classnames";
import {HtmlHTMLAttributes} from "react";
import NavigationItem from "./components/navigation-item";
import './Navigation.scss';

interface INavigationProps extends HtmlHTMLAttributes<HTMLElement> {}

export function Navigation({className}: INavigationProps) {
  const cl = cn('navigation', className);

  return (
    <nav className={cl}>
      <ul className="navigation__list">
        {routesConfig.map(r => (
          <NavigationItem key={r.title} title={r.title} to={r.slug} icon={r.icon} />
        ))}
      </ul>
    </nav>
  );
}
