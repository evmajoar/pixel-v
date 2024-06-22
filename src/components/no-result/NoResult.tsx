import React from "react";
import {Card} from "../ui/card/Card";
import './NoResult.scss';

interface INoResult {
  text: string,
}

export function NoResult({text}: INoResult) {
  return (
    <Card className="no-result">{text}</Card>
  );
}
