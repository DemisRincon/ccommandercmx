import React from "react";
import { H2 } from "../global";
import Pharagraph from "../pharagraph";

const Article = ({ title, paragraphs }) => {
  return (
    <>
      <H2>{title}</H2>
      <Pharagraph paragraphs={paragraphs} />
    </>
  );
};

export default Article;
