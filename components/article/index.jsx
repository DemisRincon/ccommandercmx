import React from "react";
import { H2, P } from "../global";

const Article = ({ title, content }) => {
  return (
    <>
      <H2>{title}</H2>
      <P>{content}</P>
    </>
  );
};

export default Article;
