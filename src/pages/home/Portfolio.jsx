import React, { useEffect, useRef, useState } from 'react';
import { Activity, ArrowDown, ArrowUp, ArrowUpRight, Braces, ChevronDown, GitBranch, Layers3, Terminal } from 'lucide-react';
import '@fontsource-variable/dm-sans';
import portrait from '../../assets/images/arthur.reis-profile.jpeg';
import { deliveries, earlierExperience, experiences, skills } from './content';
import './portfolio.css';

const linkedin = 'https://www.linkedin.com/in/arthur-reis/';
const github = 'https://github.com/arthreis';
const deliveryIcons = [Layers3, GitBranch, Activity];
const navigation = [
  ['entregas', 'Entregas'],
  ['trajetoria', 'Trajetória'],
  ['competencias', 'Competências'],
];

function SectionTitle({ id, index, label, title, intro }) {
  return (
    <header className="section-title" data-reveal>
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
  const header = useRef(null);
  const progress = useRef(null);
  const [active, setActive] = useState('');

  useEffect(() => {
    if (window.location.hash === '#/detailed') {
      window.history.replaceState(null, '', '#trajetoria');
    }
    const section = document.getElementById(window.location.hash.slice(1));
    section?.scrollIntoView();

    const sections = navigation.map(([id]) => document.getElementById(id));
    let frame = null;
    const update = () => {
      frame = null;
      const { scrollHeight, clientHeight } = document.documentElement;
      const position = window.scrollY;
      const distance = scrollHeight - clientHeight;
      progress.current.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, position / distance)) : 0})`;
      const marker = header.current.offsetHeight + 56;
      const current = sections.reduce((id, item) => item.getBoundingClientRect().top <= marker ? item.id : id, '');
      setActive(distance > 0 && position >= distance - 1 ? sections.at(-1).id : current);
    };
    const requestUpdate = () => { if (frame === null) frame = requestAnimationFrame(update); };
    const resize = new ResizeObserver(requestUpdate);
    resize.observe(document.body);
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    requestUpdate();

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set();
    const observer = new IntersectionObserver(entries => {
      for (const { isIntersecting, target } of entries) {
        if (!isIntersecting) continue;
        observer.unobserve(target);
        if (motion.matches || target.contains(document.activeElement)) continue;
        const animation = target.animate([
          { opacity: 0.35, transform: 'translateY(16px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ], { duration: 540, easing: 'cubic-bezier(.2,.75,.25,1)' });
        animations.add(animation);
        animation.onfinish = animation.oncancel = () => animations.delete(animation);
      }
    }, { threshold: 0.16 });
    for (const target of document.querySelectorAll('[data-reveal]')) {
      if (target.getBoundingClientRect().top >= window.innerHeight) observer.observe(target);
    }
    const cancelAnimations = () => { for (const animation of animations) animation.cancel(); };
    motion.addEventListener('change', cancelAnimations);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      motion.removeEventListener('change', cancelAnimations);
      resize.disconnect();
      observer.disconnect();
      cancelAnimations();
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <div id="inicio" aria-hidden="true" />
      <header ref={header} className="site-header">
        <div className="frame header-layout">
          <a className="brand" href="#inicio" aria-label="Arthur Reis, início">
            <span className="brand-mark" aria-hidden="true">AR</span>
            <span className="brand-name">Arthur Reis</span>
          </a>
          <nav className="navigation" aria-label="Navegação principal">
            {navigation.map(([id, label]) => (
              <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined}>{label}</a>
            ))}
          </nav>
          <a className="header-contact" href={linkedin}>LinkedIn <ArrowUpRight size={16} aria-hidden="true" /></a>
        </div>
        <div className="reading-progress" ref={progress} aria-hidden="true" />
      </header>

      <main id="conteudo" tabIndex={-1}>
        <section className="hero" aria-labelledby="hero-title">
          <div className="frame hero-content">
            <p className="eyebrow hero-label">Engenharia de software <span aria-hidden="true">/</span> Liderança técnica</p>
            <h1 id="hero-title">Arthur <em>Reis</em></h1>
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
                <article className="delivery" key={item.title} data-reveal>
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
            <div className="career-log">
              <div className="career-log-bar">
                <span><Terminal size={16} aria-hidden="true" /><code>git log --graph</code></span>
                <span>{experiences.length + earlierExperience.length} experiências</span>
              </div>
              <div className="career-log-body">
                <ol className="experience-list">
                  {experiences.map((item, index) => (
                    <li className={index === 0 ? 'commit commit-current' : 'commit'} key={item.company}>
                      <article className="experience" data-reveal>
                        <div className="experience-meta">
                          <p className="period">{item.period}</p>
                          {index === 0 && <span className="current-role"><code>HEAD</code> Cargo atual</span>}
                        </div>
                        <div className="experience-description">
                          <h3>{item.company}</h3>
                          <p className="role">Desenvolvedor Full Stack · {item.sector}</p>
                          <p>{item.description}</p>
                          <Tags items={item.tags} />
                        </div>
                      </article>
                    </li>
                  ))}
                </ol>
                <details className="earlier">
                  <summary><span><GitBranch size={17} aria-hidden="true" /> Experiências anteriores</span><ChevronDown size={18} aria-hidden="true" /></summary>
                  <ol className="experience-list">
                    {earlierExperience.map(item => (
                      <li className="commit commit-compact" key={item.company}>
                        <article className="experience">
                          <p className="period">{item.period}</p>
                          <div className="experience-description">
                            <h3>{item.company}</h3>
                            <p className="role">{item.role}</p>
                          </div>
                        </article>
                      </li>
                    ))}
                  </ol>
                </details>
              </div>
            </div>
          </div>
        </section>

        <section className="section frame" id="competencias" aria-labelledby="competencias-titulo">
          <SectionTitle id="competencias-titulo" index="03" label="Competências" title="Competências técnicas"
            intro="Ferramentas e práticas aplicadas em projetos de software." />
          <dl className="skill-list">
            {skills.map(item => <div key={item.label} data-reveal>
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
          <img className="portrait" src={portrait} width="112" height="112" loading="lazy" alt="Arthur Reis" />
          <div>
            <p className="eyebrow">Contato</p>
            <h2>Arthur Reis</h2>
            <p>Rio de Janeiro, Brasil</p>
          </div>
          <div className="contact-links">
            <a href={linkedin}>LinkedIn <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a href={github}>GitHub <ArrowUpRight size={18} aria-hidden="true" /></a>
            <a className="back-top" href="#inicio" aria-label="Voltar ao topo" title="Voltar ao topo"><ArrowUp size={17} aria-hidden="true" /></a>
          </div>
        </div>
      </footer>
    </>
  );
}
