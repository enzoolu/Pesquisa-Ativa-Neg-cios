import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #84a6af;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  padding: 40px 20px;
  margin: 0 auto;
  align-items: center;
  gap: 30px;
`;

const Menu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const MenuItem = styled.button`
  font-size: 1.2rem;
  line-height: 1.3;
  padding: 10px 20px;
  text-decoration: none;
  color: #fff;
  background-color:#6ecbd4;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  display: block;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const LogoImg = styled.img`
  height: 100px;
`;

export function Header() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeaderContainer>
      <Container>
        <LogoImg src="/images/logo.png" alt="Logo da empresa" />

        <Menu role="navigation" aria-label="Menu principal">
          <MenuItem onClick={() => scrollToSection("sobre")}>Sobre</MenuItem>
          <MenuItem onClick={() => scrollToSection("beneficios")}>Benefícios</MenuItem>
          <MenuItem onClick={() => scrollToSection("solucoes")}>Soluções</MenuItem>
          <MenuItem onClick={() => scrollToSection("contato")}>Contato</MenuItem>
        </Menu>
      </Container>
    </HeaderContainer>
  );
}
