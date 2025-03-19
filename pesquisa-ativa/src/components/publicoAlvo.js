import React from "react";
import styled from "styled-components";

const Container = styled.div`
    max-width: 1200px;
    padding: 80px 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 80px;

    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`;

const TituloAlvos = styled.h2`
    color: rgb(211, 211, 211);
    font-size: 5rem;
    line-height: 1;
    text-transform: uppercase;

    @media (max-width: 1000px) {
        font-size: 2.9rem;
        max-width: initial !important;
    }

    @media (max-width: 400px) {
        font-size: 2.3rem;
        max-width: initial !important;
    }
`;

const Alvo = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px 30px;
`;

const AlvoItem = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    padding: 20px;
    gap: 15px 30px;
    margin-bottom: 20px;
    border-radius: 4px;
    position: relative;
    background-color: #f5f5f5;
    align-items: center;
    justify-items: center;

    &:before {
        content: '';
        display: block;
        width: 4px;
        height: 100%;
        background: linear-gradient(#84a6af, #458396);
        position: absolute;
        left: -4px;
    }
`;

const AlvoItemTexto = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 30px;
`;

const AlvoItemTitulo = styled.h3`
    font-size: 1.6rem;
    line-height: 1.1;
    font-weight: bold;
`;

const AlvoItemDescricao = styled.p`
    font-size: 1.2rem;
    color: #525252;
    line-height: 1.4;
`;

const AlvoItemImg = styled.img`
    max-width: 100%;
    display: block;

    @media (max-width: 650px) {
        display: none;
    }
`;

export function PublicoAlvo() {
  return (
    <Container>
      <TituloAlvos>O Pesquisa Ativa é para você que...</TituloAlvos>
      <Alvo>
        <AlvoItem>
          <AlvoItemTexto>
            <AlvoItemTitulo>
              Tem dificuldade em tomar decisões estratégicas
            </AlvoItemTitulo>
            <AlvoItemDescricao>
              Obtenha insights confiáveis para minimizar riscos e garantir que suas escolhas
              impulsionem o crescimento do seu negócio.
            </AlvoItemDescricao>
          </AlvoItemTexto>
          <AlvoItemImg
            src="/images/img_alvo1.svg"
            alt="Pessoa analisando gráficos e tomando decisões estratégicas"
          />
        </AlvoItem>

        <AlvoItem>
          <AlvoItemTexto>
            <AlvoItemTitulo>
              Precisa entender melhor seu público-alvo
            </AlvoItemTitulo>
            <AlvoItemDescricao>
              Descubra as preferências e necessidades dos seus clientes para criar produtos
              e serviços mais assertivos.
            </AlvoItemDescricao>
          </AlvoItemTexto>
          <AlvoItemImg
            src="/images/img_alvo2.svg"
            alt="Equipe analisando dados do público-alvo"
          />
        </AlvoItem>

        <AlvoItem>
          <AlvoItemTexto>
            <AlvoItemTitulo>
              Quer investir com segurança e evitar desperdícios
            </AlvoItemTitulo>
            <AlvoItemDescricao>
              Evite gastos desnecessários analisando tendências e identificando oportunidades
              reais de mercado antes de tomar grandes decisões.
            </AlvoItemDescricao>
          </AlvoItemTexto>
          <AlvoItemImg
            src="/images/img_alvo3.svg"
            alt="Pessoa planejando investimentos estratégicos"
          />
        </AlvoItem>
      </Alvo>
    </Container>
  );
}
