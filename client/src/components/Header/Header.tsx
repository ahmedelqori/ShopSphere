import { HeaderComp, Line } from "./Header.styled";
import NavBar from "./NavBar/NavBar";
import NotificationBar from "./NotificationBar/NotificationBar";
import SocialMedia from "./SocialMedia/SocialMedia";

const Header = () => {
  return (
    <HeaderComp>
      <NotificationBar />
      <SocialMedia />
      <Line />
      <NavBar />
    </HeaderComp>
  );
};

export default Header;
