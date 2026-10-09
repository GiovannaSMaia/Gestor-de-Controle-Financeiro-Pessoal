# Arquitetura de Informação e Fluxo do Usuário

## 1. Arquitetura de Informação (Sitemap)

### 1.1. Lista de Telas e Seções Principais

1. **Início (Dashboard)**
   * Saudação e Identificação do Ciclo Ativo
   * Card de Saldo Restante e Progresso da Meta Mensal
   * Atalhos de Ação Rápida: *Novo Gasto* e *Ver Relatório*
   * Lista de Últimas Despesas Registradas

2. **Extratos (Conciliação e Histórico)**
   * **Aba Pendências:** Notificação de arquivos importados (`.ofx`), sugestões de categorização por Inteligência Artificial (*Aceitar* / *Descartar*) e botão de confirmação (*Concluir Conciliação*).
   * **Aba Histórico:** Lista completa e cronológica de todas as movimentações com indicação visual de categoria, data e valor.

3. **Novo Lançamento (Atalho Central `+`)**
   * Campo de entrada do valor em reais (`R$`)
   * Grid de seleção visual de categorias por ícones (*Alimentação*, *Transporte*, *Mercado*, *Lazer*, *Saúde*, *Outros*)
   * Campo opcional para observação/descrição
   * Botão de confirmação de registro (*Confirmar Gasto*)

4. **Metas & Configurações**
   * **Ciclo Personalizado:** Campo para definição do dia de início do ciclo mensal (ex.: dia 5)
   * **Limites por Categoria:** Barras de progresso com valor gasto vs. limite teto configurável por categoria
   * Botão de salvamento (*Salvar Configurações*)

5. **Ajustes (Perfil e Sistema)**
   * Cartão de Perfil do Usuário e Plano
   * Gerenciamento de Perfil e Conta
   * Notificações
   * Segurança e Senha
   * Aparência (Modo Claro/Escuro)
   * Exportar Dados (CSV/PDF)
   * Ajuda e Suporte
   * Botão para Sair da Conta

---

### 1.2. Diagrama de Sitemap (Hierarquia de Navegação)

| Seção Principal | Subseções e Elementos de Tela |
| :--- | :--- |
| **1. Início / Dashboard** | • Saldo Restante do Ciclo<br>• Meta Mensal e Progresso<br>• Atalhos: Novo Gasto e Ver Relatório<br>• Últimas Despesas |
| **2. Extratos** | • Aba Pendências (Conciliação com IA)<br>• Aba Histórico de Lançamentos |
| **3. Novo Lançamento (+)** | • Campo de Valor (R$)<br>• Grid de Categorias Visuais<br>• Observação Opcional |
| **4. Metas & Configurações** | • Ciclo Personalizado (Dia do Mês)<br>• Limites por Categoria (Barras de Progresso) |
| **5. Ajustes** | • Perfil e Conta<br>• Notificações<br>• Segurança e Senha<br>• Aparência<br>• Exportar Dados<br>• Ajuda e Suporte |

---

### 1.3. Justificativa da Organização

A estrutura do protótipo foi projetada diretamente a partir das necessidades identificadas nas personas e nos cenários de uso:

* **Acesso Imediato ao Registro (Persona: O Jovem Prático e Imediato):** O botão de ação flutuante (`+`) no centro da barra de navegação inferior permite acionar o formulário de *Novo Lançamento* a partir de qualquer tela. O formulário utiliza grandes botões visuais com ícones para selecionar categorias, reduzindo os toques necessários e o tempo de digitação em mobilidade.
* **Automação e Ciclos Flexíveis (Persona: O Analista de Planilhas e Metas):** A aba de *Pendências* no Extrato resolve o cansaço do registro manual ao importar arquivos bancários (`.ofx`) e sugerir categorias automaticamente via Inteligência Artificial. Além disso, a tela de *Metas* permite definir o início do ciclo financeiro no dia do pagamento do usuário.
* **Navegação Clara e Rasa:** A barra de navegação fixa dividida em 4 seções (*Início*, *Extratos*, *Metas* e *Ajustes*) garante que qualquer funcionalidade do sistema esteja acessível a um ou dois toques de distância, respeitando os princípios de usabilidade e acessibilidade.

---

## 2. Fluxo do Usuário (User Flow)

### Funcionalidade 1: Registrar um Lançamento Rápido de Despesa

* **Objetivo do Usuário:** Registrar uma despesa efetuada no momento (ex.: almoço ou transporte) de forma rápida pelo celular para evitar esquecimentos.
* **Passos do Fluxo:**
  1. **Início:** O usuário abre o aplicativo e visualiza a tela de *Início / Dashboard*.
  2. **Ação:** Toca no botão central `+` (ou no atalho *Novo gasto*).
  3. **Entrada de Dados:** Acessa a tela de *Novo Lançamento* e insere o valor do gasto.
  4. **Categorização:** Seleciona o ícone visual correspondente à categoria e adiciona uma observação opcional.
  5. **Validação:** O sistema verifica se o valor é maior que zero. Se não for, solicita a correção.
  6. **Conclusão:** O usuário clica em *Confirmar Gasto*, o registro é salvo no banco de dados e o aplicativo retorna ao Dashboard com os saldos atualizados.

---

### Funcionalidade 2: Conciliar Lançamentos Pendentes via Inteligência Artificial

* **Objetivo do Usuário:** Validar e aceitar sugestões de categorias feitas pela Inteligência Artificial para transações importadas por extrato bancário.
* **Passos do Fluxo:**
  1. **Navegação:** O usuário clica na aba *Extratos* na barra inferior.
  2. **Seleção:** Seleciona a aba *Pendências* e visualiza os cards importados via `.ofx`.
  3. **Análise:** Examina as categorias sugeridas pela Inteligência Artificial.
  4. **Decisão:**
     * Se concordar, clica em **Aceitar**.
     * Se discordar, clica em **Descartar** e ajusta a categoria manualmente.
  5. **Conclusão:** Após tratar os itens, clica em **Concluir Conciliação**. Os lançamentos são movidos para o *Histórico*.

---

### Funcionalidade 3: Configurar Ciclo Financeiro Personalizado e Limites de Categoria

* **Objetivo do Usuário:** Alterar o dia do mês em que o ciclo financeiro recomeça e ajustar os limites orçamentários de cada categoria de gasto.
* **Passos do Fluxo:**
  1. **Navegação:** O usuário acessa a aba *Metas* no menu inferior.
  2. **Edição do Ciclo:** Edita o campo *Início do ciclo* (ex.: altera para o dia 5).
  3. **Ajuste de Limites:** Define os valores teto desejados nos campos de cada categoria.
  4. **Confirmação:** Toca em **Salvar Configurações**.
  5. **Conclusão:** O sistema valida os campos, salva as preferências e recalcula os limites e gráficos exibidos no Dashboard.

---

### Funcionalidade 4: Exportar Histórico de Dados Financeiros

* **Objetivo do Usuário:** Baixar o relatório completo das movimentações financeiras para guardar como cópia de segurança ou utilizar em programas externos.
* **Passos do Fluxo:**
  1. **Navegação:** O usuário clica na aba *Ajustes*.
  2. **Ação:** Seleciona a opção **Exportar dados**.
  3. **Seleção de Formato:** Abre um modal para escolher entre os formatos **CSV** ou **PDF**.
  4. **Download:** O sistema gera o arquivo selecionado e inicia o download.
  5. **Conclusão:** Uma mensagem de confirmação ("Exportação concluída") é exibida na tela.
