'use strict';

/* ================================================================
   DANIELLA BASTOS PORTFOLIO — app.js
   ================================================================ */

/* ----------------------------------------------------------------
   1. CASE DATA
   ---------------------------------------------------------------- */

const DB_CASES = [
  {
    id: 'support',
    num: '01',
    color: 'lime',
    year: '2026',
    kind: 'UX Research',
    tag: 'UX Research',
    title: 'quando o suporte vira pesquisa.',
    highlight: 'pesquisa',
    tags: ['Affinity Diagram', 'Personas', 'Jobs to be Done'],
    coverMode: 'light',
    meta: {
      contexto: 'SaaS B2B · 8 anos de tickets',
      papel: 'Pesquisa, síntese, apresentação',
      periodo: '2026 · 6 semanas',
    },
    problema: {
      heading: 'o <em>problema</em> não era o produto.',
      highlightWord: 'problema',
      body: [
        'Cada ticket que abria era um sintoma. Atrás dele havia um padrão — e atrás do padrão, uma decisão de design tomada sem dados qualitativos.',
        'Esse case é sobre transformar 8 anos de escuta em um documento que produto e engenharia leem antes de iterar. Resultado: 3 padrões repetidos × 4 anos, mapeados em affinity diagram e apresentados em 18 slides.',
      ],
    },
    processo: {
      heading: 'do ticket ao <em>insight</em>.',
      highlightWord: 'insight',
      steps: [
        { num: '01', title: 'Coleta', body: '1.200 tickets exportados, anonimizados e categorizados por área de produto.' },
        { num: '02', title: 'Síntese', body: 'Affinity diagram em FigJam — 12 temas emergiram naturalmente.' },
        { num: '03', title: 'Insight', body: '3 padrões repetidos ao longo de 4 anos, em fluxos diferentes.' },
        { num: '04', title: 'Apresentação', body: '18 slides para produto e engenharia, antes de qualquer mudança.' },
      ],
    },
    stats: [
      { label: 'Tickets analisados', value: '1.2k', mod: 'highlight' },
      { label: 'Padrões repetidos', value: '03', mod: 'pink' },
      { label: 'Anos de dados', value: '4', mod: 'lavender' },
      { label: 'Slides finais', value: '18', mod: '' },
    ],
    stack: ['Affinity Diagram', 'Personas', 'Jobs to be Done', 'Figma', 'FigJam', 'Notion'],
  },
  {
    id: 'heuristic',
    num: '02',
    color: 'pink',
    year: '2026',
    kind: 'Heuristic',
    tag: 'Heuristic',
    title: '10 falhas de usabilidade.',
    highlight: 'usabilidade',
    tags: ['Nielsen 10', 'Severity', 'Auditoria'],
    coverMode: 'dark',
    meta: {
      contexto: 'App móvel de serviços',
      papel: 'Auditoria heurística, relatório',
      periodo: '2026 · 3 semanas',
    },
    problema: {
      heading: 'o <em>produto</em> não era o problema.',
      highlightWord: 'produto',
      body: [
        'Dez heurísticas de Nielsen aplicadas a um app com quase zero feedback de usuário. Cada falha encontrada representava um ponto de abandono silencioso.',
        'O relatório final priorizou 10 violações por severidade e incluiu propostas de correção para as 3 mais críticas.',
      ],
    },
    processo: {
      heading: 'da <em>auditoria</em> ao relatório.',
      highlightWord: 'auditoria',
      steps: [
        { num: '01', title: 'Mapeamento', body: 'Listagem de todos os fluxos do app por ordem de criticalidade.' },
        { num: '02', title: 'Auditoria', body: 'Aplicação das 10 heurísticas com registro de evidências e screenshots.' },
        { num: '03', title: 'Severidade', body: 'Classificação 0–4 de cada violação com impacto e frequência.' },
        { num: '04', title: 'Proposta', body: 'Mockups corretivos para as 3 violações mais graves.' },
      ],
    },
    stats: [
      { label: 'Heurísticas avaliadas', value: '10', mod: 'highlight' },
      { label: 'Violações encontradas', value: '27', mod: 'pink' },
      { label: 'Críticas (sev. 4)', value: '03', mod: 'lavender' },
      { label: 'Mockups entregues', value: '03', mod: '' },
    ],
    stack: ['Nielsen 10', 'Severity', 'Auditoria', 'Figma', 'Notion'],
  },
  {
    id: 'redesign',
    num: '03',
    color: 'lavender',
    year: '2026',
    kind: 'Redesign',
    tag: 'Redesign',
    title: 'refazendo um fluxo quebrado.',
    highlight: 'quebrado',
    tags: ['Wireframe', 'User flow', 'Protótipo'],
    coverMode: 'wireframe',
    meta: {
      contexto: 'Plataforma de gestão interna',
      papel: 'UX Design, prototipação',
      periodo: '2026 · 4 semanas',
    },
    problema: {
      heading: 'o fluxo estava <em>quebrado</em>.',
      highlightWord: 'quebrado',
      body: [
        'Um fluxo de aprovação com 7 telas desnecessárias e confirmações redundantes. Os usuários abandonavam no passo 3 de 7 — sem feedback de erro.',
        'O redesign reduziu o fluxo para 3 telas, eliminou fricção e tornou o feedback imediato. Taxa de conclusão: +64%.',
      ],
    },
    processo: {
      heading: 'do <em>wireframe</em> ao protótipo.',
      highlightWord: 'wireframe',
      steps: [
        { num: '01', title: 'Discovery', body: 'Entrevistas com 5 usuários para mapear pontos de atrito no fluxo atual.' },
        { num: '02', title: 'Wireframe', body: 'Rabisco → wireframe low-fi → validação com usuário em 2 dias.' },
        { num: '03', title: 'Protótipo', body: 'Hi-fi interativo em Figma com micro-interações de feedback.' },
        { num: '04', title: 'Teste', body: 'Teste de usabilidade com 4 participantes. Iteração final.' },
      ],
    },
    stats: [
      { label: 'Telas antes', value: '07', mod: 'highlight' },
      { label: 'Telas depois', value: '03', mod: 'pink' },
      { label: 'Usuários testados', value: '04', mod: 'lavender' },
      { label: 'Conclusão +', value: '64%', mod: '' },
    ],
    stack: ['Wireframe', 'User flow', 'Protótipo', 'Figma', 'FigJam', 'Maze'],
  },
  {
    id: 'system',
    num: '04',
    color: 'dark',
    year: '2025',
    kind: 'UI System',
    tag: 'UI System',
    title: 'mini design system.',
    highlight: 'system',
    tags: ['Tokens', 'Componentes', 'Figma'],
    coverMode: 'light',
    meta: {
      contexto: 'Startup de fintech',
      papel: 'UI Design, documentação',
      periodo: '2025 · 8 semanas',
    },
    problema: {
      heading: 'sem <em>sistema</em>, sem consistência.',
      highlightWord: 'sistema',
      body: [
        'Seis telas com quatro variações de botão, três tamanhos de fonte sem padrão e nenhuma cor documentada. Cada componente novo era um improviso.',
        'O mini design system entregou: tokens de cor e tipo, 12 componentes documentados, guia de uso e biblioteca Figma publicada.',
      ],
    },
    processo: {
      heading: 'do <em>caos</em> ao componente.',
      highlightWord: 'caos',
      steps: [
        { num: '01', title: 'Inventário', body: 'Auditoria de todas as telas existentes. 47 variações inconsistentes encontradas.' },
        { num: '02', title: 'Tokens', body: 'Definição de 28 tokens de cor, 6 de tipografia e 4 de espaçamento.' },
        { num: '03', title: 'Componentes', body: '12 componentes base construídos com auto-layout e variantes.' },
        { num: '04', title: 'Documentação', body: 'Guia de uso com exemplos de certo/errado. Handoff completo.' },
      ],
    },
    stats: [
      { label: 'Componentes', value: '12', mod: 'highlight' },
      { label: 'Tokens definidos', value: '38', mod: 'pink' },
      { label: 'Telas revisadas', value: '06', mod: 'lavender' },
      { label: 'Semanas', value: '08', mod: '' },
    ],
    stack: ['Tokens', 'Componentes', 'Figma', 'FigJam', 'Notion'],
  },
  {
    id: 'onboard',
    num: '05',
    color: 'lime',
    year: '2025',
    kind: 'UX Research',
    tag: 'UX Research',
    title: 'onboarding que aprendi a escutar.',
    highlight: 'escutar',
    tags: ['User Interview', 'Journey'],
    coverMode: 'light',
    meta: {
      contexto: 'SaaS de RH · onboarding de novos clientes',
      papel: 'Pesquisa qualitativa, síntese',
      periodo: '2025 · 5 semanas',
    },
    problema: {
      heading: 'ninguém chegava ao <em>aha</em>.',
      highlightWord: 'aha',
      body: [
        'Taxa de ativação abaixo de 30%. Clientes pagavam mas nunca chegavam a usar o produto de verdade. O time achava que era problema de produto — era problema de onboarding.',
        'Seis entrevistas com clientes ativos e inativos revelaram o padrão: as instruções estavam certas para quem fez o produto, erradas para quem ia usá-lo.',
      ],
    },
    processo: {
      heading: 'de entrevista ao <em>mapa</em>.',
      highlightWord: 'mapa',
      steps: [
        { num: '01', title: 'Recrutamento', body: 'Seis participantes: 3 ativos (chegaram ao aha), 3 inativos (desistiram).' },
        { num: '02', title: 'Entrevistas', body: 'Entrevistas semiestruturadas de 40 min. Gravadas, transcritas, codificadas.' },
        { num: '03', title: 'Síntese', body: 'Journey map comparativo: ativo vs. inativo. 4 pontos de quebra identificados.' },
        { num: '04', title: 'Recomendações', body: '3 mudanças imediatas no fluxo de onboarding. Implementadas em 1 sprint.' },
      ],
    },
    stats: [
      { label: 'Entrevistas', value: '06', mod: 'highlight' },
      { label: 'Pontos de quebra', value: '04', mod: 'pink' },
      { label: 'Mudanças propostas', value: '03', mod: 'lavender' },
      { label: 'Implementadas', value: '03', mod: '' },
    ],
    stack: ['User Interview', 'Journey', 'Figma', 'FigJam', 'Notion', 'Otter.ai'],
  },
  {
    id: 'voice',
    num: '06',
    color: 'pink',
    year: '2025',
    kind: 'Content Design',
    tag: 'Content Design',
    title: 'a voz que estava no ticket.',
    highlight: 'voz',
    tags: ['Tone of voice', 'UX Writing'],
    coverMode: 'light',
    meta: {
      contexto: 'Plataforma B2B · notificações e erros',
      papel: 'Content design, guia de voz',
      periodo: '2025 · 4 semanas',
    },
    problema: {
      heading: 'a <em>voz</em> estava quebrada.',
      highlightWord: 'voz',
      body: [
        'Mensagens de erro genéricas, notificações confusas, tom inconsistente entre telas. Os tickets de suporte estavam cheios de dúvidas que as próprias telas deveriam responder.',
        'Um guia de tom de voz com 40 exemplos de antes/depois. Taxa de tickets sobre "o que fazer" caiu 22% no mês seguinte.',
      ],
    },
    processo: {
      heading: 'do ticket ao <em>guia</em>.',
      highlightWord: 'guia',
      steps: [
        { num: '01', title: 'Inventário', body: 'Catalogação de todas as mensagens do sistema. 83 textos únicos.' },
        { num: '02', title: 'Análise', body: 'Identificação de padrões de falha: genérico, culpabilizante, técnico demais.' },
        { num: '03', title: 'Princípios', body: '4 princípios de voz definidos com exemplos aplicados.' },
        { num: '04', title: 'Guia', body: 'Documento com 40 pares antes/depois. Adotado pelo time de produto.' },
      ],
    },
    stats: [
      { label: 'Textos revisados', value: '83', mod: 'highlight' },
      { label: 'Pares antes/depois', value: '40', mod: 'pink' },
      { label: 'Princípios de voz', value: '04', mod: 'lavender' },
      { label: 'Tickets reduzidos', value: '22%', mod: '' },
    ],
    stack: ['Tone of voice', 'UX Writing', 'Notion', 'Figma'],
  },
];

