import React from "react";
import Pharagraph from "../pharagraph";
import { H2 } from "../global";
import AnimatedDiv from "../animatedDiv";

const Article = ({ title, paragraphs }) => {
  return (
    <>
      <AnimatedDiv
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {title && <H2>{title}</H2>}
        <Pharagraph paragraphs={paragraphs} />
      </AnimatedDiv>
    </>
  );
};

export default Article;
