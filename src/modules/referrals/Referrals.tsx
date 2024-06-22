import React from "react";
import {coinsIcon, peopleIcon} from "../../components/iconsList";
import "./Referrals.scss";
import InfoCard from "./components/info-card";
import NoResult from "../../components/no-result";
import Invite from "./components/invite";

const referralsInfoData = [
  {title: 'You have', counter: 13, text: 'Referrals', img: peopleIcon, colorTheme: 'purple'},
  {title: 'You Earned', counter: 132, text: 'Points', img: coinsIcon, colorTheme: 'green'},
]

export function Referrals() {
  const hasReferralsInfoData = referralsInfoData?.length > 0;

  return (
    <div className="referrals">
      <Invite />

      {hasReferralsInfoData
        ? <ul className="referrals__info-cards">
            {referralsInfoData.map(d => (
              <li key={d.text} className="referrals__info-cards">
                <InfoCard
                  title={d.title}
                  counter={d.counter}
                  text={d.text}
                  img={d.img}
                  colorTheme={d.colorTheme}
                />
              </li>
            ))}
        </ul>
        : <NoResult text="You don't have referrals and points"/>
      }
    </div>
  );
}
