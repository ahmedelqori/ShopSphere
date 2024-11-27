import { useEffect, useRef, useState } from "react";
import {
  Section,
  Container,
  LeftSide,
  RightSide,
  SocialMediaContainer,
  OptionsContainer,
  HideOptions,
  UnorderList,
  List,
  OptionContainer,
  LinksContainer,
} from "./SocialMedia.styled";
import { useTranslation } from "react-i18next";
const SocialMedia: React.FC = () => {
  const socialMedia: string[] = [
    "Twitter",
    "Facebook",
    "Pinterest",
    "Reddit",
    "Youtube",
    "Instagram",
  ];
  const currencies = ["MAD", "USD"];
  const languages = ["en", "fr"];

  const [currency, setCurrency] = useState<string>("USD");
  const [language, setLanguage] = useState<string>("en");
  const [hideDownMenuLanguage, setHideDownMenuLanguage] =
    useState<boolean>(true);
  const [hideDownMenuCurrency, setHideDownMenuCurrency] =
    useState<boolean>(true);

  const [languageRef, currencyRef] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const [Content, i18n] = useTranslation("header");
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleCloseMenu = (event: MouseEvent) => {
      if (!languageRef.current?.contains(event.target as Node))
        setHideDownMenuLanguage(true);
      if (!currencyRef.current?.contains(event.target as Node))
        setHideDownMenuCurrency(true);
    };
    document.addEventListener("mousedown", handleCloseMenu);
    return () => {
      document.removeEventListener("mousedown", handleCloseMenu);
    };
  }, []);

  return (
    <Section>
      <Container className="container">
        <LeftSide>{Content("social_media_bar.welcome")}.</LeftSide>
        <RightSide>
          <SocialMediaContainer>
            <p>{Content("social_media_bar.follow")}:</p>
            <LinksContainer>
              {socialMedia.map((e: string, index: number) => {
                return (
                  <a key={index} href={`https://www.${e}.com`} target="_blank">
                    <img src={`/assets/icons/${e}.svg`} />
                  </a>
                );
              })}
            </LinksContainer>
          </SocialMediaContainer>
          <OptionsContainer>
            <OptionContainer ref={languageRef}>
              <span
                onClick={() => setHideDownMenuLanguage(!hideDownMenuLanguage)}
              >
                {language.toUpperCase()}
              </span>
              <img
                onClick={() => setHideDownMenuLanguage(!hideDownMenuLanguage)}
                src="/assets/icons/CaretDown.svg"
              />
              <HideOptions
                style={{ display: hideDownMenuLanguage ? "none" : "block" }}
              >
                <UnorderList onMouseDown={(e) => e.stopPropagation()}>
                  {languages.map((language: string, index: number) => (
                    <List
                      key={index}
                      onClick={() => {
                        setLanguage(language);
                        setHideDownMenuLanguage(true);
                        handleChangeLanguage(language);
                      }}
                    >
                      {language.toUpperCase()}
                    </List>
                  ))}
                </UnorderList>
              </HideOptions>
            </OptionContainer>
            <OptionContainer ref={currencyRef}>
              <span
                onClick={() => setHideDownMenuCurrency(!hideDownMenuCurrency)}
              >
                {currency.toUpperCase()}
              </span>{" "}
              <img
                onClick={() => setHideDownMenuCurrency(!hideDownMenuCurrency)}
                src="/assets/icons/CaretDown.svg"
              />
              <HideOptions
                style={{
                  display: hideDownMenuCurrency ? "none" : "block",
                  left: 0,
                }}
              >
                <UnorderList onMouseDown={(e) => e.stopPropagation()}>
                  {currencies.map((currency: string, index: number) => (
                    <List
                      key={index}
                      onClick={() => {
                        setCurrency(currency);
                        setHideDownMenuCurrency(true);
                        handleChangeLanguage(language);
                      }}
                    >
                      {currency.toUpperCase()}
                    </List>
                  ))}
                </UnorderList>
              </HideOptions>
            </OptionContainer>
          </OptionsContainer>
        </RightSide>
      </Container>
    </Section>
  );
};

export default SocialMedia;
