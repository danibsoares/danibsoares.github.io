# Daniella Bastos — Portfólio UX/UI

Site portfólio pessoal de Daniella Bastos, designer UX/UI em transição com 8 anos de experiência em suporte SaaS. Apresenta cases de UX Research, Redesign, UI System e Heuristic Evaluation.

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
│   ├── support.js          # Case: quando o suporte vira pesquisa (UX Research)
│   ├── heuristic.js        # Case: avaliação heurística
│   ├── redesign.js         # Case: redesign de fluxo
│   ├── system.js           # Case: mini design system
│   └── gastos.js           # Case: controle de gastos
├── img/
│   └── cases/              # Imagens de artefatos por case (ex: img/cases/support/coleta.jpg)
├── Curriculo_Daniella_Bastos.pdf
└── Resume_Daniella_Bastos_EN.pdf
```

## Configurando um case

Cada arquivo em `cases/` exporta um objeto com a seguinte estrutura:

```js
{
  id: 'support',
  notionUrl: 'https://notion.so/...',  // link do projeto completo (abre em nova aba)
  processo: {
    steps: [
      {
        title: 'Coleta',
        body: '...',
        artifact: 'img/cases/support/coleta.jpg', // caminho da imagem do artefato
        // artifact: 'placeholder'  → mostra box sem imagem (pendente)
        // artifact: null           → sem box nessa etapa
      },
    ],
  },
}
```

Na página de detalhe, cada step com `artifact` exibe uma caixa de imagem 16:9. Ao passar o mouse, uma faixa aparece com "Ver projeto completo ↗" linkando para `notionUrl`. Ao final do case, um grid de até 4 cases relacionados é gerado automaticamente com base nas stacks em comum.
