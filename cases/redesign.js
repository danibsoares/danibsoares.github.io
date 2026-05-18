(window.DB_CASES_RAW = window.DB_CASES_RAW || []).push({
  id: 'redesign',
  year: '2026',
  kind: 'Redesign',
  coverMode: 'wireframe',
  notionUrl: '',
  title: 'refazendo um fluxo quebrado.',
  highlight: 'quebrado',
  tags: ['Wireframe', 'User flow', 'Protótipo'],
  meta: {
    contexto: 'Plataforma de gestão interna',
    papel: 'UX Design, prototipação',
    periodo: '2026 · 4 semanas',
  },
  problema: {
    heading: 'o fluxo estava quebrado.',
    highlightWord: 'quebrado',
    body: [
      'Um fluxo de aprovação com 7 telas desnecessárias e confirmações redundantes. Os usuários abandonavam no passo 3 de 7 — sem feedback de erro.',
      'O redesign reduziu o fluxo para 3 telas, eliminou fricção e tornou o feedback imediato. Taxa de conclusão: +64%.',
    ],
  },
  processo: {
    heading: 'do wireframe ao protótipo.',
    highlightWord: 'wireframe',
    steps: [
      { title: 'Discovery', body: 'Entrevistas com 5 usuários para mapear pontos de atrito no fluxo atual.', legenda: '', artifact: null },
      { title: 'Wireframe', body: 'Rabisco → wireframe low-fi → validação com usuário em 2 dias.', legenda: '', artifact: 'placeholder' },
      { title: 'Protótipo', body: 'Hi-fi interativo em Figma com micro-interações de feedback.', legenda: '', artifact: 'placeholder' },
      { title: 'Teste', body: 'Teste de usabilidade com 4 participantes. Iteração final.', legenda: '', artifact: null },
    ],
  },
  stats: [
    { label: 'Telas antes', value: '07', mod: 'highlight' },
    { label: 'Telas depois', value: '03', mod: 'pink' },
    { label: 'Usuários testados', value: '04', mod: 'lavender' },
    { label: 'Conclusão +', value: '64%', mod: '' },
  ],
  stack: ['Wireframe', 'User flow', 'Protótipo', 'Figma', 'FigJam', 'Maze'],
});
