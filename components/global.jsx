import styled from "styled-components";

export const P = styled.p`
  width: 90%;
  max-width: 900px;
  font-size: 1.2rem;
  line-height: 1.5;
  text-align: justify;
`;

export const H1 = styled.h1`
   max-width: 900px;
  width: 90%;
  text-align: center;
`;

export const H2 = styled.h2`
  max-width: 900px;
  width: 90%;
   text-align: center;
`;

export const H3 = styled.h3`
    max-width: 900px;
  width: 90%;
   text-align: center;
`;

export const Button = styled.button`
  background-color: #066698;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  transition: 0.3s;
  font-size: 1.5rem;
  max-width: 90%;
  &:hover {
    background-color: #222741;
    cursor: pointer;
  }
`;

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const SingleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
  width: 100%;
    max-width: 900px;
`;

export const WrapperGrid = styled.div`
  display: grid;
  margin-bottom: 20px;
    max-width: 900px;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 0 50px;
  grid-auto-rows: minmax(100px, auto);
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Wrapper = styled(WrapperGrid)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const A = styled.a`
  color: #635c91;
  text-decoration: underline;
`;
