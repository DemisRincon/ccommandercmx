import React, { useState, useEffect } from "react";
import { P, H2, H3, H1, H4 } from "../global";

const Pharagraph = ({ paragraphs }) => {
  const [article, setArticle] = useState(null);
  useEffect(() => {
    let articleContent = [];
    paragraphs?.map((paragraph, index) => {
      let paragraphComponent = [];
      paragraph?.map((content, index) => {
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
          case "italic":
            paragraphComponent.push(
              <i key={index} style={{ fontStyle: "italic" }}>
                {content.text}
              </i>
            );
            break;
          case "h1":
            articleContent.push(
              <H1 key={index} style={{ fontSize: "3rem" }}>
                {content.text}
              </H1>
            );
          case "h2":
            articleContent.push(
              <H2 key={index} style={{ fontSize: "2rem" }}>
                {content.text}
              </H2>
            );
            break;
          case "h3":
            articleContent.push(
              <H3 key={index} style={{ fontSize: "1.5rem" }}>
                {content.text}
              </H3>
            );
            break;
            case "h4":
              articleContent.push(
                <H4 key={index} style={{ fontSize: "1.5rem" }}>
                  {content.text}
                </H4>
              );
              break;
          default:
            paragraphComponent.push(<span key={index}>{content.text}</span>);
            break;
        }
      });
      console.log(paragraphComponent);
      if (paragraphComponent.length > 0)
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
