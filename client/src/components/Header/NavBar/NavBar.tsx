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
} from "./NavBar.styled";
import { useState, useEffect, ChangeEvent, useRef } from "react";
import ProfileMenu from "./Profile/ProfileMenu";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
export type ItemInterface = {
  title: string;
  price: number;
  count: number;
  img: string;
};

const NavBar: React.FC = () => {
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

  const [cartRef, profileRef, menuRef, searchRef] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [Content, _] = useTranslation("header");

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const handleCloseitems = (e: any) => {
      if (!cartRef.current?.contains(e.target as Node)) setShowCart(false);
      if (!profileRef.current?.contains(e.target as Node))
        setShowProfile(false);
      if (!menuRef.current?.contains(e.target as Node)) setShowDropDown(false);
    };
    document.addEventListener("mousedown", handleCloseitems);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleCloseitems);
    };
  }, []);

  return (
    <Section>
      <Container className="container">
        <Logo style={{ display: showSearchBar ? "none" : "flex" }}>
          <a href="/">
            <img src="/assets/icons/Icon.svg" alt="icon image" />
            <span>Meedivo</span>
          </a>
        </Logo>
        <Search
          style={{ display: showSearchBar || width > 768 ? "flex" : "none" }}
        >
          <input
            style={{ color: "var(--color-grey)" }}
            ref={searchRef}
            type="text"
            placeholder={Content("navbar.input")}
            value={searchContent}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setSearchContent(e.target.value)
            }
          />
        </Search>

        <User>
          <HiddenSearch
            src={
              showSearchBar
                ? "/assets/icons/XWhite.svg"
                : "/assets/icons/MagnifyingGlassWhite.svg"
            }
            alt="close open"
            onClick={() => {
              if (showDorpDow === false) setSearchContent("");
              setShowSearchBar(!showSearchBar);
              if (showDorpDow == false)
                setTimeout(() => {
                  searchRef.current?.focus();
                }, 0);
            }}
          />
          <Menu ref={menuRef}>
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
                  <Link to={"/login"}>
                    {Content("navbar.hide_profile.signin")}
                  </Link>
                </li>
                <li>
                  <Link to={"/login"}>
                    {Content("navbar.hide_profile.signup")}
                  </Link>
                </li>
                <li>
                  <Link to={"/"}>{Content("navbar.hide_profile.cart")}</Link>
                </li>
                <li>
                  <Link to={"/"}>
                    {Content("navbar.hide_profile.favorite")}
                  </Link>
                </li>
              </ul>
            </HideMenu>
          </Menu>
          <Cart ref={cartRef}>
            <img
              src="/assets/icons/Cart.svg"
              onClick={() => setShowCart(!showCart)}
              alt="cart image"
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
              alt="Favorite"
            />
          </Favorite>
          <Profile ref={profileRef}>
            <img
              src="/assets/icons/User.svg"
              onClick={() => setShowProfile(!showProfile)}
              alt="User"
            />
            <ProfileMenu style={{ display: showProfile ? "flex" : "none" }} />
          </Profile>
        </User>
      </Container>
    </Section>
  );
};

export default NavBar;
