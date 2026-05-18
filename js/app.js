'use strict';

/* ================================================================
   DANIELLA BASTOS PORTFOLIO — app.js
   ================================================================ */

/* ----------------------------------------------------------------
   1. CASE DATA
   ---------------------------------------------------------------- */

const CASE_COLORS = ['lime', 'pink', 'lavender', 'dark'];

const DB_CASES = (window.DB_CASES_RAW || []).map(function(c, i) {
  c.num   = String(i + 1).padStart(2, '0');
  c.color = CASE_COLORS[i % CASE_COLORS.length];
  return c;
});

function totalCases() { return String(DB_CASES.length).padStart(2, '0'); }

const DB_ARCHIVE = [
  { title: 'voicebot que <em>ouvia</em> em vez de responder.', highlightWord: 'ouvia', year: '2024', kind: 'UX Research' },
  { title: 'do FAQ ao <em>fluxo</em> conversacional.', highlightWord: 'fluxo', year: '2024', kind: 'Content' },
  { title: 'um portal interno que <em>ninguém</em> abria.', highlightWord: 'ninguém', year: '2023', kind: 'Redesign' },
  { title: 'biblioteca de respostas, mas para <em>humanos</em>.', highlightWord: 'humanos', year: '2023', kind: 'Content' },
].map(function(a, i) {
  a.num = String(DB_CASES.length + i + 1).padStart(2, '0');
  return a;
});

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
        <span>© ${new Date().getFullYear()} Daniella Bastos</span>
      </div>
    </footer>
  `;
}

function buildCaseCard(c) {
  return `
    <article class="db-card db-card--${c.color}" data-case="${c.id}"
      data-kind="${escHtml(c.kind)}" data-stack="${escHtml((c.stack || []).join(','))}"
      role="button" tabindex="0" aria-label="Ver case ${c.num}: ${c.title}">
      <div class="db-card__num db-mono">${escHtml(c.num)} / ${totalCases()} · Case</div>
      <h3 class="db-card__title">${italicTitle(c.title, c.highlight)}</h3>
      <div class="db-card__footer">
        <span class="db-mono">${escHtml(c.kind)}</span>
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

function buildCarouselHTML() {
  return DB_CASES.map(function(c) {
    return '<div class="db-carousel__item">' + buildCaseCard(c) + '</div>';
  }).join('');
}

let homeCurrentIdx = 0;

