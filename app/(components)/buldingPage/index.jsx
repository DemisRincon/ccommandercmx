'use client'

import React, { useEffect, useState } from "react";
import useGetPages from "../../library/hooks/useGetPages";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import BannerWithContent from "../BannerWithContent";
import Article from "../Article";
import CardGrid from "../CardGrid";
import SocialMediaArticle from "../SocialMediaArticle";
import ImageGrid from "../ImageGrid";
import Butto from "../Button";

export const MainContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

const BuildingPage = () => {
  const [pageByBlock, setPageByBlock] = useState(null);
  const pathName = usePathname();
  const pagesProps = useGetPages(pathName);
  useEffect(() => {
    if (!pagesProps.blocks) return;
    const blocks = pagesProps.blocks;
    const page = blocks.map((block, index) => {
      switch (block.__typename) {
        case "Article":
          return <Article key={`article-component-${index}`} {...block} />;
        case "BannerWithContent":
          return (
            <BannerWithContent
              key={`bannerWithContent-component-${index}`}
              {...block}
            />
          );
        case "CardGrid":
          return <CardGrid key={`cardGrid-component-${index}`} {...block} />;
        case "SocialMediaArticle":
          return (
            <SocialMediaArticle
              key={`socialMediaArticle-component-${index}`}
              {...block}
            />
          );
        case "ImageGrid":
          return <ImageGrid key={`imageGrid-component-${index}`} {...block} />;
        case "Button":
          return <Butto key={`button-component-${index}`} {...block} />;
        default:
          return null;
      }
    });
    setPageByBlock(page);
  }, [pagesProps]);

  if (!pagesProps) return;
  return <MainContainer>{pageByBlock}</MainContainer>;
};

export default BuildingPage;
