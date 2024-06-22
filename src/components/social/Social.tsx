import React, {HTMLAttributes} from "react";
import "./Social.scss";
import {SocialItem} from "./components/SocialItem";
import {discordIcon, telegramIcon, twitterIcon} from "../iconsList";
import cn from "classnames";

const socialListData = [
  {
    id: 1,
    href: "https://www.google.com",
    icon: telegramIcon,
  },
  {
    id: 2,
    href: "https://www.google.com",
    icon: twitterIcon,
  },
  {
    id: 3,
    href: "https://www.google.com",
    icon: discordIcon,
  }
];

interface ISocialProps extends HTMLAttributes<HTMLUListElement>{}

export function Social({className}: ISocialProps) {
  const cl = cn('social', className);

  if (socialListData.length === 0) {
    return null;
  }

  return (
    <ul className={cl}>
      {socialListData.map((item) => (
        <SocialItem
          key={item.id}
          className="social__item"
          href={item.href}
          icon={item.icon}
        />
      ))}
    </ul>
  );
}
