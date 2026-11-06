# Fontes tipográficas do React

Os arquivos `.ttf` desta pasta são fontes tipográficas TrueType: definem o desenho das letras da interface. Não são código React nem documentos de pesquisa.

O arquivo [styles.css](../../styles.css) associa os arquivos às famílias **Inter** e **Outfit** por meio de regras `@font-face`. Inter é a família padrão do texto; Outfit é usada em títulos e outros componentes definidos em `App.jsx`. Os arquivos locais permitem carregar essas fontes sem consultar um serviço externo de tipografia.

## Arquivos utilizados

Os pesos abaixo correspondem às associações declaradas no CSS atual.

| Arquivo | Família no CSS | Peso |
| --- | --- | --- |
| `UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf` | Inter | 400 — regular |
| `UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZg.ttf` | Inter | 500 — médio |
| `UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf` | Inter | 600 — seminegrito |
| `QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C4E.ttf` | Outfit | 400 — regular |
| `QGYyz_MVcBeNP4NjuGObqx1XmO1I4e6yC4E.ttf` | Outfit | 600 — seminegrito |
| `QGYyz_MVcBeNP4NjuGObqx1XmO1I4deyC4E.ttf` | Outfit | 700 — negrito |
| `QGYyz_MVcBeNP4NjuGObqx1XmO1I4bCyC4E.ttf` | Outfit | 800 — extranegrito |

## Arquivos sem referência no CSS atual

- `QGYyz_MVcBeNP4NjuGObqx1XmO1I4QK1C4E.ttf`
- `QGYyz_MVcBeNP4NjuGObqx1XmO1I4W61C4E.ttf`

Esses dois arquivos estão preservados, mas não aparecem nas regras `@font-face` do React atual.

Os nomes extensos são identificadores dos arquivos e não funcionalidades da aplicação. Este documento explica as fontes; os arquivos `.ttf` continuam necessários para o navegador renderizar a tipografia local.
