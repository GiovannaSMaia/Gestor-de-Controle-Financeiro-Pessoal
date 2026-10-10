import React from 'react';

// === 1. VARIÁVEIS E DADOS DO PROTÓTIPO (MANTIDOS) ===
const colors = {
  bg: `#F7F5FF`,
  surface: `#FFFFFF`,
  surface2: `#F0EEFF`,
  primary: `#7C3AED`,
  primaryDark: `#5B21B6`,
  primaryLight: `#EDE9FE`,
  text: `#1E1B4B`,
  text2: `#6B7280`,
  border: `#E5E0FF`,
  red: `#EF4444`,
  green: `#10B981`
};

const initialTransactions = [
  { id: 1, desc: `Supermercado`, valor: 142.5, hora: `Hoje, 14:20`, cat: `Alimentação` },
  { id: 2, desc: `Cafeteria`, valor: 12, hora: `Hoje, 09:15`, cat: `Alimentação` },
  { id: 3, desc: `Lanchonete`, valor: 35.9, hora: `Ontem`, cat: `Alimentação` },
  { id: 4, desc: `99 / Uber`, valor: 28.4, hora: `Ontem`, cat: `Transporte` },
  { id: 5, desc: `Farmácia`, valor: 54, hora: `16 Set`, cat: `Saúde` }
];

const categories = [`Alimentação`, `Transporte`, `Mercado`, `Lazer`, `Saúde`, `Outros`];
const categoryEmoji = { Alimentação: `🍽️`, Transporte: `🚗`, Mercado: `🛒`, Lazer: `🎬`, Saúde: `💊`, Outros: `📦` };

const pendingTransactions = [
  { id: 1, desc: `PIX - RESTAURANTE ABC`, valor: 45, sugerido: `Alimentação` },
  { id: 2, desc: `IFOOD*PEDIDO99`, valor: 38.9, sugerido: `Alimentação` }
];

const budgets = [
  { cat: `Alimentação`, gasto: 800, limite: 1e3 },
  { cat: `Transporte`, gasto: 150, limite: 400 },
  { cat: `Lazer`, gasto: 210, limite: 350 },
  { cat: `Saúde`, gasto: 54, limite: 200 }
];

const formatCurrency = e => new Intl.NumberFormat(`pt-BR`, { style: `currency`, currency: `BRL` }).format(e);

// === 2. ÍCONES E COMPONENTES MENORES (MANTIDOS) ===
function HomeIcon({ active: e }) { return <svg width={22} height={22} viewBox={`0 0 24 24`} fill={e ? colors.primary : `none`} stroke={e ? colors.primary : colors.text2} strokeWidth={`1.8`} strokeLinecap={`round`} strokeLinejoin={`round`}><path d={`M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`} /><polyline points={`9 22 9 12 15 12 15 22`} /></svg>; }
function StatementIcon({ active: e }) { return <svg width={22} height={22} viewBox={`0 0 24 24`} fill={`none`} stroke={e ? colors.primary : colors.text2} strokeWidth={`1.8`} strokeLinecap={`round`} strokeLinejoin={`round`}><line x1={`8`} y1={`6`} x2={`21`} y2={`6`} /><line x1={`8`} y1={`12`} x2={`21`} y2={`12`} /><line x1={`8`} y1={`18`} x2={`21`} y2={`18`} /><line x1={`3`} y1={`6`} x2={`3.01`} y2={`6`} /><line x1={`3`} y1={`12`} x2={`3.01`} y2={`12`} /><line x1={`3`} y1={`18`} x2={`3.01`} y2={`18`} /></svg>; }
function GoalIcon({ active: e }) { return <svg width={22} height={22} viewBox={`0 0 24 24`} fill={`none`} stroke={e ? colors.primary : colors.text2} strokeWidth={`1.8`} strokeLinecap={`round`} strokeLinejoin={`round`}><circle cx={`12`} cy={`12`} r={`10`} /><circle cx={`12`} cy={`12`} r={`6`} /><circle cx={`12`} cy={`12`} r={`2`} /></svg>; }
function SettingsTabIcon({ active: e }) { return <svg width={22} height={22} viewBox={`0 0 24 24`} fill={`none`} stroke={e ? colors.primary : colors.text2} strokeWidth={`1.8`} strokeLinecap={`round`} strokeLinejoin={`round`}><circle cx={`12`} cy={`12`} r={`3`} /><path d={`M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z`} /></svg>; }
function BackIcon() { return <svg width={22} height={22} viewBox={`0 0 24 24`} fill={`none`} stroke={colors.text} strokeWidth={`2`} strokeLinecap={`round`} strokeLinejoin={`round`}><polyline points={`15 18 9 12 15 6`} /></svg>; }
function ProgressBar({ pct: e, color: t = colors.primary }) { return <div style={{ height: 8, borderRadius: 4, background: colors.primaryLight, overflow: `hidden` }}><div style={{ width: `${Math.min(e, 100)}%`, height: `100%`, borderRadius: 4, background: t, transition: `width 0.5s ease` }} /></div>; }
function Card({ children: e, style: t = {} }) { return <div style={{ background: colors.surface, borderRadius: 16, border: `1px solid ${colors.border}`, padding: `16px`, ...t }}>{e}</div>; }

