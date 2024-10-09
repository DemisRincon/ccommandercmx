import React, { useState, useEffect } from "react";
import { P } from "../global";

const Pharagraph = ({ paragraphs }) => {
  const [article, setArticle] = useState(null);
  useEffect(() => {
    let articleContent = [];
    paragraphs?.map((paragraph, index) => {
      let paragraphComponent = [];
      paragraph.map((content, index) => {
        switch (content.type) {
          case "letter":
            paragraphComponent.push(<span key={index}>{content.text}</span>);
            break;
          case "link":
            paragraphComponent.push(
              <a key={index} href={content.url} target="_blank">
                {content.text}
              </a>
            );
            break;
          case "bold":
            paragraphComponent.push(
              <b key={index} style={{ fontWeight: "bold" }}>
                {content.text}
              </b>
            );
            break;
          default:
            paragraphComponent.push(<span key={index}>{content.text}</span>);
            break;
        }
      });

      articleContent.push(
        <P key={`paragraph-${index}`}>{paragraphComponent}</P>
      );
    });
    setArticle(articleContent);
  }, [paragraphs]);
  const articles = article?.map((paragraph) => paragraph);
  if (!articles || !paragraphs) return null;
  return articles;
};

export default Pharagraph;
