(window.DB_CASES_RAW = window.DB_CASES_RAW || []).push({
  id: 'gastos',
  year: '2026',
  kind: 'UX Research',
  coverMode: 'dark',
  title: 'quando o gráfico virou alívio.',
  highlight: 'alívio',
  tags: ['Data Viz', 'Psicologia Financeira', 'Usability Test'],
  meta: {
    contexto: 'App de finanças pessoais · mobile',
    papel: 'UX Research, prototipação, testes',
    periodo: '2026 · 5 semanas',
  },
  problema: {
    heading: 'o app sabia tudo, mas culpava.',
    highlightWord: 'culpava',
    body: [
      'Apps financeiros exibem cada gasto como uma acusação. O vermelho que avança na tela, os percentuais que explodem o orçamento — a interface estava certa nos dados, errada no tom.',
      'Esse case mapeou como usuários preferem ver e registrar despesas sem sentir culpa. Resultado: um fluxo de inserção em 3 telas e uma hierarquia visual que reduz carga cognitiva sem esconder a realidade.',
    ],
  },
  processo: {
    heading: 'da culpa ao alívio.',
    highlightWord: 'alívio',
    steps: [
      { title: 'Imersão', body: 'Benchmark de 6 apps financeiros + revisão de literatura em psicologia financeira e data viz.', legenda: '' },
      { title: 'Pesquisa', body: 'Teste de preferência com 3 tipos de gráfico (barra, linha, rosca) com 8 participantes.', legenda: '' },
      { title: 'Protótipo', body: 'Fluxo de inserção de gasto em 3 telas: valor → categoria sugerida → confirmação.', legenda: '' },
      { title: 'Teste', body: '5 sessões de usabilidade. Métrica-alvo: inserção de gasto em até 3 segundos.', legenda: '' },
    ],
  },
  stats: [
    { label: 'Participantes', value: '08', mod: 'highlight' },
    { label: 'Tipos de gráfico', value: '03', mod: 'pink' },
    { label: 'Telas no fluxo', value: '03', mod: 'lavender' },
    { label: 'Tempo de inserção', value: '2.8s', mod: '' },
  ],
  stack: ['Data Viz', 'Psicologia Financeira', 'Usability Test', 'Figma', 'FigJam', 'Notion'],
});
