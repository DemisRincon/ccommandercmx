"use client";

import React from "react";
import styled from "styled-components";
import Header from "../components/header";
import StyledComponentsRegistry from "./registry";

const Html = styled.html`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: #333;
  background-color: #f5f5f5;
`;

const MainLayout = styled.body`
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  text-align: center;
  min-height: 100vh;
  background-color: #f5f5f5;
`;



const Layout = ({ children }) => {
  return (
    <Html>
      <StyledComponentsRegistry>
        <MainLayout>
          <Header />
          {children}
        </MainLayout>
      </StyledComponentsRegistry>
    </Html>
  );
};

export default Layout;
