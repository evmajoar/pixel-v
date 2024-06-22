import React, {HtmlHTMLAttributes} from 'react';
import {starIcon} from "../iconsList";
import cn from "classnames";
import './Progress.scss';

interface IProgressProps extends HtmlHTMLAttributes<HTMLDivElement> {}

const MAX_PROGRESS = 900;
const CURRENT_VALUE = 450;

export function Progress({className}: IProgressProps) {
  const cl = cn('progress', className);

  const progressValue = CURRENT_VALUE <= MAX_PROGRESS ? CURRENT_VALUE : MAX_PROGRESS;

  return (
    <div className={cl}>
      <div className="progress__icon">
        {starIcon}
        <span className="progress__current">24</span>
      </div>
      <div className="progress__container">
        <span className="progress__different">{progressValue}/{MAX_PROGRESS} EXP</span>
        <span className="progress__next">25 <span>lvl</span></span>
        <div className="progress__bar">
          <div className="progress__bar-fill" style={{width: `${(progressValue / MAX_PROGRESS) * 100}%`}}/>
        </div>
      </div>
    </div>
  );
}
