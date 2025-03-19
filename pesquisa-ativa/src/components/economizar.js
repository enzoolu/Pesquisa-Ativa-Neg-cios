import React from "react";
import styled from "styled-components";

const ContainerEconomizar = styled.div`
    margin-top: 1px;
    background: linear-gradient(to bottom, #458396, #84a6af);
    padding-bottom: 120px;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);

    @media (max-width: 800px) {
        clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
    }
`;

const Container = styled.div`
    max-width: 1200px;
    padding: 80px 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 50px; 
`;

const EconomizarTitulo = styled.h2`
    color: rgb(211, 211, 211);
    font-size: 5rem;
    line-height: 1;
    text-transform: uppercase;
    text-align: center;

    @media (max-width: 1000px) {
        font-size: 2.9rem;
        max-width: initial !important;
    }

    @media (max-width: 400px) {
        font-size: 2.1rem;
        max-width: initial !important;
    }
`;

const GridEconomizar = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
        gap: 10px;
    }
`;

const EconomizarItem = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    padding: 20px;
    gap: 15px 30px;
    border-radius: 4px;
    position: relative;
    background-color: #f5f5f5;
    align-items: center;

    &:before {
        content: '';
        display: block;
        width: 4px;
        height: 20px;
        background: linear-gradient(#84a6af, #458396);
        position: absolute;
        top: 20px;
        left: -4px;
    }
`;

const EconomizarItemTitulo = styled.h3`
    font-size: 1.6rem;
    line-height: 1.1;
    font-weight: bold;
    text-align: center;
`;

const EconomizarItemTexto = styled.p`
    font-size: 1.2rem;
    color: #525252;
    line-height: 1.4;
    text-align: center;
`;

export function Economizar() {
  return (
    <ContainerEconomizar>
      <Container>
        <EconomizarTitulo>Como economizar com o Pesquisa Ativa?</EconomizarTitulo>
        <GridEconomizar role="list">
          <EconomizarItem role="listitem">
            <EconomizarItemTitulo>Reduza gastos com produtos sem potencial</EconomizarItemTitulo>
            <EconomizarItemTexto>
              Evite investir em produtos ou serviços que não terão aceitação no mercado, garantindo que seu dinheiro seja bem aplicado.
            </EconomizarItemTexto>
          </EconomizarItem>
          <EconomizarItem role="listitem">
            <EconomizarItemTitulo>Invista apenas no que realmente funciona</EconomizarItemTitulo>
            <EconomizarItemTexto>
              Utilize pesquisas estratégicas para focar em ações que trazem resultados, cortando gastos desnecessários em campanhas ineficazes.
            </EconomizarItemTexto>
          </EconomizarItem>
          <EconomizarItem role="listitem">
            <EconomizarItemTitulo>Evite erros caros em sua estratégia</EconomizarItemTitulo>
            <EconomizarItemTexto>
              Tome decisões embasadas em dados concretos para minimizar riscos e evitar prejuízos com escolhas equivocadas.
            </EconomizarItemTexto>
          </EconomizarItem>
          <EconomizarItem role="listitem">
            <EconomizarItemTitulo>Aumente a eficiência dos seus investimentos</EconomizarItemTitulo>
            <EconomizarItemTexto>
              Otimize seus recursos, direcionando-os para áreas que realmente impulsionam o crescimento do seu negócio.
            </EconomizarItemTexto>
          </EconomizarItem>
        </GridEconomizar>
      </Container>
    </ContainerEconomizar>
  );
}