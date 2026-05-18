(window.DB_CASES_RAW = window.DB_CASES_RAW || []).push({
  id: 'calma',
  year: '2026',
  kind: 'Usability Test',
  coverMode: 'light',
  title: 'quando uma pergunta vira confiança.',
  highlight: 'confiança',
  tags: ['Progressive Disclosure', 'Usability Test', 'Onboarding'],
  notionUrl: '',
  meta: {
    contexto: 'Startup de saúde mental · app mobile',
    papel: 'UX Research, prototipação, testes de usabilidade',
    periodo: '2026 · 4 semanas',
  },
  problema: {
    heading: 'doze perguntas antes da primeira respiração.',
    highlightWord: 'perguntas',
    body: [
      'O onboarding do Calma exigia um questionário de 12 itens antes de mostrar qualquer valor. Resultado: 66% dos novos usuários abandonavam antes de ver a primeira sessão de meditação.',
      'Esse case redesenhou o fluxo com progressive disclosure — reduzindo para 1 pergunta obrigatória no início. A taxa de conclusão saltou de 34% para 72% em testes com 5 usuários.',
    ],
  },
  processo: {
    heading: 'menos perguntas, mais confiança.',
    highlightWord: 'confiança',
    steps: [
      {
        title: 'Benchmark',
        body: 'Análise do onboarding de 5 apps concorrentes (Headspace, Calm, Insight Timer, Meditopia, Balance). Mapeamento de padrões: progressive disclosure vs. upfront questionnaire.',
        legenda: 'Pesquisa sobre como o mercado resolve o mesmo problema.',
        artifact: 'img/cases/calma/benchmark.jpg',
      },
      {
        title: 'Entrevistas',
        body: '6 entrevistas com usuários que abandonaram o onboarding na primeira semana + análise de session recordings (Hotjar) para identificar o momento exato de abandono.',
        legenda: 'Conversa direta com quem desistiu para entender o porquê.',
        artifact: 'img/cases/calma/entrevistas.jpg',
      },
      {
        title: 'Protótipo',
        body: 'Novo fluxo em 4 telas: boas-vindas → 1 pergunta-chave → primeira sessão grátis → perfil progressivo. Wireframes no FigJam, hi-fi no Figma com componentes do design system existente.',
        legenda: 'Transformar os aprendizados em uma solução navegável.',
        artifact: 'img/cases/calma/prototipo.jpg',
      },
      {
        title: 'Teste',
        body: '5 sessões de usabilidade moderadas com novos usuários. Métrica-alvo: taxa de conclusão acima de 70%. Resultado: 72%.',
        legenda: 'Validar com usuários reais se a solução funciona.',
        artifact: 'img/cases/calma/teste.jpg',
      },
    ],
  },
  stats: [
    { label: 'Conclusão do onboarding', value: '72%',   mod: 'highlight' },
    { label: 'Usuários entrevistados',   value: '06',    mod: 'pink' },
    { label: 'Telas no novo fluxo',      value: '04',    mod: 'lavender' },
    { label: 'Tempo de onboarding',      value: '1m20s', mod: '' },
  ],
  stack: ['Progressive Disclosure', 'Usability Test', 'Onboarding', 'Figma', 'FigJam', 'Hotjar', 'Notion'],
});
