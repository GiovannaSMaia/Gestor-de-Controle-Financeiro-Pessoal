import React from 'react';

// VARIÁVEIS E DADOS DO PROTÓTIPO
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

// ÍCONES E COMPONENTES
function HomeIcon({ active: e }) { return <svg width={18} height={18} viewBox={`0 0 24 24`} fill={e ? colors.primary : `none`} stroke={e ? colors.primary : colors.text2} strokeWidth={`2`} strokeLinecap={`round`} strokeLinejoin={`round`}><path d={`M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`} /><polyline points={`9 22 9 12 15 12 15 22`} /></svg>; }
function StatementIcon({ active: e }) { return <svg width={18} height={18} viewBox={`0 0 24 24`} fill={`none`} stroke={e ? colors.primary : colors.text2} strokeWidth={`2`} strokeLinecap={`round`} strokeLinejoin={`round`}><line x1={`8`} y1={`6`} x2={`21`} y2={`6`} /><line x1={`8`} y1={`12`} x2={`21`} y2={`12`} /><line x1={`8`} y1={`18`} x2={`21`} y2={`18`} /><line x1={`3`} y1={`6`} x2={`3.01`} y2={`6`} /><line x1={`3`} y1={`12`} x2={`3.01`} y2={`12`} /><line x1={`3`} y1={`18`} x2={`3.01`} y2={`18`} /></svg>; }
function GoalIcon({ active: e }) { return <svg width={18} height={18} viewBox={`0 0 24 24`} fill={`none`} stroke={e ? colors.primary : colors.text2} strokeWidth={`2`} strokeLinecap={`round`} strokeLinejoin={`round`}><circle cx={`12`} cy={`12`} r={`10`} /><circle cx={`12`} cy={`12`} r={`6`} /><circle cx={`12`} cy={`12`} r={`2`} /></svg>; }
function SettingsTabIcon({ active: e }) { return <svg width={18} height={18} viewBox={`0 0 24 24`} fill={`none`} stroke={e ? colors.primary : colors.text2} strokeWidth={`2`} strokeLinecap={`round`} strokeLinejoin={`round`}><circle cx={`12`} cy={`12`} r={`3`} /><path d={`M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l-.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06-.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z`} /></svg>; }
function BackIcon() { return <svg width={22} height={22} viewBox={`0 0 24 24`} fill={`none`} stroke={colors.text} strokeWidth={`2`} strokeLinecap={`round`} strokeLinejoin={`round`}><polyline points={`15 18 9 12 15 6`} /></svg>; }
function ProgressBar({ pct: e, color: t = colors.primary }) { return <div style={{ height: 8, borderRadius: 4, background: 'rgba(255,255,255,0.25)', overflow: `hidden` }}><div style={{ width: `${Math.min(e, 100)}%`, height: `100%`, borderRadius: 4, background: t, transition: `width 0.5s ease` }} /></div>; }
function Card({ children: e, style: t = {} }) { return <div style={{ background: colors.surface, borderRadius: 20, border: `1px solid ${colors.border}`, padding: `24px 28px`, boxShadow: '0 2px 12px rgba(0,0,0,0.02)', ...t }}>{e}</div>; }

// BARRA DE NAVEGAÇÃO SUPERIOR
function TopHeader({ active: e, onChange: t }) {
  return (
    <header className="top-header-bar">
      <div className="logo-area">
        <div className="logo-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFF"><path d="M21 18v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1h-9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9zm-9-2h10V8H12v8zm4-2.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>
        </div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 18, color: colors.text }}>FinanApp</span>
          <span style={{ fontSize: 13, color: colors.text2, fontFamily: 'Inter' }}>Controle Financeiro</span>
        </div>
      </div>

      <nav className="nav-pills-container">
        <button onClick={() => t('inicio')} className={`nav-pill-btn ${e === 'inicio' ? 'active' : ''}`}>
          <HomeIcon active={e === 'inicio'} /> Início
        </button>
        <button onClick={() => t('extratos')} className={`nav-pill-btn ${e === 'extratos' ? 'active' : ''}`}>
          <StatementIcon active={e === 'extratos'} /> Extratos
        </button>
        <button onClick={() => t('metas')} className={`nav-pill-btn ${e === 'metas' ? 'active' : ''}`}>
          <GoalIcon active={e === 'metas'} /> Metas
        </button>
        <button onClick={() => t('ajustes')} className={`nav-pill-btn ${e === 'ajustes' ? 'active' : ''}`}>
          <SettingsTabIcon active={e === 'ajustes'} /> Ajustes
        </button>
      </nav>

      <div className="header-actions">
        <button className="theme-toggle-btn" title="Modo Noturno">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={colors.text} strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
        </button>
        <div className="user-profile-avatar">
          <span>L</span>
        </div>
      </div>
    </header>
  );
}

