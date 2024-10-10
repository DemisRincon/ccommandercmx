import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#066698", "#066698", "#066698", "#066698"];
const LinkNames = ["Inicio" , "LKS (Alternative cEDH)","FAQ", "Contacto"];
const LinkUrls = ["/"  ,"/lks", "/faq" ,"/contact"];
const Item = styled(motion.li)`
  list-style: none;
  height: 3rem;
  display: flex;
  align-items: center;
  width: 70%;
  margin-bottom: 30px;
  border-radius: 10px;
  @media (min-width: 1024px) {
    width: 90%;
    margin-bottom: 0;
    height: 2.5rem;
    margin-right: 1rem;
  }
`;

const Text = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  @media (min-width: 1024px) {
    max-width: 10rem;
    height: 100%;
  }
`;

const MenuItem = ({ i, closeMenu }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <Item
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        style={{ width: "100%", height: "100%", display: "flex" }}
        href={LinkUrls[i]}
        onClick={closeMenu}
      >
        <Text className="text-placeholder" style={style}>
          <h4>{LinkNames[i]}</h4>
        </Text>
      </Link>
    </Item>
  );
};

export default MenuItem;
