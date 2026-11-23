import React, { useEffect } from 'react';
import { Activity, ArrowDown, ArrowUpRight, Braces, ChevronDown, GitBranch, Layers3 } from 'lucide-react';
import portrait from '../../assets/images/arthur.reis-profile.jpeg';
import { deliveries, earlierExperience, experiences, skills } from './content';
import './portfolio.css';

const linkedin = 'https://www.linkedin.com/in/arthur-reis/';
const github = 'https://github.com/arthreis';
const deliveryIcons = [Layers3, GitBranch, Activity];

function SectionTitle({ id, index, label, title, intro }) {
  return (
    <header className="section-title">
      <p className="eyebrow section-index">{index} / {label}</p>
      <h2 id={id}>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  );
}

function Tags({ items }) {
  return <ul className="tags">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}

export default function Portfolio() {
  useEffect(() => {
    if (window.location.hash === '#/detailed') {
      window.history.replaceState(null, '', '#trajetoria');
    }
    const section = document.getElementById(window.location.hash.slice(1));
    section?.scrollIntoView();
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header" id="inicio">
        <div className="frame header-layout">
          <a className="brand" href="#inicio" aria-label="Arthur Rocha Reis, início">
            <span className="brand-mark" aria-hidden="true">AR</span>
            <span className="brand-name">Arthur Rocha Reis</span>
          </a>
          <nav className="navigation" aria-label="Navegação principal">
            <a href="#entregas">Entregas</a>
            <a href="#trajetoria">Trajetória</a>
            <a href="#competencias">Competências</a>
          </nav>
          <a className="header-contact" href={linkedin}>LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <div className="frame hero-content">
            <p className="eyebrow hero-label">Engenharia de software <span aria-hidden="true">/</span> Liderança técnica</p>
            <h1 id="hero-title">Arthur <br />Rocha Reis</h1>
            <p className="hero-subtitle">Desenvolvimento full stack, integrações e operação de software.</p>
            <p className="hero-context">Responsável pela equipe de TI na Make Consultores, com atuação em tecnologia para comércio exterior.</p>
            <div className="hero-actions">
              <a className="action primary" href="#entregas">Ver entregas <ArrowDown size={17} aria-hidden="true" /></a>
              <a className="action secondary" href={github}><Braces size={17} aria-hidden="true" /> GitHub <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="section frame" id="entregas" aria-labelledby="entregas-titulo">
          <SectionTitle id="entregas-titulo" index="01" label="Entregas" title="Engenharia na prática"
            intro="Trabalho que conecta desenvolvimento, entrega e operação na Make Consultores." />
          <div className="deliveries">
            {deliveries.map((item, index) => {
              const Icon = deliveryIcons[index];
              return (
                <article className="delivery" key={item.title}>
                  <div className="delivery-marker"><Icon size={23} strokeWidth={1.6} aria-hidden="true" /><span aria-hidden="true">0{index + 1}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <Tags items={item.tags} />
                </article>
              );
            })}
          </div>
        </section>

        <section className="section trajectory" id="trajetoria" aria-labelledby="trajetoria-titulo">
          <div className="frame trajectory-layout">
            <SectionTitle id="trajetoria-titulo" index="02" label="Experiência" title="Trajetória"
              intro="Full stack em comércio exterior, varejo, serviços financeiros, energia e telecomunicações." />
            <div className="experience-list">
              {experiences.map((item, index) => (
                <article className="experience" key={item.company}>
                  <div className="experience-meta">
                    <p className="eyebrow period">{item.period}</p>
                    {index === 0 && <span className="current-role"><span aria-hidden="true" /> Cargo atual</span>}
                  </div>
                  <div className="experience-description">
                    <h3>{item.company}</h3>
                    <p className="role">Desenvolvedor Full Stack · {item.sector}</p>
                    <p>{item.description}</p>
                    <Tags items={item.tags} />
                  </div>
                </article>
              ))}
              <details className="earlier">
                <summary>Experiências anteriores <ChevronDown size={19} aria-hidden="true" /></summary>
                <ul>
                  {earlierExperience.map(item => <li key={item.company}>
                    <span className="eyebrow period">{item.period}</span>
                    <span><strong>{item.company}</strong><br />{item.role}</span>
                  </li>)}
                </ul>
              </details>
            </div>
          </div>
        </section>

        <section className="section frame" id="competencias" aria-labelledby="competencias-titulo">
          <SectionTitle id="competencias-titulo" index="03" label="Competências" title="Competências técnicas"
            intro="Ferramentas e práticas aplicadas em projetos de software." />
          <dl className="skill-list">
            {skills.map(item => <div key={item.label}>
              <dt>{item.label}</dt>
              <dd><Tags items={item.items} /></dd>
            </div>)}
          </dl>
          <div className="education">
            <p className="eyebrow section-index">Formação acadêmica</p>
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <p>Centro Universitário UniCarioca</p>
          </div>
        </section>
      </main>

      <footer className="contact" id="contato">
        <div className="frame contact-layout">
          <img className="portrait" src={portrait} width="112" height="112" loading="lazy" alt="Arthur Rocha Reis" />
          <div>
            <p className="eyebrow">Contato</p>
            <h2>Arthur Rocha Reis</h2>
            <p>Rio de Janeiro, Brasil</p>
          </div>
          <div className="contact-links">
            <a href={linkedin}>LinkedIn <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a href={github}>GitHub <ArrowUpRight size={18} aria-hidden="true" /></a>
          </div>
        </div>
      </footer>
    </>
  );
}
