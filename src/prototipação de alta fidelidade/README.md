# Protótipo de Alta Fidelidade

A documentação completa desta etapa está em [docs/15_prototipacao_alta_fidelidade.md](../../docs/15_prototipacao_alta_fidelidade.md), incluindo telas, interações, roteiro de demonstração e limites da simulação.

Abra [index.html](index.html) no navegador para utilizar o protótipo em HTML, CSS e JavaScript. É necessário acesso à internet para as dependências externas.

Também é possível executar nesta pasta:

```powershell
npm run dev
```

Acesse `http://127.0.0.1:5174/`. O servidor usa apenas o Node.js, sem precisar de `npm install` ou do projeto React. Encerre com Ctrl+C. Alterações aparecem após atualizar a página. As bibliotecas da interface continuam sendo carregadas pela internet.

- `styles.css`: estilos da interface.
- `tema.js`: configuração visual.
- `app.js`: interações e dados fictícios.
- `verify-prototipo.mjs`: verificação automatizada.
- `verificacao/`: capturas desktop e celular.
- `referencias/`: arquivos anteriores do Figma, correspondentes à média fidelidade.

Após instalar as dependências em `src/projeto/`, execute na raiz do repositório:

```powershell
node "src/prototipação de alta fidelidade/verify-prototipo.mjs"
```

A etapa de média fidelidade no Figma está documentada separadamente em [docs/10_prototipacao_figma.md](../../docs/10_prototipacao_figma.md).
