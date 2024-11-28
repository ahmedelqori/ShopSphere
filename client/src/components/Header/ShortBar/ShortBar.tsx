import { useTranslation } from "react-i18next";
import {
  Container,
  Section,
  CategoryMenu,
  Ul,
  Li,
  PhoneCall,
} from "./ShortBar.styled";
import { Link } from "react-router-dom";
import ListCategory from "./ListCategory/ListCategory";
import { useEffect, useRef, useState } from "react";

const ShortBar: React.FC = () => {
  const [Content, _] = useTranslation("header");
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const menuRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleCloseMenu = (element: any) => {
      if (!menuRef?.current?.contains(element?.target)) setShowDropDown(false);
    };

    document.addEventListener("mousedown", handleCloseMenu);
    return () => document.removeEventListener("mousedown", handleCloseMenu);
  }, []);
  return (
    <Section>
      <Container className="container">
        <Ul>
          <Li
            onClick={() => {
              setShowDropDown(!showDropDown);
            }}
            ref={menuRef}
          >
            {Content("shortbar.list.category")}
            <img
              style={{ rotate: showDropDown ? "180deg" : "0deg" }}
              src="/assets/icons/CaretDownBlack.svg"
              alt="CaretDownBlack"
            />
            <CategoryMenu style={{ display: showDropDown ? "flex" : "none" }}>
              <ListCategory />
            </CategoryMenu>
          </Li>
          <Li>
            <img src="/assets/icons/MapPinLine.svg" alt="MapPinLine" />
            <Link to={"/track"}>{Content("shortbar.list.track")}</Link>
          </Li>
          <Li>
            <img
              src="/assets/icons/ArrowsCounterClockwise.svg"
              alt="ArrowsCounterClockwise"
            />
            <Link to={"/compare"}>{Content("shortbar.list.compare")}</Link>
          </Li>
          <Li>
            <img src="/assets/icons/Headphones.svg" alt="Headphones" />
            <Link to={"/customer"}>{Content("shortbar.list.customer")}</Link>
          </Li>
          <Li>
            <img src="/assets/icons/Info.svg" alt="Info" />
            <Link to={"/help"}>{Content("shortbar.list.need")}</Link>
          </Li>
        </Ul>
        <PhoneCall>
          <img src="/assets/icons/PhoneCall.svg" alt="PhoneCall" />
          {Content("shortbar.phone")}
        </PhoneCall>
      </Container>
    </Section>
  );
};

export default ShortBar;
