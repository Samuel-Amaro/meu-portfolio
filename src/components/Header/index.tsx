import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Switch from "../Switch";

export default function Header() {
  return (
    <header>
      <FontAwesomeIcon icon={faCode} width={30} height={30} />
      <Switch />
    </header>
  );
}

function HeaderMobile() {}

function HeaderDesktop() {}
