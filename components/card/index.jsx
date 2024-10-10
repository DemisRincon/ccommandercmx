import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import AnimatedDiv from "../animatedDiv";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  flex-direction: column;
`;

export const CardImage = styled.img`
  height: 300px;
`;

const Card = ({ searchName }) => {
  const [card, setCard] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.scryfall.com/cards/named?fuzzy=${searchName}`)
      .then((response) => setCard(response.data));
  }, [searchName]);

  return (
  <AnimatedDiv
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <CardContainer>
      <h3>{card.name}</h3>
      <CardImage src={card.image_uris?.normal} alt={card.name} />
    </CardContainer>
  </AnimatedDiv>
  );
};

export default Card;
