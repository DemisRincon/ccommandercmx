import { Hasbro, Teen, WOTCLogo } from '@/library/images';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #000;
  color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    flex-wrap: wrap;
  }
`;

const Section = styled.div`
  min-width: 5rem;
  padding: .5rem;
  text-align: center; 

  @media (min-width: 768px) {
    text-align: left; 
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 10px;
  border-bottom: 2px solid orange;
  display: inline-block;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;  
    align-items: center;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 5%;
  margin-bottom: 10px; 

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 10px; 
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

  @media (min-width: 768px) {
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
    text-align: left; 
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
`;

const Logos = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const LogoImage = styled(Image)`
  margin: 1rem;
  height: 4rem;
  width: 4rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <SectionContainer>
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
      </SectionContainer>

      <Logos>
        <LogoImage src={WOTCLogo} alt="Wizards of the Coast" />
        <LogoImage src={Hasbro} alt="Hasbro" />
        <LogoImage src={Teen} alt="ESRB" />
      </Logos>
    </FooterWrapper>
  );
};

export default Footer;