import React from "react";
import styled from "styled-components";
import Pharagraph from "../pharagraph";
import { H1 } from "../global";

export const BigLogo = styled.img`
  max-height: 50vh;
  max-width: 90%;
`;

const BannerWithContent = ({ logoWithLegends, paragraphs, title }) => {
  return (
    <>
      <BigLogo src={logoWithLegends.url} alt="Big Logo" />
      <H1>{title}</H1>
      <Pharagraph paragraphs={paragraphs} />
    </>
  );
};

export default BannerWithContent;
