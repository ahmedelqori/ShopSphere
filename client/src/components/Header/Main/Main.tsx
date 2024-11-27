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
  Menu,
  HideMenu,
  HiddenSearch,
} from "./Main.styled";
import { useState, useEffect, ChangeEvent } from "react";
import ProfileMenu from "./Profile/ProfileMenu";
import { Link } from "react-router-dom";
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
    title: "Canon EOS 1500D DSLR Camera Body+ 18-55",
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

  const [showCart, setShowCart] = useState<Boolean>(false);
  const [showFavorite, setShowFavorite] = useState<Boolean>(false);
  const [showProfile, setShowProfile] = useState<Boolean>(false);
  const [showDorpDow, setShowDropDown] = useState<Boolean>(false);
  const [showSearchBar, setShowSearchBar] = useState<Boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);
  const [searchContent, setSearchContent] = useState<string>("");

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section>
      <Container className="container">
        <Logo style={{ display: showSearchBar ? "none" : "flex" }}>
          <a href="/">
            <img src="/assets/icons/Icon.svg" />
            <span>Meedivo</span>
          </a>
        </Logo>
        <Search
          style={{ display: showSearchBar || width > 768 ? "flex" : "none" }}
        >
          <input
            type="text"
            placeholder="Search for anything..."
            value={searchContent}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchContent(e.target.value)
            }
          />
          {/* <img src="/assets/icons/MagnifyingGlass.svg" /> */}
        </Search>

        <User>
          <HiddenSearch
            src={
              showSearchBar
                ? "/assets/icons/XWhite.svg"
                : "/assets/icons/MagnifyingGlassWhite.svg"
            }
            onClick={() => {
              if (showDorpDow === false) setSearchContent("");
              setShowSearchBar(!showSearchBar);
            }}
          />
          <Menu>
            <img
              src={
                showDorpDow
                  ? "/assets/icons/MenuOpen.svg"
                  : "/assets/icons/MenuClose.svg"
              }
              alt="menu button"
              onClick={() => {
                if (width <= 768) setShowDropDown(!showDorpDow);
                else setShowDropDown(false);
              }}
            />
            <HideMenu style={{ display: showDorpDow ? "flex" : "none" }}>
              <ul>
                <li>
                  <Link to={"/login"}>Sign in</Link>
                </li>
                <li>
                  <Link to={"/login"}>Sign up</Link>
                </li>
                <li>
                  <Link to={"/"}>Cart</Link>
                </li>
                <li>
                  <Link to={"/"}>Favorite</Link>
                </li>
              </ul>
            </HideMenu>
          </Menu>
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
            <ProfileMenu style={{ display: showProfile ? "flex" : "none" }} />
          </Profile>
        </User>
      </Container>
    </Section>
  );
};

export default Main;
