import React, { ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import './Burger.scss';
import {useUiState} from "../../providers/useUiState";

interface IBurgerProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Burger({className}: IBurgerProps) {
  const {sidebarIsOpen, toggleSidebar} = useUiState();

  const cl = cn('burger', sidebarIsOpen && 'burger--active' , className);

  return (
    <button className={cl} aria-label="Menu" type="button" onClick={toggleSidebar}>
      <span>Menu</span>
    </button>
  );
}
