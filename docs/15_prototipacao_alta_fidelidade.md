# Prototipação de Alta Fidelidade

A entrega desta etapa em HTML/CSS/JS foi alinhada com o professor, conforme informado pela equipe. Ela permanece independente do projeto React, referência atual da arquitetura e das avaliações. As interações deste capítulo pertencem exclusivamente ao HTML e não implicam disponibilidade no React.

## Evolução dos protótipos

### Registro da conclusão desta etapa

A alta fidelidade foi concluída e documentada após o início da implementação final em React. Trata-se de uma formalização retrospectiva da etapa: a ordem da tabela abaixo representa o processo de projeto previsto, e não a cronologia dos commits. A entrega permite demonstrar e avaliar as interações com dados fictícios em HTML, CSS e JavaScript, separadamente da aplicação final.

Os arquivos oficiais desta entrega estão em `src/prototipação de alta fidelidade/`. Os arquivos `prototype.html`, `prototype.css`, `prototype.js` e `fonts.css` em `referencias/` são referências anteriores; para apresentação e avaliação, utilize a versão indicada nesta página.

| Etapa | Entrega | Finalidade |
| --- | --- | --- |
| Baixa fidelidade | [Protótipo em papel](9_prototipacao_papel.md) | Explorar a organização das telas. |
| Média fidelidade | [Figma](https://doge-bottom-60575002.figma.site/) | Referência visual e de navegação. |
| Alta fidelidade | [HTML, CSS e JavaScript](../src/prototipa%C3%A7%C3%A3o%20de%20alta%20fidelidade/index.html) | Experimentar telas detalhadas e interações no navegador. |
| Implementação final | [Aplicação React](14_implementacao_react.md) | Implementação com React e Vite. |

Neste projeto, o Figma corresponde à média fidelidade. A alta fidelidade é uma entrega própria em HTML, CSS e JavaScript, documentada nesta página.

## Acesso e arquivos

```text
src/prototipação de alta fidelidade/
├── README.md                 Guia de acesso e link para este documento
├── index.html                Protótipo navegável oficial
├── styles.css                Estilos
├── tema.js                   Configuração visual
├── app.js                    Interações e dados fictícios
├── verify-prototipo.mjs       Verificação automatizada
├── verificacao/              Capturas desktop e celular
└── referencias/              Arquivos anteriores do Figma
```

Os arquivos de `referencias/` são preservados como material histórico. O `prototype.js` contém um bundle React exportado e o `prototype.html` referencia o site Figma; eles não são a entrega oficial em JavaScript puro. Para demonstrar esta etapa, abra o `index.html` desta pasta.

- Após a publicação pelo workflow: [abrir alta fidelidade](https://giovannasmaia.github.io/Gestor-de-Controle-Financeiro-Pessoal/prototipa%C3%A7%C3%A3o%20de%20alta%20fidelidade/).
- Localmente: abrir `src/prototipação de alta fidelidade/index.html` no navegador. O servidor de desenvolvimento React não serve essa pasta separada.
- Os arquivos podem ser abertos diretamente sem React ou build. É necessário acesso à internet para Tailwind, ícones, fontes e gráficos carregados por CDN.

A versão parte do arquivo `gestor_de_controle_financeiro_pessoal.html` fornecido pelo grupo, organizado em `index.html` (estrutura e formulários), `styles.css` (estilos complementares), `tema.js` (cores do Tailwind) e `app.js` (comportamento em JavaScript).

A configuração Vite em `src/projeto/` copia a pasta de alta fidelidade para `src/projeto/dist/`, disponibilizando o protótipo junto da aplicação final em URL própria. Os caminhos internos são relativos para funcionar no GitHub Pages.

## Interações demonstráveis

| Tela | Interações |
| --- | --- |
| Início | Saldo, progresso do orçamento, últimas despesas e atalhos para lançamento e relatório. |
| Novo lançamento | Alternar despesa/receita; preencher descrição, valor e categoria; salvar ou cancelar; atualizar saldo e histórico. |
| Extratos | Buscar por descrição, filtrar receitas/despesas e excluir lançamentos. |
| Metas | Consultar progresso e criar uma meta com título, alvo e valor acumulado. |
| Relatório | Evolução mensal ilustrativa e distribuição por categoria atualizada com os lançamentos. |
| Ajustes | Alternar tema claro/escuro e editar o limite mensal do orçamento. |

## Roteiro de demonstração

1. Conferir o saldo no início e abrir **Novo Gasto**.
2. Registrar uma despesa de R$ 25,00 com descrição “Almoço” e categoria “Alimentação”.
3. Verificar a alteração do saldo; em **Extratos**, buscar “Almoço” e experimentar os filtros.
4. Criar uma receita e verificar sua indicação no histórico.
5. Em **Metas**, criar uma reserva de R$ 1.000,00 com R$ 250,00 acumulados e conferir o progresso de 25%.
6. Abrir o relatório pelo início e conferir os gastos por categoria.
7. Em **Ajustes**, alternar o tema e editar o limite mensal.
8. Repetir a navegação em uma janela de celular e conferir o botão central de lançamento.

## Verificação

Os formulários impedem valores inválidos e títulos ou descrições compostos apenas por espaços. As janelas recebem o foco ao abrir, mantêm a navegação por Tab em seus controles, fecham com Escape e devolvem o foco ao botão de origem. Cancelar não adiciona dados. O cenário inicial contém R$ 3.000,00 de receitas e R$ 190,40 de despesas, resultando em saldo de R$ 2.809,60; após o almoço de R$ 25,00 do roteiro, o saldo esperado é R$ 2.784,60.

Execute `node "src/prototipação de alta fidelidade/verify-prototipo.mjs"` com Microsoft Edge instalado e acesso à internet. A verificação cobre cadastro, busca, filtros, exclusão, criação de meta, alteração de orçamento, tema e navegação móvel. Capturas: [desktop](../src/prototipa%C3%A7%C3%A3o%20de%20alta%20fidelidade/verificacao/desktop.png) e [celular](../src/prototipa%C3%A7%C3%A3o%20de%20alta%20fidelidade/verificacao/mobile.png).

Para conferir a distribuição junto da aplicação final, execute `npm run build` em `src/projeto/`: o resultado deve conter `dist/prototipação de alta fidelidade/index.html`, `styles.css`, `tema.js` e `app.js`. As verificações técnicas não substituem os testes de usabilidade com participantes descritos nas etapas de avaliação.

## Limites da simulação

Os dados são fictícios e as alterações ficam em memória: recarregar a página restaura o cenário inicial. Não há autenticação, conexão bancária ou backend. A evolução mensal usa valores ilustrativos; a distribuição por categoria usa os lançamentos da sessão.

A [arquitetura planejada](8_arquitetura_fluxo.md) também descreve conciliação de OFX, sugestões por IA, ciclo personalizado, limites por categoria e exportação. Esses fluxos não estão implementados nesta entrega e não devem ser apresentados como funcionais. As metas desta versão representam objetivos de economia e um orçamento mensal global.
