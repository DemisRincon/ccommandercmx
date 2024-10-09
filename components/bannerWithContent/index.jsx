import React from "react";
import styled from "styled-components";
import { P } from "../global";
import Pharagraph from "../pharagraph";
export const BigLogo = styled.img`
  max-height: 50vh;
  max-width: 90%;
`;

const BannerWithContent = ({ logoWithLegends, paragraphs, title }) => {

  return (
    <>
      <BigLogo src={logoWithLegends.url} alt="Big Logo" />
      <h1>{title}</h1>
     <Pharagraph paragraphs={paragraphs}/>
    </>
  );
};

export default BannerWithContent;
