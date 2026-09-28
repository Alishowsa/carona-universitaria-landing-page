import { useRef } from "react";
import "./App.css";

const pesquisaUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdVrCn4sX8uMV6TSP5HJ1MeqRAtFMN6-PAx-8y8ctRXDMV3oQ/viewform";
const beneficios = [
  { icon: "wallet", title: "Mais economia", text: "Compartilhe os gastos de combustível e alivie o orçamento da rotina universitária." },
  { icon: "route", title: "Mais praticidade", text: "Encontre colegas com caminhos parecidos e combine a ida à faculdade e a volta para casa." },
  { icon: "leaf", title: "Menos impacto", text: "Mais gente no mesmo carro significa menos veículos nas ruas e menos emissões." },
  { icon: "clock", title: "Tempo para você", text: "Com rotas combinadas, sobra mais tempo para estudar e aproveitar a vida no campus." },
];
const passos = [
  { title: "Conte seu caminho", text: "Informe sua rota e os horários de ida e volta para encontrar estudantes que vão na mesma direção." },
  { title: "Encontre sua carona", text: "Conecte-se com colegas que querem oferecer ou compartilhar uma viagem." },
  { title: "Combinem e sigam juntos", text: "Alinhem o ponto de encontro e a divisão dos custos antes de sair." },
];

