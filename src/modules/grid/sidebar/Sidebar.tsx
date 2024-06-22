import React from "react";
import './Sidebar.scss';
import Navigation from "../../navigation";
import Logo from "../../../components/logo";
import Social from "../../../components/social";
import {useUiState} from "../../../providers/useUiState";
import cn from "classnames";

export function Sidebar() {
  const {sidebarIsOpen} = useUiState();

  const cl = cn('sidebar', sidebarIsOpen && 'sidebar--opened');

  return (
    <aside className={cl}>
      {/*<div className="sidebar__wrapper">*/}
      {/*  */}
      {/*</div>*/}
      <Logo className="sidebar__logo" />
      <Navigation className="sidebar__navigation" />
      <Social className="sidebar__social" />
    </aside>
  );
}
