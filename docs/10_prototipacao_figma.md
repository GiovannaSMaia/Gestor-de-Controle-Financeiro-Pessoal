# Prototipação de Média e Alta Fidelidade

## Evolução dos protótipos

| Etapa | Entrega | Finalidade |
| --- | --- | --- |
| Baixa fidelidade | [Protótipo em papel](9_prototipacao_papel.md) | Explorar a organização das telas. |
| Média fidelidade | [Figma](https://doge-bottom-60575002.figma.site/) | Referência visual e de navegação. |
| Alta fidelidade | [HTML, CSS e JavaScript](../public/prototipo-alta-fidelidade/index.html) | Experimentar telas detalhadas e interações no navegador. |
| Implementação final | [Aplicação React](14_implementacao_react.md) | Implementação com React e Vite. |

O [template público da disciplina](https://github.com/FagnerPimentel-Academic/template-ux/blob/main/docs/10_prototipacao_figma.md) identifica a etapa como “Prototipação de Alta Fidelidade (FIGMA)” e solicita correspondência com a arquitetura e o fluxo do usuário. A versão em HTML, CSS e JavaScript é uma entrega adicional, conforme orientação relatada pelo grupo.

## Acesso e arquivos

- Após a publicação pelo workflow: [abrir alta fidelidade](https://giovannasmaia.github.io/Gestor-de-Controle-Financeiro-Pessoal/prototipo-alta-fidelidade/).
- Localmente: abrir `public/prototipo-alta-fidelidade/index.html` no navegador ou executar `npm run dev` e acessar `http://127.0.0.1:5173/Gestor-de-Controle-Financeiro-Pessoal/prototipo-alta-fidelidade/`.
- Os arquivos podem ser abertos diretamente sem React ou build. É necessário acesso à internet para Tailwind, ícones, fontes e gráficos carregados por CDN.

A versão parte do arquivo `gestor_de_controle_financeiro_pessoal.html` fornecido pelo grupo, organizado em `index.html` (estrutura e formulários), `styles.css` (estilos complementares), `tema.js` (cores do Tailwind) e `app.js` (comportamento em JavaScript).

O Vite copia esses arquivos de `public/` para `dist/`, disponibilizando o protótipo junto da aplicação final em URL própria. Os caminhos internos são relativos para funcionar no GitHub Pages.

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

Execute `node verify-prototipo.mjs` com Microsoft Edge instalado e acesso à internet. A verificação cobre cadastro, busca, filtros, exclusão, criação de meta, alteração de orçamento, tema e navegação móvel. Capturas: [desktop](verificacao/alta-fidelidade/desktop.png) e [celular](verificacao/alta-fidelidade/mobile.png).

## Limites da simulação

Os dados são fictícios e as alterações ficam em memória: recarregar a página restaura o cenário inicial. Não há autenticação, conexão bancária ou backend. A evolução mensal usa valores ilustrativos; a distribuição por categoria usa os lançamentos da sessão.

A [arquitetura planejada](8_arquitetura_fluxo.md) também descreve conciliação de OFX, sugestões por IA, ciclo personalizado, limites por categoria e exportação. Esses fluxos não estão implementados nesta entrega e não devem ser apresentados como funcionais. As metas desta versão representam objetivos de economia e um orçamento mensal global.
