import { HeaderComp, Line } from "./Header.styled";
import Main from "./NavBar/NavBar";
import NotificationBar from "./NotificationBar/NotificationBar";
import SocialMedia from "./SocialMedia/SocialMedia";

const Header = () => {
  return (
    <HeaderComp>
      <NotificationBar />
      <SocialMedia />
      <Line />
      <Main />
    </HeaderComp>
  );
};

export default Header;
