import { useState } from "react";
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
} from "./ShoopingCart.styled";

type ShoppingCartProps = {
  style?: React.CSSProperties;
};

type ItemInterface = {
  title: string;
  price: number;
  count: number;
  img: string;
};

const ShoppingCart: React.FC<ShoppingCartProps> = ({ style }) => {
  const itemObj: ItemInterface = {
    title: "Canon EOS 1500D DSLR Camera Body+ 18-55 mm",
    price: 1500,
    count: 1,
    img: "/assets/icons/Item.png",
  };

  const [items, setItems] = useState<ItemInterface[]>([
    itemObj,
    itemObj,
    itemObj,
  ]);

  const handleRemove = (index: number): void => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <Cart style={style}>
      <H3>Shopping Cart: ({items.length})</H3>
      <Ul>
        {items.length ? (
          items.map((item: ItemInterface, index: number) => (
            <Li key={index}>
              <ItemImage className="item" src={item.img} alt="item" />
              <InfoContainer>
                <H4>{item.title}</H4>
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
            </Li>
          ))
        ) : (
          <EmptyList>Empty List</EmptyList>
        )}
      </Ul>
    </Cart>
  );
};

export default ShoppingCart;
