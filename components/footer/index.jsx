import { Logo } from '@/library/images';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter  } from 'react-icons/fa6';
import AnimatedDiv from '../animatedDiv';

const FooterWrapper = styled.footer`
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 100%;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  width: 100%;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row; 
    justify-content: space-evenly;
    align-items: flex-start;
  }
`;


const SectionSplit = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  @media (min-width: 768px) {
    flex-direction: column; 
    width: 50%; 
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%; 
    gap: 2rem; 
  }
`;

const Section = styled.div`
  min-width: 5rem;
  margin: .5rem;
`;
const SectionTitle = styled.h3`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    justify-content: flex-start; 
  }
`;

const InputWrapper = styled.div`
  width: 60%;
  margin-left: 20%;
  border-radius: 5rem;
  border: 2px solid #d1d1d1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 80%;
    margin-left: 10%;
  }
  @media (min-width: 1024px) {
    width: 100%;
    margin-left: 0%;
  }
`;

const Input = styled.input`
  width: 85%;
  padding: .5rem 0 .5rem .2rem;
  border-radius: 5rem 0 0 5rem;
  font-size: 1rem;
  outline: none;
  border: 2px solid #d1d1d1;
  &:focus {
    border-color: #888888;
  }
`;

const SearchIcon = styled(FaSearch)`
  color: #aaa;
  font-size: 1.2rem;
  width: 15%;
`;


const SocialIcons = styled.div`
  display: flex;
  padding-top: 1rem;
  gap: 1rem;
  justify-content: center; 
  @media (min-width: 1024px) {
    justify-content: flex-start; 
  }
`;

const SocialIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: center; 

  @media (min-width: 768px) {
    text-align: center; 
  }
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: block;
  margin: 5px 0;

  &:hover {
    text-decoration: underline;
  }
  @media (min-width: 768px) {
    text-align: center; 
  }
  @media (min-width: 1024px) {
    text-align: left; 
  }
`;

const Logos = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const LogoImage = styled(Image)`
  margin: 1rem;
  height: 5rem;
  width: 5rem;
`;

const Footer = () => {
  return (
    <AnimatedDiv 
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    >
      <FooterWrapper>
        <SectionContainer>
          <SectionSplit>
          <Section>
            <SectionTitle>Buscar</SectionTitle>
            <InputWrapper>
            <Input type="text" placeholder="Buscar" />
            <SearchIcon />
            </InputWrapper>
          </Section>

          <Section>
            <SectionTitle>Home</SectionTitle>
            <LinkList>
              <FooterLink href="#">Bienvenido</FooterLink>
            </LinkList>
          </Section>

          <Section>
            <SectionTitle>Formatos</SectionTitle>
            <LinkList>
              <FooterLink href="#">LKS</FooterLink>
              <FooterLink href="#">cEDH</FooterLink>
            </LinkList>
          </Section>
          </SectionSplit>
          <SectionSplit>
          <Section>
            <SectionTitle>Origen</SectionTitle>
            <LinkList>
              <FooterLink href="#">Conócenos</FooterLink>
              <FooterLink href="#">Propuesta</FooterLink>
            </LinkList>
          </Section>

          <Section>
            <SectionTitle>Info</SectionTitle>
            <LinkList>
              <FooterLink href="#">FAQ</FooterLink>
            </LinkList>
          </Section>
            <Section>
              <SectionTitle>Social</SectionTitle>
              <SocialIcons>
                <SocialIcon><FaFacebook size={'90%'} /></SocialIcon>
                <SocialIcon><FaInstagram size={'100%'}/></SocialIcon>
                <SocialIcon><FaXTwitter size={'100%'}/></SocialIcon>
              </SocialIcons>
            </Section>
          </SectionSplit>
        </SectionContainer>

        <Logos>
          <LogoImage src={Logo} alt="Banshee's Veil" />
        </Logos>
      </FooterWrapper>
    </AnimatedDiv>
  );
};

export default Footer;