function initHome() {
  const carousel = document.getElementById('home-carousel');
  if (!carousel || carousel.dataset.init) return;
  carousel.dataset.init = '1';
  carousel.innerHTML = buildCarouselHTML();

  // Inject footer
  const footerEl = carousel.closest('#page-home').querySelector('[data-component="footer"]');
  if (footerEl) footerEl.outerHTML = buildFooter();

  const casesCountEl = document.getElementById('home-cases-count');
  if (casesCountEl) casesCountEl.textContent = totalCases();

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
   7. PAGE: PROJETOS — grid + filters + archive
   ---------------------------------------------------------------- */

function initProjetos() {
  const page = document.getElementById('page-projetos');
  if (!page || page.dataset.init) return;
  page.dataset.init = '1';

  // Grid
  const grid = document.getElementById('projetos-grid');
  if (grid) {
    grid.innerHTML = DB_CASES.map(function(c) { return buildCaseCard(c); }).join('');
  }

  // Tool filter pills — generated from all case stacks
  const toolsContainer = document.getElementById('filter-tools');
  if (toolsContainer) {
    const allTools = [];
    DB_CASES.forEach(function(c) {
      (c.stack || []).forEach(function(t) {
        if (!allTools.includes(t)) allTools.push(t);
      });
    });
    toolsContainer.innerHTML =
      allTools.map(function(t) {
        return '<button class="db-pill db-pill--outline" data-filter-tool="' + escHtml(t) + '">' + escHtml(t) + '</button>';
      }).join('') +
      '<button class="db-filter-clear-tools" id="filter-clear-tools" hidden>✕ Limpar</button>';
  }

  initFilterPills();

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

  const heroCountEl = document.getElementById('projetos-hero-count');
  if (heroCountEl) heroCountEl.textContent = totalCases();

  bindCaseKeyboard('#page-projetos');
}

/* ----------------------------------------------------------------
   8. PAGE: DETALHE — full dynamic render
   ---------------------------------------------------------------- */

function renderDetalhe(caseId) {
  const c = DB_CASES.find(function(x) { return x.id === caseId; }) || DB_CASES[0];
  const idx = DB_CASES.indexOf(c);
  const next = DB_CASES[(idx + 1) % DB_CASES.length];
  const page = document.getElementById('page-detalhe');

  const prevCase = idx > 0 ? DB_CASES[idx - 1] : null;
  const nextCase = idx < DB_CASES.length - 1 ? DB_CASES[idx + 1] : null;

  page.innerHTML = `
    <div class="db-detalhe-topbar">
      <button class="db-detalhe-topbar__back db-mono" data-nav="projetos">← Voltar para cases</button>
      <div class="db-detalhe-topbar__nav">
        <button class="db-btn db-btn--ghost db-btn--icon db-case-prev" aria-label="Case anterior" ${!prevCase ? 'disabled' : ''} data-case="${prevCase ? prevCase.id : ''}">←</button>
        <span class="db-mono">case ${escHtml(c.num)} / ${totalCases()}</span>
        <button class="db-btn db-btn--ghost db-btn--icon db-case-next" aria-label="Próximo case" ${!nextCase ? 'disabled' : ''} data-case="${nextCase ? nextCase.id : ''}">→</button>
      </div>
    </div>

    <div class="db-detalhe-cover-section">
      <div class="db-cover" data-cover-mode="${c.coverMode}">
        <div class="db-cover__inner">
          <div class="db-cover__blob"></div>
          <div class="db-cover__header">
            <span>Case ${escHtml(c.num)} / ${totalCases()}</span>
            <span>${escHtml(c.year)} · ${escHtml(c.kind)}</span>
          </div>
          <h1 class="db-cover__title">${italicTitle(c.title, c.highlight)}</h1>
          <div class="db-cover__footer">
            <div class="db-cover__tags">
              ${c.tags.map(function(t) { return '<span class="db-pill db-pill--outline">' + escHtml(t) + '</span>'; }).join('')}
            </div>
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
      </div>
    </div>

    <div class="db-problema">
      <div class="db-problema__grid">
        <div class="db-mono">01 · O problema</div>
        <div>
          <h2 class="db-h2">${italicTitle(c.problema.heading, c.problema.highlightWord)}</h2>
          ${c.problema.body.map(function(p) { return '<p class="db-body">' + escHtml(p) + '</p>'; }).join('')}
        </div>
      </div>
    </div>

    <div class="db-processo">
      <span class="db-mono">02 · Processo</span>
      <h2 class="db-h2">${italicTitle(c.processo.heading, c.processo.highlightWord)}</h2>
      <div class="db-steps">
        ${c.processo.steps.map(function(step, si) {
          const sNum = String(si + 1).padStart(2, '0');
          return `
            <div class="db-step">
              <div class="db-mono db-step__num">${sNum}</div>
              <div class="db-step__left">
                <h3 class="db-h3">${escHtml(step.title)}</h3>
                <p class="db-body">${escHtml(step.body)}</p>
              </div>
              <div class="db-step__right">
                ${step.legenda ? `<p class="db-step__legenda db-mono db-mono--muted">${escHtml(step.legenda)}</p>` : ''}
                <div class="db-step-artifact">
                  <span class="db-mono db-mono--muted db-step-artifact__label">ETAPA ${sNum} · ARTEFATO</span>
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
        <span class="db-mono">próximo case · ${escHtml(next.num)} / ${totalCases()}</span>
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

  const prevBtn = page.querySelector('.db-case-prev');
  const nextBtn = page.querySelector('.db-case-next');
  if (prevBtn && prevBtn.dataset.case) {
    prevBtn.addEventListener('click', function() { navigate('detalhe', prevBtn.dataset.case); });
  }
  if (nextBtn && nextBtn.dataset.case) {
    nextBtn.addEventListener('click', function() { navigate('detalhe', nextBtn.dataset.case); });
  }

  const cover = page.querySelector('.db-cover');
  const metaSection = page.querySelector('.db-meta-section');
  if (cover && metaSection) {
    cover.addEventListener('click', function() {
      metaSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

/* ----------------------------------------------------------------
   9. PAGE: SOBRE + CONTATO — inject footer only
   ---------------------------------------------------------------- */

function initStaticPage(id) {
  const page = document.getElementById(id);
  if (!page || page.dataset.init) return;
  page.dataset.init = '1';
  const footerEl = page.querySelector('[data-component="footer"]');
  if (footerEl) footerEl.outerHTML = buildFooter();
  bindCaseKeyboard('#' + id);
}

function initSobre()   { initStaticPage('page-sobre'); }
function initContato() { initStaticPage('page-contato'); }

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

let activeKind = 'Todos';
let activeTools = [];

function applyFilters() {
  const grid = document.getElementById('projetos-grid');
  if (!grid) return;
  grid.querySelectorAll('.db-card').forEach(function(card) {
    const kindMatch = activeKind === 'Todos' || card.dataset.kind === activeKind;
    const cardStack = (card.dataset.stack || '').split(',');
    const toolMatch = activeTools.length === 0 || activeTools.some(function(t) { return cardStack.includes(t); });
    card.style.display = kindMatch && toolMatch ? '' : 'none';
  });
}

function initFilterPills() {
  const kindContainer = document.getElementById('filter-kind');
  const toolContainer = document.getElementById('filter-tools');

  if (kindContainer) {
    kindContainer.addEventListener('click', function(e) {
      const btn = e.target.closest('[data-filter-kind]');
      if (!btn) return;
      kindContainer.querySelectorAll('[data-filter-kind]').forEach(function(b) {
        b.classList.remove('db-pill--ink');
        b.classList.add('db-pill--outline');
      });
      btn.classList.remove('db-pill--outline');
      btn.classList.add('db-pill--ink');
      activeKind = btn.dataset.filterKind;
      applyFilters();
    });
  }

  const clearToolsBtn = document.getElementById('filter-clear-tools');
  if (clearToolsBtn) {
    clearToolsBtn.addEventListener('click', clearToolFilters);
  }

  if (toolContainer) {
    toolContainer.addEventListener('click', function(e) {
      if (e.target.closest('#filter-clear-tools')) return;
      const btn = e.target.closest('[data-filter-tool]');
      if (!btn) return;
      const tool = btn.dataset.filterTool;
      const isActive = btn.classList.contains('db-pill--ink');
      if (isActive) {
        btn.classList.remove('db-pill--ink');
        btn.classList.add('db-pill--outline');
        activeTools = activeTools.filter(function(t) { return t !== tool; });
      } else {
        btn.classList.remove('db-pill--outline');
        btn.classList.add('db-pill--ink');
        activeTools.push(tool);
      }
      updateStackToggleCount();
      applyFilters();
    });
  }

  const toggleBtn = document.getElementById('filter-stack-toggle');
  if (toggleBtn && toolContainer) {
    toggleBtn.addEventListener('click', function() {
      const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      toggleBtn.querySelector('.db-filter-stack-toggle__icon').textContent = isOpen ? '⊕' : '⊖';
      if (isOpen) {
        toolContainer.hidden = true;
      } else {
        toolContainer.hidden = false;
        const rect = toggleBtn.getBoundingClientRect();
        toolContainer.style.top  = (rect.bottom + 8) + 'px';
        toolContainer.style.left = rect.left + 'px';
      }
    });

    document.addEventListener('click', function(e) {
      if (!toggleBtn.contains(e.target) && !toolContainer.contains(e.target)) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.querySelector('.db-filter-stack-toggle__icon').textContent = '⊕';
        toolContainer.hidden = true;
      }
    });
  }
}

function updateStackToggleCount() {
  const countEl = document.getElementById('filter-stack-count');
  const clearBtn = document.getElementById('filter-clear-tools');
  if (countEl) {
    if (activeTools.length > 0) {
      countEl.textContent = activeTools.length;
      countEl.hidden = false;
    } else {
      countEl.hidden = true;
    }
  }
  if (clearBtn) clearBtn.hidden = activeTools.length === 0;
}

function clearToolFilters() {
  activeTools = [];
  const toolContainer = document.getElementById('filter-tools');
  if (toolContainer) {
    toolContainer.querySelectorAll('[data-filter-tool]').forEach(function(b) {
      b.classList.remove('db-pill--ink');
      b.classList.add('db-pill--outline');
    });
  }
  updateStackToggleCount();
  applyFilters();
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

  // Back to top
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    window.addEventListener('scroll', function() {
      backToTopBtn.hidden = window.scrollY < 200;
    }, { passive: true });
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

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