function Icon({ name }) {
  const paths = {
    wallet: <><path d="M20 8H5a2 2 0 0 1 0-4h13v4M5 8H3v12h17V8M16 12h5v4h-5z" /></>,
    route: <><circle cx="6" cy="5" r="2" /><circle cx="18" cy="19" r="2" /><path d="M6 7v7a4 4 0 0 0 4 4h6M10 5h5a4 4 0 0 1 0 8h-2" /></>,
    leaf: <><path d="M20 3C8 2 3 7 5 14c2 7 15 6 15-11ZM4 21l11-12" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    arrow: <><path d="M4 12h16m-6-6 6 6-6 6" /></>,
  };
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

function PesquisaLink({ compact = false }) {
  return <a className={`button button-primary${compact ? " button-compact" : ""}`} href={pesquisaUrl} target="_blank" rel="noopener noreferrer">Participar da pesquisa<Icon name="arrow" /><span className="sr-only"> (abre em nova aba)</span></a>;
}

export default function LandingPageCaronaUniversitaria() {
  const topoRef = useRef(null);

  return (
    <div ref={topoRef} id="inicio">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Carona Universitária — início"><img src="/logo-carona.webp" alt="Carona Universitária" width="1254" height="1254" /></a>
          <nav aria-label="Navegação principal"><a href="#como-funciona">Como funciona</a><a href="#beneficios">Benefícios</a><a href="#participar">O projeto</a></nav>
          <PesquisaLink compact />
        </div>
      </header>

      <main id="conteudo">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div>
              <span className="eyebrow hero-eyebrow">DE ESTUDANTE PARA ESTUDANTE</span>
              <h1 id="hero-title">O mesmo destino.<br />Um caminho <span>melhor, juntos.</span></h1>
              <p className="hero-description">Entre o custo do transporte e a espera depois da aula, ir e voltar da faculdade pode ser cansativo. Estamos criando uma plataforma para compartilhar caronas entre estudantes, de casa ao campus e do campus para casa, com mais praticidade e economia.</p>
              <div className="hero-actions"><PesquisaLink /><a className="button button-secondary" href="#beneficios">Ver benefícios</a></div>
              <p className="hero-note"><span aria-hidden="true">✓</span> Projeto universitário em desenvolvimento</p>
            </div>
            <div className="brand-panel">
              <div className="panel-caption"><span>CONEXÕES QUE MOVEM</span><span aria-hidden="true">↗</span></div>
              <img className="hero-logo" src="/logo-carona.webp" alt="Carona Universitária — Juntos no mesmo caminho" width="1254" height="1254" fetchPriority="high" />
              <div className="panel-bottom"><span>Na ida e na volta das aulas.</span><strong>Com mais companhia.</strong></div>
            </div>
          </div>
        </section>

        <section className="purpose-strip" aria-label="Nossa proposta"><div className="container purpose-inner"><p>O trajeto é seu.<br /><strong>A jornada pode ser nossa.</strong></p><p>Para quem oferece, uma ajuda nos custos.<br />Para quem pega, uma alternativa para ir e voltar.</p><a href="#como-funciona">Conheça a proposta <Icon name="arrow" /></a></div></section>

        <section id="como-funciona" className="section how-section" aria-labelledby="como-title">
          <div className="container how-grid">
            <div><span className="eyebrow">MENOS COMPLICAÇÃO. MAIS CONEXÃO.</span><h2 id="como-title">Seu próximo trajeto<br />começa com uma conexão.</h2><p className="section-description">É assim que queremos facilitar sua rotina. A plataforma está em desenvolvimento, e sua opinião ajuda a definir os próximos passos.</p><a className="text-link" href="#participar">Faça parte dessa construção <Icon name="arrow" /></a></div>
            <ol className="steps">{passos.map(({ title, text }, index) => <li key={title}><span className="step-number">0{index + 1}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
          </div>
        </section>

        <section id="beneficios" className="section" aria-labelledby="beneficios-title">
          <div className="container">
            <div className="section-heading"><div><span className="eyebrow">BOM PARA VOCÊ. BOM PARA TODOS.</span><h2 id="beneficios-title">Uma carona faz diferença.</h2></div><p>Pequenas mudanças no trajeto.<br />Mais possibilidades no seu dia.</p></div>
            <div className="benefit-grid">{beneficios.map(({ icon, title, text }) => <article className="benefit-card" key={title}><span className="icon-box"><Icon name={icon} /></span><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section id="ida-e-volta" className="section return-section" aria-labelledby="return-title">
          <div className="container return-grid">
            <div>
              <span className="eyebrow">A AULA ACABA. O CAMINHO CONTINUA.</span>
              <h2 id="return-title">Chegar à faculdade é importante. <span>Voltar para casa com tranquilidade também.</span></h2>
              <p className="section-description">Depois de uma aula que termina tarde, ainda pode ter ônibus para esperar, uma corrida que pesa no bolso e um longo caminho até descansar.</p>
              <p className="section-description">O Carona Universitária está sendo pensado para os dois sentidos: conectar colegas com rotas e horários parecidos, inclusive na saída das aulas noturnas. Uma alternativa para dividir custos e combinar o trajeto em comunidade.</p>
            </div>
            <div className="return-routes" aria-label="Caronas nos dois sentidos">
              <article className="route-card">
                <span className="eyebrow">NA IDA</span>
                <h3>Casa <span aria-hidden="true">→</span><span className="sr-only">para</span> Faculdade</h3>
                <p>Combine o caminho com quem também tem aula.</p>
              </article>
              <article className="route-card">
                <span className="eyebrow">NA VOLTA, INCLUSIVE À NOITE</span>
                <h3>Faculdade <span aria-hidden="true">→</span><span className="sr-only">para</span> Casa</h3>
                <p>Encontre colegas que saem em horários parecidos com o seu.</p>
              </article>
              <p className="route-note">Rotas, horários e ponto de encontro combinados entre estudantes.</p>
            </div>
          </div>
        </section>

        <section id="participar" className="section" aria-labelledby="cta-title"><div className="container"><div className="cta-panel"><div><span className="eyebrow">O PRIMEIRO PASSO É COM VOCÊ</span><h2 id="cta-title">Ajude a colocar essa<br />ideia no caminho.</h2><p>Na ida, na volta ou nos dois trajetos: sua experiência importa. Participe da pesquisa e ajude a construir uma alternativa que faça sentido para sua rotina.</p></div><div className="cta-action"><PesquisaLink /><span>Sua experiência faz a diferença.</span></div></div></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><div><strong>Carona Universitária</strong><p>Juntos no mesmo caminho.</p></div><span>Projeto universitário · Pesquisa de interesse</span><button className="back-top" onClick={() => topoRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" })}>Voltar para o início <span aria-hidden="true">↑</span></button></div></footer>
    </div>
  );
}
