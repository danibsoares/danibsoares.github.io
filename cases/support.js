(window.DB_CASES_RAW = window.DB_CASES_RAW || []).push({
  id: 'support',
  year: '2026',
  kind: 'UX Research',
  coverMode: 'light',
  notionUrl: '',
  title: 'quando o suporte vira pesquisa',
  highlight: 'pesquisa',
  tags: ['Affinity Diagram', 'Personas', 'Jobs to be Done'],
  meta: {
    contexto: 'SaaS B2B · 8 anos de tickets',
    papel: 'Pesquisa, síntese, apresentação',
    periodo: '2026 · 6 semanas',
  },
  problema: {
    heading: 'o problema não era o produto',
    highlightWord: 'problema',
    body: [
      'Cada ticket que abria era um sintoma. Atrás dele havia um padrão — e atrás do padrão, uma decisão de design tomada sem dados qualitativos.',
      'Esse case é sobre transformar 8 anos de escuta em um documento que produto e engenharia leem antes de iterar. Resultado: 3 padrões repetidos × 4 anos, mapeados em affinity diagram e apresentados em 18 slides.',
    ],
  },
  processo: {
    heading: 'do ticket ao insight',
    highlightWord: 'insight',
    steps: [
      { title: 'Coleta', body: '1.200 tickets exportados, anonimizados e categorizados por área de produto.', legenda: 'teste teste teste', artifact: 'placeholder' },
      { title: 'Síntese', body: 'Affinity diagram em FigJam — 12 temas emergiram naturalmente.', legenda: '', artifact: 'placeholder' },
      { title: 'Insight', body: '3 padrões repetidos ao longo de 4 anos, em fluxos diferentes.', legenda: '', artifact: null },
      { title: 'Apresentação', body: '18 slides para produto e engenharia, antes de qualquer mudança.', legenda: '', artifact: 'placeholder' },
    ],
  },
  stats: [
    { label: 'Tickets analisados', value: '1.2k', mod: 'highlight' },
    { label: 'Padrões repetidos', value: '03', mod: 'pink' },
    { label: 'Anos de dados', value: '4', mod: 'lavender' },
    { label: 'Slides finais', value: '18', mod: '' },
  ],
  stack: ['Affinity Diagram', 'Personas', 'Jobs to be Done', 'Figma', 'FigJam', 'Notion'],
});
