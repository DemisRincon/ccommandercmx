import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { HeaderContainer, IconContainer, MenuButtonContainer } from "../header";
import { FaXmark } from "react-icons/fa6";

const Container = styled(motion.nav)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
`;

const Menu = ({ paths, setIsOpen, isOpen }) => {
  console.log(paths);
  return (
    <Container
      animate={{
        opacity: 1,
        transition: { ease: "easeOut", duration: 0.5 },
      }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0, transition: { ease: "easeOut", duration: 0.5 } }}
    >
      <HeaderContainer>
        <IconContainer src={Logo} />
        <MenuButtonContainer>
          <FaXmark size={30} />
        </MenuButtonContainer>
      </HeaderContainer>
      <AnimatePresence>
        {isOpen && <MenuList paths={paths} setIsOpen={setIsOpen} />}
      </AnimatePresence>
    </Container>
  );
};

export default Menu;
