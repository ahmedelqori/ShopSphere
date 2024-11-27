import { useEffect, useState } from "react";
import React from "react";
import {
  Cart,
  H3,
  Ul,
  Li,
  H4,
  ItemImage,
  InfoContainer,
  PriceContainer,
  EmptyList,
  ShowMore,
  Line,
  Total,
  Buttons,
  LinkContainer,
} from "./ShoopingCart.styled";

import { ItemInterface } from "../NavBar";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

type ShoppingCartProps = {
  style?: React.CSSProperties;
  items: ItemInterface[];
  setItems: React.Dispatch<React.SetStateAction<ItemInterface[]>>;
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({
  style,
  items,
  setItems,
}) => {
  const [total, setTotal] = useState<number>(0);
  const handleRemove = (index: number): void => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const [Content, _] = useTranslation("header");

  useEffect(() => {
    const newTotal: number = items.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
    setTotal(newTotal);
  }, [items]);
  return (
    <Cart style={style}>
      <H3>
        {Content("navbar.cart.h3")} ({items.length})
      </H3>
      <Line />
      <Ul>
        {items.length ? (
          items.map((item: ItemInterface, index: number) => {
            if (index > 2) return;
            return (
              <Li key={index}>
                <LinkContainer to={"/"}>
                  <ItemImage className="item" src={item.img} alt="item" />
                  <InfoContainer>
                    <H4>
                      {item.title.substring(0, 48)}
                      {item.title.length > 48 ? "..." : ""}
                    </H4>
                    <PriceContainer>
                      <p>{item.count} x </p>
                      <span>${item.price}</span>
                    </PriceContainer>
                  </InfoContainer>
                  <img
                    src="/assets/icons/X.svg"
                    alt="close"
                    onClick={() => handleRemove(index)}
                  />
                </LinkContainer>
              </Li>
            );
          })
        ) : (
          <EmptyList>{Content("navbar.cart.empty")}</EmptyList>
        )}
        {items.length > 2 ? (
          <ShowMore>{Content("navbar.cart.more")}</ShowMore>
        ) : (
          ""
        )}
      </Ul>
      <Line />
      <Total>
        <div>{Content("navbar.cart.total")}</div>
        <span>${total.toFixed(2)} USD</span>
      </Total>
      <Buttons>
        <button>{Content("navbar.cart.checkout")}</button>
        <button>{Content("navbar.cart.view")}</button>
      </Buttons>
    </Cart>
  );
};

export default ShoppingCart;