const DB_ARCHIVE = [
  { num: '07', title: 'voicebot que <em>ouvia</em> em vez de responder.', highlightWord: 'ouvia', year: '2024', kind: 'UX Research' },
  { num: '08', title: 'do FAQ ao <em>fluxo</em> conversacional.', highlightWord: 'fluxo', year: '2024', kind: 'Content' },
  { num: '09', title: 'um portal interno que <em>ninguém</em> abria.', highlightWord: 'ninguém', year: '2023', kind: 'Redesign' },
  { num: '10', title: 'biblioteca de respostas, mas para <em>humanos</em>.', highlightWord: 'humanos', year: '2023', kind: 'Content' },
];

/* ----------------------------------------------------------------
   2. THEME
   ---------------------------------------------------------------- */

const MODES = ['light', 'dark'];
const MODE_LABELS = { light: 'Light', dark: 'Dark' };

let currentMode = (function () {
  var attr = document.documentElement.getAttribute('data-db-mode');
  return MODES.includes(attr) ? attr : 'light';
}());

function applyMode(mode) {
  if (!MODES.includes(mode)) mode = 'light';
  currentMode = mode;
  document.documentElement.setAttribute('data-db-mode', mode);
  try { localStorage.setItem('db-mode', mode); } catch (e) {}
  const label = document.getElementById('theme-label');
  if (label) label.textContent = MODE_LABELS[mode] || mode;
}

