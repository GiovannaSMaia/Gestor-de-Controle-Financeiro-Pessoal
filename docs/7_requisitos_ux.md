# Requisitos de UX e Metas de Usabilidade

1. **Características da Plataforma**

| Característica | Descrição |
| --- | --- |
| **Descrição do Software** | Aplicação web/móvel de gestão financeira pessoal focada em **simplicidade, agilidade de registro e clareza de dados**. O sistema permite registrar receitas e despesas com poucos toques, visualizar dashboards com gráficos consolidados, acompanhar limites de orçamento por categoria e analisar ciclos financeiros personalizados. |
| **Descrição do Hardware** | Compatível com smartphones e tablets (Android e iOS) para acesso portátil em mobilidade, além de computadores/desktops (Windows, macOS, Linux) para consultas analíticas mais aprofundadas e relatórios completos. Exige display com suporte a toque (no caso de dispositivos móveis) e conexão de internet ativa. |
| **LISTA DE Capacidades da Plataforma (com explicação)** | • **Design Responsivo e Multiplataforma:** A interface se adapta perfeitamente a telas de smartphones e desktops, garantindo usabilidade ágil em trânsito e visualização expandida em telas maiores.<br>

<br>• **Persistência e Sincronização em Nuvem:** Permite salvar os dados do usuário com segurança na nuvem, mantendo o histórico atualizado em múltiplos dispositivos.<br>

<br>• **Interface Visual e Componentes Gráficos:** Suporte a gráficos interativos (barras de progresso, gráficos de pizza e comparações temporais) para facilitarem a leitura do orçamento em segundos.<br>

<br>• **Widgets / Atalhos Rápidos:** Permite interações simplificadas para cadastro de gastos com apenas 1 ou 2 cliques no mobile. |
| **LISTA DE Restrições da Plataforma (com explicação)** | • **Necessidade de Conexão com a Internet:** A sincronização de dados e atualização de relatórios exige conexão de dados ativa.<br>

<br>• **Limitações de Tamanho de Tela em Dispositivos Móveis:** A versão móvel precisa limitar a quantidade de informações visuais simultâneas na tela para evitar sobrecarga cognitiva do usuário.<br>

<br>• **Restrições de Desempenho em Dispositivos Antigos:** Gráficos e animações complexas podem requerer otimização para não gerar lentidão em smartphones mais simples. |

---

2. **Princípios Gerais do Projeto (INCREMENTAR TABELA)**

