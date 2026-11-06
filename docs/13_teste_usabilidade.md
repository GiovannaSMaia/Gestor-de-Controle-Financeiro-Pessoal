## 1. Fluxograma de Avaliação de Usabilidade por Observação do Usuário

O fluxo metodológico adotado pela equipe para a condução dos testes de observação com usuários seguiu as seguintes etapas sequenciais:

<img width="2964" height="1408" alt="Gemini_Generated_Image_j6viwbj6viwbj6vi" src="https://github.com/user-attachments/assets/6c6c5d10-5942-4dea-af68-7b237de2a4b7" />


---

## 2. Descrição do Procedimento de Preparação do Teste

### Passo 1: Definição do Objetivo e Cenário de Teste
* **Objetivo:** Avaliar a eficiência, a facilidade de aprendizado e a taxa de sucesso dos usuários ao realizarem operações fundamentais de controle financeiro pessoal no FinanApp (registro rápido de despesas, conciliação de extratos e definição de metas/limites de gastos).
* **Ambiente de Teste:** Sessões remotas gravadas via plataforma de conferência (Google Meet / Teams) com o sistema executando em ambiente web local/hospedado, utilizando compartilhamento de tela.

### Passo 2: Lista de Tarefas que o Usuário Deve Cumprir
1. **Tarefa 1:** Acessar a tela inicial, visualizar o total de despesas do ciclo ativo e identificar o status da meta mensal de gastos.
2. **Tarefa 2:** Cadastrar um novo gasto rápido no valor de R$ 25,00 categorizado como "Alimentação", preenchendo uma observação opcional.
3. **Tarefa 3:** Navegar até a aba de Extratos & Conciliação, verificar as pendências do arquivo OFX e aceitar a sugestão de categoria gerada por IA para uma transação.
4. **Tarefa 4:** Ajustar o limite de gastos da categoria "Alimentação" para R$ 1.000,00 na tela de Metas e salvar as configurações.

### Passo 3: Formulário de Perfil do Usuário (Pré-teste)
* Coleta de dados demográficos básicos, frequência de uso de aplicativos financeiros digitais, familiaridade com ferramentas de controle de orçamento e consentimento de gravação da sessão para fins acadêmicos.

---

## 3. Resultados do Teste

### Avaliação de cada Tarefa por Usuário

#### Usuário 1 (Avaliadora: Vitória Emanuelly Machado Costa)
* **Perfil do Usuário:** Estudante universitário, usuário frequente de aplicativos de banco digital.

| Tarefa | Grau de Sucesso | Total de Erros cometidos | Tipos de Erros | Tempo Necessário | Grau de Satisfação |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | Sucesso Total | 0 | Nenhum erro | 8 segundos | Totalmente Satisfeito |
| **2** | Sucesso Parcial | 1 | Compreensão (formato de entrada de valor) | 14 segundos | Confusão Moderada |
| **3** | Sucesso Total | 0 | Nenhum erro | 12 segundos | Satisfeito |
| **4** | Sucesso Total | 0 | Nenhum erro | 10 segundos | Totalmente Satisfeito |

* **Links dos vídeos:** [Gravação da Sessão - Usuário 1 (Exemplo)](https://github.com/GiovannaSMaia/Gestor-de-Controle-Financeiro-Pessoal)
* **Respostas do Formulário do Usuário:** O usuário relatou que a interface possui um visual limpo e agradável, mas sentiu leve hesitação ao digitar o valor monetário devido à ausência de máscara explícita de centavos na Tarefa 2.

---

#### Usuário 2 (Avaliador: Gabriel Matos)
* **Perfil do Usuário:** Profissional autônomo, gerencia finanças manualmente por planilhas.

| Tarefa | Grau de Sucesso | Total de Erros cometidos | Tipos de Erros | Tempo Necessário | Grau de Satisfação |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | Sucesso Total | 0 | Nenhum erro | 6 segundos | Satisfeito |
| **2** | Sucesso Total | 0 | Nenhum erro | 9 segundos | Satisfeito |
| **3** | Sucesso Parcial | 2 | Não completou a ação de desfazer (1), Navegação (1) | 25 segundos | Confusão Moderada |
| **4** | Sucesso Total | 0 | Nenhum erro | 11 segundos | Totalmente Satisfeito |

* **Links dos vídeos:** [Gravação da Sessão - Usuário 2](https://youtu.be/i9gbKz3uG9s)
* **Respostas do Formulário do Usuário:** Destacou a praticidade da conciliação automática com IA na Tarefa 3, porém apontou falta de clareza imediata sobre o que acontece ao descartar uma transação pendente por engano.

---

#### Usuário 3 (Avaliadora: Giovana Stofel)
* **Perfil do Usuário:** Colaboradora de setor administrativo, busca praticidade no controle de gastos diários.

| Tarefa | Grau de Sucesso | Total de Erros cometidos | Tipos de Erros | Tempo Necessário | Grau de Satisfação |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **1** | Sucesso Total | 0 | Nenhum erro | 7 segundos | Totalmente Satisfeito |
| **2** | Sucesso Total | 0 | Nenhum erro | 11 segundos | Satisfeito |
| **3** | Sucesso Total | 0 | Nenhum erro | 15 segundos | Satisfeito |
| **4** | Sucesso Parcial | 1 | Compreensão de validação de campos | 18 segundos | Neutro / Insatisfeito |

* **Links dos vídeos:** [Gravação da Sessão - Usuário 3 (Exemplo)](https://github.com/GiovannaSMaia/Gestor-de-Controle-Financeiro-Pessoal)
* **Respostas do Formulário do Usuário:** Avaliou positivamente o design moderno e o modo escuro, mas sugeriu avisos visuais mais claros na alteração de limites de metas na Tarefa 4 para evitar salvamentos incorretos.

---

## Conclusão da Avaliação por Observação do Usuário

A avaliação de usabilidade por observação direta com 3 usuários permitiu validar que o **FinanApp** atinge um alto índice de sucesso nas tarefas essenciais de navegação, cadastro de despesas e visualização de metas financeiras. Os principais pontos de atrito identificados concentraram-se na formatação de campos numéricos (entrada de valores) e na ausência de mecanismos de reversão (*undo*) em ações destrutivas rápidas (como o descarte de extratos). Os dados coletados fundamentam os direcionamentos para os próximos ciclos de refinamento de interface e melhoria da experiência do usuário (UX/UI).
