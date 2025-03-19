import React from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

const ContainerSolucao = styled.div`
    background: linear-gradient(to top, #84a6af, #458396);
    color: white;
`;

const Container = styled.div`
    padding: 80px 20px;
    display: grid;
    grid-template-columns: 1fr;
`;

const GridSolucao = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 50px;
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;

const SolucaoItem = styled.div`
    display: grid;
    grid-template-columns: 10fr 9fr;
    gap: 10px;
    align-items: center;

    @media (max-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 400px) {
        grid-template-columns: 1fr;
        text-align: center;
    }
`;

const SolucaoItemTexto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media(max-width: 400px) {
        align-items: center;
    }
`;

const SolucaoItemTitulo = styled.h3`
    font-size: 1.6rem;
    line-height: 1.1;
    font-weight: bold;
    color: #000;
`;

const SolucaoItemDescricao = styled.p`
    font-size: 1.2rem;
    line-height: 1.3;
    font-weight: normal;
    color: rgb(211, 211, 211);
`;

const SolucaoItemBtn = styled.button`
    background-color: #6ecbd4;
    color: white;
    font-size: 1rem;
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

    @media (max-width: 400px) {
        align-self: center;
    }
`;

const SolucaoImg = styled.img`
    max-width: 100%;
    display: block;

    @media (max-width: 400px) {
        display: none;
    }
`;

export function Solucoes() {
  const handleClick = (titulo) => {
    Swal.fire({
      title: `Nenhum Consultor disponível no momento para ${titulo}`,
      text: "Tente novamente mais tarde ou agende um atendimento!",
      icon: "info",
      confirmButtonText: "Ok",
      confirmButtonColor: "#458396",
    });
  };

  return (
    <ContainerSolucao>
      <Container>
        <GridSolucao>
          <SolucaoItem>
            <SolucaoImg
              src="/images/img_solucao1.svg"
              alt="Ilustração representando uma pesquisa de aceitação de mercado"
            />
            <SolucaoItemTexto>
              <SolucaoItemTitulo>Pesquisa de Aceitação</SolucaoItemTitulo>
              <SolucaoItemDescricao>
                Entenda como seu produto ou serviço é recebido pelo mercado e ajuste
                estratégias antes do lançamento.
              </SolucaoItemDescricao>
              <SolucaoItemBtn onClick={() => handleClick("Pesquisa de Aceitação")}>
                Falar com Consultor
              </SolucaoItemBtn>
            </SolucaoItemTexto>
          </SolucaoItem>

          <SolucaoItem>
            <SolucaoImg
              src="/images/img_solucao2.svg"
              alt="Ilustração representando análise de público-alvo"
            />
            <SolucaoItemTexto>
              <SolucaoItemTitulo>Pesquisa de Público-Alvo</SolucaoItemTitulo>
              <SolucaoItemDescricao>
                Identifique o perfil ideal de clientes para alinhar campanhas e ações com o mercado.
              </SolucaoItemDescricao>
              <SolucaoItemBtn onClick={() => handleClick("Pesquisa de Público-Alvo")}>
                Falar com Consultor
              </SolucaoItemBtn>
            </SolucaoItemTexto>
          </SolucaoItem>

          <SolucaoItem>
            <SolucaoImg
              src="/images/img_solucao3.svg"
              alt="Ilustração representando análise de campanhas de marketing"
            />
            <SolucaoItemTexto>
              <SolucaoItemTitulo>Pesquisa de Marketing</SolucaoItemTitulo>
              <SolucaoItemDescricao>
                Avalie a efetividade das campanhas e otimize investimentos para maximizar oportunidades.
              </SolucaoItemDescricao>
              <SolucaoItemBtn onClick={() => handleClick("Pesquisa de Marketing")}>
                Falar com Consultor
              </SolucaoItemBtn>
            </SolucaoItemTexto>
          </SolucaoItem>
        </GridSolucao>
      </Container>
    </ContainerSolucao>
  );
}