function cycleMode() {
  const idx = MODES.indexOf(currentMode);
  applyMode(MODES[(idx + 1) % MODES.length]);
}

/* ----------------------------------------------------------------
   3. NAVIGATION
   ---------------------------------------------------------------- */

let currentPage = 'home';
let currentCaseId = null;

function navigate(page, caseId) {
  const prev = document.getElementById('page-' + currentPage);
  if (prev) {
    prev.classList.remove('db-page--active');
    prev.hidden = true;
  }

  currentPage = page;
  currentCaseId = caseId || null;

  if (page === 'detalhe') renderDetalhe(caseId || 'support');
  if (page === 'projetos') initProjetos();

  const next = document.getElementById('page-' + page);
  if (next) {
    next.hidden = false;
    next.classList.add('db-page--active');
  }

  document.querySelectorAll('.db-nav__link').forEach(function(link) {
    const t = link.dataset.nav;
    link.classList.toggle('db-nav__link--active', t === page || (page === 'detalhe' && t === 'projetos'));
  });

  document.querySelectorAll('.db-mobile-menu__link').forEach(function(link) {
    const t = link.dataset.nav;
    link.classList.toggle('db-mobile-menu__link--active', t === page || (page === 'detalhe' && t === 'projetos'));
  });

  window.scrollTo(0, 0);
}

