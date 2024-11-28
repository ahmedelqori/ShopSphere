import { useTranslation } from "react-i18next";
import {
  FooterComp,
  Container,
  Contact,
  TopCategory,
  DownloadApp,
  PopularTag,
  QuickLinks,
  TopSection,
  BrowserAll,
  UlTag,
  LiTag,
} from "./Footer.styled";

import { Link } from "react-router-dom";

const Footer = () => {
  const [Content, _] = useTranslation("footer");

  const tags = [
    "Game",
    "iPhone",
    "TV",
    "Asus Laptops",
    "Macbook",
    "SSD",
    "Graphics Card",
    "Power Bank",
    "Smart TV",
    "Speaker",
    "Tablet",
    "Microwave",
    "Samsung",
  ];
  return (
    <FooterComp>
      <Container className="container">
        <TopSection>
          <Contact>
            <div style={{ cursor: "pointer" }}>
              <img src="/assets/icons/IconOrange.svg" alt="Icon" />
              <span>MEEDIVO</span>
            </div>
            <p>{Content("top_section.first.customer")}</p>
            <span>(629) 555-0129</span>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            <span>info@kinbo.com</span>
          </Contact>
          <TopCategory>
            <h4>{Content("top_section.second.title").toUpperCase()}</h4>
            <ul>
              <li>
                <Link to={"/"}>{Content("top_section.second.computer")}</Link>
              </li>
              <li>
                <Link to={"/"}>{Content("top_section.second.phone")}</Link>
              </li>
              <li>
                <Link to={"/"}>{Content("top_section.second.headphone")}</Link>
              </li>
              <li>
                <Link to={"/"}>
                  {Content("top_section.second.accessories")}
                </Link>
              </li>
              <li>
                <Link to={"/"}>{Content("top_section.second.camera")}</Link>
              </li>
              <li>
                <Link to={"/"}>{Content("top_section.second.tv")}</Link>
              </li>
            </ul>
            <BrowserAll to={"/"}>
              {Content("top_section.second.browser")}
              <img src="/assets/icons/ArrowRightYellow.svg" alt="arrow" />
            </BrowserAll>
          </TopCategory>
          <QuickLinks>
            <h4>{Content("top_section.third.title").toUpperCase()}</h4>
            <ul>
              <li>
                <Link to={"/"}>{Content("top_section.third.shop")}</Link>
              </li>
              <li>
                <Link to={"/"}>{Content("top_section.third.shoping")}</Link>
              </li>
              <li>
                <Link to={"/"}>{Content("top_section.third.wishlist")}</Link>
              </li>
              <li>
                <Link to={"/"}>{Content("top_section.third.compare")}</Link>
              </li>
              <li>
                <Link to={"/"}>{Content("top_section.third.track")}</Link>
              </li>
              <li>
                <Link to={"/"}>{Content("top_section.third.customer")}</Link>
              </li>
              <li>
                <Link to={"/"}>{Content("top_section.third.about")}</Link>
              </li>
            </ul>
          </QuickLinks>
          <DownloadApp>
            <h4>{Content("top_section.fourth.title").toUpperCase()}</h4>
            <ul>
              <li>
                <Link to={"/androind"}>
                  <img src="/assets/icons/MobileApp.svg" alt="android" />
                </Link>
              </li>
              <li>
                <Link to={"/androind"}>
                  <img src="/assets/icons/IphoneApp.svg" alt="iphone" />
                </Link>
              </li>
            </ul>
          </DownloadApp>
          <PopularTag>
            <h4>{Content("top_section.fifth.title").toUpperCase()}</h4>
            <UlTag>
              {tags.map((tag, index) => (
                <LiTag key={index}>{tag}</LiTag>
              ))}
            </UlTag>
          </PopularTag>
        </TopSection>
      </Container>
    </FooterComp>
  );
};

export default Footer;