function NavigationItem({ label: e, active: t, onClick: n, children: r }) {
  return <button onClick={n} style={{ display: `flex`, flexDirection: `column`, alignItems: `center`, gap: 3, background: `none`, border: `none`, cursor: `pointer`, padding: `4px 8px` }}>{r}<span style={{ fontSize: 10, fontFamily: `Outfit`, fontWeight: t ? 700 : 500, color: t ? colors.primary : colors.text2 }}>{e}</span></button>;
}

// Componente reutilizável do Logo
function Logo() {
  return (
    <h1 style={{ fontFamily: 'Outfit', fontWeight: 700, color: colors.text, fontSize: '1.2rem', margin: 0 }}>
      Gestor Financeiro
    </h1>
  );
}

function BottomNavigation({ active: e, onChange: t }) {
  return (
    <div className="nav-content">
      {/* Logotipo visível apenas no Desktop */}
      <div className="nav-logo">
          <Logo />
      </div>

      <div className="nav-items">
        <NavigationItem label={`Início`} active={e === `inicio`} onClick={() => t(`inicio`)}><HomeIcon active={e === `inicio`} /></NavigationItem>
        <NavigationItem label={`Extratos`} active={e === `extratos`} onClick={() => t(`extratos`)}><StatementIcon active={e === `extratos`} /></NavigationItem>

        {/* Botão de Ação que se adapta */}
        <button onClick={() => t(`novo`)} className="nav-fab">
          <svg width={24} height={24} viewBox={`0 0 24 24`} fill={`none`} stroke={`#FFF`} strokeWidth={`2.5`} strokeLinecap={`round`}><line x1={`12`} y1={`5`} x2={`12`} y2={`19`} /><line x1={`5`} y1={`12`} x2={`19`} y2={`12`} /></svg>
          <span className="nav-fab-text">Novo Lançamento</span>
        </button>

        <NavigationItem label={`Metas`} active={e === `metas`} onClick={() => t(`metas`)}><GoalIcon active={e === `metas`} /></NavigationItem>
        <NavigationItem label={`Ajustes`} active={e === `ajustes`} onClick={() => t(`ajustes`)}><SettingsTabIcon active={e === `ajustes`} /></NavigationItem>
      </div>
    </div>
  );
}


// === 3. TELAS (SCREENS) DO APLICATIVO ===

