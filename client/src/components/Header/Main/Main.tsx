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
  TotalItems,
} from "./Main.styled";
import { useState } from "react";

export type ItemInterface = {
  title: string;
  price: number;
  count: number;
  img: string;
};

const Main = () => {
  const itemObj: ItemInterface = {
    title: "Canon EOS 1500D DSLR Camera Body+ 18-55 mm",
    price: 1500,
    count: 1,
    img: "/assets/icons/Item.png",
  };

  const itemObj1: ItemInterface = {
    title:
      "Canon EOS 1500D DSLR Camera Body+ 18-55",
    price: 1500,
    count: 5,
    img: "/assets/icons/Item.png",
  };
  const [items, setItems] = useState<ItemInterface[]>([
    itemObj,
    itemObj1,
    itemObj,
    itemObj,
    itemObj,
  ]);

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
            <TotalItems onClick={() => setShowCart(!showCart)}>
              {items.length > 9 ? "+9" : items.length.toString()}
            </TotalItems>
            <ShoopingCart
              items={items}
              setItems={setItems}
              style={{ display: showCart ? "block" : "none" }}
            />
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
