# Gestor de Controle Financeiro Pessoal

Projeto apresentado ao Centro Universitário [FEI](https://portal.fei.edu.br/), como parte dos requisitos para aprovação na disciplina de Experiência do Usuário (CCP310) do curso de Ciência da Computação, orientado pelo Prof. Dr. [Fagner de Assis Moura Pimentel](http://lattes.cnpq.br/6747210702910392).

Desenvolvido por:

- Giovanna Stofel Maia
- Gabriel Matos Lourenço
- Vitoria Emanuelly Machado Costa

## Conhecendo o problema

O projeto propõe um gestor financeiro pessoal para acompanhar despesas, orçamento e metas com menos esforço de registro e consulta. O objetivo é apoiar tanto registros rápidos no celular quanto o acompanhamento de informações no computador.

O público principal é formado por jovens adultos e pessoas interessadas em organizar suas finanças. Pessoas que preferem ferramentas tradicionais também são consideradas na pesquisa.

Os benefícios esperados são reduzir o esquecimento de gastos, facilitar a categorização e tornar as informações financeiras compreensíveis. O React permite registrar despesas, consultar o histórico e tratar pendências fictícias durante a sessão. Há limitações e dados demonstrativos descritos na documentação do projeto.

O contexto de uso inclui consultas rápidas no smartphone, sujeitas a distrações, e acompanhamento no computador com maior tempo de atenção.

## Estrutura

```text
├── docs/                                  Documentação do trabalho
├── src/
│   ├── .vscode/                           Configuração local do editor
│   ├── .gitignore                         Regras para arquivos gerados
│   ├── dist/                              Build anterior, ignorado pelo Git
│   ├── projeto/                           Projeto React e configuração Vite
│   │   ├── node_modules/                  Dependências locais, ignoradas pelo Git
│   │   ├── dist/                          Build atual, ignorado pelo Git
│   │   ├── public/fonts/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── styles.css
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── vite.config.js
│   │   └── verify-ui.mjs
│   └── README.md
└── README.md
```

As configurações do editor, dependências, builds e regras de exclusão ficam dentro de `src/`. Somente os metadados `.git/` e o workflow `.github/` permanecem na raiz por serem estruturas do Git e do GitHub. Dependências e builds são ignorados pelas regras de `src/.gitignore`. O diretório `src/dist/` preserva o build anterior à reorganização; novos builds são gerados em `src/projeto/dist/`.

O React é a referência atual do projeto. A média fidelidade está no [Figma](https://doge-bottom-60575002.figma.site/). As [fontes tipográficas do React](src/projeto/public/fonts/FONTES.md) estão documentadas separadamente.

## Executar o projeto React

Com Node.js 22.12 ou superior:

```sh
cd src/projeto
npm install
npm run dev
```

No PowerShell, use `npm.cmd` se necessário. Abra `http://127.0.0.1:5173/Gestor-de-Controle-Financeiro-Pessoal/`.

Para gerar produção, execute `npm run build` dentro de `src/projeto/`. Para conferir o resultado, execute `npm run preview` e abra `http://127.0.0.1:4173/Gestor-de-Controle-Financeiro-Pessoal/`.

## Publicação

O workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml) instala e compila o React em `src/projeto/` e publica `src/projeto/dist/` no GitHub Pages.

Em Settings → Pages, selecionar GitHub Actions. Após enviar as alterações para main e o workflow concluir:

- [Projeto React](https://giovannasmaia.github.io/Gestor-de-Controle-Financeiro-Pessoal/)

## Desenvolvimento

### Descoberta

- [Análise de Concorrência](docs/1_concorrencia.md)
- [Pesquisa e Coleta de Dados com Usuários](docs/2_pesquisa_usuarios.md)
- [Perfil do Usuário](docs/3_perfil_usuario.md)
- [Personas](docs/4_personas.md)
- [Cenário de Análise/Problema](docs/5_cenarios.md)

### Definição

- [Análise de Tarefas](docs/6_analise_tarefas.md)
- [Requisitos de UX e Metas de Usabilidade](docs/7_requisitos_ux.md)
- [Arquitetura de Informação e Fluxo do Usuário](docs/8_arquitetura_fluxo.md)

### Prototipação e projeto

- [Prototipação em Papel](docs/9_prototipacao_papel.md)
- [Média Fidelidade no Figma](docs/10_prototipacao_figma.md)
- [Prototipação de alta fidelidade](src/prototipa%C3%A7%C3%A3o%20de%20alta%20fidelidade/)
- [Projeto React](docs/14_implementacao_react.md)

### Avaliação

- [Planejamento da Avaliação](docs/11_planejamento_avaliacao.md)
- [Inspeção Heurística](docs/12_heuristica.md)
- [Teste de Usabilidade](docs/13_teste_usabilidade.md)

A adequação do conteúdo e as avaliações serão continuadas separadamente desta reorganização.
