(window.DB_CASES_RAW = window.DB_CASES_RAW || []).push({
  id: 'system',
  year: '2025',
  kind: 'UI System',
  coverMode: 'light',
  title: 'mini design system.',
  highlight: 'system',
  tags: ['Tokens', 'Componentes', 'Figma'],
  meta: {
    contexto: 'Startup de fintech',
    papel: 'UI Design, documentação',
    periodo: '2025 · 8 semanas',
  },
  problema: {
    heading: 'sem sistema, sem consistência.',
    highlightWord: 'sistema',
    body: [
      'Seis telas com quatro variações de botão, três tamanhos de fonte sem padrão e nenhuma cor documentada. Cada componente novo era um improviso.',
      'O mini design system entregou: tokens de cor e tipo, 12 componentes documentados, guia de uso e biblioteca Figma publicada.',
    ],
  },
  processo: {
    heading: 'do caos ao componente.',
    highlightWord: 'caos',
    steps: [
      { title: 'Inventário', body: 'Auditoria de todas as telas existentes. 47 variações inconsistentes encontradas.', legenda: '' },
      { title: 'Tokens', body: 'Definição de 28 tokens de cor, 6 de tipografia e 4 de espaçamento.', legenda: '' },
      { title: 'Componentes', body: '12 componentes base construídos com auto-layout e variantes.', legenda: '' },
      { title: 'Documentação', body: 'Guia de uso com exemplos de certo/errado. Handoff completo.', legenda: '' },
    ],
  },
  stats: [
    { label: 'Componentes', value: '12', mod: 'highlight' },
    { label: 'Tokens definidos', value: '38', mod: 'pink' },
    { label: 'Telas revisadas', value: '06', mod: 'lavender' },
    { label: 'Semanas', value: '08', mod: '' },
  ],
  stack: ['Tokens', 'Componentes', 'Figma', 'FigJam', 'Notion'],
});
