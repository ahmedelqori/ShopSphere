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
  const languages = ["ENG", "FR", "AR"];

  const [currency, setCurrency] = useState<string>("USD");
  const [language, setLanguage] = useState<string>("ENG");
  const [hideDownMenuLanguage, setHideDownMenuLanguage] =
    useState<boolean>(true);
  const [hideDownMenuCurrency, setHideDownMenuCurrency] =
    useState<boolean>(true);

  const [languageRef, currencyRef] = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

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
        <LeftSide>Welcome to Meedivo online eCommerce store. </LeftSide>
        <RightSide >
          <SocialMediaContainer >
            <p>Follow us:</p>
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
                {language}
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
                        console.log("hi");
                        setLanguage(language);
                        setHideDownMenuLanguage(true);
                      }}
                    >
                      {language}
                    </List>
                  ))}
                </UnorderList>
              </HideOptions>
            </OptionContainer>
            <OptionContainer ref={currencyRef}>
              <span
                onClick={() => setHideDownMenuCurrency(!hideDownMenuCurrency)}
              >
                {currency}
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
                      }}
                    >
                      {currency}
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