| Nome | Descrição | Link |
| --- | --- | --- |
| **Descrição do Contexto** | O sistema opera no contexto de finanças pessoais cotidianas, onde os usuários variam desde jovens que buscam registrar pequenos gastos rapidamente em mobilidade até usuários analíticos que necessitam de relatórios e controle orçamentário detalhado. O foco é mitigar a dor do esquecimento de lançamentos e o cansaço do registro manual. | — |
| **Lei Geral de Proteção de Dados (LGPD) - Lei n.º 13.709/2018** | A LGPD é a legislação brasileira que regulamenta o tratamento de dados pessoais no Brasil. É importante para o projeto porque estabelece regras sobre como os dados dos usuários devem ser coletados, armazenados, processados e protegidos, garantindo sua privacidade e segurança. | [https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm) |
| **Lei n.º 10.098/2000 - Lei da Acessibilidade** | Esta lei brasileira estabelece normas gerais e critérios básicos para a promoção da acessibilidade das pessoas com deficiência ou com mobilidade reduzida. É importante para o projeto porque define diretrizes para tornar produtos e serviços, incluindo interfaces de usuário, acessíveis a todos os usuários, independentemente de suas habilidades físicas ou cognitivas. | [https://www.planalto.gov.br/ccivil_03/leis/l10098.htm](https://www.planalto.gov.br/ccivil_03/leis/l10098.htm) |
| **ABNT NBR ISO 9241 Ergonomia da interação humano-sistema** | Esta série de normas brasileiras, baseadas nas normas ISO 9241, fornece diretrizes e orientações para o design centrado no usuário de sistemas interativos, incluindo a concepção de interfaces de usuário. A parte 210 aborda o processo de design centrado no humano, enquanto a parte 11 fornece orientações específicas sobre usabilidade. Essas normas são importantes para o projeto porque estabelecem princípios e métodos para garantir que a interface do usuário atenda às necessidades e expectativas dos usuários. | [https://www.inf.ufsc.br/~edla.ramos/ine5624/_Walter/Normas/Parte%2011/iso9241-11F2.pdf](https://www.inf.ufsc.br/~edla.ramos/ine5624/_Walter/Normas/Parte%2011/iso9241-11F2.pdf) |
| **WCAG 2.1 (Web Content Accessibility Guidelines)** | Diretrizes de acessibilidade para conteúdo Web que asseguram contraste adequado de cores, suporte a leitores de tela e navegabilidade por teclado para pessoas com deficiências visuais ou motoras. | [https://www.w3.org/TR/WCAG21/](https://www.w3.org/TR/WCAG21/) |
| **Nielsen's 10 Usability Heuristics** | Conjunto de 10 heurísticas fundamentais de usabilidade para o design de interface (como visibilidade do status do sistema, prevenção de erros e consistência), essenciais para evitar frustrações em preenchimentos e consultas financeiras. | [https://www.nngroup.com/articles/ten-usability-heuristics/](https://www.nngroup.com/articles/ten-usability-heuristics/) |

---

3. **Metas de Usabilidade**
1. **Qualitativo**
* **Facilidade de Aprendizado (Learnability):** A interface deve permitir que novos usuários compreendam as funções principais (inserir gastos, consultar saldos e visualizar gráficos) imediatamente no primeiro acesso, sem necessidade de treinamento ou manuais.
* **Eficiência no Uso (Efficiency):** Minimizar o número de etapas, cliques ou toques para realizar as ações diárias mais rotineiras, como a inserção rápida de um gasto no transporte público ou na rua.
* **Prevenção e Tolerância a Erros (Error Prevention & Recovery):** A aplicação deve oferecer mecanismos fáceis de correção (ex.: edição simples de categoria incorreta) e mensagens de confirmação clara antes de exclusões para evitar perda indevida de registros.
* **Clareza Visual e Satisfação (User Satisfaction):** Layout limpo, minimalista e organizado por cards, que reduza a ansiedade e o estresse associados à gestão financeira, oferecendo tranquilidade na consulta.


2. **Quantitativo**



| Metas | Porcentagem | Justificativa |
| --- | --- | --- |
| **Facilidade de registro rápido de lançamentos** | **40%** | A maior dor identificada na pesquisa com usuários foi o esquecimento de pequenos gastos (66,7%) e o desgosto pelo preenchimento manual demorado. Reduzir o tempo e o esforço de registro é o pilar central de usabilidade do sistema. |
| **Clareza na visualização e compreensão do saldo e gastos do mês** | **25%** | 83,3% dos usuários buscam saber rapidamente se estão gastando mais do que ganham. Um dashboard lípido e objetivo garante entendimento imediato do status do orçamento. |
| **Eficácia na categorização e limites por categoria** | **15%** | A correta distribuição por categoria evita a desorganização do orçamento e atende tanto à necessidade de controle imediato quanto à análise de limites mensais. |
| **Prevenção e facilidade de correção de erros nos registros** | **10%** | Garantir que erros digitados em trânsito possam ser corrigidos rapidamente sem reescrever o lançamento (ex.: alterar categoria). |
| **Taxa máxima aceitável de insatisfação / falhas no uso** | **10%** | Margem de tolerância reservada para usuários analógicos ou pouco adaptados a ferramentas tecnológicas, visando melhorias contínuas baseadas no feedback. |
| **Total** | **100%** | — |
