import { BVLogo, Salty } from '@/library/images';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

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
  display: flex;
  justify-content: center;
  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5%;
  margin-bottom: 10px; 
  margin-right: 10px; 

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

const SearchButton = styled.button`
  padding: .5rem;
  background-color: #fff;
  border: none;
  border-radius: 5%;
  cursor: pointer;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center; 

  @media (min-width: 1024px) {
    justify-content: flex-start; 
  }
`;

const SocialIcon = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #fff;
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
    <FooterWrapper>
      <SectionContainer>
        <SectionSplit>
        <Section>
          <SectionTitle>Find a Store</SectionTitle>
          <InputWrapper>
            <Input type="text" placeholder="Enter your city or postal code" />
            <SearchButton>🔍</SearchButton>
          </InputWrapper>

          <SectionTitle>Social</SectionTitle>
          <SocialIcons>
            <SocialIcon>🌐</SocialIcon>
            <SocialIcon>🌐</SocialIcon>
            <SocialIcon>🌐</SocialIcon>
            <SocialIcon>🌐</SocialIcon>
          </SocialIcons>
        </Section>

        <Section>
          <SectionTitle>Find</SectionTitle>
          <LinkList>
            <FooterLink href="#">Articles</FooterLink>
            <FooterLink href="#">Club Support</FooterLink>
            <FooterLink href="#">Digital Books</FooterLink>
            <FooterLink href="#">Formats</FooterLink>
            <FooterLink href="#">Rules</FooterLink>
            <FooterLink href="#">Military Support</FooterLink>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Company</SectionTitle>
          <LinkList>
            <FooterLink href="#">About</FooterLink>
            <FooterLink href="#">Accounts</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Support</FooterLink>
            <FooterLink href="#">Affiliate Program</FooterLink>
            <FooterLink href="#">Disclosure</FooterLink>
          </LinkList>
        </Section>
        </SectionSplit>
        <SectionSplit>
        <Section>
          <SectionTitle>Magic</SectionTitle>
          <LinkList>
            <FooterLink href="#">Magic: The Gathering</FooterLink>
            <FooterLink href="#">Magic Arena</FooterLink>
            <FooterLink href="#">Magic.gg</FooterLink>
            <FooterLink href="#">Store & Events Locator</FooterLink>
            <FooterLink href="#">Card Database</FooterLink>
            <FooterLink href="#">Secret Lair</FooterLink>
          </LinkList>
        </Section>

        <Section>
          <SectionTitle>Brands</SectionTitle>
          <LinkList>
            <FooterLink href="#">Dungeons & Dragons</FooterLink>
            <FooterLink href="#">Duel Masters</FooterLink>
            <FooterLink href="#">Magic: The Gathering</FooterLink>
          </LinkList>
        </Section>
        </SectionSplit>
      </SectionContainer>

      <Logos>
        <LogoImage src={BVLogo} alt="Banshee's Veil" />
        <LogoImage src={Salty} alt="La Escupidera de Salty" />
      </Logos>
    </FooterWrapper>
  );
};

export default Footer;