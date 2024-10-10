import React from "react";
import styled from "styled-components";
import Pharagraph from "../pharagraph";
import { H1 } from "../global";
import { AnimatePresence, motion } from "framer-motion";
import AnimatedDiv from "../animatedDiv";

export const BigLogo = styled.img`
  max-height: 50vh;
  max-width: 90%;
`;


const BannerWithContent = ({ logoWithLegends, paragraphs, title }) => {
  return (
    <>
      <AnimatedDiv
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <AnimatePresence>
        <BigLogo src={logoWithLegends.url} alt="Big Logo" />
        <H1>{title}</H1>
        <Pharagraph paragraphs={paragraphs} />
        </AnimatePresence>
      </AnimatedDiv>
    </>
  );
};

export default BannerWithContent;