// 3.1 Tela Inicial (REFATORADA COM HTML SEMÂNTICO)
function HomeScreen({ onNovoLancamento }) {
  let gastoAtual = 1850, metaMensal = 3000;
  return (
    <section style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <header>
        <h2 style={{ fontSize: 18, color: colors.text, fontFamily: 'Outfit', margin: 0 }}>Olá, Lucas 👋</h2>
        <span style={{ fontSize: 13, color: colors.text2 }}>Setembro 2026 · Ciclo ativo</span>
      </header>
      <article>
        <Card style={{ background: colors.primary, border: 'none' }}>
          <h3 style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)', fontFamily: 'Outfit', fontWeight: 500, margin: '0 0 6px 0' }}>Saldo Restante no Ciclo</h3>
          <p style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 36, color: '#FFFFFF', margin: '0 0 12px 0' }}>{formatCurrency(gastoAtual)}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>Meta mensal: {formatCurrency(metaMensal)}</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.9)', fontWeight: 600 }}>62%</span>
          </div>
          <ProgressBar pct={62} color="#C4B5FD" />
        </Card>
      </article>
      <nav aria-label="Ações rápidas" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
        <button onClick={onNovoLancamento} style={{ background: colors.primaryLight, border: 'none', borderRadius: 12, padding: '14px 12px', cursor: 'pointer', textAlign: 'left' }}>
          <div style={{ fontSize: 20, marginBottom: 6 }}>➕</div>
          <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 14, color: colors.primary }}>Novo gasto</span>
        </button>
        <button style={{ background: colors.surface2, border: 'none', borderRadius: 12, padding: '14px 12px', cursor: 'pointer', textAlign: 'left' }}>
          <div style={{ fontSize: 20, marginBottom: 6 }}>📊</div>
          <span style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 14, color: colors.text }}>Ver relatório</span>
        </button>
      </nav>
      <section>
        <h3 style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 16, color: colors.text, marginBottom: '12px', marginTop: 0 }}>Últimas Despesas</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {initialTransactions.slice(0, 3).map(transacao => (
            <li key={transacao.id}>
              <Card style={{ padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: colors.primaryLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>
                    {categoryEmoji[transacao.cat] ?? '📦'}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Outfit', fontWeight: 600, fontSize: 14, color: colors.text, margin: 0 }}>{transacao.desc}</h4>
                    <time style={{ fontSize: 12, color: colors.text2 }}>{transacao.hora}</time>
                  </div>
                </div>
                <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 14, color: colors.red }}>-{formatCurrency(transacao.valor)}</span>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

// 3.2 Outras telas mantidas do original
function NewTransactionScreen({ onBack: e }) {
  let [t, n] = React.useState(`25,00`), [r, i] = React.useState(null), [a, o] = React.useState(!1);
  return a ? <div style={{ flex: 1, display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center`, gap: 16, padding: 32 }}><div style={{ width: 72, height: 72, borderRadius: `50%`, background: colors.primaryLight, display: `flex`, alignItems: `center`, justifyContent: `center`, fontSize: 36 }}>{`✅`}</div><p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 20, color: colors.text, textAlign: `center` }}>{`Gasto registrado!`}</p><p style={{ fontSize: 13, color: colors.text2, textAlign: `center` }}>{`-R$ `}{t}{` em `}{r}</p><button onClick={e} style={{ marginTop: 16, background: colors.primary, color: `#FFF`, border: `none`, borderRadius: 12, padding: `14px 32px`, fontFamily: `Outfit`, fontWeight: 700, fontSize: 15, cursor: `pointer` }}>{`Voltar ao Início`}</button></div> : <div style={{ flex: 1, overflow: `auto`, display: `flex`, flexDirection: `column` }}><div style={{ padding: `16px 20px 0`, display: `flex`, alignItems: `center`, gap: 8 }}><button onClick={e} style={{ background: `none`, border: `none`, cursor: `pointer`, padding: 4 }}><BackIcon /></button><p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 16, color: colors.text }}>{`Novo Lançamento`}</p></div><div style={{ flex: 1, display: `flex`, flexDirection: `column`, padding: `32px 24px 24px`, gap: 32 }}><div style={{ textAlign: `center` }}><p style={{ fontSize: 13, color: colors.text2, marginBottom: 8 }}>{`Valor do gasto`}</p><div style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, gap: 4 }}><span style={{ fontFamily: `Outfit`, fontWeight: 500, fontSize: 22, color: colors.text2 }}>{`R$`}</span><input value={t} onChange={e => n(e.target.value)} style={{ fontFamily: `Outfit`, fontWeight: 800, fontSize: 42, color: colors.text, background: `none`, border: `none`, outline: `none`, textAlign: `center`, width: 200, letterSpacing: `-0.02em` }} /></div><div style={{ height: 2, background: colors.primary, borderRadius: 1, width: 120, margin: `8px auto 0` }} /></div><div><p style={{ fontFamily: `Outfit`, fontWeight: 600, fontSize: 13, color: colors.text2, marginBottom: 12 }}>{`Selecione a Categoria:`}</p><div style={{ display: `grid`, gridTemplateColumns: `1fr 1fr`, gap: 10 }}>{categories.map(e => { let t = r === e; return <button onClick={() => i(e)} style={{ padding: `18px 12px`, borderRadius: 14, border: `2px solid ${t ? colors.primary : colors.border}`, background: t ? colors.primaryLight : colors.surface, cursor: `pointer`, display: `flex`, flexDirection: `column`, alignItems: `center`, gap: 6, transition: `all 0.15s` }} key={e}><span style={{ fontSize: 22 }}>{categoryEmoji[e]}</span><span style={{ fontFamily: `Outfit`, fontWeight: 600, fontSize: 13, color: t ? colors.primary : colors.text }}>{e}</span></button>; })}</div></div><div><p style={{ fontFamily: `Outfit`, fontWeight: 600, fontSize: 13, color: colors.text2, marginBottom: 8 }}>{`Observação (opcional)`}</p><input placeholder={`Ex: almoço com cliente`} style={{ width: `100%`, padding: `12px 14px`, borderRadius: 12, border: `1px solid ${colors.border}`, background: colors.surface, fontFamily: `Inter`, fontSize: 13, color: colors.text, outline: `none` }} /></div><button onClick={() => { r && o(!0); }} style={{ marginTop: `auto`, background: r ? colors.primary : colors.border, color: r ? `#FFF` : colors.text2, border: `none`, borderRadius: 16, padding: `18px`, fontFamily: `Outfit`, fontWeight: 700, fontSize: 16, cursor: r ? `pointer` : `default`, transition: `all 0.2s` }}>{`Confirmar Gasto`}</button></div></div>;
}

function StatementsScreen() {
  let [e, t] = React.useState([]), [n, r] = React.useState(`pendencias`), i = e => t(t => [...t, e]), a = e => t(t => [...t, e]), o = pendingTransactions.filter(t => !e.includes(t.id));
  return <div style={{ flex: 1, overflow: `auto`, padding: `24px 20px`, display: `flex`, flexDirection: `column`, gap: 16 }}><p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 18, color: colors.text }}>{`Extratos`}</p><div style={{ display: `flex`, background: colors.surface2, borderRadius: 12, padding: 4, gap: 4 }}>{[`pendencias`, `historico`].map(e => <button onClick={() => r(e)} style={{ flex: 1, padding: `8px`, borderRadius: 8, border: `none`, cursor: `pointer`, background: n === e ? colors.primary : `transparent`, color: n === e ? `#FFF` : colors.text2, fontFamily: `Outfit`, fontWeight: 600, fontSize: 13, transition: `all 0.15s` }} key={e}>{e === `pendencias` ? `Pendências` : `Histórico`}</button>)}</div>{n === `pendencias` ? <React.Fragment><Card style={{ display: `flex`, alignItems: `center`, gap: 10 }}><div style={{ width: 36, height: 36, borderRadius: 10, background: colors.primaryLight, display: `flex`, alignItems: `center`, justifyContent: `center`, fontSize: 18 }}>{`📄`}</div><div><p style={{ fontFamily: `Outfit`, fontWeight: 600, fontSize: 13, color: colors.text }}>{o.length > 0 ? `${o.length} Pendência${o.length > 1 ? `s` : ``} Encontrada${o.length > 1 ? `s` : ``}` : `Tudo conciliado ✅`}</p><p style={{ fontSize: 11, color: colors.text2 }}>{`Arquivo: extrato_setembro.ofx`}</p></div></Card>{o.length > 0 ? <div style={{ display: `flex`, flexDirection: `column`, gap: 10 }}>{o.map(e => <Card key={e.id}><div style={{ display: `flex`, justifyContent: `space-between`, alignItems: `flex-start`, marginBottom: 4 }}><p style={{ fontFamily: `Outfit`, fontWeight: 600, fontSize: 13, color: colors.text }}>{e.desc}</p><p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 13, color: colors.red }}>{`-`}{formatCurrency(e.valor)}</p></div><p style={{ fontSize: 11, color: colors.primary, marginBottom: 14 }}>{`✨ Sugerido: `}{e.sugerido}{` (IA)`}</p><div style={{ display: `flex`, gap: 8 }}><button onClick={() => i(e.id)} style={{ flex: 1, padding: `10px`, borderRadius: 10, border: `none`, background: colors.primary, color: `#FFF`, fontFamily: `Outfit`, fontWeight: 700, fontSize: 13, cursor: `pointer` }}>{`Aceitar`}</button><button onClick={() => a(e.id)} style={{ flex: 1, padding: `10px`, borderRadius: 10, border: `2px solid ${colors.border}`, background: colors.surface, color: colors.text, fontFamily: `Outfit`, fontWeight: 600, fontSize: 13, cursor: `pointer` }}>{`Descartar`}</button></div></Card>)}<button style={{ background: colors.primary, color: `#FFF`, border: `none`, borderRadius: 16, padding: `18px`, fontFamily: `Outfit`, fontWeight: 700, fontSize: 15, cursor: `pointer` }}>{`Concluir Conciliação (`}{e.length}{`/`}{pendingTransactions.length}{`)`}</button></div> : <div style={{ textAlign: `center`, padding: `32px 0`, color: colors.text2, fontSize: 13 }}>{`Todas as pendências foram resolvidas!`}</div>}</React.Fragment> : <div style={{ display: `flex`, flexDirection: `column`, gap: 8 }}>{initialTransactions.map(e => <Card style={{ display: `flex`, alignItems: `center`, justifyContent: `space-between`, padding: `12px 14px` }} key={e.id}><div style={{ display: `flex`, alignItems: `center`, gap: 10 }}><div style={{ width: 34, height: 34, borderRadius: 10, background: colors.primaryLight, display: `flex`, alignItems: `center`, justifyContent: `center`, fontSize: 15 }}>{categoryEmoji[e.cat] ?? `📦`}</div><div><p style={{ fontFamily: `Outfit`, fontWeight: 600, fontSize: 13, color: colors.text }}>{e.desc}</p><p style={{ fontSize: 11, color: colors.text2 }}>{e.cat}{` · `}{e.hora}</p></div></div><p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 13, color: colors.red }}>{`-`}{formatCurrency(e.valor)}</p></Card>)}</div>}</div>;
}

