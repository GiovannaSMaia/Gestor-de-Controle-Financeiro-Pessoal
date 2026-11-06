# Projeto em React

O React é a referência atual para requisitos, arquitetura, fluxos e avaliações. A interface teve como referência inicial a [média fidelidade Figma](10_prototipacao_figma.md).

[Prototipação de alta fidelidade](../src/prototipa%C3%A7%C3%A3o%20de%20alta%20fidelidade/).

## Telas e comportamento atual

| Tela | Comportamento identificado no código | Limites |
| --- | --- | --- |
| Início | Soma despesas da sessão, mostra progresso sobre R$ 3.000 e últimas despesas | Não representa receitas menos despesas; ciclo e meta do painel são fixos |
| Novo lançamento | Informar valor positivo, selecionar categoria e observação; cadastrar despesa e receber confirmação | Não cadastra receita; dados ficam em memória |
| Extratos | Buscar por descrição, filtrar categoria e consultar histórico; aceitar ou descartar pendências fictícias | Não importa OFX nem executa IA; não edita despesa já confirmada |
| Metas | Editar dia e limites locais; consultar barras e confirmação de salvamento | Valores se perdem ao sair da tela; não recalculam o painel |
| Ajustes | Abrir subseções e alternar tema | Perfil, segurança, exportação e saída são demonstrações, sem serviços reais |

Novas despesas e pendências aceitas atualizam o histórico e o total em Início durante a sessão. Recarregar restaura os dados iniciais. Há regras de layout para celular e computador; adequação visual e acessibilidade ainda precisam de avaliação.

## Execução

Em `src/projeto/`, com Node.js 22.12 ou superior:

```sh
npm install
npm run dev
```

No PowerShell, usar `npm.cmd` quando necessário. Acessar `http://127.0.0.1:5173/Gestor-de-Controle-Financeiro-Pessoal/`. Para produção, usar `npm run build` e `npm run preview`; a prévia fica em `http://127.0.0.1:4173/Gestor-de-Controle-Financeiro-Pessoal/`.

## Organização

- `src/projeto/main.jsx`: inicialização do React.
- `src/projeto/App.jsx`: telas, navegação, componentes e dados demonstrativos.
- `src/projeto/styles.css`: estilos e [fontes locais documentadas](../src/projeto/public/fonts/FONTES.md).
- `src/projeto/verify-ui.mjs`: roteiro técnico do React; requer revisão antes de reutilizar.

## Pendências identificadas por leitura do código

1. A validação de valores foi corrigida no frontend: gastos e limites devem ser positivos, com até duas casas decimais. Aceita `25,50`, `25.50` e `1.234,56`, sem substituir entradas inválidas por R$ 25,00. O dia do ciclo deve ser inteiro entre 1 e 28; mensagens são exibidas junto aos campos.
2. Em Metas, o estado é local e `handleSave` apenas altera a mensagem; falta manter valores entre telas e integrar o painel.
3. “Ver relatório” abre Extratos; relatório analítico não está implementado.
4. Exportação chama confirmação genérica sem produzir arquivo.
5. Seletores de tema usam `div` com clique; teclado, semântica e foco precisam de revisão.

Esses são achados técnicos preliminares, não resultados de inspeções individuais ou testes com usuários. Não há backend, autenticação, persistência ou sincronização em nuvem.

## Verificação

As capturas anteriores em `docs/verificacao/` não comprovam a versão atual. O script `src/projeto/verify-ui.mjs` procura “Gasto registrado!”, enquanto o código atual usa “Gasto registado com sucesso!”, e acessa o endereço sem o caminho base. Atualizar e executar o roteiro antes de declarar nova validação técnica.

Esta revisão documental se baseia em leitura de código, sem comprovação no navegador. Consulte o [plano de adequação](16_adequacao.md).
