import React from "react";
import styled from "styled-components";

const ContainerFaturarMais = styled.div`
	background: linear-gradient(to top, #458396, #84a6af);
	padding-top: 30px;
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

const FaturarMaisTitulo = styled.h2`
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

const GridFaturarMais = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 30px;

	@media (max-width: 500px) {
		grid-template-columns: 1fr;
		gap: 10px;
	}
`;

const FaturarMaisItem = styled.div`
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

const FaturarMaisItemTitulo = styled.h3`
	font-size: 1.6rem;
	line-height: 1.1;
	font-weight: bold;
	text-align: center;
`;

const FaturarMaisItemTexto = styled.p`
	font-size: 1.2rem;
	color: #525252;
	line-height: 1.4;
	text-align: center;
`;

export function FaturarMais() {
	return (
		<ContainerFaturarMais>
			<Container>
			<FaturarMaisTitulo>
			Como faturar mais com o Pesquisa Ativa?
			</FaturarMaisTitulo>
			<GridFaturarMais role="list">
			<FaturarMaisItem role="listitem">
				<FaturarMaisItemTitulo>
					Conheça o que seu público realmente deseja
				</FaturarMaisItemTitulo>
				<FaturarMaisItemTexto>
					Identifique as necessidades e preferências do seu público-alvo
					para criar produtos e serviços que realmente geram valor.
				</FaturarMaisItemTexto>
			</FaturarMaisItem>
			<FaturarMaisItem role="listitem">
				<FaturarMaisItemTitulo>
					Antecipe-se à concorrência
				</FaturarMaisItemTitulo>
				<FaturarMaisItemTexto>
					Utilize insights estratégicos para se posicionar melhor no mercado
					e sair na frente dos seus concorrentes.
				</FaturarMaisItemTexto>
			</FaturarMaisItem>
			<FaturarMaisItem role="listitem">
				<FaturarMaisItemTitulo>
					Otimize suas estratégias de marketing
				</FaturarMaisItemTitulo>
				<FaturarMaisItemTexto>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Eius sapiente deleniti eum praesentium, iure maiores nemo
					aliquam ea minus similique.
				</FaturarMaisItemTexto>
			</FaturarMaisItem>
			<FaturarMaisItem role="listitem">
				<FaturarMaisItemTitulo>
					Tome decisões baseadas em dados reais
				</FaturarMaisItemTitulo>
				<FaturarMaisItemTexto>
					Reduza incertezas e riscos ao contar com pesquisas precisas
					que orientam cada passo do seu planejamento empresarial.
				</FaturarMaisItemTexto>
			</FaturarMaisItem>
			</GridFaturarMais>
			</Container>
			</ContainerFaturarMais>

	);
}