# Daniella Bastos — Portfólio UX/UI

Site portfólio pessoal de Daniella Bastos, designer UX/UI em transição com 8 anos de experiência em suporte SaaS. Apresenta cases de UX Research, Redesign, UI System, Heuristic Evaluation e Usability Test.

**Acesse em:** [danibsoares.github.io](https://danibsoares.github.io)

---

## Tech Stack

- HTML5, CSS3, JavaScript (vanilla, sem frameworks)
- Google Fonts: Bricolage Grotesque, DM Sans, Instrument Serif, JetBrains Mono
- Deploy via GitHub Actions → GitHub Pages

## Estrutura

```
.
├── index.html              # Único HTML — todas as páginas via SPA em JS
├── css/
│   └── main.css            # Estilos globais com variáveis de tema (light/dark)
├── js/
│   └── app.js              # Navegação, renderização de cards, filtros, cases relacionados
├── cases/
│   ├── index.js            # Manifesto gerado automaticamente (não editar manualmente)
│   ├── support.js          # Case: quando o suporte vira pesquisa (UX Research)
│   ├── heuristic.js        # Case: avaliação heurística
│   ├── redesign.js         # Case: redesign de fluxo
│   ├── system.js           # Case: mini design system
│   ├── gastos.js           # Case: controle de gastos
│   └── calma.js            # Case: onboarding progressivo (Usability Test)
├── img/
│   └── cases/              # Imagens de artefatos por case (ex: img/cases/support/coleta.jpg)
├── scripts/
│   ├── build-cases.js      # Gera cases/index.js a partir dos arquivos em cases/
│   └── watch-cases.js      # Observa cases/ e regera o manifesto automaticamente
├── package.json
└── Curriculo_Daniella_Bastos.pdf
```

## Adicionando um novo case

1. Crie `cases/nome-do-case.js` seguindo a estrutura abaixo
2. Rode o watcher (ou o build manual) para atualizar o manifesto
3. Adicione as imagens em `img/cases/nome-do-case/`

```bash
# Opção A — watcher (recomendado durante desenvolvimento)
npm run watch

# Opção B — build único
node scripts/build-cases.js
```

O watcher detecta qualquer `.js` novo ou removido em `cases/` e regenera `cases/index.js` automaticamente. O `index.html` nunca precisa ser editado.

## Estrutura de um case

```js
(window.DB_CASES_RAW = window.DB_CASES_RAW || []).push({
  id: 'nome',
  year: '2026',
  kind: 'UX Research',          // aparece nos cards e filtros
  coverMode: 'light',           // 'light' | 'dark'
  title: 'título do case',
  highlight: 'palavra',         // palavra em itálico no título
  tags: ['Tag A', 'Tag B'],
  notionUrl: 'https://...',     // link do projeto completo
  meta: {
    contexto: '...',
    papel: '...',
    periodo: '...',
  },
  problema: {
    heading: '...',
    highlightWord: '...',
    body: ['parágrafo 1', 'parágrafo 2'],
  },
  processo: {
    heading: '...',
    highlightWord: '...',
    steps: [
      {
        title: 'Etapa',
        body: '...',
        legenda: '...',
        artifact: 'img/cases/nome/etapa.jpg', // caminho da imagem
        // artifact: null  → sem imagem nessa etapa
      },
    ],
  },
  stats: [
    { label: '...', value: '...', mod: 'highlight' }, // mod: 'highlight' | 'pink' | 'lavender' | ''
  ],
  stack: ['Figma', 'Notion'],   // usado nos filtros e em cases relacionados
});
```

Na página de detalhe, cada step com `artifact` exibe uma caixa de imagem 16:9. Ao passar o mouse, uma faixa aparece com "Ver projeto completo ↗" linkando para `notionUrl`. Ao final do case, um grid de até 4 cases relacionados é gerado automaticamente com base nas stacks em comum.
