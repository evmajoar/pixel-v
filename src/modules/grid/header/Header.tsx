import Burger from "../../../components/burger";
import './Header.scss';
import Button from "../../../components/ui/button";
import {Progress} from "../../../components/progress/Progress";

export function Header() {
  return (
    <header className="header">
      <Burger />
      <Progress className="header__progress" />
      <Button label="Connect Wallet" className="header__button" />
    </header>
  );
}
