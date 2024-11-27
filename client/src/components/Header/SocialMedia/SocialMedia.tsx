import { useState } from "react";
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
const SocialMedia = () => {
  const socialMedia: string[] = [
    "Twitter",
    "Facebook",
    "Pinterest",
    "Reddit",
    "Youtube",
    "Instagram",
  ];
  const currencies = ["MAD", "USD"];
  const languages = ["ENG", "FR", "AR", "IN"];

  const [currency, setCurrency] = useState("USD");
  const [language, setLanguage] = useState("ENG");
  const [hideDownMenuLanguage, setHideDownMenuLanguage] = useState(true);
  const [hideDownMenuCurrency, setHideDownMenuCurrency] = useState(true);
  
  return (
    <Section>
      <Container className="container">
        <LeftSide>Welcome to Meedivo online eCommerce store. </LeftSide>
        <RightSide className="con1">
          <SocialMediaContainer className="social">
            Follow us:
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
            <OptionContainer>
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
                <UnorderList>
                  {languages.map((language: string, index: number) => (
                    <List
                      key={index}
                      onClick={() => {
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
            <OptionContainer>
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
                <UnorderList>
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
