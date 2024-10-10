import React from "react";
import styled from "styled-components";
import Pharagraph from "../pharagraph";
import { H1 } from "../global";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedDiv from "../animatedDiv";

export const BigLogo = styled.img`
  max-height: 50vh;
  max-width: 90%;
  margin-bottom: 50px;
`;


const BannerWithContent = ({ logoWithLegends, paragraphs, title }) => {
  return (
    <>
      <AnimatedDiv
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence>
        <H1>{title}</H1>
        <BigLogo src={logoWithLegends.url} alt="Big Logo" />
        <Pharagraph paragraphs={paragraphs} />
        </AnimatePresence>
      </AnimatedDiv>
    </>
  );
};

export default BannerWithContent;