// TELA INICIAL (Layout Empilhado Verticalmente: Saldo -> Ações Rápidas -> Despesas Embaixo)
function HomeScreen({ onNovoLancamento, onViewAll }) {
  let gastoAtual = 2809.60, metaMensal = 3000;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 1050, margin: '0 auto', width: '100%' }}>
      <header>
        <h2 style={{ fontSize: 24, color: colors.text, fontFamily: 'Outfit', margin: '0 0 4px 0', fontWeight: 700 }}>Olá, Lucas 👋</h2>
        <span style={{ fontSize: 13, color: colors.text2 }}>Setembro 2026 · Ciclo ativo</span>
      </header>

      {/* Cartão Principal de Saldo */}
      <article>
        <Card style={{ background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)', border: 'none', padding: '36px 32px', boxShadow: '0 12px 28px -6px rgba(124,58,237,0.35)' }}>
          <h3 style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', fontFamily: 'Outfit', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', margin: '0 0 10px 0' }}>Saldo Restante no Ciclo</h3>
          <p style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: 48, color: '#FFFFFF', margin: '0 0 20px 0', letterSpacing: '-0.02em' }}>{formatCurrency(gastoAtual)}</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.9)' }}>Meta mensal: {formatCurrency(metaMensal)}</span>
            <span style={{ fontSize: 13, color: '#FFFFFF', fontWeight: 700 }}>6%</span>
          </div>
          <ProgressBar pct={6} color="#C4B5FD" />
        </Card>
      </article>

      {/* Ações Rápidas */}
      <nav aria-label="Ações rápidas" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        <button onClick={onNovoLancamento} style={{ background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: 20, padding: '22px 24px', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 16, boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: colors.primaryLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, color: colors.primary }}>➕</div>
          <div>
            <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 16, color: colors.text, display: 'block', marginBottom: 2 }}>Novo gasto</span>
            <span style={{ fontSize: 13, color: colors.text2 }}>Registar despesa rápida</span>
          </div>
        </button>
        <button onClick={onViewAll} style={{ background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: 20, padding: '22px 24px', cursor: 'pointer', textAlign: 'left', display: 'flex', alignItems: 'center', gap: 16, boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: colors.surface2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>📊</div>
          <div>
            <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 16, color: colors.text, display: 'block', marginBottom: 2 }}>Ver relatório</span>
            <span style={{ fontSize: 13, color: colors.text2 }}>Análise de gastos</span>
          </div>
        </button>
      </nav>

      {/* Últimas Despesas (Embaixo) */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 18, color: colors.text, margin: 0 }}>Últimas Despesas</h3>
          <button onClick={onViewAll} style={{ background: 'none', border: 'none', color: colors.primary, fontFamily: 'Outfit', fontWeight: 600, fontSize: 14, cursor: 'pointer' }}>Ver todas</button>
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {initialTransactions.slice(0, 3).map(transacao => (
            <li key={transacao.id}>
              <Card style={{ padding: '18px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 46, height: 46, borderRadius: 14, background: colors.primaryLight, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>
                    {categoryEmoji[transacao.cat] ?? '📦'}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 16, color: colors.text, margin: '0 0 2px 0' }}>{transacao.desc}</h4>
                    <time style={{ fontSize: 13, color: colors.text2 }}>{transacao.hora}</time>
                  </div>
                </div>
                <span style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 16, color: colors.red }}>-{formatCurrency(transacao.valor)}</span>
              </Card>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function NewTransactionScreen({ onBack }) {
  let [t, n] = React.useState(`25,00`), [r, i] = React.useState(null), [a, o] = React.useState(!1);
  return (
    <div style={{ maxWidth: 750, margin: '0 auto', width: '100%' }}>
      {a ? (
        <div style={{ display: `flex`, flexDirection: `column`, alignItems: `center`, justifyContent: `center`, gap: 16, padding: 64, background: colors.surface, borderRadius: 20, border: `1px solid ${colors.border}` }}>
          <div style={{ width: 72, height: 72, borderRadius: `50%`, background: colors.primaryLight, display: `flex`, alignItems: `center`, justifyContent: `center`, fontSize: 36 }}>{`✅`}</div>
          <p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 22, color: colors.text, textAlign: `center` }}>{`Gasto registrado!`}</p>
          <p style={{ fontSize: 14, color: colors.text2, textAlign: `center` }}>{`-R$ `}{t}{` em `}{r}</p>
          <button onClick={onBack} style={{ marginTop: 16, background: colors.primary, color: `#FFF`, border: `none`, borderRadius: 12, padding: `14px 32px`, fontFamily: `Outfit`, fontWeight: 700, fontSize: 15, cursor: `pointer` }}>{`Voltar ao Início`}</button>
        </div>
      ) : (
        <Card style={{ padding: 40 }}>
          <div style={{ display: `flex`, alignItems: `center`, gap: 12, marginBottom: 28 }}>
            <button onClick={onBack} style={{ background: colors.surface2, border: `none`, borderRadius: 10, padding: 10, cursor: `pointer`, display: 'flex' }}><BackIcon /></button>
            <p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 20, color: colors.text, textAlign: 'center', flex: 1, margin: 0 }}>{`Novo Lançamento`}</p>
            <div style={{ width: 42 }} /> {/* Espaçador para manter centralizado */}
          </div>
          <div style={{ textAlign: `center`, marginBottom: 36 }}>
            <p style={{ fontSize: 13, color: colors.text2, marginBottom: 8 }}>{`Valor do gasto`}</p>
            <div style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, gap: 4 }}>
              <span style={{ fontFamily: `Outfit`, fontWeight: 500, fontSize: 24, color: colors.text2 }}>{`R$`}</span>
              <input value={t} onChange={e => n(e.target.value)} style={{ fontFamily: `Outfit`, fontWeight: 800, fontSize: 52, color: colors.text, background: `none`, border: `none`, outline: `none`, textAlign: `center`, width: 240 }} />
            </div>
            <div style={{ height: 2, background: colors.primary, borderRadius: 1, width: 160, margin: `8px auto 0` }} />
          </div>
          <div style={{ marginBottom: 28 }}>
            <p style={{ fontFamily: `Outfit`, fontWeight: 600, fontSize: 14, color: colors.text, marginBottom: 12 }}>{`Selecione a Categoria:`}</p>
            <div style={{ display: `grid`, gridTemplateColumns: `repeat(3, 1fr)`, gap: 14 }}>
              {categories.map(e => { 
                let t = r === e; 
                return (
                  <button onClick={() => i(e)} style={{ padding: `20px 12px`, borderRadius: 16, border: `2px solid ${t ? colors.primary : colors.border}`, background: t ? colors.primaryLight : colors.surface, cursor: `pointer`, display: `flex`, flexDirection: `column`, alignItems: `center`, gap: 8, transition: `all 0.15s` }} key={e}>
                    <span style={{ fontSize: 28 }}>{categoryEmoji[e]}</span>
                    <span style={{ fontFamily: `Outfit`, fontWeight: 600, fontSize: 14, color: t ? colors.primary : colors.text }}>{e}</span>
                  </button>
                ); 
              })}
            </div>
          </div>
          <div style={{ marginBottom: 36 }}>
            <p style={{ fontFamily: `Outfit`, fontWeight: 600, fontSize: 14, color: colors.text, marginBottom: 8 }}>{`Observação (opcional)`}</p>
            <input placeholder={`Ex: almoço com cliente`} style={{ width: `100%`, padding: `16px 20px`, borderRadius: 12, border: `1px solid ${colors.border}`, background: colors.bg, fontFamily: `Inter`, fontSize: 15, color: colors.text, outline: `none` }} />
          </div>
          <button onClick={() => { r && o(!0); }} style={{ width: '100%', background: r ? colors.primary : colors.border, color: r ? `#FFF` : colors.text2, border: `none`, borderRadius: 16, padding: `20px`, fontFamily: `Outfit`, fontWeight: 700, fontSize: 16, cursor: r ? `pointer` : `default`, transition: `all 0.2s` }}>{`Confirmar Gasto`}</button>
        </Card>
      )}
    </div>
  );
}

