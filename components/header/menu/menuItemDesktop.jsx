import * as React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";
import { H3 } from "@/components/global";

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

const LinkNames = ["Inicio", "LKS (Alternative cEDH)", "FAQ", "Contacto"];
const LinkUrls = ["/", "/lks", "/faq", "/contact"];
const Item = styled(motion.li)`
  list-style: none;
  display: flex;
  align-items: center;
  width: 50%;
  border-radius: none;
  outline: none;
`;

const Text = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const MenuItemDesktop = ({ item: { params }, closeMenu }) => {
  console.log(params);
  return (
    <Item
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href={params.slug}>
        <Text>
          <H3>{params.name}</H3>
        </Text>
      </Link>
      {/* <Link
        style={{ width: "100%", height: "100%" , display: 'flex'}}
        href={LinkUrls[i]}
        onClick={closeMenu}
      >
      
        <Text className="text-placeholder" >
          <h4>{LinkNames[i]}</h4>
        </Text>
      </Link> */}
    </Item>
  );
};

export default MenuItemDesktop;
