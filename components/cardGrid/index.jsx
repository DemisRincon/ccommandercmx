import React from "react";
import Card from "../card";
import { H2, Wrapper, WrapperGrid } from "../global";
import Pharagraph from "../pharagraph";
import AnimatedDiv from "../animatedDiv";

const CardGrid = ({ cardList, paragraphs, title }) => {

  const cards = cardList.map((cardName, index) => (
    <Card key={cardName + index} searchName={cardName} />
  ));

  let cardsComponents = null;
  if (!cards) return;
  if (cards.length === 1) {
    cardsComponents = <Wrapper key="cardnameslist">{cards}</Wrapper>;
  } else {
    cardsComponents = <WrapperGrid key="cardnameslist">{cards}</WrapperGrid>;
  }

  return (
    <>
      <AnimatedDiv
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title && <H2>{title}</H2>}
        {cardsComponents}
        {paragraphs && <Pharagraph paragraphs={paragraphs} />}
      </AnimatedDiv>
    </>
  );
};

export default CardGrid;
