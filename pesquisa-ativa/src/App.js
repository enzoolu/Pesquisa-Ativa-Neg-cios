import React from "react";
import { Header } from "./components/header.js";
import { HeroSection } from "./components/heroSection.js";
import { PublicoAlvo } from "./components/publicoAlvo.js";
import { FaturarMais } from "./components/faturarMais.js";
import { Economizar } from "./components/economizar.js";
import { BeneficiosPesquisaAtiva } from "./components/conhecaMelhor.js";
import { Solucoes } from "./components/solucoes.js";
import Formulario from "./components/forms";
import { Footer } from "./components/footer.js";

import "./global.css";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <HeroSection />
        <section id="sobre">
          <PublicoAlvo />
        </section>
        <section id="beneficios">
          <FaturarMais />
          <Economizar />
          <BeneficiosPesquisaAtiva />
        </section>
        <section id="solucoes">
          <Solucoes />
        </section>
        <section id="contato">
          <Formulario />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
