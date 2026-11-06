## 1. Planejamento de Usabilidade (Método DECIDE)

O framework **DECIDE** guia o planejamento, execução e análise da avaliação de IHC, garantindo que o estudo cubra todas as necessidades metodológicas do projeto:

| Letra | Significado | Aplicação no Projeto (FinanApp) |
| :---: | :--- | :--- |
| **D** | **Determine os objetivos da avaliação** | Identificar problemas de usabilidade, medir o tempo de execução e a taxa de sucesso dos usuários nas tarefas principais do FinanApp (registro de gastos, conciliação de extratos com IA e ajuste de metas de orçamento). |
| **E** | **Explore as perguntas a serem respondidas** | • Os usuários conseguem registrar novos gastos sem dificuldades?<br>• O sistema fornece feedback claro durante a conciliação automática de extratos?<br>• O layout e a navegação entre telas são intuitivos para diferentes perfis? |
| **C** | **Escolha os métodos de avaliação** | Combinação de **Avaliação por Observação do Usuário** (testes de usabilidade práticos com gravação de tela/áudio) e **Inspeção Heurística** (análise especialista baseada nas 10 heurísticas de Nielsen). |
| **I** | **Identifique as questões práticas** | • Recrutamento de 3 usuários representativos (amigos/colegas com perfis diversificados).<br>• Definição de horários para sessões remotas via Google Meet.<br>• Preparação do ambiente de testes e roteiro padrão de tarefas. |
| **D** | **Decida como lidar com as questões éticas** | Aplicação prévia do **Termo de Consentimento Livre e Esclarecido (TCLE)**, garantindo anonimato dos dados, permissão para gravação e direito de desistência a qualquer momento da sessão. |
| **E** | **Avalie, interprete e apresente os dados** | Agregação das métricas quantitativas (tempo médio, taxa de sucesso, contagem de erros por tipo) e qualitativas (grau de satisfação e comentários verbais) para gerar relatórios de melhoria contínua da interface. |

---

## 2. Lista de Instrumentos

### 1) Termo de Consentimento (TCLE)
> **Objetivo:** Documento formal apresentado ao participante antes do teste para assegurar sua concordância voluntária.

* **Conteúdo principal:**
  * Explicação clara do propósito acadêmico da avaliação do **FinanApp**.
  * Confirmação de que a sessão será gravada (tela e áudio) exclusivamente para fins de análise de usabilidade.
  * Garantia de sigilo, privacidade e anonimato das informações pessoais e financeiras simuladas.
  * Declaração de que a participação é voluntária e o usuário pode interromper o teste quando desejar.

---

### 2) Questionários
* **Questionário Pré-teste (Perfil do Usuário):**
  * Coleta dados demográficos, frequência de uso de aplicativos de finanças e nível de familiaridade com ferramentas digitais de controle de orçamento.
* **Questionário Pós-teste (Escala de Satisfação):**
  * Aplicação de escala Likert (de 1 a 5) para avaliar o grau de satisfação com a interface, clareza das mensagens, facilidade de navegação e utilidade geral do sistema.

---

### 3) Tabela de Observação
> **Objetivo:** Planilha de registro utilizada pelo avaliador durante a sessão prática para monitorar o desempenho do usuário em tempo real.

| Tarefa | Grau de Sucesso (Total / Parcial / Fracasso) | Total de Erros | Tipos de Erros Cometidos | Tempo Necessário | Observações / Comentários do Usuário |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **1. Ver Resumo e Metas** | Sucesso Total | 0 | Nenhum | 8s | Visualizou rapidamente os dados na tela inicial. |
| **2. Cadastrar Novo Gasto** | Sucesso Parcial | 1 | Compreensão (valor) | 14s | Hesitou sobre como inserir centavos sem máscara explícita. |
| **3. Conciliar Extratos** | Sucesso Total | 0 | Nenhum | 12s | Aprovou a sugestão de IA com facilidade. |
| **4. Ajustar Metas** | Sucesso Total | 0 | Nenhum | 10s | Navegação fluida até a aba de metas. |

---

### 4) Formulário de Avaliação Heurística
> **Objetivo:** Instrumento de inspeção especialista utilizado pelos membros da equipe para rastrear violações das 10 Heurísticas de Nielsen nas telas do sistema.

* **Estrutura de Registro Padrão:**
  * **ID da Violação:** Código sequencial único (ex: *V01*, *V02*).
  * **Tela / Contexto:** Local exato avaliado (ex: *Tela Início*, *Tela de Ajustes*).
  * **Heurística Afetada:** Qual princípio de Nielsen foi violado (ex: *1. Visibilidade do status do sistema*).
  * **Grau de Severidade:** Escala de 0 (Sem importância) a 4 (Catastrófico).
  * **Descrição do Problema:** Relato detalhado do atrito de usabilidade encontrado.
  * **Sugestão de Correção:** Proposta prática de melhoria para o design da interface.
