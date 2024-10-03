import React from "react";
import styled from "styled-components";
import { P } from "../global";
export const BigLogo = styled.img`
  max-height: 50vh;
  max-width: 90%;
`;

const BannerWithContent = ({ logoWithLegends, paragraphs, title }) => {
  const paragraphsComponents = paragraphs.map((item) => {
    return <P key={item}>{item}</P>;
  });
  return (
    <>
      <BigLogo src={logoWithLegends.url} alt="Big Logo" />
      <h1>{title}</h1>
      {paragraphsComponents}
    </>
  );
};

export default BannerWithContent;
