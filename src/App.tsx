import React, { FormEvent, useEffect, useState } from 'react';
import {
  ArrowRight, Check, ChevronDown, Heart, Instagram, Mail, Menu, MessageCircle,
  ShieldCheck, Sparkles, Users, X, CalendarCheck, Clock3, MapPin, Phone
} from 'lucide-react';
import logo from './assets/brand/logo_right_transparent.png';
import logoLight from './assets/brand/logo_right_transparent_light.png';
import heroImage from './assets/images/hero_ceremony_luxury_1792020897779.jpg';
import receptionImage from './assets/images/reception_luxury_tablescape_1792020915647.jpg';
import brideImage from './assets/images/bride_delicate_portrait_1792020898036.jpg';
import coupleImage from './assets/images/couple_champagne_moment_1792020916188.jpg';
import detailsImage from './assets/images/wedding_details_flatlay_1792056736461.jpg';
import coastImage from './assets/images/coastal_sunset_wedding_1792056736971.jpg';
import teamImage from './assets/brand/post_instagram.png';

const CONTACT = {
  phone: '5522998841987',
  displayPhone: '+55 (22) 99884-1987',
  email: '4everceremonial@gmail.com',
  instagram: 'https://www.instagram.com/4ever__cerimonial?igsh=cDExOXJldGNkOXVm',
  instagramHandle: '4ever__cerimonial',
};

function whatsappUrl(message = 'Olá! Gostaria de conhecer os serviços da 4EVER Cerimonial.') {
  return `https://wa.me/${CONTACT.phone}?text=${encodeURIComponent(message)}`;
}

const packages = [
  {
    id: 'forever', name: 'Pacote Forever', eyebrow: 'Assessoria completa',
    intro: 'Para quem deseja acompanhamento próximo e uma equipe cuidando de cada etapa do planejamento ao grande dia.',
    items: [
      'Planejamento e alinhamentos com o casal',
      'Orientação e alinhamento de fornecedores',
      'Organização do cronograma do evento',
      'Coordenação da cerimônia e da recepção',
      'Acompanhamento atento aos noivos e convidados',
    ],
    image: receptionImage,
  },
  {
    id: 'love', name: 'Pacote Love', eyebrow: 'Cerimonial do evento',
    intro: 'Para casais que já organizaram boa parte dos preparativos e querem tranquilidade na condução do casamento.',
    items: [
      'Alinhamento prévio dos principais detalhes',
      'Organização do cortejo e das entradas',
      'Orientação de padrinhos e familiares',
      'Coordenação dos momentos da cerimônia',
      'Apoio à equipe e aos fornecedores no evento',
    ],
    image: coupleImage,
  },
];

const founders = [
  { name: 'Cleisson', role: 'Organização e acolhimento', text: 'Gosta de ajudar, conciliar e garantir que noivos, fornecedores e convidados tenham uma experiência tranquila.' },
  { name: 'Mayara', role: 'Estilo e cuidado', text: 'Traz criatividade, sensibilidade estética e atenção ao acolhimento do casal em cada etapa.' },
  { name: 'Alex', role: 'Música e condução', text: 'Apaixonado por música, contribui para a harmonia, o ritmo e a emoção dos momentos do evento.' },
  { name: 'Maísa', role: 'Planejamento e detalhes', text: 'Detalhista e organizada, ajuda a acompanhar informações e manter os preparativos em ordem.' },
];