function GoalsScreen() {
  let [e, t] = React.useState(5), [n, r] = React.useState(budgets.map(e => ({ ...e }))), [i, a] = React.useState(!1), o = (e, t) => { r(n => n.map(n => n.cat === e ? { ...n, limite: t } : n)), a(!1); };
  return <div style={{ flex: 1, overflow: `auto`, padding: `24px 20px`, display: `flex`, flexDirection: `column`, gap: 20 }}><p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 18, color: colors.text }}>{`Metas & Configurações`}</p><Card><p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 14, color: colors.text, marginBottom: 12 }}>{`Ciclo Personalizado`}</p><div style={{ display: `flex`, alignItems: `center`, gap: 12 }}><div><p style={{ fontSize: 12, color: colors.text2, marginBottom: 4 }}>{`Início do ciclo`}</p><div style={{ display: `flex`, alignItems: `center`, gap: 8 }}><span style={{ fontSize: 13, color: colors.text }}>{`Dia`}</span><input type={`number`} min={1} max={28} value={e} onChange={e => t(Number(e.target.value))} style={{ width: 56, padding: `8px 10px`, borderRadius: 10, border: `2px solid ${colors.primary}`, fontFamily: `Outfit`, fontWeight: 700, fontSize: 16, color: colors.primary, textAlign: `center`, outline: `none` }} /><span style={{ fontSize: 13, color: colors.text }}>{`de cada mês`}</span></div></div></div></Card><div><p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 14, color: colors.text, marginBottom: 12 }}>{`Limites por Categoria`}</p><div style={{ display: `flex`, flexDirection: `column`, gap: 12 }}>{n.map(e => { let t = e.gasto / e.limite * 100, n = t > 90; return <Card style={{ gap: 10, display: `flex`, flexDirection: `column` }} key={e.cat}><div style={{ display: `flex`, justifyContent: `space-between`, alignItems: `center` }}><div style={{ display: `flex`, alignItems: `center`, gap: 8 }}><span style={{ fontSize: 18 }}>{categoryEmoji[e.cat]}</span><p style={{ fontFamily: `Outfit`, fontWeight: 600, fontSize: 13, color: colors.text }}>{e.cat}</p></div><div style={{ display: `flex`, alignItems: `center`, gap: 4 }}><span style={{ fontSize: 12, color: colors.text2 }}>{formatCurrency(e.gasto)}{` /`}</span><input type={`number`} value={e.limite} onChange={t => o(e.cat, Number(t.target.value))} style={{ width: 72, padding: `4px 6px`, borderRadius: 6, border: `1px solid ${colors.border}`, fontFamily: `Outfit`, fontWeight: 600, fontSize: 12, color: colors.primary, textAlign: `right`, outline: `none` }} /></div></div><ProgressBar pct={t} color={n ? `#EF4444` : colors.primary} />{n && <p style={{ fontSize: 11, color: `#EF4444` }}>{`⚠️ `}{Math.round(t)}{`% do limite atingido`}</p>}</Card>; })}</div></div><button onClick={() => a(!0)} style={{ background: colors.primary, color: `#FFF`, border: `none`, borderRadius: 16, padding: `18px`, fontFamily: `Outfit`, fontWeight: 700, fontSize: 15, cursor: `pointer`, marginTop: 4 }}>{i ? `✅ Configurações salvas` : `Salvar Configurações`}</button></div>;
}

