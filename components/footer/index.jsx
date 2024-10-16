import { Logo } from '@/library/images';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { FaSearch, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter  } from 'react-icons/fa6';
import AnimatedDiv from '../animatedDiv';
import useGetFooter from '@/library/hooks/useGetFooter';

const FooterWrapper = styled.footer`
  background-color: #282d46;
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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem; 
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1024px) {
    display: flex;
    grid-template-columns: none;
    justify-content: space-evenly;
    align-items: flex-start;
    flex-direction: row;
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
  width: 100%;
  border-radius: 5rem;
  border: 1px solid #000000;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    width: 60%;
    margin-left: 20%;
  }
  @media (min-width: 1024px) {
    width: 100%;
    margin-left: 0%;
  }
`;

const Input = styled.input`
  width: 85%;
  border-radius: 5rem 0 0 5rem;
  padding: .5rem 0 .3rem 1rem;
  font-size: 1rem;
  outline: none;
  border: 0 1px 0 0;
  border-color: #d1d1d1;
  border-width: 1px;
  border-style: solid;
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
  const footer = useGetFooter();
  if (!footer.length) return null;
  const footerDetails = footer[0].params.content.data.sections;
  
  const contentList = (data) => {
    return (
      <LinkList>
        {data.map((data, index) => (
          <FooterLink href={data.url} key={index}>{data.title}</FooterLink>
        ))}
      </LinkList>
    )
  }
  
  const footerItems = footerDetails.map((item, index) => (  
    <Section key={index}>
      <SectionTitle>{item.title}</SectionTitle>
      {contentList(item.list)}
    </Section>
  ));

  return (
    <AnimatedDiv 
    initial={{ opacity: 0, y: 5 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    >
      <FooterWrapper>
        <SectionContainer>
          <Section>
            <SectionTitle/>
            <InputWrapper>
              <Input type="text" placeholder="Buscar" />
              <SearchIcon />
            </InputWrapper>
          </Section>
          {footerItems}
          <Section>
            <SectionTitle>Social</SectionTitle>
            <SocialIcons>
              <SocialIcon>
                <a href="https://www.facebook.com/share/hrXPPuKBt1SoU5f1/" target="_blank" rel="noopener noreferrer" >
                  <FaFacebook color={'white'} size={'100%'} />
                </a>
              </SocialIcon>
              <SocialIcon>
                <a href="https://www.instagram.com/ccommandercmx?igsh=NDEwZTZqOGMxc3Q4" target="_blank" rel="noopener noreferrer" >
                  <FaInstagram color={'white'} size={'100%'}/>
                </a>
              </SocialIcon>
              <SocialIcon>
                  <FaXTwitter color={'white'} size={'100%'}/>
              </SocialIcon>
            </SocialIcons>
          </Section>
        </SectionContainer>

        <Logos>
          <LogoImage src={Logo} alt="Banshee's Veil" />
        </Logos>
      </FooterWrapper>
    </AnimatedDiv>
  );
};

export default Footer;