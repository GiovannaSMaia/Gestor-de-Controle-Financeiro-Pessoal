## 1. Avaliação de IHC através de Inspeção Heurística (Violações)

Nesta seção, realizou-se a inspeção heurística detalhada das interfaces do FinanApp para identificação e classificação de problemas de usabilidade com base nas 10 Heurísticas de Nielsen (1994) e na escala de severidade (0 a 4).

### Tabela de Declaração de Violação Padrão da Equipe
* **ID da Violação:** Código sequencial do problema encontrado.
* **Tela / Contexto:** Identificação da tela inspecionada.
* **Heurística Afetada:** Qual das 10 heurísticas foi violada.
* **Grau de Severidade:** De 0 (Sem importância) a 4 (Catastrófico).
* **Descrição do Problema:** Explicação detalhada do porquê o elemento fere o princípio de usabilidade.
* **Sugestão de Correção:** Recomendação para melhoria da interface.

---

### Avaliação Individual por Membro da Equipe

#### Avaliação 1: Vitória Emanuelly Machado Costa (Telas: Início e Novo Lançamento)

1. **Tela Início**
   * **Heurística Afetada:** 1. Visibilidade do status do sistema
   * **Grau de Severidade:** 2 (Simples)
   * **Descrição do Problema:** A barra de progresso da meta mensal exibe a porcentagem atual (9%), mas a representação visual da barra está em um tom sólido sem destacar claramente o preenchimento proporcional ao valor acumulado frente ao limite total da meta de forma imediata para o usuário leigo.
   * **Sugestão de Correção:** Adicionar texturas ou um gradiente mais contrastante na barra de progresso para evidenciar claramente o espaço preenchido em relação ao total.

2. **Tela Novo Lançamento / Novo Gasto**
   * **Heurística Afetada:** 5. Prevenção de erros
   * **Grau de Severidade:** 3 (Grave)
   * **Descrição do Problema:** O campo de valor numérico principal (`R$ 25,00`) não explicita de forma clara se aceita vírgula ou ponto como separador decimal direto ao digitar pelo teclado, podendo gerar lançamentos incorretos caso o usuário utilize o formato errado.
   * **Sugestão de Correção:** Incluir uma máscara de formatação dinâmica ou dicas visuais abaixo do campo indicando como os centavos devem ser inseridos.

---

#### Avaliação 2: Gabriel Matos (Telas: Extratos & Conciliação - Pendências e Histórico)

3. **Tela Extratos & Conciliação (Aba Pendências)**
   * **Heurística Afetada:** 3. Controle e liberdade para o usuário
   * **Grau de Severidade:** 3 (Grave)
   * **Descrição do Problema:** Quando o usuário clica em "Descartar" em uma transação pendente sugerida por arquivo OFX ou IA, o sistema remove o item imediatamente sem exibir um diálogo de confirmação ou permitir uma ação de *undo* (desfazer) de fácil acesso.
   * **Sugestão de Correção:** Implementar um componente de alerta temporário (*toast*) com a opção "Desfazer" logo após o descarte, ou uma janela modal de confirmação para exclusões.

4. **Tela Extratos & Conciliação (Aba Histórico)**
   * **Heurística Afetada:** 6. Reconhecimento em lugar de lembrança
   * **Grau de Severidade:** 2 (Simples)
   * **Descrição do Problema:** O filtro de categorias ("Todas as Categorias") não exibe ícones visuais correspondentes às categorias no menu suspenso (*dropdown*), exigindo que o usuário lembre exatamente o texto exato cadastrado.
   * **Sugestão de Correção:** Adicionar os mesmos ícones coloridos utilizados nos cards de despesa ao lado de cada opção no menu de seleção de categorias.

---

#### Avaliação 3: Giovana Stofel (Telas: Metas & Configurações e Ajustes)

5. **Tela Metas & Configurações**
   * **Heurística Afetada:** 9. Auxiliar os usuários a reconhecer, diagnosticar e recuperar erros
   * **Grau de Severidade:** 3 (Grave)
   * **Descrição do Problema:** Os campos de limites de gastos por categoria aceitam a digitação de valores arbitrários, mas não exibem mensagens de validação em tempo real caso o usuário insira um valor negativo ou letras acidentalmente antes de clicar em "Salvar Configurações".
   * **Sugestão de Correção:** Validar os campos instantaneamente no evento de perda de foco (*onBlur*), destacando a borda em vermelho e exibindo uma mensagem descritiva de erro em linguagem natural.

6. **Tela Ajustes e Conta (Perfil e Senha)**
   * **Heurística Afetada:** 4. Consistência e padrões
   * **Grau de Severidade:** 1 (Cosmético)
   * **Descrição do Problema:** Há uma inconsistência de terminologia nos campos de segurança da conta: na tela de alteração de senha o sistema utiliza o termo em português europeu/técnico *"Palavra-passe"* em vez do termo amplamente padronizado no Brasil *"Senha"*, que é utilizado no menu principal.
   * **Sugestão de Correção:** Padronizar todos os rótulos de texto da interface para o português brasileiro ("Senha Atual" e "Nova Senha").

---

## 2. Indicação de Boas Práticas de Heurística – Heurísticas Não Violadas

> *Nota: Esta seção apresenta exemplos práticos de telas do sistema onde as heurísticas de Nielsen foram rigorosamente atendidas e aplicadas com excelência como boas práticas de projeto.*

### 1. Vitória Machado — Heurística 2: Compatibilidade entre sistema e mundo real
* **Exemplo no Sistema:** Tela de Início / Menu Superior e Saudação
* **Justificativa da Boa Prática:** O sistema utiliza uma linguagem perfeitamente adaptada ao cotidiano financeiro do usuário brasileiro, empregando saudações amigáveis ("Olá, Lucas"), ícones intuitivos e amplamente reconhecidos no mundo real (como o ícone de carteira/extratos, metas e engrenagem de ajustes) e formatação monetária padrão em Reais (`R$ 272,80`), reduzindo a carga cognitiva e facilitando a compreensão imediata.

### 2. Gabriel Matos — Heurística 10: Ajuda e documentação
* **Exemplo no Sistema:** Tela de Ajustes e Conta / Ajuda e Suporte
* **Justificativa da Boa Prática:** A seção de suporte e ajustes está centralizada em um local previsível e de fácil acesso no menu principal do aplicativo. As opções de navegação oferecem caminhos claros para a resolução de dúvidas, garantindo que o usuário encontre diretrizes de suporte on-line de maneira centralizada e objetiva sempre que necessário.

### 3. Giovana Stofel — Heurística 8: Projeto minimalista e estético
* **Exemplo no Sistema:** Tela de Aparência e Tema
* **Justificativa da Boa Prática:** A interface de customização visual adota um design minimalista, apresentando apenas as opções estritamente necessárias ("Modo Claro" e "Modo Noturno") representadas por cartões visuais limpios e sem poluição visual. A ausência de elementos irrelevantes maximiza a visibilidade das escolhas disponíveis, proporcionando uma experiência estética agradável e direta ao ponto.
