import React from "react";
import Card from "../card";
import { Wrapper, WrapperGrid } from "../global";
import Pharagraph from "../pharagraph";

const CardGrid = ({ cardList, paragraphs }) => {
  const cards = cardList.map((cardName, index) => (
    <Card key={cardName + index} searchName={cardName} />
  ));

  let cardsComponents = null
  if (!cards) return;
  if (cards.length === 1){

    cardsComponents= <Wrapper key="cardnameslist">{cards}</Wrapper>;
  } else {
    cardsComponents = <WrapperGrid key="cardnameslist">{cards}</WrapperGrid>;
  }

  return (
    <>
     {cardsComponents}
    {paragraphs && <Pharagraph paragraphs={paragraphs} />}
    </>
  );
};

export default CardGrid;