const gallery = [
  { src: heroImage, alt: 'Ambiente de cerimônia com composição elegante', label: 'Cerimônia' },
  { src: receptionImage, alt: 'Mesa de recepção com arranjos florais e iluminação acolhedora', label: 'Recepção' },
  { src: brideImage, alt: 'Retrato delicado inspirado no making of de uma noiva', label: 'Making of' },
  { src: coupleImage, alt: 'Momento de celebração de um casal', label: 'Celebração' },
  { src: detailsImage, alt: 'Detalhes de papelaria e elementos de casamento', label: 'Detalhes' },
  { src: coastImage, alt: 'Cenário de casamento ao ar livre próximo ao litoral', label: 'Ao ar livre' },
];

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <div className="section-title reveal">
    <span className="eyebrow"><span className="eyebrow-line" />{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [form, setForm] = useState({ names: '', phone: '', date: '', location: '', package: 'Ainda não sei', message: '' });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll<HTMLElement>('.reveal');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
    } else {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
      elements.forEach((el) => observer.observe(el));
      return () => { observer.disconnect(); window.removeEventListener('scroll', onScroll); };
    }
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const phrase = 'tranquilidade para viver cada instante.';
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) { setTypedText(phrase); return; }
    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setTypedText(phrase.slice(0, index));
      if (index >= phrase.length) window.clearInterval(timer);
    }, 65);
    return () => window.clearInterval(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const scrollTo = (id: string) => {
    closeMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      'Olá! Gostaria de conversar com a 4EVER Cerimonial sobre meu evento.',
      `Nome do casal: ${form.names}`,
      `WhatsApp para retorno: ${form.phone}`,
      `Data prevista: ${form.date || 'Ainda não definida'}`,
      `Local: ${form.location || 'Ainda não definido'}`,
      `Interesse: ${form.package}`,
      `Mensagem: ${form.message || 'Gostaria de receber mais informações.'}`,
    ].join('\n');
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
  };

  return <div className="site-shell">
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#inicio" className="brand" aria-label="4EVER Cerimonial — início" onClick={closeMenu}>
          <img src={logo} alt="4EVER Cerimonial" />
          <span>Assessoria & Cerimonial</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#cerimonial">O cerimonial</a>
          <a href="#servicos">Serviços</a>
          <a href="#galeria">Inspirações</a>
          <a href="#sobre">Sobre nós</a>
        </nav>
        <a className="button button-dark header-cta" href={whatsappUrl('Olá! Gostaria de solicitar um orçamento com a 4EVER Cerimonial.')} target="_blank" rel="noreferrer">
          <MessageCircle size={16} /> Solicitar orçamento
        </a>
        <button className="mobile-menu-button" type="button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Navegação móvel">
        {[['Início', 'inicio'], ['O cerimonial', 'cerimonial'], ['Serviços', 'servicos'], ['Inspirações', 'galeria'], ['Sobre nós', 'sobre'], ['Contato', 'contato']].map(([label, id]) =>
          <button key={id} type="button" onClick={() => scrollTo(id)}>{label}<ArrowRight size={16} /></button>)}
        <a className="button button-dark" href={whatsappUrl()} target="_blank" rel="noreferrer" onClick={closeMenu}><MessageCircle size={16} /> Falar no WhatsApp</a>
      </nav>}
    </header>

    <main>
      <section id="inicio" className="hero-section">
        <img className="hero-photo" src={heroImage} alt="Cenário elegante de casamento" fetchPriority="high" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="hero-kicker"><Sparkles size={15} /> 4EVER ASSESSORIA & CERIMONIAL</span>
          <h1>O seu amor é a história.<br /><em>Nós cuidamos</em> dos detalhes.</h1>
          <p>Planejamento, acolhimento e organização para que vocês vivam o grande dia com presença e leveza.</p>
          <div className="hero-actions">
            <a className="button button-light" href={whatsappUrl('Olá! Quero começar a planejar meu casamento com a 4EVER Cerimonial.')} target="_blank" rel="noreferrer">Vamos conversar <ArrowRight size={17} /></a>
            <button className="button button-outline-light" onClick={() => scrollTo('servicos')} type="button">Conheça os serviços <ChevronDown size={17} /></button>
          </div>
          <div className="hero-note"><span className="note-dot" /> Macaé, Região dos Lagos e Norte Fluminense · RJ</div>
        </div>
        <div className="hero-side-label">Celebrações com intenção</div>
      </section>

      <section id="cerimonial" className="intro-section section-pad">
        <div className="intro-grid">
          <div className="intro-copy reveal">
            <span className="eyebrow"><span className="eyebrow-line" />Mais do que organizar</span>
            <h2>O cerimonial permite que vocês <em>estejam presentes</em> no próprio casamento.</h2>
            <p className="typewriter-line"><span>{typedText}</span><span className="typewriter-caret" aria-hidden="true">|</span></p>
          </div>
          <div className="intro-detail reveal">
            <p>O cerimonial é a equipe que conecta planejamento, fornecedores, cronograma e pessoas para que cada momento aconteça com cuidado e coordenação.</p>
            <p>Escolher bem essa equipe faz diferença: vocês têm apoio para tomar decisões, alguém acompanhando os detalhes e mais liberdade para aproveitar o que realmente importa.</p>
            <a className="text-link" href="#servicos">Entenda como podemos ajudar <ArrowRight size={16} /></a>
          </div>
        </div>
        <div className="value-strip reveal">
          <div><CalendarCheck /><span><strong>Planejamento</strong><small>Etapas organizadas</small></span></div>
          <div><ShieldCheck /><span><strong>Tranquilidade</strong><small>Apoio nos imprevistos</small></span></div>
          <div><Heart /><span><strong>Acolhimento</strong><small>Cuidado com as pessoas</small></span></div>
        </div>
      </section>

      <section id="servicos" className="services-section section-pad">
        <SectionTitle eyebrow="Nossos serviços" title="Duas formas de cuidar do seu grande dia" description="Escolham o nível de acompanhamento que combina com o momento de vocês. Os detalhes são alinhados em conversa, de acordo com o evento." />
        <div className="package-grid">
          {packages.map((pkg, index) => <article className={`package-card reveal delay-${index + 1}`} key={pkg.id}>
            <div className="package-image-wrap"><img src={pkg.image} alt={pkg.name} loading="lazy" /><span className="package-number">0{index + 1}</span></div>
            <div className="package-body">
              <span className="package-eyebrow">{pkg.eyebrow}</span>
              <h3>{pkg.name}</h3>
              <p className="package-intro">{pkg.intro}</p>
              <ul>{pkg.items.map((item) => <li key={item}><Check size={16} />{item}</li>)}</ul>
              <a className="button button-wine package-cta" href={whatsappUrl(`Olá! Gostaria de saber mais sobre o ${pkg.name} da 4EVER Cerimonial.`)} target="_blank" rel="noreferrer">Conversar sobre este pacote <ArrowRight size={16} /></a>
            </div>
          </article>)}
        </div>
        <div className="custom-package reveal">
          <div className="custom-icon"><Sparkles size={22} /></div>
          <div><span className="package-eyebrow">Uma terceira possibilidade</span><h3>Assessoria personalizada</h3><p>Precisa de algo diferente? Conversamos sobre as prioridades e avaliamos uma proposta alinhada ao formato do evento.</p></div>
          <a className="text-link" href={whatsappUrl('Olá! Gostaria de conversar sobre uma assessoria personalizada para meu evento.')} target="_blank" rel="noreferrer">Montar uma proposta <ArrowRight size={16} /></a>
        </div>
      </section>

      <section className="difference-section section-pad">
        <div className="difference-image reveal"><img src={brideImage} alt="Detalhe delicado de inspiração para o dia do casamento" loading="lazy" /><div className="image-caption"><span>O grande dia</span><strong>Menos preocupações.<br />Mais presença.</strong></div></div>
        <div className="difference-copy reveal">
          <span className="eyebrow"><span className="eyebrow-line" />O que muda com uma equipe</span>
          <h2>Vocês não precisam coordenar tudo enquanto vivem uma das memórias mais importantes da vida.</h2>
          <p>Nosso papel é ajudar a transformar decisões em um plano claro, alinhar as pessoas envolvidas e acompanhar o andamento do evento com atenção.</p>
          <div className="difference-points">
            <div><span className="point-icon"><Clock3 /></span><p><strong>Um cronograma claro</strong><small>Para que cada etapa tenha seu momento.</small></p></div>
            <div><span className="point-icon"><Users /></span><p><strong>Uma equipe alinhada</strong><small>Orientação aos envolvidos e comunicação mais organizada.</small></p></div>
            <div><span className="point-icon"><Heart /></span><p><strong>Cuidado com o casal</strong><small>Mais espaço para aproveitar os encontros e as emoções.</small></p></div>
          </div>
          <a className="button button-dark" href={whatsappUrl('Olá! Quero entender qual serviço de cerimonial combina com meu casamento.')} target="_blank" rel="noreferrer">Encontrar o melhor serviço <ArrowRight size={16} /></a>
        </div>
      </section>

      <section id="galeria" className="gallery-section section-pad">
        <SectionTitle eyebrow="Referências visuais" title="A beleza mora nos detalhes" description="Uma seleção de imagens inspiracionais para explorar estilos, atmosferas e possibilidades para o grande dia." />
        <div className="gallery-grid">
          {gallery.map((item, index) => <figure className={`gallery-item gallery-item-${index + 1} reveal`} key={item.label}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            <figcaption><span>{item.label}</span><ArrowRight size={16} /></figcaption>
          </figure>)}
        </div>
        <p className="gallery-disclaimer">Imagens de inspiração visual. A composição final do evento é definida em conjunto com cada casal.</p>
      </section>

      <section id="contato" className="contact-section section-pad">
        <div className="contact-inner">
          <div className="contact-copy reveal">
            <span className="eyebrow eyebrow-light"><span className="eyebrow-line" />O primeiro passo</span>
            <h2>Vamos começar a planejar?</h2>
            <p>Contem um pouco sobre vocês e sobre o evento. Ao enviar, o site abrirá uma conversa no WhatsApp com as informações preenchidas.</p>
            <div className="contact-links">
              <a href={whatsappUrl()} target="_blank" rel="noreferrer"><MessageCircle size={18} /><span><small>WhatsApp</small>{CONTACT.displayPhone}</span><ArrowRight size={15} /></a>
              <a href={`mailto:${CONTACT.email}`}><Mail size={18} /><span><small>E-mail</small>{CONTACT.email}</span><ArrowRight size={15} /></a>
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer"><Instagram size={18} /><span><small>Instagram</small>{CONTACT.instagramHandle}</span><ArrowRight size={15} /></a>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={handleSubmit}>
            <div className="form-heading"><span>Vamos nos conhecer</span><p>Preencham os campos abaixo para iniciar o atendimento.</p></div>
            <label>Nome do casal *<input required value={form.names} onChange={(e) => setForm({ ...form, names: e.target.value })} placeholder="Como podemos chamar vocês?" /></label>
            <div className="form-row">
              <label>WhatsApp para retorno *<input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(22) 99999-9999" /></label>
              <label>Data do evento<input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></label>
            </div>
            <label>Local do evento<input value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} placeholder="Cidade ou espaço, se já definido" /></label>
            <label>Serviço de interesse<select value={form.package} onChange={(e) => setForm({ ...form, package: e.target.value })}><option>Ainda não sei</option><option>Pacote Forever</option><option>Pacote Love</option><option>Assessoria personalizada</option></select></label>
            <label>Contem um pouco sobre o sonho de vocês<textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Estilo do casamento, número de convidados, dúvidas..." /></label>
            <button className="button button-wine form-submit" type="submit">Enviar pelo WhatsApp <ArrowRight size={17} /></button>
            <p className="form-note"><ShieldCheck size={14} /> As informações serão incluídas na mensagem que vocês enviarão pelo WhatsApp.</p>
          </form>
        </div>
      </section>

      <section id="sobre" className="about-section section-pad">
        <SectionTitle eyebrow="Quem somos" title="Quatro pessoas, um propósito em comum" description="A 4EVER é construída por uma equipe que reúne organização, criatividade, música e atenção aos detalhes — com o cuidado de tratar cada celebração como única." />
        <div className="team-layout">
          <div className="team-photo reveal"><img src={teamImage} alt="Os quatro fundadores da 4EVER Cerimonial juntos" loading="lazy" /><div className="team-photo-note"><span>Equipe fundadora</span><strong>Alex · Mayara · Cleisson · Maísa</strong></div></div>
          <div className="team-members">
            {founders.map((person, index) => <article className={`founder-card reveal delay-${(index % 2) + 1}`} key={person.name}>
              <div className="founder-index">0{index + 1}</div><div><h3>{person.name}</h3><span>{person.role}</span><p>{person.text}</p></div>
            </article>)}
          </div>
        </div>
        <div className="about-cta reveal"><p>Quer conhecer melhor nosso trabalho e conversar sobre a data de vocês?</p><a className="button button-dark" href={whatsappUrl('Olá! Gostaria de conhecer melhor a equipe 4EVER e conversar sobre meu evento.')} target="_blank" rel="noreferrer">Fale com a 4EVER <ArrowRight size={16} /></a></div>
      </section>
    </main>

    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand"><img src={logoLight} alt="4EVER Cerimonial" /><p>Assessoria e cerimonial com organização, sensibilidade e cuidado para celebrar histórias de amor.</p><span><MapPin size={14} /> Macaé, Região dos Lagos e Norte Fluminense · RJ</span></div>
        <div className="footer-column"><h3>Navegação</h3><a href="#cerimonial">O cerimonial</a><a href="#servicos">Nossos serviços</a><a href="#galeria">Inspirações</a><a href="#sobre">Sobre nós</a></div>
        <div className="footer-column"><h3>Fale conosco</h3><a href={whatsappUrl()} target="_blank" rel="noreferrer"><Phone size={15} /> {CONTACT.displayPhone}</a><a href={`mailto:${CONTACT.email}`}><Mail size={15} /> {CONTACT.email}</a><a href={CONTACT.instagram} target="_blank" rel="noreferrer"><Instagram size={15} /> {CONTACT.instagramHandle}</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} 4EVER Cerimonial. Todos os direitos reservados.</span><span>Desenvolvido por <strong>VibeTech | CMD</strong></span><a href="#inicio">Voltar ao topo ↑</a></div>
    </footer>

    <a className="floating-whatsapp" href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Fale com a 4EVER pelo WhatsApp"><MessageCircle size={25} /></a>
  </div>;
}
