"use client";
import React, { useEffect, useState } from "react";
import useGetPages from "../library/hooks/useGetPages";
import { usePathname } from "next/navigation";
import styled from "styled-components";
import BannerWithContent from "../components/BannerWithContent";
import Article from "../components/Article";
export const MainContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

const Home = () => {
  const [pageByBlock, setPageByBlock] = useState(null);
  const pathName = usePathname();
  const pagesProps = useGetPages(pathName);
  useEffect(() => {
    if (!pagesProps.blocks) return;
    const blocks = pagesProps.blocks;
    const page = blocks.map((block,index) => {
      switch (block.__typename) {
        case "Article":
          return <Article key={`article-component-${index}`} {...block}/>
        case "BannerWithContent":
          return <BannerWithContent key={`bannerWithContent-component-${index}`} {...block}/>;

        default:
          return null;
      }
    });
    setPageByBlock(page);
  }, [pagesProps]);

  if (!pagesProps) return;
  return <MainContainer>{pageByBlock}</MainContainer>;
};

export default Home;