/* ----------------------------------------------------------------
   4. MOBILE MENU
   ---------------------------------------------------------------- */

function openMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.hidden = false;
  document.body.style.overflow = 'hidden';
  const hamburger = document.getElementById('hamburger-btn');
  if (hamburger) hamburger.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.hidden = true;
  document.body.style.overflow = '';
  const hamburger = document.getElementById('hamburger-btn');
  if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
}

/* ----------------------------------------------------------------
   5. RENDER HELPERS
   ---------------------------------------------------------------- */

function italicTitle(title, highlight) {
  if (!highlight || !title.includes(highlight)) return escHtml(title);
  const parts = title.split(highlight);
  return escHtml(parts[0]) + '<em class="db-italic">' + escHtml(highlight) + '</em>' + escHtml(parts.slice(1).join(highlight));
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildFooter() {
  return `
    <footer class="db-footer">
      <div class="db-footer__top">
        <div>
          <div class="db-footer__wordmark">db<span class="db-footer__wordmark-dot">.</span></div>
          <p class="db-footer__tagline">Designer em transição. UX/UI · Customer Experience. Rio de Janeiro, Brasil.</p>
        </div>
        <div>
          <span class="db-footer__col-label">Navegar</span>
          <ul class="db-footer__nav">
            <li data-nav="home">Início</li>
            <li data-nav="projetos">Projetos</li>
            <li data-nav="sobre">Sobre</li>
            <li data-nav="contato">Contato</li>
          </ul>
        </div>
        <div>
          <span class="db-footer__col-label">Contato</span>
          <ul class="db-footer__contact">
            <li><a href="mailto:danibastossoares@gmail.com">danibastossoares@gmail.com ↗</a></li>
            <li><a href="https://linkedin.com/in/daniellabsoares" target="_blank" rel="noopener">linkedin.com/in/daniellabsoares ↗</a></li>
            <li><a href="https://www.behance.net/daniellabastos" target="_blank" rel="noopener">behance.net/daniellabastos ↗</a></li>
          </ul>
        </div>
      </div>
      <div class="db-footer__bottom">
        <span>© 2026 Daniella Bastos</span>
      </div>
    </footer>
  `;
}

function buildCaseCard(c) {
  return `
    <article class="db-card db-card--${c.color}" data-case="${c.id}" role="button" tabindex="0"
      aria-label="Ver case ${c.num}: ${c.title}">
      <div class="db-card__num db-mono">${escHtml(c.num)} / 06 · Case</div>
      <h3 class="db-card__title">${italicTitle(c.title, c.highlight)}</h3>
      <div class="db-card__footer">
        <span class="db-mono">${escHtml(c.tag)}</span>
        <span class="db-card__arrow">→</span>
      </div>
    </article>
  `;
}

function buildNumbersStrip(items) {
  const mods = { highlight: 'db-numbers-strip__value--highlight', pink: 'db-numbers-strip__value--pink', lavender: 'db-numbers-strip__value--lavender' };
  return `
    <section class="db-numbers-strip">
      <div class="db-numbers-strip__inner">
        ${items.map(function(it) {
          const cls = mods[it.mod] || '';
          return `
            <div class="db-numbers-strip__item">
              <span class="db-mono">${escHtml(it.label)}</span>
              <span class="db-numbers-strip__value ${cls}">${escHtml(it.value)}</span>
            </div>
          `;
        }).join('')}
      </div>
    </section>
  `;
}

/* ----------------------------------------------------------------
   6. PAGE: HOME — populate carousels
   ---------------------------------------------------------------- */

let homeCurrentIdx = 0;

function initHome() {
  const carousel = document.getElementById('home-carousel');
  if (!carousel || carousel.dataset.init) return;
  carousel.dataset.init = '1';
  carousel.innerHTML = DB_CASES.map(function(c) {
    return '<div class="db-carousel__item">' + buildCaseCard(c) + '</div>';
  }).join('');

  // Inject footer
  const footerEl = carousel.closest('#page-home').querySelector('[data-component="footer"]');
  if (footerEl) footerEl.outerHTML = buildFooter();

  bindCaseKeyboard('#page-home');
  updateHomeCounter();
}

function updateHomeCounter() {
  const el = document.getElementById('home-counter');
  if (!el) return;
  el.textContent = String(homeCurrentIdx + 1).padStart(2, '0') + ' / ' + String(DB_CASES.length).padStart(2, '0');
  const prev = document.getElementById('home-prev');
  const next = document.getElementById('home-next');
  if (prev) prev.disabled = homeCurrentIdx === 0;
  if (next) next.disabled = homeCurrentIdx === DB_CASES.length - 1;
}

function scrollHomeCarousel(dir) {
  const carousel = document.getElementById('home-carousel');
  if (!carousel) return;
  const items = carousel.querySelectorAll('.db-carousel__item');
  if (!items.length) return;
  homeCurrentIdx = Math.max(0, Math.min(DB_CASES.length - 1, homeCurrentIdx + dir));
  items[homeCurrentIdx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  updateHomeCounter();
}

/* ----------------------------------------------------------------
   7. PAGE: PROJETOS — carousel + filters + archive
   ---------------------------------------------------------------- */

let projetosCurrentIdx = 0;

function initProjetos() {
  const page = document.getElementById('page-projetos');
  if (!page || page.dataset.init) return;
  page.dataset.init = '1';

  // Carousel
  const carousel = document.getElementById('projetos-carousel');
  if (carousel) {
    carousel.innerHTML = DB_CASES.map(function(c) {
      return '<div class="db-carousel__item">' + buildCaseCard(c) + '</div>';
    }).join('');
  }

  // Archive
  const archiveList = document.getElementById('archive-list');
  if (archiveList) {
    archiveList.innerHTML = DB_ARCHIVE.map(function(a) {
      return `
        <div class="db-archive-item" data-case="support" role="link" tabindex="0">
          <span class="db-mono">${escHtml(a.num)}</span>
          <h3 class="db-h3">${a.title.replace(/<em>/g, '<em class="db-italic">')}</h3>
          <span class="db-mono db-archive-item__kind">${escHtml(a.kind)}</span>
          <span class="db-mono db-archive-item__year">${escHtml(a.year)} →</span>
        </div>
      `;
    }).join('');
  }

  // Footer
  const footerEl = page.querySelector('[data-component="footer"]');
  if (footerEl) footerEl.outerHTML = buildFooter();

  bindCaseKeyboard('#page-projetos');
  updateProjetosCounter();
}

function updateProjetosCounter() {
  const el = document.getElementById('projetos-carousel-counter');
  if (el) el.textContent = String(projetosCurrentIdx + 1).padStart(2, '0') + ' / 06';
}

function scrollProjetosCarousel(dir) {
  const carousel = document.getElementById('projetos-carousel');
  if (!carousel) return;
  const items = carousel.querySelectorAll('.db-carousel__item');
  if (!items.length) return;
  projetosCurrentIdx = Math.max(0, Math.min(DB_CASES.length - 1, projetosCurrentIdx + dir));
  items[projetosCurrentIdx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  updateProjetosCounter();
}

/* ----------------------------------------------------------------
   8. PAGE: DETALHE — full dynamic render
   ---------------------------------------------------------------- */

function renderDetalhe(caseId) {
  const c = DB_CASES.find(function(x) { return x.id === caseId; }) || DB_CASES[0];
  const idx = DB_CASES.indexOf(c);
  const next = DB_CASES[(idx + 1) % DB_CASES.length];
  const page = document.getElementById('page-detalhe');

  page.innerHTML = `
    <div class="db-detalhe-topbar">
      <button class="db-detalhe-topbar__back db-mono" data-nav="projetos">← Voltar para cases</button>
      <span class="db-mono">case ${escHtml(c.num)} / 06</span>
    </div>

    <div class="db-detalhe-cover-section">
      <div class="db-cover" data-cover-mode="${c.coverMode}">
        <div class="db-cover__inner">
          <div class="db-cover__blob"></div>
          <div class="db-cover__header">
            <span>Case ${escHtml(c.num)} / 06</span>
            <span>${escHtml(c.year)} · ${escHtml(c.kind)}</span>
          </div>
          <h1 class="db-cover__title">${italicTitle(c.title, c.highlight)}</h1>
          <div class="db-cover__footer">
            <div class="db-cover__tags">
              ${c.tags.map(function(t) { return '<span class="db-pill db-pill--outline">' + escHtml(t) + '</span>'; }).join('')}
            </div>
            <span class="db-pill db-pill--lime">Ler case →</span>
          </div>
        </div>
      </div>
    </div>

    <div class="db-meta-section">
      <div class="db-meta-grid">
        <div>
          <div class="db-mono db-meta-key">Contexto</div>
          <div class="db-meta-value">${escHtml(c.meta.contexto)}</div>
        </div>
        <div>
          <div class="db-mono db-meta-key">Papel</div>
          <div class="db-meta-value">${escHtml(c.meta.papel)}</div>
        </div>
        <div>
          <div class="db-mono db-meta-key">Período</div>
          <div class="db-meta-value">${escHtml(c.meta.periodo)}</div>
        </div>
        <div>
          <div class="db-mono db-meta-key">Cover</div>
          <div class="db-meta-value">${escHtml(c.coverMode)}</div>
        </div>
      </div>
    </div>

    <div class="db-problema">
      <div class="db-problema__grid">
        <div class="db-mono">01 · O problema</div>
        <div>
          <h2 class="db-h2">${italicTitle(c.problema.heading.replace(/<em>/g, '').replace(/<\/em>/g, ''), c.problema.highlightWord)}</h2>
          ${c.problema.body.map(function(p) { return '<p class="db-body">' + escHtml(p) + '</p>'; }).join('')}
        </div>
      </div>
    </div>

    <div class="db-processo">
      <span class="db-mono">02 · Processo</span>
      <h2 class="db-h2">${italicTitle(c.processo.heading.replace(/<em>/g, '').replace(/<\/em>/g, ''), c.processo.highlightWord)}</h2>
      <div class="db-steps">
        ${c.processo.steps.map(function(step) {
          return `
            <div class="db-step">
              <div class="db-mono db-step__num">${escHtml(step.num)}</div>
              <h3 class="db-h3">${escHtml(step.title)}</h3>
              <div class="db-step__body">
                <p class="db-body">${escHtml(step.body)}</p>
                <div class="db-step-artifact">
                  <span class="db-mono db-mono--muted db-step-artifact__label">ETAPA ${escHtml(step.num)} · ARTEFATO</span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>

    ${buildNumbersStrip(c.stats)}

    <div class="db-stack">
      <span class="db-mono">04 · Ferramentas</span>
      <h2 class="db-h2">stack do case.</h2>
      <div class="db-stack__pills">
        ${c.stack.map(function(t) { return '<span class="db-pill db-pill--outline">' + escHtml(t) + '</span>'; }).join('')}
      </div>
    </div>

    <div class="db-next-case db-section--elevated">
      <div class="db-next-case__header">
        <span class="db-mono">próximo case · ${escHtml(next.num)} / 06</span>
        <span class="db-mono">${escHtml(next.year)} · ${escHtml(next.kind)}</span>
      </div>
      <div class="db-next-case__title" data-case="${next.id}" role="link" tabindex="0">
        <h2 class="db-hero">${italicTitle(next.title, next.highlight)} <span class="db-next-arrow">→</span></h2>
      </div>
      <div class="db-next-case__card">
        ${buildCaseCard(next)}
      </div>
    </div>

    ${buildFooter()}
  `;

  bindCaseKeyboard('#page-detalhe');
}

/* ----------------------------------------------------------------
   9. PAGE: SOBRE + CONTATO — inject footer only
   ---------------------------------------------------------------- */

function initSobre() {
  const page = document.getElementById('page-sobre');
  if (!page || page.dataset.init) return;
  page.dataset.init = '1';
  const footerEl = page.querySelector('[data-component="footer"]');
  if (footerEl) footerEl.outerHTML = buildFooter();
  bindCaseKeyboard('#page-sobre');
}

function initContato() {
  const page = document.getElementById('page-contato');
  if (!page || page.dataset.init) return;
  page.dataset.init = '1';
  const footerEl = page.querySelector('[data-component="footer"]');
  if (footerEl) footerEl.outerHTML = buildFooter();
  bindCaseKeyboard('#page-contato');
}

/* ----------------------------------------------------------------
   10. KEYBOARD NAV FOR [data-case] ELEMENTS
   ---------------------------------------------------------------- */

function bindCaseKeyboard(scope) {
  const el = document.querySelector(scope);
  if (!el) return;
  el.querySelectorAll('[data-case]').forEach(function(btn) {
    btn.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        navigate('detalhe', btn.dataset.case);
      }
    });
  });
}

/* ----------------------------------------------------------------
   11. FILTER PILLS (Projetos)
   ---------------------------------------------------------------- */

function initFilterPills() {
  const container = document.getElementById('filter-pills');
  if (!container) return;
  container.addEventListener('click', function(e) {
    const btn = e.target.closest('[data-filter]');
    if (!btn) return;
    container.querySelectorAll('[data-filter]').forEach(function(b) {
      b.classList.remove('db-pill--ink');
      b.classList.add('db-pill--outline');
    });
    btn.classList.remove('db-pill--outline');
    btn.classList.add('db-pill--ink');
  });
}

/* ----------------------------------------------------------------
   12. CONTACT TYPE PILLS
   ---------------------------------------------------------------- */

function initTypePills() {
  const container = document.querySelector('.db-type-pills');
  if (!container) return;
  container.addEventListener('click', function(e) {
    const btn = e.target.closest('.db-type-pill');
    if (!btn) return;
    container.querySelectorAll('.db-type-pill').forEach(function(b) {
      b.classList.remove('db-pill--ink');
      b.classList.add('db-pill--outline');
    });
    btn.classList.remove('db-pill--outline');
    btn.classList.add('db-pill--ink');
  });
}

/* ----------------------------------------------------------------
   13. FORM SUBMIT
   ---------------------------------------------------------------- */

function initContactForm() {
  const form = document.querySelector('.db-form');
  if (!form) return;
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    if (btn) {
      const original = btn.textContent;
      btn.textContent = 'Mensagem enviada ✓';
      btn.disabled = true;
      setTimeout(function() {
        btn.textContent = original;
        btn.disabled = false;
        form.reset();
      }, 3000);
    }
  });
}

/* ----------------------------------------------------------------
   14. GLOBAL EVENT BINDING
   ---------------------------------------------------------------- */

function init() {
  // Sync label to whatever mode was detected/restored before JS loaded
  applyMode(currentMode);

  // Theme toggle
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) themeBtn.addEventListener('click', cycleMode);

  // Hamburger
  const hamburgerBtn = document.getElementById('hamburger-btn');
  if (hamburgerBtn) hamburgerBtn.addEventListener('click', openMenu);

  // Mobile close
  const closeBtn = document.getElementById('mobile-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  // Escape key closes menu
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMenu();
  });

  // Home carousel prev/next
  const homePrev = document.getElementById('home-prev');
  const homeNext = document.getElementById('home-next');
  if (homePrev) homePrev.addEventListener('click', function() { scrollHomeCarousel(-1); });
  if (homeNext) homeNext.addEventListener('click', function() { scrollHomeCarousel(1); });

  // Home carousel — sync counter on drag/scroll
  const homeCarousel = document.getElementById('home-carousel');
  if (homeCarousel) {
    homeCarousel.addEventListener('scroll', function() {
      const items = homeCarousel.querySelectorAll('.db-carousel__item');
      let closest = 0;
      let minDist = Infinity;
      items.forEach(function(item, i) {
        const dist = Math.abs(item.getBoundingClientRect().left - homeCarousel.getBoundingClientRect().left);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      if (closest !== homeCurrentIdx) {
        homeCurrentIdx = closest;
        updateHomeCounter();
      }
    }, { passive: true });
  }

  // Projetos carousel prev/next
  const prevBtn = document.getElementById('projetos-prev');
  const nextBtn = document.getElementById('projetos-next');
  if (prevBtn) prevBtn.addEventListener('click', function() { scrollProjetosCarousel(-1); });
  if (nextBtn) nextBtn.addEventListener('click', function() { scrollProjetosCarousel(1); });

  // Projetos carousel — sync counter on scroll
  const projetosCarousel = document.getElementById('projetos-carousel');
  if (projetosCarousel) {
    projetosCarousel.addEventListener('scroll', function() {
      const items = projetosCarousel.querySelectorAll('.db-carousel__item');
      let closest = 0;
      let minDist = Infinity;
      items.forEach(function(item, i) {
        const dist = Math.abs(item.getBoundingClientRect().left - projetosCarousel.getBoundingClientRect().left);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      if (closest !== projetosCurrentIdx) {
        projetosCurrentIdx = closest;
        updateProjetosCounter();
      }
    }, { passive: true });
  }

  // Global nav delegation (data-nav on any element)
  document.addEventListener('click', function(e) {
    const navTarget = e.target.closest('[data-nav]');
    if (navTarget && !navTarget.closest('.db-filter-pills')) {
      e.preventDefault();
      const target = navTarget.dataset.nav;
      closeMenu();
      navigate(target);
    }

    const caseTarget = e.target.closest('[data-case]');
    if (caseTarget && !caseTarget.dataset.nav) {
      e.preventDefault();
      navigate('detalhe', caseTarget.dataset.case);
    }
  });

  // Filter pills
  initFilterPills();

  // Contact type pills
  initTypePills();

  // Contact form
  initContactForm();

  // Init all pages that are pre-rendered (home, sobre, contato)
  initHome();
  initSobre();
  initContato();

  // Navigate to home to set initial state
  navigate('home');
}

document.addEventListener('DOMContentLoaded', init);