function StatementsScreen() {
  let [e, t] = React.useState([]), [n, r] = React.useState(`pendencias`), i = e => t(t => [...t, e]), a = e => t(t => [...t, e]), o = pendingTransactions.filter(t => !e.includes(t.id));
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, width: '100%', maxWidth: 1200, margin: '0 auto' }}>
      {/* Título Centralizado */}
      <h2 style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 26, color: colors.text, textAlign: 'center', margin: 0 }}>{`Extratos & Conciliação`}</h2>
      
      <div style={{ display: `flex`, background: colors.surface2, borderRadius: 12, padding: 4, gap: 4, width: 280, margin: '0 auto' }}>
        {[`pendencias`, `historico`].map(e => <button onClick={() => r(e)} style={{ flex: 1, padding: `10px`, borderRadius: 8, border: `none`, cursor: `pointer`, background: n === e ? colors.primary : `transparent`, color: n === e ? `#FFF` : colors.text2, fontFamily: `Outfit`, fontWeight: 600, fontSize: 14, transition: `all 0.15s` }} key={e}>{e === `pendencias` ? `Pendências` : `Histórico`}</button>)}
      </div>
      {n === `pendencias` ? (
        <React.Fragment>
          <Card style={{ display: `flex`, alignItems: `center`, gap: 16 }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: colors.primaryLight, display: `flex`, alignItems: `center`, justifyContent: `center`, fontSize: 24 }}>{`📄`}</div>
            <div>
              <p style={{ fontFamily: `Outfit`, fontWeight: 600, fontSize: 17, color: colors.text }}>{o.length > 0 ? `${o.length} Pendência${o.length > 1 ? `s` : ``} Encontrada${o.length > 1 ? `s` : ``}` : `Tudo conciliado ✅`}</p>
              <p style={{ fontSize: 13, color: colors.text2 }}>{`Arquivo: extrato_setembro.ofx`}</p>
            </div>
          </Card>
          {o.length > 0 ? (
            <div style={{ display: `grid`, gridTemplateColumns: `repeat(2, 1fr)`, gap: 20 }}>
              {o.map(e => (
                <Card key={e.id} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: `flex`, justifyContent: `space-between`, alignItems: `flex-start`, marginBottom: 8 }}>
                      <p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 17, color: colors.text }}>{e.desc}</p>
                      <p style={{ fontFamily: `Outfit`, fontWeight: 800, fontSize: 17, color: colors.red }}>{`-`}{formatCurrency(e.valor)}</p>
                    </div>
                    <p style={{ fontSize: 13, color: colors.primary, marginBottom: 20 }}>{`✨ Sugerido pela IA: `}{e.sugerido}</p>
                  </div>
                  <div style={{ display: `flex`, gap: 12 }}>
                    <button onClick={() => i(e.id)} style={{ flex: 1, padding: `12px`, borderRadius: 12, border: `none`, background: colors.primary, color: `#FFF`, fontFamily: `Outfit`, fontWeight: 700, fontSize: 14, cursor: `pointer` }}>{`Aceitar Sugestão`}</button>
                    <button onClick={() => a(e.id)} style={{ flex: 1, padding: `12px`, borderRadius: 12, border: `2px solid ${colors.border}`, background: colors.surface, color: colors.text, fontFamily: `Outfit`, fontWeight: 600, fontSize: 14, cursor: `pointer` }}>{`Descartar`}</button>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <Card style={{ textAlign: `center`, padding: `60px 0`, color: colors.text2, fontSize: 15 }}>{`Todas as pendências foram resolvidas com sucesso!`}</Card>
          )}
        </React.Fragment>
      ) : (
        <div style={{ display: `grid`, gridTemplateColumns: `repeat(2, 1fr)`, gap: 16 }}>
          {initialTransactions.map(e => (
            <Card style={{ display: `flex`, alignItems: `center`, justifyContent: `space-between`, padding: `20px 24px` }} key={e.id}>
              <div style={{ display: `flex`, alignItems: `center`, gap: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: 14, background: colors.primaryLight, display: `flex`, alignItems: `center`, justifyContent: `center`, fontSize: 22 }}>{categoryEmoji[e.cat] ?? `📦`}</div>
                <div>
                  <p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 16, color: colors.text }}>{e.desc}</p>
                  <p style={{ fontSize: 13, color: colors.text2 }}>{e.cat}{` · `}{e.hora}</p>
                </div>
              </div>
              <p style={{ fontFamily: `Outfit`, fontWeight: 800, fontSize: 16, color: colors.red }}>{`-`}{formatCurrency(e.valor)}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function GoalsScreen() {
  let [e, t] = React.useState(5), [n, r] = React.useState(budgets.map(e => ({ ...e }))), [i, a] = React.useState(!1), o = (e, t) => { r(n => n.map(n => n.cat === e ? { ...n, limite: t } : n)), a(!1); };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, width: '100%', maxWidth: 1200, margin: '0 auto' }}>
      {/* Título Centralizado */}
      <h2 style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 26, color: colors.text, textAlign: 'center', margin: 0 }}>{`Metas & Configurações`}</h2>
      
      <Card style={{ padding: 28 }}>
        <p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 16, color: colors.text, marginBottom: 14 }}>{`Ciclo Personalizado de Faturamento`}</p>
        <div style={{ display: `flex`, alignItems: `center`, gap: 12 }}>
          <div>
            <p style={{ fontSize: 13, color: colors.text2, marginBottom: 6 }}>{`Início do ciclo mensal`}</p>
            <div style={{ display: `flex`, alignItems: `center`, gap: 10 }}>
              <span style={{ fontSize: 14, color: colors.text }}>{`Dia`}</span>
              <input type={`number`} min={1} max={28} value={e} onChange={e => t(Number(e.target.value))} style={{ width: 68, padding: `8px 10px`, borderRadius: 10, border: `2px solid ${colors.primary}`, fontFamily: `Outfit`, fontWeight: 700, fontSize: 16, color: colors.primary, textAlign: `center`, outline: `none` }} />
              <span style={{ fontSize: 14, color: colors.text }}>{`de cada mês`}</span>
            </div>
          </div>
        </div>
      </Card>
      <div>
        <p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 20, color: colors.text, marginBottom: 16 }}>{`Limites de Gastos por Categoria`}</p>
        <div className="goals-grid" style={{ display: `grid`, gridTemplateColumns: `repeat(2, 1fr)`, gap: 20 }}>
          {n.map(e => { 
            let t = e.gasto / e.limite * 100, n = t > 90; 
            return (
              <Card style={{ gap: 16, display: `flex`, flexDirection: `column`, padding: 24 }} key={e.cat}>
                <div style={{ display: `flex`, justifyContent: `space-between`, alignItems: `center` }}>
                  <div style={{ display: `flex`, alignItems: `center`, gap: 12 }}>
                    <span style={{ fontSize: 24 }}>{categoryEmoji[e.cat]}</span>
                    <p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 16, color: colors.text }}>{e.cat}</p>
                  </div>
                  <div style={{ display: `flex`, alignItems: `center`, gap: 8 }}>
                    <span style={{ fontSize: 13, color: colors.text2 }}>{formatCurrency(e.gasto)}{` /`}</span>
                    <input type={`number`} value={e.limite} onChange={t => o(e.cat, Number(t.target.value))} style={{ width: 90, padding: `6px 8px`, borderRadius: 8, border: `1px solid ${colors.border}`, fontFamily: `Outfit`, fontWeight: 600, fontSize: 14, color: colors.primary, textAlign: `right`, outline: `none` }} />
                  </div>
                </div>
                <ProgressBar pct={t} color={n ? `#EF4444` : colors.primary} />
                {n && <p style={{ fontSize: 13, color: `#EF4444`, fontWeight: 600 }}>{`⚠️ `}{Math.round(t)}{`% do limite recomendado atingido`}</p>}
              </Card>
            ); 
          })}
        </div>
      </div>
      <button onClick={() => a(!0)} style={{ background: colors.primary, color: `#FFF`, border: `none`, borderRadius: 16, padding: `18px 36px`, fontFamily: `Outfit`, fontWeight: 700, fontSize: 16, cursor: `pointer`, width: 'fit-content' }}>{i ? `✅ Configurações salvas com sucesso` : `Salvar Configurações`}</button>
    </div>
  );
}

