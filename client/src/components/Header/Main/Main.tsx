import ShoopingCart from "./ShoopingCart/ShoopingCart";
import {
  Section,
  Container,
  Logo,
  Search,
  User,
  Cart,
  Favorite,
  Profile,
} from "./Main.styled";
import { useState } from "react";
const Main = () => {
  const [showCart, setShowCart] = useState(false);
  const [showFavorite, setShowFavorite] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  return (
    <Section>
      <Container className="container">
        <Logo>
          <a href="/">
            <img src="/assets/icons/Icon.svg" />
            <span>Meedivo</span>
          </a>
        </Logo>
        <Search>
          <input type="text" placeholder="Search for anything..." />
          <img src="/assets/icons/MagnifyingGlass.svg" />
        </Search>
        <User>
          <Cart>
            <img
              src="/assets/icons/Cart.svg"
              onClick={() => setShowCart(!showCart)}
            />
            <ShoopingCart style={{ display: showCart ? "block" : "none" }} />
          </Cart>
          <Favorite>
            <img
              src="/assets/icons/Heart.svg"
              onClick={() => setShowFavorite(!showFavorite)}
            />
          </Favorite>
          <Profile>
            <img
              src="/assets/icons/User.svg"
              onClick={() => setShowProfile(!showProfile)}
            />
          </Profile>
        </User>
      </Container>
    </Section>
  );
};

export default Main;
