import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";

const HeaderContainer = styled.header`
  background-color: #84a6af;
  padding: 15px 20px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
  align-items: center;
  position: relative;
`;

const Menu = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const MenuItem = styled.button`
  font-size: 1.2rem;
  padding: 10px 20px;
  text-decoration: none;
  color: #fff;
  background-color: #6ecbd4;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

const LogoImg = styled.img`
  height: 80px;
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  display: none;

  @media (max-width: 700px) {
    display: block;
  }
`;

const DropdownMenu = styled.ul`
  display: ${({ open }) => (open ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 20px;
  background: #458396;
  border-radius: 5px;
  padding: 10px;
  list-style: none;
  min-width: 150px;
  z-index: 1000;

  & li {
    padding: 10px;
  }

  & button {
    text-decoration: none;
    color: white;
    font-size: 1rem;
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    text-align: left;

    &:hover {
      background: #356b7c;
    }
  }
`;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu();
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

        <MobileMenuButton onClick={toggleMenu} aria-label="Abrir menu">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
        <DropdownMenu open={menuOpen}>
          <li><button onClick={() => scrollToSection("sobre")}>Sobre</button></li>
          <li><button onClick={() => scrollToSection("beneficios")}>Benefícios</button></li>
          <li><button onClick={() => scrollToSection("solucoes")}>Soluções</button></li>
          <li><button onClick={() => scrollToSection("contato")}>Contato</button></li>
        </DropdownMenu>
      </Container>
    </HeaderContainer>
  );
}
