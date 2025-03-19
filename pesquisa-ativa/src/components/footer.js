import React from "react";
import styled from "styled-components";

const ContainerFooter = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  margin-top: 50px;
  background-color: #2c3e50;
  color: white;
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0;
  text-decoration: none;
`;

const LogoIcon = styled.img`
  margin-right: 10px;
  width: 60px;
  height: 60px;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
`;

const LinkItem = styled.a`
  color: #6ecbd4;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Copyright = styled.p`
  font-size: 1rem;
  color: #bdc3c7;
  margin-bottom: 0;
`;

export function Footer() {
  return (
    <ContainerFooter>
      <Copyright>
        © 2025 Company, Inc
      </Copyright>

      <LogoContainer href="/" aria-label="Página inicial">
        <LogoIcon src="/images/logo.png" alt="Logo da Company, Inc" />
      </LogoContainer>

      <LinksContainer role="navigation" aria-label="Links institucionais">
        <LinkItem href="politica-de-privacidade.html">
          Política de Privacidade
        </LinkItem>
        <LinkItem href="termos-de-uso.html">
          Termos de Uso
        </LinkItem>
      </LinksContainer>
    </ContainerFooter>
  );
}
