const fs = require('node:fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const t = require('@babel/types');
const bundle = fs.readFileSync('prototype.js', 'utf8');
const start = bundle.indexOf('C={bg:', bundle.indexOf('/workspaces/default/.publishing/src/App'));
const end = bundle.indexOf('var ye=', start);
const ast = parser.parse('const ' + bundle.slice(start, end), { sourceType: 'module' });
traverse(ast, {
  CallExpression: { exit(path) {
    const callee = path.node.callee;
    if (!t.isSequenceExpression(callee)) return;
    const member = callee.expressions[1];
    if (!t.isMemberExpression(member)) return;
    if (member.object.name === 'b') {
      path.node.callee = t.memberExpression(t.identifier('React'), member.property);
      return;
    }
    if (member.object.name !== 'x' || member.property.name !== 'jsxDEV') return;
    const [type, props, key] = path.node.arguments;
    const name = t.isMemberExpression(type) ? t.jsxMemberExpression(t.jsxIdentifier(type.object.name === 'x' ? 'React' : type.object.name), t.jsxIdentifier(type.property.name)) : t.jsxIdentifier(t.isStringLiteral(type) ? type.value : t.isTemplateLiteral(type) ? type.quasis[0].value.cooked : type.name);
    const attrs = [];
    const children = [];
    for (const prop of props.properties) {
      if (t.isSpreadElement(prop)) { attrs.push(t.jsxSpreadAttribute(prop.argument)); continue; }
      if (prop.key.name === 'children') {
        const values = t.isArrayExpression(prop.value) ? prop.value.elements : [prop.value];
        for (const child of values) children.push(t.isJSXElement(child) ? child : t.jsxExpressionContainer(child));
      } else attrs.push(t.jsxAttribute(t.jsxIdentifier(prop.key.name || prop.key.value), t.jsxExpressionContainer(prop.value)));
    }
    if (!t.isUnaryExpression(key, { operator: 'void' })) attrs.push(t.jsxAttribute(t.jsxIdentifier('key'), t.jsxExpressionContainer(key)));
    path.replaceWith(t.jsxElement(t.jsxOpeningElement(name, attrs, !children.length), children.length ? t.jsxClosingElement(name) : null, children));
  } },
});
const names = { C: 'colors', ee: 'initialTransactions', te: 'categories', ne: 'categoryEmoji', re: 'pendingTransactions', w: 'budgets', ie: 'formatCurrency', T: 'HomeIcon', ae: 'StatementIcon', oe: 'GoalIcon', se: 'SettingsIcon', ce: 'PlusIcon', le: 'SectionHeader', ue: 'HomeScreen', de: 'NewTransactionScreen', fe: 'StatementsScreen', pe: 'GoalsScreen', me: 'SettingsScreen', he: 'BottomNavigation', _e: 'StatusBar', ve: 'App' };
names.E = 'SettingsTabIcon';
names.ge = 'NavigationItem';
traverse(ast, { Program(path) { for (const [from, to] of Object.entries(names)) if (path.scope.hasOwnBinding(from)) path.scope.rename(from, to); } });
traverse(ast, { JSXIdentifier(path) { if (names[path.node.name]) path.node.name = names[path.node.name]; } });
fs.writeFileSync('src/App.jsx', "import React from 'react';\n\n// Interface reproduzida do protótipo publicado pelo projeto.\n" + generate(ast, { comments: true }).code + '\n\nexport default App;\n');
fs.copyFileSync('prototype.css', 'src/styles.css');
