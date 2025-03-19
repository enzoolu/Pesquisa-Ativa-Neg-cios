import React from "react";
import styled from "styled-components";

const HeroContainer = styled.div`
    padding-bottom: 90px;
    background: linear-gradient(to bottom, #84a6af, #458396);
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
`;

const Container = styled.div`
    max-width: 1200px;
    padding: 40px 20px 80px 20px;
    margin: 0 auto;
    display: grid;
    align-items: center;
    grid-template-columns: 2fr 1fr;
    gap: 100px;

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`;

const HeroTexto = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 800px) {
        align-items: center;
        text-align: center;
    }
`;

const HeroTitulo = styled.h1`
    font-size: 3.5rem;
    line-height: 1.125;
    margin-bottom: 20px;

    @media (max-width: 650px) {
        font-size: 3rem;
    }

    @media (max-width: 350px) {
        font-size: 2.5rem;
    }
`;

const HeroSubtitulo = styled.h1`
    font-size: 1.5rem;
    line-height: 1.1;
    color: rgb(211, 211, 211);
    margin-bottom: 40px;
`;

const CtaButton = styled.button`
  background-color: #6ecbd4;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;
  align-self: flex-start;
  
  &:hover {
      background-color: #458396;
      transform: scale(1.05);
    }

    @media (max-width: 800px) {
        align-self: center;
    }
`;

const HeroImg = styled.img`
    max-width: 100%;
    display: block;

    @media (max-width: 800px) {
        display: none;
    }
`;


export function HeroSection() {
  return (
    <HeroContainer>
      <Container>
        <HeroTexto>
          <HeroTitulo>
            Descubra por que o Pesquisa Ativa está revolucionando o mundo dos negócios!
          </HeroTitulo>
          <HeroSubtitulo>
            Obtenha insights precisos e tome decisões estratégicas com base em dados confiáveis.
            Conheça nossa metodologia ágil e assertiva para pesquisas de mercado e impulsione seus resultados.
          </HeroSubtitulo>
          <CtaButton aria-label="Agendar consultoria gratuita">
            Quero agendar uma consultoria gratuita!
          </CtaButton>
        </HeroTexto>
        <HeroImg
          src="/images/hero_img.svg"
          alt="Ilustração representando análise de dados e pesquisa de mercado"
        />
      </Container>
    </HeroContainer>
  );
}
