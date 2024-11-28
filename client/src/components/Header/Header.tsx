import { HeaderComp, Line } from "./Header.styled";
import NavBar from "./NavBar/NavBar";
import NotificationBar from "./NotificationBar/NotificationBar";
import ShortBar from "./ShortBar/ShortBar";
import SocialMedia from "./SocialMedia/SocialMedia";

const Header = () => {
  return (
    <HeaderComp>
      <NotificationBar />
      <SocialMedia />
      <Line />
      <NavBar />
      <ShortBar />
      <Line style={{opacity:0.5}}/>
    </HeaderComp>
  );
};

export default Header;
