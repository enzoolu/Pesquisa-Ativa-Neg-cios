import React, { useState, useCallback } from "react";
import styled from "styled-components";

const ContainerFormulario = styled.section`
	max-width: 800px;
	margin: 40px auto;
	padding: 20px;
	background-color: #f5f5f5;
	border-radius: 8px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const TituloFormulario = styled.h2`
	text-align: center;
	color: #333;
`;

const CampoFormulario = styled.div`
	margin-bottom: 15px;
`;

const Rotulo = styled.label`
	font-size: 1.2rem;
	color: #444;
	display: block;
	margin-bottom: 8px;
`;

const Entrada = styled.input`
	width: 100%;
	padding: 12px;
	font-size: 1rem;
	border: 1px solid #ddd;
	border-radius: 4px;
	box-sizing: border-box;

	&:focus {
		border-color: #84a6af;
	}
`;

const Textarea = styled.textarea`
	width: 100%;
	padding: 12px;
	font-size: 1rem;
	border: 1px solid #ddd;
	border-radius: 4px;
	box-sizing: border-box;

	&:focus {
		border-color: #84a6af;
	}
`;

const Botao = styled.button`
	background-color: #6ecbd4;
	color: #fff;
	padding: 12px 20px;
	font-size: 1.2rem;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	width: 100%;
	margin-top: 20px;

	&:hover {
		background-color: #458396;
	}
`;

const Mensagem = styled.p`
	text-align: center;
	color: #555;
	font-size: 1rem;
	margin-top: 20px;
`;

export default function Formulario() {
	const [dadosFormulario, setDadosFormulario] = useState({
		nome: "",
		email: "",
		telefone: "",
		mensagem: "",
	});

	const handleMudanca = useCallback((e) => {
		const { name, value } = e.target;
		setDadosFormulario((prev) => ({
			...prev,
			[name]: value,
		}));
	}, []);

	const handleEnvio = (e) => {
		e.preventDefault();
		alert("Formulário enviado com sucesso!");
	};

	return (
		<ContainerFormulario>
			<TituloFormulario>Agende sua Consultoria Gratuita!</TituloFormulario>
			<form onSubmit={handleEnvio}>
				<CampoFormulario>
					<Rotulo htmlFor="nome">Nome</Rotulo>
					<Entrada
						type="text"
						id="nome"
						name="nome"
						value={dadosFormulario.nome}
						onChange={handleMudanca}
						required
						aria-required="true"
						aria-label="Nome completo"
					/>
				</CampoFormulario>

				<CampoFormulario>
					<Rotulo htmlFor="email">E-mail</Rotulo>
					<Entrada
						type="email"
						id="email"
						name="email"
						value={dadosFormulario.email}
						onChange={handleMudanca}
						required
						aria-required="true"
						aria-label="Endereço de e-mail"
					/>
				</CampoFormulario>

				<CampoFormulario>
					<Rotulo htmlFor="telefone">Telefone</Rotulo>
					<Entrada
						type="tel"
						id="telefone"
						name="telefone"
						value={dadosFormulario.telefone}
						onChange={handleMudanca}
						required
						aria-required="true"
						aria-label="Número de telefone com DDD"
						aria-describedby="telefone-ajuda"
					/>
					<small id="telefone-ajuda">Informe um telefone válido com DDD.</small>
				</CampoFormulario>

				<CampoFormulario>
					<Rotulo htmlFor="mensagem">Mensagem</Rotulo>
					<Textarea
						id="mensagem"
						name="mensagem"
						rows="4"
						value={dadosFormulario.mensagem}
						onChange={handleMudanca}
						required
						aria-required="true"
						aria-label="Mensagem para a consultoria"
					/>
				</CampoFormulario>

				<Botao type="submit">Enviar</Botao>
			</form>

			<Mensagem>
				Estamos aqui para ajudar! Preencha o formulário e agende sua consultoria
				grátis.
			</Mensagem>
		</ContainerFormulario>
	);
}
