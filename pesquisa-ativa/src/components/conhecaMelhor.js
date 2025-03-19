import React, { useState } from "react";
import styled from "styled-components";

const BeneficiosContainer = styled.div`
  max-width: 1200px;
  padding: 80px 20px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 150px;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`;

const TituloBeneficios = styled.h2`
  color: rgb(211, 211, 211);
  font-size: 5rem;
  line-height: 1;
  text-transform: uppercase;

  @media (max-width: 1000px) {
    text-align: center;
    font-size: 2.9rem;
    max-width: initial !important;
  }

  @media (max-width: 400px) {
    font-size: 2.3rem;
    max-width: initial !important;
  }
`;

const ListaBeneficios = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const BeneficioItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px 20px;
  padding: 20px;
  border-radius: 4px;
  background-color: #f5f5f5;
  align-items: center;
  position: relative;
  text-align: start;
  cursor: pointer;

  &:before {
    content: "";
    display: block;
    width: 4px;
    height: 100%;
    background: linear-gradient(#84a6af, #458396);
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const BeneficioTexto = styled.div`
  display: flex;
  flex-direction: column;
`;

const BeneficioTitulo = styled.h3`
  font-size: 1.6rem;
  color: #272727;
`;

const BeneficioDescricao = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-height: ${(props) => (props.expandido ? "100px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

export function BeneficiosPesquisaAtiva() {
  const [expandido, setExpandido] = useState(Array(5).fill(false));

  const toggleExpandir = (index) => {
    setExpandido((prev) => {
      const novoEstado = [...prev];
      novoEstado[index] = !novoEstado[index];
      return novoEstado;
    });
  };

  const beneficios = [
    { titulo: "Exploração de Mercado", descricao: "Identifique oportunidades estratégicas e tendências do mercado." },
    { titulo: "Decisões Baseadas em Dados", descricao: "Utilize informações concretas para reduzir riscos e aumentar assertividade." },
    { titulo: "Segmentação Precisa", descricao: "Entenda melhor seu público-alvo e personalize suas estratégias." },
    { titulo: "Monitoramento de Concorrência", descricao: "Acompanhe e analise as ações do mercado para manter-se à frente." },
    { titulo: "Maximização de Resultados", descricao: "Otimize estratégias e potencialize seus investimentos em marketing." },
  ];

  return (
    <BeneficiosContainer>
      <ListaBeneficios>
        {beneficios.map((beneficio, index) => (
          <BeneficioItem
            key={index}
            onClick={() => toggleExpandir(index)}
            role="button"
            tabIndex="0"
            aria-expanded={expandido[index]}
            aria-controls={`descricao-${index}`}
          >
            <BeneficioTexto>
              <BeneficioTitulo>{beneficio.titulo}</BeneficioTitulo>
              <BeneficioDescricao
                id={`descricao-${index}`}
                expandido={expandido[index]}
                aria-hidden={!expandido[index]}
              >
                {beneficio.descricao}
              </BeneficioDescricao>
            </BeneficioTexto>
          </BeneficioItem>
        ))}
      </ListaBeneficios>
      <TituloBeneficios>5 razões para você conhecer melhor o Pesquisa Ativa!</TituloBeneficios>
    </BeneficiosContainer>
  );
}
