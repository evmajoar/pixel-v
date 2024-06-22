import React, {HtmlHTMLAttributes, ReactElement} from 'react';
import {Card} from "../../../../components/ui/card/Card";
import cn from 'classnames';
import "./InfoCard.scss";
import Title from "../../../../components/ui/title";

interface IInfoCardProps extends HtmlHTMLAttributes<HTMLDivElement> {
  title: string,
  counter: number,
  text: string,
  img: ReactElement,
  colorTheme: string,
}

export function InfoCard({className, title, counter, text, img, colorTheme}: IInfoCardProps) {
  const cl = cn("info-card", `info-card--${colorTheme}`, className)

  return (
    <Card className={cl}>
      <Title className="info-card__title" text={title} />
      <p className="info-card__text">
        <span className="info-card__counter">{counter || 0}</span>
        {text}
      </p>
      <span className="info-card__decor">{img}</span>
    </Card>
  );
}
