"use client";
import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

export const Input = styled.button`
  background-color: #066698;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 50px 0;
  transition: 0.3s;
  font-size: 1.5rem;
  max-width: 90%;
  &:hover {
    background-color: #222741;
    cursor: pointer;
  }
`;

const Button = ({ text, url }) => {
  const router = useRouter();
  return <Input onClick={() => router.push(url)}>{text}</Input>;
};

export default Button;