function SettingsScreen() {
  return <div style={{ flex: 1, overflow: `auto`, padding: `24px 20px`, display: `flex`, flexDirection: `column`, gap: 20 }}><p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 18, color: colors.text }}>{`Ajustes`}</p><Card style={{ display: `flex`, alignItems: `center`, gap: 14 }}><div style={{ width: 52, height: 52, borderRadius: `50%`, background: `linear-gradient(135deg, ${colors.primary}, #C084FC)`, display: `flex`, alignItems: `center`, justifyContent: `center`, fontFamily: `Outfit`, fontWeight: 800, fontSize: 20, color: `#FFF` }}>{`L`}</div><div><p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 15, color: colors.text }}>{`Lucas Mendes`}</p><p style={{ fontSize: 12, color: colors.text2 }}>{`lucas@email.com · Plano Pro`}</p></div></Card><div style={{ display: `flex`, flexDirection: `column`, gap: 2 }}>{[{ icon: `👤`, label: `Perfil e conta` }, { icon: `🔔`, label: `Notificações` }, { icon: `🔒`, label: `Segurança e senha` }, { icon: `🌙`, label: `Aparência` }, { icon: `📤`, label: `Exportar dados` }, { icon: `❓`, label: `Ajuda e suporte` }].map(e => <button style={{ display: `flex`, alignItems: `center`, gap: 12, padding: `14px 16px`, background: colors.surface, border: `none`, borderRadius: 12, cursor: `pointer`, textAlign: `left`, width: `100%` }} onMouseEnter={e => { e.currentTarget.style.background = colors.surface2; }} onMouseLeave={e => { e.currentTarget.style.background = colors.surface; }} key={e.label}><span style={{ fontSize: 20 }}>{e.icon}</span><span style={{ fontFamily: `Outfit`, fontWeight: 500, fontSize: 14, color: colors.text, flex: 1 }}>{e.label}</span><svg width={16} height={16} viewBox={`0 0 24 24`} fill={`none`} stroke={colors.text2} strokeWidth={`2`} strokeLinecap={`round`} strokeLinejoin={`round`}><polyline points={`9 18 15 12 9 6`} /></svg></button>)}</div><button style={{ background: `none`, border: `2px solid ${colors.border}`, borderRadius: 16, padding: `16px`, fontFamily: `Outfit`, fontWeight: 700, fontSize: 14, color: colors.red, cursor: `pointer` }}>{`Sair da conta`}</button></div>;
}


// === 4. COMPONENTE PRINCIPAL APP (REFATORADO) ===
function App() {
  let [activeTab, setActiveTab] = React.useState('inicio');
  
  return (
    <div className="app-container">
      <header className="app-header">
        <Logo />
      </header>

      <main className="app-main-content">
        {activeTab === 'inicio' && <HomeScreen onNovoLancamento={() => setActiveTab('novo')} />}
        {activeTab === 'novo' && <NewTransactionScreen onBack={() => setActiveTab('inicio')} />}
        {activeTab === 'extratos' && <StatementsScreen />}
        {activeTab === 'metas' && <GoalsScreen />}
        {activeTab === 'ajustes' && <SettingsScreen />}
      </main>

      <nav className="app-navigation" aria-label="Navegação Principal">
        <BottomNavigation active={activeTab} onChange={(tab) => setActiveTab(tab)} />
      </nav>
    </div>
  );
}

export default App;