// TELA DE AJUSTES COM TÍTULO CENTRALIZADO E LARGURA AMPLA
function SettingsScreen() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28, width: '100%', maxWidth: 1200, margin: '0 auto' }}>
      {/* Título Centralizado */}
      <h2 style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 26, color: colors.text, textAlign: 'center', margin: 0 }}>{`Ajustes e Conta`}</h2>
      
      {/* Perfil de Usuário em Largura Total */}
      <Card style={{ display: `flex`, alignItems: `center`, gap: 20, padding: 32 }}>
        <div style={{ width: 72, height: 72, borderRadius: `50%`, background: `linear-gradient(135deg, ${colors.primary}, #C084FC)`, display: `flex`, alignItems: `center`, justifyContent: `center`, fontFamily: `Outfit`, fontWeight: 800, fontSize: 26, color: `#FFF` }}>{`L`}</div>
        <div>
          <p style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 22, color: colors.text, marginBottom: 4 }}>{`Lucas Mendes`}</p>
          <p style={{ fontSize: 14, color: colors.text2 }}>{`lucas@email.com · Plano Pro Ativo`}</p>
        </div>
      </Card>

      {/* Grid de Opções de Ajustes (2 colunas) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
        {[{ icon: `👤`, label: `Perfil e conta` }, { icon: `🔔`, label: `Notificações e Alertas` }, { icon: `🔒`, label: `Segurança e senha` }, { icon: `🌙`, label: `Aparência e Tema` }, { icon: `📤`, label: `Exportar dados financeiros` }, { icon: `❓`, label: `Ajuda e suporte` }].map(e => (
          <button style={{ display: `flex`, alignItems: `center`, gap: 16, padding: `22px 24px`, background: colors.surface, border: `1px solid ${colors.border}`, borderRadius: 16, cursor: `pointer`, textAlign: `left`, width: `100%`, boxShadow: '0 2px 8px rgba(0,0,0,0.02)', transition: 'transform 0.15s' }} key={e.label}>
            <span style={{ fontSize: 26 }}>{e.icon}</span>
            <span style={{ fontFamily: `Outfit`, fontWeight: 700, fontSize: 16, color: colors.text, flex: 1 }}>{e.label}</span>
            <svg width={18} height={18} viewBox={`0 0 24 24`} fill={`none`} stroke={colors.text2} strokeWidth={`2`} strokeLinecap={`round`} strokeLinejoin={`round`}><polyline points={`9 18 15 12 9 6`} /></svg>
          </button>
        ))}
      </div>

      <button style={{ background: `none`, border: `2px solid ${colors.border}`, borderRadius: 16, padding: `20px`, fontFamily: `Outfit`, fontWeight: 700, fontSize: 15, color: colors.red, cursor: `pointer`, width: '100%', marginTop: 8 }}>{`Sair da conta`}</button>
    </div>
  );
}

// COMPONENTE PRINCIPAL APP 
function App() {
  let [activeTab, setActiveTab] = React.useState('inicio');
  
  return (
    <div className="app-layout-container">
      <TopHeader active={activeTab} onChange={(tab) => setActiveTab(tab)} />

      <main className="app-main-body">
        {activeTab === 'inicio' && <HomeScreen onNovoLancamento={() => setActiveTab('novo')} onViewAll={() => setActiveTab('extratos')} />}
        {activeTab === 'novo' && <NewTransactionScreen onBack={() => setActiveTab('inicio')} />}
        {activeTab === 'extratos' && <StatementsScreen />}
        {activeTab === 'metas' && <GoalsScreen />}
        {activeTab === 'ajustes' && <SettingsScreen />}
      </main>
    </div>
  );
}

export default App;