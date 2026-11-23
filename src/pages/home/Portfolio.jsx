import React, { useEffect, useRef, useState } from 'react';
import { Activity, ArrowDown, ArrowUp, ArrowUpRight, ChevronDown, ChevronRight, Database, FileText, GitBranch, Layers3, Monitor, Network, Terminal } from 'lucide-react';
import '@fontsource-variable/dm-sans';
import portrait from '../../assets/images/arthur.reis-profile.jpeg';
import { deliveries, earlierExperience, experiences, skills } from './content';
import './portfolio.css';

const linkedin = 'https://www.linkedin.com/in/arthur-reis/';
const github = 'https://github.com/arthreis';
const deliveryIcons = [Layers3, GitBranch, Activity];
const skillIcons = [Monitor, Network, Database, Activity];
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

function DeliveryPipeline() {
  const controls = useRef(null);
  const [stage, setStage] = useState(0);
  const [cycle, setCycle] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => !document.hidden);
  const item = deliveries[stage];
  const running = !reducedMotion && inView && pageVisible;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 1, rootMargin: '-104px 0px 0px' });
    observer.observe(controls.current);
    const onVisibility = () => setPageVisible(!document.hidden);
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMotion = event => setReducedMotion(event.matches);
    document.addEventListener('visibilitychange', onVisibility);
    motion.addEventListener('change', onMotion);
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      motion.removeEventListener('change', onMotion);
    };
  }, []);

  function selectStage(index) {
    setStage(index);
    setCycle(value => value + 1);
  }

  return (
    <div className="delivery-pipeline" data-reveal data-running={running}>
      <div ref={controls} className="pipeline-stages" role="group" aria-label="Etapas do pipeline de engenharia">
        {deliveries.map(({ stage: name }, index) => {
          const Icon = deliveryIcons[index];
          return (
            <div className="pipeline-step" key={name}>
              <button type="button" aria-pressed={stage === index} aria-controls="pipeline-detail" onClick={() => selectStage(index)}>
                <Icon size={19} aria-hidden="true" />
                <span>{name}</span>
                {stage === index && !reducedMotion && (
                  <span className="pipeline-timer" aria-hidden="true">
                    <span key={cycle} onAnimationEnd={() => selectStage((stage + 1) % deliveries.length)} />
                  </span>
                )}
              </button>
              {index < deliveries.length - 1 && <ChevronRight className="pipeline-arrow" size={15} aria-hidden="true" />}
            </div>
          );
        })}
      </div>
      <div id="pipeline-detail" className="pipeline-detail" aria-live={running ? 'off' : 'polite'} aria-atomic="true">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <dl className="pipeline-notes">
          <div><dt>Problema</dt><dd>{item.problem}</dd></div>
          <div><dt>Decisão</dt><dd>{item.decision}</dd></div>
          <div><dt>O que foi entregue</dt><dd>{item.outcome}</dd></div>
        </dl>
        <Tags items={item.tags} />
      </div>
    </div>
  );
}

function SkillsMap() {
  const [activeLayer, selectLayer] = useState(0);
  const item = skills[activeLayer];

  return (
    <div className="skills-map" data-reveal>
      <div className="architecture-layers" role="group" aria-label="Camadas do mapa de competências">
        {skills.map(({ label }, index) => {
          const Icon = skillIcons[index];
          return (
            <div className={index === skills.length - 1 ? 'architecture-platform' : 'architecture-node'} key={label}>
              <button type="button" aria-pressed={activeLayer === index} aria-controls="architecture-detail" onClick={() => selectLayer(index)}>
                <Icon size={19} aria-hidden="true" />
                <span>{label}</span>
              </button>
              {index < skills.length - 2 && <ChevronRight className="architecture-arrow" size={17} aria-hidden="true" />}
            </div>
          );
        })}
      </div>
      <div id="architecture-detail" className="architecture-detail" aria-live="polite" aria-atomic="true">
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <Tags items={item.items} />
        </div>
        <div className="architecture-example">
          <h4>Na prática</h4>
          <p>{item.example}</p>
        </div>
      </div>
    </div>
  );
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
            <p className="eyebrow hero-label">Engenharia de software <span aria-hidden="true">·</span> Liderança técnica</p>
            <h1 id="hero-title">Arthur <em>Reis</em></h1>
            <p className="hero-subtitle">Desenvolvo aplicações e integrações para comércio exterior.</p>
            <p className="hero-context">Na Make Consultores, lidero a equipe de TI e atuo do desenvolvimento à operação em produção.</p>
            <div className="hero-actions">
              <a className="action primary" href="#entregas">Ver entregas <ArrowDown size={17} aria-hidden="true" /></a>
              <a className="action secondary" href="#trajetoria"><GitBranch size={17} aria-hidden="true" /> Ver trajetória</a>
            </div>
          </div>
        </section>

        <section className="section frame" id="entregas" aria-labelledby="entregas-titulo">
          <SectionTitle id="entregas-titulo" index="01" label="Entregas" title="Engenharia na prática"
            intro="Trabalho que conecta desenvolvimento, entrega e operação na Make Consultores." />
          <DeliveryPipeline />
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
            intro="Como minhas competências se conectam, da interface à operação." />
          <SkillsMap />
          <div className="education">
            <p className="eyebrow section-index">Formação acadêmica</p>
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <p>Centro Universitário UniCarioca</p>
          </div>
        </section>
      </main>

      <footer className="contact" id="contato">
        <div className="frame">
          <div className="contact-heading">
            <p className="eyebrow">Contato</p>
            <span className="contact-handle"><FileText size={15} aria-hidden="true" /><code>@arthreis</code></span>
          </div>
          <div className="contact-layout">
            <img className="portrait" src={portrait} width="112" height="112" loading="lazy" alt="Arthur Reis" />
            <div className="contact-identity">
              <h2>Arthur Reis</h2>
              <p>Desenvolvimento full stack, integrações e liderança técnica.</p>
              <p className="contact-location">Rio de Janeiro, Brasil</p>
            </div>
            <div className="contact-links">
              <a className="action primary" href={linkedin}>LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a className="action secondary" href={github}>GitHub <ArrowUpRight size={17} aria-hidden="true" /></a>
              <a className="back-top" href="#inicio" aria-label="Voltar ao topo" title="Voltar ao topo"><ArrowUp size={17} aria-hidden="true" /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
