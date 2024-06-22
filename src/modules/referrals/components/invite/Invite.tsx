import React, {HtmlHTMLAttributes} from 'react';
import {Card} from "../../../../components/ui/card/Card";
import cn from 'classnames';
import Title from "../../../../components/ui/title";
import "./Invite.scss";
import ClipboardInput from "../../../../components/clipboard-Input";

interface IInviteProps extends HtmlHTMLAttributes<HTMLDivElement> {};

const code = 'XHAT00SBIT7J';
const link = 'https://www.pixelverse.com/link#343434';

export function Invite({className}: IInviteProps) {
  const cl = cn("invite", className);

  return (
    <Card className={cl}>
      <Title text="Invite Friends And Earn More Points" />

      <div className="invite__form">
        <ClipboardInput label="Your Code" value={code} />
        <ClipboardInput label="Referral Link" value={link} />
      </div>

      <p className="invite__text">Describe the conditions of the referral system.
        The referral receives a percentage of his friend’s point earnings.
        Describe the conditions of the referral system.
        The referral receives a percentage of his friend’s point earningsreferral system.
        The referral receives a percentage of his friend’s point earningsreferral system.
        The referral receives a percentage of his friend’s point earnings</p>
    </Card>
  );
}
