import React from "react";
import { H1 } from "../global";
import Pharagraph from "../pharagraph";

const Article = ({ title, paragraphs }) => {
  return (
    <>
      <H1>{title}</H1>
      <Pharagraph paragraphs={paragraphs} />
    </>
  );
};

export default Article;
