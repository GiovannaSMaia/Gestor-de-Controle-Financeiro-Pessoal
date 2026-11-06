# Arquitetura de Informação e Fluxo do Usuário

Referência: [projeto React](14_implementacao_react.md). Os diagramas descrevem o código atual e seus limites. A [alta fidelidade HTML](15_prototipacao_alta_fidelidade.md) possui escopo próprio.

## Sitemap

```mermaid
flowchart TD
    APP[Projeto React] --> IN[Início]
    APP --> EX[Extratos]
    APP --> ME[Metas]
    APP --> AJ[Ajustes]
    IN --> NOV[Novo lançamento de despesa]
    IN --> EX
    EX --> PE[Pendências fictícias]
    EX --> HI[Histórico: busca e filtro]
    ME --> CI[Dia do ciclo: edição local]
    ME --> LI[Limites e gastos demonstrativos]
    AJ --> PC[Perfil e conta: demonstração]
    AJ --> NO[Notificações: demonstração]
    AJ --> SE[Segurança: demonstração]
    AJ --> TE[Aparência e tema]
    AJ --> EXP[Exportação: sem download]
    AJ --> SU[Ajuda e suporte]
    AJ --> SA[Saída simulada]
```

As seções separam registro cotidiano, consulta, orçamento e preferências. Novo gasto atende à necessidade de registro rápido (12 de 18 respondentes relatam esquecimento). Categorias e limites apoiam necessidades dos relatos Q4–Q6. Essa organização é uma hipótese de design a avaliar, não comprovação de usabilidade.

## F1 — Registrar despesa

Objetivo: registrar um gasto e conferir sua presença no histórico e no total de despesas da sessão.

```mermaid
flowchart TD
    A[Início] --> B[Novo gasto]
    B --> C[Informar valor e observação opcional]
    C --> D[Selecionar categoria]
    D --> E{Categoria selecionada?}
    E -->|Não| D
    E -->|Sim| F[Confirmar Gasto]
    F --> V{Valor monetário positivo e válido?}
    V -->|Não| X[Exibir erro no campo]
    X --> C
    V -->|Sim| G[Adicionar ao estado em memória]
    G --> H[Confirmação]
    H --> I[Voltar ao Início]
    I --> J[Total de despesas atualizado]
    B -->|Voltar sem confirmar| A
```

O frontend exige valor positivo com até duas casas decimais, interpreta moeda brasileira e mostra erro sem cadastrar entradas inválidas. Não há banco de dados. O retorno ocorre por ação do usuário após a confirmação.

## F2 — Consultar histórico

Objetivo: localizar despesa por descrição e categoria, sem alterar o lançamento.

```mermaid
flowchart TD
    A[Outra seção] --> B[Extratos]
    B --> C[Histórico]
    C --> D[Digitar descrição e/ou selecionar categoria]
    D --> E{Há correspondências?}
    E -->|Sim| F[Consultar descrição, categoria e valor]
    E -->|Não| G[Sem registros correspondentes]
    G --> H[Rever busca ou selecionar Todas as Categorias]
    H --> D
    F -->|Nova consulta| D
    F --> I[Sair pela navegação]
    D -->|Limpar busca e filtro| C
```

O atalho “Ver relatório” também leva a Extratos. Esse rótulo é uma pendência; o destino atual não oferece relatório analítico. Não há edição de categoria de lançamentos confirmados.

## F3 — Tratar pendência demonstrativa

Objetivo: decidir se uma despesa fictícia deve entrar no histórico e com qual categoria.

```mermaid
flowchart TD
    A[Extratos] --> B[Pendências]
    B --> C{Existem itens?}
    C -->|Não| D[Pendências resolvidas]
    C -->|Sim| E[Examinar item e categoria sugerida]
    E --> F{Decisão}
    F -->|Aceitar categoria| G[Aceitar Sugestão]
    F -->|Alterar categoria| H[Selecionar outra categoria]
    H --> G
    G --> I[Adicionar ao histórico e remover pendência]
    F -->|Descartar| J[Remover sem adicionar ao histórico]
    I --> C
    J --> C
    E -->|Sair sem decidir| K[Outra seção; item permanece na sessão]
```

Itens e sugestões são predefinidos. Aceitar já move o item; não há importação OFX, chamada de IA ou confirmação coletiva. Descartar remove o item, sem abrir edição nem oferecer desfazer.

## F4 — Consultar orçamento por categoria

Objetivo: interpretar gasto, limite e progresso de uma categoria no cenário demonstrativo.

```mermaid
flowchart TD
    A[Outra seção] --> B[Metas]
    B --> C[Localizar categoria]
    C --> D[Ler gasto, limite e progresso]
    D --> E{Deseja editar?}
    E -->|Não| F[Concluir consulta]
    E -->|Sim| G[Editar limite local]
    G --> H[Salvar Configurações]
    H --> I[Confirmação visual; sem integração com painel]
    I --> F
    F --> J[Sair da tela]
    J --> K[Ao retornar, edição é reiniciada]
```

Consultar é o fluxo inicial de avaliação. O caminho de edição mostra a limitação de salvamento. Gastos por categoria são fixos e não acompanham novas despesas.

## Evoluções planejadas

Receitas, edição posterior de categoria, relatório analítico, exportação real e persistência permanecem planejados. Configurar ciclo e limites precisa de integração antes de ser apresentado como salvamento funcional. A cobertura dos modelos de tarefas está indicada no [capítulo 6](6_analise_tarefas.md).
