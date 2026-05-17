(window.DB_CASES_RAW = window.DB_CASES_RAW || []).push({
  id: 'heuristic',
  year: '2026',
  kind: 'Heuristic',
  coverMode: 'dark',
  title: '10 falhas de usabilidade.',
  highlight: 'usabilidade',
  tags: ['Nielsen 10', 'Severity', 'Auditoria'],
  meta: {
    contexto: 'App móvel de serviços',
    papel: 'Auditoria heurística, relatório',
    periodo: '2026 · 3 semanas',
  },
  problema: {
    heading: 'o produto não era o problema.',
    highlightWord: 'produto',
    body: [
      'Dez heurísticas de Nielsen aplicadas a um app com quase zero feedback de usuário. Cada falha encontrada representava um ponto de abandono silencioso.',
      'O relatório final priorizou 10 violações por severidade e incluiu propostas de correção para as 3 mais críticas.',
    ],
  },
  processo: {
    heading: 'da auditoria ao relatório.',
    highlightWord: 'auditoria',
    steps: [
      { title: 'Mapeamento', body: 'Listagem de todos os fluxos do app por ordem de criticalidade.', legenda: '' },
      { title: 'Auditoria', body: 'Aplicação das 10 heurísticas com registro de evidências e screenshots.', legenda: '' },
      { title: 'Severidade', body: 'Classificação 0–4 de cada violação com impacto e frequência.', legenda: '' },
      { title: 'Proposta', body: 'Mockups corretivos para as 3 violações mais graves.', legenda: '' },
    ],
  },
  stats: [
    { label: 'Heurísticas avaliadas', value: '10', mod: 'highlight' },
    { label: 'Violações encontradas', value: '27', mod: 'pink' },
    { label: 'Críticas (sev. 4)', value: '03', mod: 'lavender' },
    { label: 'Mockups entregues', value: '03', mod: '' },
  ],
  stack: ['Nielsen 10', 'Severity', 'Auditoria', 'Figma', 'Notion'],
});
