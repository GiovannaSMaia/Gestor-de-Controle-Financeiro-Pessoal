import React from 'react';

// PALETAS DE CORES (CLARO E ESCURO)
const themes = {
  light: {
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
  },
  dark: {
    bg: `#0F0E17`,
    surface: `#1A1829`,
    surface2: `#25213F`,
    primary: `#8B5CF6`,
    primaryDark: `#7C3AED`,
    primaryLight: `#2E2559`,
    text: `#F7F5FF`,
    text2: `#9CA3AF`,
    border: `#2A254C`,
    red: `#F87171`,
    green: `#34D399`
  }
};

const initialTransactionsData = [
  { id: 1, desc: `Supermercado`, valor: 142.5, hora: `Hoje, 14:20`, cat: `Alimentação` },
  { id: 2, desc: `Cafeteria`, valor: 12, hora: `Hoje, 09:15`, cat: `Alimentação` },
  { id: 3, desc: `Lanchonete`, valor: 35.9, hora: `Ontem`, cat: `Alimentação` },
  { id: 4, desc: `99 / Uber`, valor: 28.4, hora: `Ontem`, cat: `Transporte` },
  { id: 5, desc: `Farmácia`, valor: 54, hora: `16 Set`, cat: `Saúde` }
];

const categories = [`Alimentação`, `Transporte`, `Mercado`, `Lazer`, `Saúde`, `Outros`];

const categoryEmoji = {
  Alimentação: `🍽️`,
  Transporte: `🚗`,
  Mercado: `🛒`,
  Lazer: `🎬`,
  Saúde: `💊`,
  Outros: `📦`
};

const initialPendingTransactions = [
  { id: 101, desc: `PIX - RESTAURANTE ABC`, valor: 45, sugerido: `Alimentação` },
  { id: 102, desc: `IFOOD*PEDIDO99`, valor: 38.9, sugerido: `Alimentação` }
];

const initialBudgets = [
  { cat: `Alimentação`, gasto: 800, limite: 1000 },
  { cat: `Transporte`, gasto: 150, limite: 400 },
  { cat: `Lazer`, gasto: 210, limite: 350 },
  { cat: `Saúde`, gasto: 54, limite: 200 }
];

const formatCurrency = (val, colors) =>
  new Intl.NumberFormat(`pt-BR`, {
    style: `currency`,
    currency: `BRL`
  }).format(val);


// ÍCONES E COMPONENTES

function HomeIcon({ active, colors }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox={`0 0 24 24`}
      fill={active ? colors.primary : `none`}
      stroke={active ? colors.primary : colors.text2}
      strokeWidth={`2`}
      strokeLinecap={`round`}
      strokeLinejoin={`round`}
    >
      <path d={`M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`} />
      <polyline points={`9 22 9 12 15 12 15 22`} />
    </svg>
  );
}

function StatementIcon({ active, colors }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox={`0 0 24 24`}
      fill={`none`}
      stroke={active ? colors.primary : colors.text2}
      strokeWidth={`2`}
      strokeLinecap={`round`}
      strokeLinejoin={`round`}
    >
      <line x1={`8`} y1={`6`} x2={`21`} y2={`6`} />
      <line x1={`8`} y1={`12`} x2={`21`} y2={`12`} />
      <line x1={`8`} y1={`18`} x2={`21`} y2={`18`} />
      <line x1={`3`} y1={`6`} x2={`3.01`} y2={`6`} />
      <line x1={`3`} y1={`12`} x2={`3.01`} y2={`12`} />
      <line x1={`3`} y1={`18`} x2={`3.01`} y2={`18`} />
    </svg>
  );
}

function GoalIcon({ active, colors }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox={`0 0 24 24`}
      fill={`none`}
      stroke={active ? colors.primary : colors.text2}
      strokeWidth={`2`}
      strokeLinecap={`round`}
      strokeLinejoin={`round`}
    >
      <circle cx={`12`} cy={`12`} r={`10`} />
      <circle cx={`12`} cy={`12`} r={`6`} />
      <circle cx={`12`} cy={`12`} r={`2`} />
    </svg>
  );
}

function SettingsTabIcon({ active, colors }) {
  return (
    <svg
      width={18}
      height={18}
      viewBox={`0 0 24 24`}
      fill={`none`}
      stroke={active ? colors.primary : colors.text2}
      strokeWidth={`2`}
      strokeLinecap={`round`}
      strokeLinejoin={`round`}
    >
      <circle cx={`12`} cy={`12`} r={`3`} />
      <path d={`M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l-.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06-.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z`} />
    </svg>
  );
}

function BackIcon({ colors }) {
  return (
    <svg
      width={22}
      height={22}
      viewBox={`0 0 24 24`}
      fill={`none`}
      stroke={colors.text}
      strokeWidth={`2`}
      strokeLinecap={`round`}
      strokeLinejoin={`round`}
    >
      <polyline points={`15 18 9 12 15 6`} />
    </svg>
  );
}

function ProgressBar({ pct, color }) {
  return (
    <div
      style={{
        height: 8,
        borderRadius: 4,
        background: 'rgba(255,255,255,0.25)',
        overflow: `hidden`
      }}
    >
      <div
        style={{
          width: `${Math.min(pct, 100)}%`,
          height: `100%`,
          borderRadius: 4,
          background: color,
          transition: `width 0.5s ease`
        }}
      />
    </div>
  );
}

function Card({ children, colors, style = {} }) {
  return (
    <div
      style={{
        background: colors.surface,
        borderRadius: 20,
        border: `1px solid ${colors.border}`,
        padding: `24px 28px`,
        boxShadow: '0 2px 12px rgba(0,0,0,0.02)',
        ...style
      }}
    >
      {children}
    </div>
  );
}


// BARRA DE NAVEGAÇÃO SUPERIOR

function TopHeader({
  active,
  onChange,
  isDarkMode,
  onToggleTheme,
  colors
}) {
  return (
    <header
      className="top-header-bar"
      style={{
        backgroundColor: colors.surface,
        borderColor: colors.border
      }}
    >
      <div className="logo-area">
        <div
          className="logo-icon"
          style={{ backgroundColor: colors.primary }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="#FFF"
          >
            <path d="M21 18v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1h-9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9zm-9-2h10V8H12v8zm4-2.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
          </svg>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: 8
          }}
        >
          <span
            style={{
              fontFamily: 'Outfit',
              fontWeight: 700,
              fontSize: 18,
              color: colors.text
            }}
          >
            FinanApp
          </span>

          <span
            className="subtitle-text"
            style={{
              fontSize: 13,
              color: colors.text2,
              fontFamily: 'Inter'
            }}
          >
            Controle Financeiro
          </span>
        </div>
      </div>

      <nav
        className="nav-pills-container"
        style={{ background: colors.surface2 }}
        aria-label="Navegação Principal"
      >
        <button
          onClick={() => onChange('inicio')}
          className={`nav-pill-btn ${active === 'inicio' ? 'active' : ''}`}
          style={{
            background:
              active === 'inicio'
                ? colors.surface
                : 'transparent',
            color:
              active === 'inicio'
                ? colors.primary
                : colors.text2
          }}
        >
          <HomeIcon
            active={active === 'inicio'}
            colors={colors}
          />
          Início
        </button>

        <button
          onClick={() => onChange('extratos')}
          className={`nav-pill-btn ${active === 'extratos' ? 'active' : ''}`}
          style={{
            background:
              active === 'extratos'
                ? colors.surface
                : 'transparent',
            color:
              active === 'extratos'
                ? colors.primary
                : colors.text2
          }}
        >
          <StatementIcon
            active={active === 'extratos'}
            colors={colors}
          />
          Extratos
        </button>

        <button
          onClick={() => onChange('metas')}
          className={`nav-pill-btn ${active === 'metas' ? 'active' : ''}`}
          style={{
            background:
              active === 'metas'
                ? colors.surface
                : 'transparent',
            color:
              active === 'metas'
                ? colors.primary
                : colors.text2
          }}
        >
          <GoalIcon
            active={active === 'metas'}
            colors={colors}
          />
          Metas
        </button>

        <button
          onClick={() => onChange('ajustes')}
          className={`nav-pill-btn ${active === 'ajustes' ? 'active' : ''}`}
          style={{
            background:
              active === 'ajustes'
                ? colors.surface
                : 'transparent',
            color:
              active === 'ajustes'
                ? colors.primary
                : colors.text2
          }}
        >
          <SettingsTabIcon
            active={active === 'ajustes'}
            colors={colors}
          />
          Ajustes
        </button>
      </nav>

      <div className="header-actions">
        <button
          onClick={onToggleTheme}
          className="theme-toggle-btn"
          aria-label="Alternar Tema"
          title="Alternar Tema"
          style={{
            background: colors.surface,
            borderColor: colors.border
          }}
        >
          {isDarkMode ? (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FBBF24"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke={colors.text}
              strokeWidth="2"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </button>

        <div
          className="user-profile-avatar"
          aria-label="Perfil do Utilizador"
        >
          <span>L</span>
        </div>
      </div>
    </header>
  );
}


// TELA INICIAL

function HomeScreen({
  transactions,
  onNovoLancamento,
  onViewAll,
  colors
}) {
  let metaMensal = 3000;
  let gastoAtual = transactions.reduce(
    (acc, t) => acc + t.valor,
    0
  );

  let pctMeta = Math.round(
    (gastoAtual / metaMensal) * 100
  );

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        maxWidth: 1050,
        margin: '0 auto',
        width: '100%'
      }}
    >
      <header>
        <h2
          style={{
            fontSize: 24,
            color: colors.text,
            fontFamily: 'Outfit',
            margin: '0 0 4px 0',
            fontWeight: 700
          }}
        >
          Olá, Lucas 👋
        </h2>

        <span
          style={{
            fontSize: 13,
            color: colors.text2
          }}
        >
          Setembro 2026 · Ciclo ativo
        </span>
      </header>

      <article>
        <Card
          colors={colors}
          style={{
            background:
              'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
            border: 'none',
            padding: '36px 32px',
            boxShadow:
              '0 12px 28px -6px rgba(124,58,237,0.35)'
          }}
        >
          <h3
            style={{
              fontSize: 12,
              color: 'rgba(255,255,255,0.8)',
              fontFamily: 'Outfit',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              margin: '0 0 10px 0'
            }}
          >
            Despesas Totais no Ciclo
          </h3>

          <p
            style={{
              fontFamily: 'Outfit',
              fontWeight: 800,
              fontSize: 48,
              color: '#FFFFFF',
              margin: '0 0 20px 0',
              letterSpacing: '-0.02em'
            }}
          >
            {formatCurrency(gastoAtual, colors)}
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10
            }}
          >
            <span
              style={{
                fontSize: 13,
                color: 'rgba(255,255,255,0.9)'
              }}
            >
              Meta mensal: {formatCurrency(metaMensal, colors)}
            </span>

            <span
              style={{
                fontSize: 13,
                color: '#FFFFFF',
                fontWeight: 700
              }}
            >
              {pctMeta}%
            </span>
          </div>

          <ProgressBar
            pct={pctMeta}
            color="#C4B5FD"
          />
        </Card>
      </article>

      <nav
        aria-label="Ações rápidas"
        className="responsive-grid-2"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 20
        }}
      >
        <button
          onClick={onNovoLancamento}
          style={{
            background: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: 20,
            padding: '22px 24px',
            cursor: 'pointer',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            boxShadow:
              '0 2px 10px rgba(0,0,0,0.02)'
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: colors.primaryLight,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
              color: colors.primary
            }}
          >
            ➕
          </div>

          <div>
            <span
              style={{
                fontFamily: 'Outfit',
                fontWeight: 700,
                fontSize: 16,
                color: colors.text,
                display: 'block',
                marginBottom: 2
              }}
            >
              Novo gasto
            </span>

            <span
              style={{
                fontSize: 13,
                color: colors.text2
              }}
            >
              Registar despesa rápida
            </span>
          </div>
        </button>

        <button
          onClick={onViewAll}
          style={{
            background: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: 20,
            padding: '22px 24px',
            cursor: 'pointer',
            textAlign: 'left',
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            boxShadow:
              '0 2px 10px rgba(0,0,0,0.02)'
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: colors.surface2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22
            }}
          >
            📊
          </div>

          <div>
            <span
              style={{
                fontFamily: 'Outfit',
                fontWeight: 700,
                fontSize: 16,
                color: colors.text,
                display: 'block',
                marginBottom: 2
              }}
            >
              Ver relatório
            </span>

            <span
              style={{
                fontSize: 13,
                color: colors.text2
              }}
            >
              Análise de gastos
            </span>
          </div>
        </button>
      </nav>

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 14
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <h3
            style={{
              fontFamily: 'Outfit',
              fontWeight: 700,
              fontSize: 18,
              color: colors.text,
              margin: 0
            }}
          >
            Últimas Despesas
          </h3>

          <button
            onClick={onViewAll}
            style={{
              background: 'none',
              border: 'none',
              color: colors.primary,
              fontFamily: 'Outfit',
              fontWeight: 600,
              fontSize: 14,
              cursor: 'pointer'
            }}
          >
            Ver todas
          </button>
        </div>

        {transactions.length === 0 ? (
          <Card
            colors={colors}
            style={{
              textAlign: 'center',
              padding: '40px 0',
              color: colors.text2
            }}
          >
            <p
              style={{
                fontSize: 28,
                margin: '0 0 8px 0'
              }}
            >
              📂
            </p>

            <p
              style={{
                fontFamily: 'Outfit',
                fontWeight: 600,
                fontSize: 15,
                margin: 0
              }}
            >
              Nenhuma despesa registada ainda.
            </p>
          </Card>
        ) : (
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }}
          >
            {transactions.slice(0, 3).map(transacao => (
              <li key={transacao.id}>
                <Card
                  colors={colors}
                  style={{
                    padding: '18px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 16
                    }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 14,
                        background: colors.primaryLight,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 20
                      }}
                    >
                      {categoryEmoji[transacao.cat] ?? '📦'}
                    </div>

                    <div>
                      <h4
                        style={{
                          fontFamily: 'Outfit',
                          fontWeight: 700,
                          fontSize: 16,
                          color: colors.text,
                          margin: '0 0 2px 0'
                        }}
                      >
                        {transacao.desc}
                      </h4>

                      <time
                        style={{
                          fontSize: 13,
                          color: colors.text2
                        }}
                      >
                        {transacao.hora}
                      </time>
                    </div>
                  </div>

                  <span
                    style={{
                      fontFamily: 'Outfit',
                      fontWeight: 700,
                      fontSize: 16,
                      color: colors.red
                    }}
                  >
                    -{formatCurrency(transacao.valor, colors)}
                  </span>
                </Card>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}


function NewTransactionScreen({
  onBack,
  onAddTransaction,
  colors
}) {
  let [valStr, setValStr] = React.useState(`25,00`);
  let [selectedCat, setSelectedCat] = React.useState(null);
  let [obs, setObs] = React.useState('');
  let [success, setSuccess] = React.useState(false);

  const handleConfirm = () => {
    if (!selectedCat) return;

    const numericVal =
      parseFloat(valStr.replace(',', '.')) || 25;

    onAddTransaction({
      id: Date.now(),
      desc: obs.trim() ? obs.trim() : 'Nova Despesa',
      valor: numericVal,
      hora: 'Hoje',
      cat: selectedCat
    });

    setSuccess(true);
  };

  return (
    <div
      style={{
        maxWidth: 750,
        margin: '0 auto',
        width: '100%'
      }}
    >
      {success ? (
        <Card
          colors={colors}
          style={{
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`,
            gap: 16,
            padding: 64
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: `50%`,
              background: colors.primaryLight,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              fontSize: 36
            }}
          >
            ✅
          </div>

          <p
            style={{
              fontFamily: `Outfit`,
              fontWeight: 700,
              fontSize: 22,
              color: colors.text,
              textAlign: `center`
            }}
          >
            Gasto registado com sucesso!
          </p>

          <p
            style={{
              fontSize: 14,
              color: colors.text2,
              textAlign: `center`
            }}
          >
            -R$ {valStr} em {selectedCat}
          </p>

          <button
            onClick={onBack}
            style={{
              marginTop: 16,
              background: colors.primary,
              color: `#FFF`,
              border: `none`,
              borderRadius: 12,
              padding: `14px 32px`,
              fontFamily: `Outfit`,
              fontWeight: 700,
              fontSize: 15,
              cursor: `pointer`
            }}
          >
            Voltar ao Início
          </button>
        </Card>
      ) : (
        <Card
          colors={colors}
          style={{ padding: 40 }}
        >
          <div
            style={{
              display: `flex`,
              alignItems: `center`,
              gap: 12,
              marginBottom: 28
            }}
          >
            <button
              onClick={onBack}
              aria-label="Voltar"
              style={{
                background: colors.surface2,
                border: `none`,
                borderRadius: 10,
                padding: 10,
                cursor: `pointer`,
                display: 'flex'
              }}
            >
              <BackIcon colors={colors} />
            </button>

            <p
              style={{
                fontFamily: `Outfit`,
                fontWeight: 700,
                fontSize: 20,
                color: colors.text,
                textAlign: 'center',
                flex: 1,
                margin: 0
              }}
            >
              Novo Lançamento
            </p>

            <div style={{ width: 42 }} />
          </div>

          <div
            style={{
              textAlign: `center`,
              marginBottom: 36
            }}
          >
            <label
              htmlFor="input-valor-gasto"
              style={{
                fontSize: 13,
                color: colors.text2,
                marginBottom: 8,
                display: 'block'
              }}
            >
              Valor do gasto
            </label>

            <div
              style={{
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                gap: 4
              }}
            >
              <span
                style={{
                  fontFamily: `Outfit`,
                  fontWeight: 500,
                  fontSize: 24,
                  color: colors.text2
                }}
              >
                R$
              </span>

              <input
                id="input-valor-gasto"
                value={valStr}
                onChange={e => setValStr(e.target.value)}
                style={{
                  fontFamily: `Outfit`,
                  fontWeight: 800,
                  fontSize: 52,
                  color: colors.text,
                  background: `none`,
                  border: `none`,
                  outline: `none`,
                  textAlign: `center`,
                  width: 240
                }}
              />
            </div>

            <div
              style={{
                height: 2,
                background: colors.primary,
                borderRadius: 1,
                width: 160,
                margin: `8px auto 0`
              }}
            />
          </div>

          <div style={{ marginBottom: 28 }}>
            <p
              style={{
                fontFamily: `Outfit`,
                fontWeight: 600,
                fontSize: 14,
                color: colors.text,
                marginBottom: 12
              }}
            >
              Selecione a Categoria:
            </p>

            <div
              className="responsive-categories-grid"
              style={{
                display: `grid`,
                gridTemplateColumns: `repeat(3, 1fr)`,
                gap: 14
              }}
            >
              {categories.map(cat => {
                let isSelected = selectedCat === cat;

                return (
                  <button
                    onClick={() => setSelectedCat(cat)}
                    style={{
                      padding: `20px 12px`,
                      borderRadius: 16,
                      border: `2px solid ${
                        isSelected
                          ? colors.primary
                          : colors.border
                      }`,
                      background: isSelected
                        ? colors.primaryLight
                        : colors.surface,
                      cursor: `pointer`,
                      display: `flex`,
                      flexDirection: `column`,
                      alignItems: `center`,
                      gap: 8,
                      transition: `all 0.15s`
                    }}
                    key={cat}
                  >
                    <span style={{ fontSize: 28 }}>
                      {categoryEmoji[cat]}
                    </span>

                    <span
                      style={{
                        fontFamily: `Outfit`,
                        fontWeight: 600,
                        fontSize: 14,
                        color: isSelected
                          ? colors.primary
                          : colors.text
                      }}
                    >
                      {cat}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ marginBottom: 36 }}>
            <label
              htmlFor="input-obs"
              style={{
                fontFamily: `Outfit`,
                fontWeight: 600,
                fontSize: 14,
                color: colors.text,
                marginBottom: 8,
                display: 'block'
              }}
            >
              Observação (opcional)
            </label>

            <input
              id="input-obs"
              value={obs}
              onChange={e => setObs(e.target.value)}
              placeholder={`Ex: almoço com cliente`}
              style={{
                width: `100%`,
                padding: `16px 20px`,
                borderRadius: 12,
                border: `1px solid ${colors.border}`,
                background: colors.bg,
                fontFamily: `Inter`,
                fontSize: 15,
                color: colors.text,
                outline: `none`,
                boxSizing: 'border-box'
              }}
            />
          </div>

          <button
            onClick={handleConfirm}
            style={{
              width: '100%',
              background: selectedCat
                ? colors.primary
                : colors.border,
              color: selectedCat
                ? `#FFF`
                : colors.text2,
              border: `none`,
              borderRadius: 16,
              padding: `20px`,
              fontFamily: `Outfit`,
              fontWeight: 700,
              fontSize: 16,
              cursor: selectedCat
                ? `pointer`
                : `default`,
              transition: `all 0.2s`
            }}
          >
            Confirmar Gasto
          </button>
        </Card>
      )}
    </div>
  );
}


function StatementsScreen({
  transactions,
  pendingItems,
  onAcceptPending,
  onDiscardPending,
  colors
}) {
  let [activeTab, setActiveTab] =
    React.useState(`pendencias`);

  let [selectedCategories, setSelectedCategories] =
    React.useState({});

  let [searchQuery, setSearchQuery] =
    React.useState('');

  let [filterCategory, setFilterCategory] =
    React.useState('Todas');

  const handleCategoryChange = (id, cat) => {
    setSelectedCategories(prev => ({
      ...prev,
      [id]: cat
    }));
  };

  const filteredTransactions = transactions.filter(item => {
    const matchesSearch = item.desc
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    const matchesCat =
      filterCategory === 'Todas' ||
      item.cat === filterCategory;

    return matchesSearch && matchesCat;
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 28,
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto'
      }}
    >
      <h2
        style={{
          fontFamily: `Outfit`,
          fontWeight: 700,
          fontSize: 26,
          color: colors.text,
          textAlign: 'center',
          margin: 0
        }}
      >
        Extratos & Conciliação
      </h2>

      <div
        style={{
          display: `flex`,
          background: colors.surface2,
          borderRadius: 12,
          padding: 4,
          gap: 4,
          width: 280,
          margin: '0 auto'
        }}
      >
        {[`pendencias`, `historico`].map(tab => (
          <button
            onClick={() => setActiveTab(tab)}
            style={{
              flex: 1,
              padding: `10px`,
              borderRadius: 8,
              border: `none`,
              cursor: `pointer`,
              background:
                activeTab === tab
                  ? colors.primary
                  : `transparent`,
              color:
                activeTab === tab
                  ? `#FFF`
                  : colors.text2,
              fontFamily: `Outfit`,
              fontWeight: 600,
              fontSize: 14,
              transition: `all 0.15s`
            }}
            key={tab}
          >
            {tab === `pendencias`
              ? `Pendências`
              : `Histórico`}
          </button>
        ))}
      </div>

      {activeTab === `pendencias` ? (
        <React.Fragment>
          <Card
            colors={colors}
            style={{
              display: `flex`,
              alignItems: `center`,
              gap: 16
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                background: colors.primaryLight,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                fontSize: 24
              }}
            >
              📄
            </div>

            <div>
              <p
                style={{
                  fontFamily: `Outfit`,
                  fontWeight: 600,
                  fontSize: 17,
                  color: colors.text
                }}
              >
                {pendingItems.length > 0
                  ? `${pendingItems.length} Pendência${
                      pendingItems.length > 1
                        ? `s`
                        : ``
                    } Encontrada${
                      pendingItems.length > 1
                        ? `s`
                        : ``
                    }`
                  : `Tudo conciliado ✅`}
              </p>

              <p
                style={{
                  fontSize: 13,
                  color: colors.text2
                }}
              >
                Arquivo: extrato_setembro.ofx
              </p>
            </div>
          </Card>

          {pendingItems.length > 0 ? (
            <div
              className="responsive-grid-2"
              style={{
                display: `grid`,
                gridTemplateColumns: `repeat(2, 1fr)`,
                gap: 20
              }}
            >
              {pendingItems.map(item => {
                let chosenCat =
                  selectedCategories[item.id] ||
                  item.sugerido;

                return (
                  <Card
                    colors={colors}
                    key={item.id}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: `flex`,
                          justifyContent: `space-between`,
                          alignItems: `flex-start`,
                          marginBottom: 8,
                          gap: 12
                        }}
                      >
                        <p
                          style={{
                            fontFamily: `Outfit`,
                            fontWeight: 700,
                            fontSize: 17,
                            color: colors.text,
                            margin: 0
                          }}
                        >
                          {item.desc}
                        </p>

                        <p
                          style={{
                            fontFamily: `Outfit`,
                            fontWeight: 800,
                            fontSize: 17,
                            color: colors.red,
                            margin: 0,
                            whiteSpace: 'nowrap'
                          }}
                        >
                          -{formatCurrency(item.valor, colors)}
                        </p>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          marginBottom: 20,
                          flexWrap: 'wrap'
                        }}
                      >
                        <span
                          style={{
                            fontSize: 13,
                            color: colors.text2
                          }}
                        >
                          ✨ IA Sugere:
                        </span>

                        <select
                          value={chosenCat}
                          onChange={e =>
                            handleCategoryChange(
                              item.id,
                              e.target.value
                            )
                          }
                          style={{
                            padding: '4px 8px',
                            borderRadius: 8,
                            border: `1px solid ${colors.border}`,
                            fontFamily: 'Inter',
                            fontSize: 13,
                            color: colors.primary,
                            fontWeight: 600,
                            background: colors.bg,
                            outline: 'none'
                          }}
                        >
                          {categories.map(c => (
                            <option
                              key={c}
                              value={c}
                            >
                              {c}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div
                      style={{
                        display: `flex`,
                        gap: 12
                      }}
                    >
                      <button
                        onClick={() =>
                          onAcceptPending(
                            item,
                            chosenCat
                          )
                        }
                        style={{
                          flex: 1,
                          padding: `12px`,
                          borderRadius: 12,
                          border: `none`,
                          background: colors.primary,
                          color: `#FFF`,
                          fontFamily: `Outfit`,
                          fontWeight: 700,
                          fontSize: 14,
                          cursor: `pointer`
                        }}
                      >
                        Aceitar Sugestão
                      </button>

                      <button
                        onClick={() =>
                          onDiscardPending(item.id)
                        }
                        style={{
                          flex: 1,
                          padding: `12px`,
                          borderRadius: 12,
                          border: `2px solid ${colors.border}`,
                          background: colors.surface,
                          color: colors.text,
                          fontFamily: `Outfit`,
                          fontWeight: 600,
                          fontSize: 14,
                          cursor: `pointer`
                        }}
                      >
                        Descartar
                      </button>
                    </div>
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card
              colors={colors}
              style={{
                textAlign: `center`,
                padding: `60px 0`,
                color: colors.text2,
                fontSize: 15
              }}
            >
              <p
                style={{
                  fontSize: 32,
                  margin: '0 0 12px 0'
                }}
              >
                🎉
              </p>

              <p
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: 700,
                  fontSize: 18,
                  color: colors.text,
                  margin: '0 0 4px 0'
                }}
              >
                Todas as pendências resolvidas!
              </p>

              <p
                style={{
                  fontSize: 14,
                  margin: 0
                }}
              >
                O seu extrato bancário está totalmente conciliado.
              </p>
            </Card>
          )}
        </React.Fragment>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 20
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 16,
              flexWrap: 'wrap'
            }}
          >
            <input
              type="text"
              placeholder="🔍 Pesquisar por descrição..."
              value={searchQuery}
              onChange={e =>
                setSearchQuery(e.target.value)
              }
              style={{
                flex: 2,
                minWidth: 260,
                padding: '14px 18px',
                borderRadius: 12,
                border: `1px solid ${colors.border}`,
                background: colors.surface,
                fontFamily: 'Inter',
                fontSize: 14,
                color: colors.text,
                outline: 'none'
              }}
            />

            <select
              value={filterCategory}
              onChange={e =>
                setFilterCategory(e.target.value)
              }
              style={{
                flex: 1,
                minWidth: 160,
                padding: '14px 18px',
                borderRadius: 12,
                border: `1px solid ${colors.border}`,
                background: colors.surface,
                fontFamily: 'Outfit',
                fontSize: 14,
                color: colors.text,
                fontWeight: 600,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="Todas">
                Todas as Categorias
              </option>

              {categories.map(c => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {filteredTransactions.length === 0 ? (
            <Card
              colors={colors}
              style={{
                textAlign: 'center',
                padding: '50px 0',
                color: colors.text2
              }}
            >
              <p
                style={{
                  fontSize: 24,
                  margin: '0 0 8px 0'
                }}
              >
                🔍
              </p>

              <p
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  fontSize: 15,
                  margin: 0
                }}
              >
                Nenhuma transação encontrada para os filtros aplicados.
              </p>
            </Card>
          ) : (
            <div
              className="responsive-grid-2"
              style={{
                display: `grid`,
                gridTemplateColumns: `repeat(2, 1fr)`,
                gap: 16
              }}
            >
              {filteredTransactions.map(item => (
                <Card
                  colors={colors}
                  style={{
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `space-between`,
                    padding: `20px 24px`
                  }}
                  key={item.id}
                >
                  <div
                    style={{
                      display: `flex`,
                      alignItems: `center`,
                      gap: 16
                    }}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 14,
                        background: colors.primaryLight,
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                        fontSize: 22
                      }}
                    >
                      {categoryEmoji[item.cat] ?? `📦`}
                    </div>

                    <div>
                      <p
                        style={{
                          fontFamily: `Outfit`,
                          fontWeight: 700,
                          fontSize: 16,
                          color: colors.text,
                          margin: 0
                        }}
                      >
                        {item.desc}
                      </p>

                      <p
                        style={{
                          fontSize: 13,
                          color: colors.text2,
                          margin: 0
                        }}
                      >
                        {item.cat} · {item.hora}
                      </p>
                    </div>
                  </div>

                  <p
                    style={{
                      fontFamily: `Outfit`,
                      fontWeight: 800,
                      fontSize: 16,
                      color: colors.red,
                      whiteSpace: 'nowrap'
                    }}
                  >
                    -{formatCurrency(item.valor, colors)}
                  </p>
                </Card>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}


function GoalsScreen({ colors }) {
  let [cycleDay, setCycleDay] = React.useState(5);
  let [budgets, setBudgets] = React.useState(
    initialBudgets.map(e => ({ ...e }))
  );
  let [saved, setSaved] = React.useState(false);

  const handleLimitChange = (cat, newLimit) => {
    setBudgets(prev =>
      prev.map(item =>
        item.cat === cat
          ? { ...item, limite: newLimit }
          : item
      )
    );
  };

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 3000);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 28,
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto'
      }}
    >
      <h2
        style={{
          fontFamily: `Outfit`,
          fontWeight: 700,
          fontSize: 26,
          color: colors.text,
          textAlign: 'center',
          margin: 0
        }}
      >
        Metas & Configurações
      </h2>

      <Card
        colors={colors}
        style={{ padding: 28 }}
      >
        <p
          style={{
            fontFamily: `Outfit`,
            fontWeight: 700,
            fontSize: 16,
            color: colors.text,
            marginBottom: 14
          }}
        >
          Ciclo Personalizado de Faturamento
        </p>

        <div
          style={{
            display: `flex`,
            alignItems: `center`,
            gap: 12
          }}
        >
          <div>
            <label
              htmlFor="input-ciclo"
              style={{
                fontSize: 13,
                color: colors.text2,
                marginBottom: 6,
                display: 'block'
              }}
            >
              Início do ciclo mensal
            </label>

            <div
              style={{
                display: `flex`,
                alignItems: `center`,
                gap: 10
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  color: colors.text
                }}
              >
                Dia
              </span>

              <input
                id="input-ciclo"
                type={`number`}
                min={1}
                max={28}
                value={cycleDay}
                onChange={e =>
                  setCycleDay(Number(e.target.value))
                }
                style={{
                  width: 68,
                  padding: `8px 10px`,
                  borderRadius: 10,
                  border: `2px solid ${colors.primary}`,
                  fontFamily: `Outfit`,
                  fontWeight: 700,
                  fontSize: 16,
                  color: colors.primary,
                  textAlign: `center`,
                  outline: `none`,
                  background: colors.bg
                }}
              />

              <span
                style={{
                  fontSize: 14,
                  color: colors.text
                }}
              >
                de cada mês
              </span>
            </div>
          </div>
        </div>
      </Card>

      <div>
        <p
          style={{
            fontFamily: `Outfit`,
            fontWeight: 700,
            fontSize: 20,
            color: colors.text,
            marginBottom: 16
          }}
        >
          Limites de Gastos por Categoria
        </p>

        <div
          className="responsive-grid-2"
          style={{
            display: `grid`,
            gridTemplateColumns: `repeat(2, 1fr)`,
            gap: 20
          }}
        >
          {budgets.map(b => {
            let pct = (b.gasto / b.limite) * 100;
            let isWarning = pct > 90;

            return (
              <Card
                colors={colors}
                style={{
                  gap: 16,
                  display: `flex`,
                  flexDirection: `column`,
                  padding: 24
                }}
                key={b.cat}
              >
                <div
                  style={{
                    display: `flex`,
                    justifyContent: `space-between`,
                    alignItems: `center`,
                    gap: 10
                  }}
                >
                  <div
                    style={{
                      display: `flex`,
                      alignItems: `center`,
                      gap: 12
                    }}
                  >
                    <span style={{ fontSize: 24 }}>
                      {categoryEmoji[b.cat]}
                    </span>

                    <p
                      style={{
                        fontFamily: `Outfit`,
                        fontWeight: 700,
                        fontSize: 16,
                        color: colors.text,
                        margin: 0
                      }}
                    >
                      {b.cat}
                    </p>
                  </div>

                  <div
                    style={{
                      display: `flex`,
                      alignItems: `center`,
                      gap: 8
                    }}
                  >
                    <span
                      style={{
                        fontSize: 13,
                        color: colors.text2
                      }}
                    >
                      {formatCurrency(b.gasto, colors)} /
                    </span>

                    <input
                      aria-label={`Limite para ${b.cat}`}
                      type={`number`}
                      value={b.limite}
                      onChange={t =>
                        handleLimitChange(
                          b.cat,
                          Number(t.target.value)
                        )
                      }
                      style={{
                        width: 90,
                        padding: `6px 8px`,
                        borderRadius: 8,
                        border: `1px solid ${colors.border}`,
                        fontFamily: `Outfit`,
                        fontWeight: 600,
                        fontSize: 14,
                        color: colors.primary,
                        textAlign: `right`,
                        outline: `none`,
                        background: colors.bg
                      }}
                    />
                  </div>
                </div>

                <ProgressBar
                  pct={pct}
                  color={
                    isWarning
                      ? `#EF4444`
                      : colors.primary
                  }
                />

                {isWarning && (
                  <p
                    style={{
                      fontSize: 13,
                      color: `#EF4444`,
                      fontWeight: 600,
                      margin: 0
                    }}
                  >
                    ⚠️ {Math.round(pct)}% do limite recomendado atingido
                  </p>
                )}
              </Card>
            );
          })}
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          marginTop: 8
        }}
      >
        <button
          onClick={handleSave}
          style={{
            background: saved
              ? colors.green
              : colors.primary,
            color: `#FFF`,
            border: `none`,
            borderRadius: 16,
            padding: `18px 36px`,
            fontFamily: `Outfit`,
            fontWeight: 700,
            fontSize: 16,
            cursor: `pointer`,
            transition: 'background 0.3s'
          }}
        >
          {saved
            ? `✅ Configurações salvas com sucesso!`
            : `Salvar Configurações`}
        </button>
      </div>
    </div>
  );
}


function SubSettingScreen({
  title,
  icon,
  onBack,
  isDarkMode,
  setIsDarkMode,
  colors
}) {
  let [tempDarkMode, setTempDarkMode] =
    React.useState(isDarkMode);

  let [saved, setSaved] = React.useState(false);

  const handleSave = () => {
    setIsDarkMode(tempDarkMode);
    setSaved(true);

    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 24,
        maxWidth: 800,
        margin: '0 auto',
        width: '100%'
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16
        }}
      >
        <button
          onClick={onBack}
          aria-label="Voltar"
          style={{
            background: colors.surface2,
            border: 'none',
            borderRadius: 10,
            padding: 10,
            cursor: 'pointer',
            display: 'flex'
          }}
        >
          <BackIcon colors={colors} />
        </button>

        <h2
          style={{
            fontFamily: 'Outfit',
            fontWeight: 700,
            fontSize: 24,
            color: colors.text,
            margin: 0
          }}
        >
          {icon} {title}
        </h2>
      </div>

      <Card
        colors={colors}
        style={{
          padding: 32,
          display: 'flex',
          flexDirection: 'column',
          gap: 20
        }}
      >
        {title === 'Perfil e conta' && (
          <>
            <div>
              <label
                htmlFor="input-nome"
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  fontSize: 14,
                  color: colors.text,
                  display: 'block',
                  marginBottom: 8
                }}
              >
                Nome Completo
              </label>

              <input
                id="input-nome"
                defaultValue="Lucas Mendes"
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: 12,
                  border: `1px solid ${colors.border}`,
                  background: colors.bg,
                  fontFamily: 'Inter',
                  fontSize: 15,
                  color: colors.text,
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label
                htmlFor="input-email"
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  fontSize: 14,
                  color: colors.text,
                  display: 'block',
                  marginBottom: 8
                }}
              >
                E-mail de Acesso
              </label>

              <input
                id="input-email"
                defaultValue="lucas@email.com"
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: 12,
                  border: `1px solid ${colors.border}`,
                  background: colors.bg,
                  fontFamily: 'Inter',
                  fontSize: 15,
                  color: colors.text,
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  fontSize: 14,
                  color: colors.text,
                  display: 'block',
                  marginBottom: 8
                }}
              >
                Plano Atual
              </label>

              <div
                style={{
                  padding: '14px 18px',
                  borderRadius: 12,
                  background: colors.primaryLight,
                  color: colors.primary,
                  fontWeight: 700,
                  fontFamily: 'Outfit'
                }}
              >
                Plano Pro Ativo ⭐
              </div>
            </div>
          </>
        )}

        {title === 'Notificações e Alertas' && (
          <>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
                borderBottom: `1px solid ${colors.border}`,
                gap: 16
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: 'Outfit',
                    fontWeight: 600,
                    fontSize: 15,
                    color: colors.text,
                    margin: '0 0 2px 0'
                  }}
                >
                  Alertas de Limite de Gastos
                </p>

                <p
                  style={{
                    fontSize: 13,
                    color: colors.text2,
                    margin: 0
                  }}
                >
                  Avisar quando atingir 90% da categoria
                </p>
              </div>

              <input
                aria-label="Alertas de Limite de Gastos"
                type="checkbox"
                defaultChecked
                style={{
                  width: 20,
                  height: 20,
                  accentColor: colors.primary,
                  cursor: 'pointer'
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
                borderBottom: `1px solid ${colors.border}`,
                gap: 16
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: 'Outfit',
                    fontWeight: 600,
                    fontSize: 15,
                    color: colors.text,
                    margin: '0 0 2px 0'
                  }}
                >
                  Resumo Semanal por E-mail
                </p>

                <p
                  style={{
                    fontSize: 13,
                    color: colors.text2,
                    margin: 0
                  }}
                >
                  Receba um balanço dos seus gastos toda segunda-feira
                </p>
              </div>

              <input
                aria-label="Resumo Semanal por E-mail"
                type="checkbox"
                defaultChecked
                style={{
                  width: 20,
                  height: 20,
                  accentColor: colors.primary,
                  cursor: 'pointer'
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '12px 0',
                gap: 16
              }}
            >
              <div>
                <p
                  style={{
                    fontFamily: 'Outfit',
                    fontWeight: 600,
                    fontSize: 15,
                    color: colors.text,
                    margin: '0 0 2px 0'
                  }}
                >
                  Notificações Push no Navegador
                </p>

                <p
                  style={{
                    fontSize: 13,
                    color: colors.text2,
                    margin: 0
                  }}
                >
                  Avisos instantâneos sobre novas despesas
                </p>
              </div>

              <input
                aria-label="Notificações Push no Navegador"
                type="checkbox"
                style={{
                  width: 20,
                  height: 20,
                  accentColor: colors.primary,
                  cursor: 'pointer'
                }}
              />
            </div>
          </>
        )}

        {title === 'Segurança e senha' && (
          <>
            <div>
              <label
                htmlFor="input-senha-atual"
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  fontSize: 14,
                  color: colors.text,
                  display: 'block',
                  marginBottom: 8
                }}
              >
                Palavra-passe Atual
              </label>

              <input
                id="input-senha-atual"
                type="password"
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: 12,
                  border: `1px solid ${colors.border}`,
                  background: colors.bg,
                  fontFamily: 'Inter',
                  fontSize: 15,
                  color: colors.text,
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label
                htmlFor="input-nova-senha"
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  fontSize: 14,
                  color: colors.text,
                  display: 'block',
                  marginBottom: 8
                }}
              >
                Nova Palavra-passe
              </label>

              <input
                id="input-nova-senha"
                type="password"
                placeholder="Mínimo de 8 caracteres"
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: 12,
                  border: `1px solid ${colors.border}`,
                  background: colors.bg,
                  fontFamily: 'Inter',
                  fontSize: 15,
                  color: colors.text,
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label
                htmlFor="input-conf-senha"
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  fontSize: 14,
                  color: colors.text,
                  display: 'block',
                  marginBottom: 8
                }}
              >
                Confirmar Nova Palavra-passe
              </label>

              <input
                id="input-conf-senha"
                type="password"
                placeholder="Repita a palavra-passe"
                style={{
                  width: '100%',
                  padding: '14px 18px',
                  borderRadius: 12,
                  border: `1px solid ${colors.border}`,
                  background: colors.bg,
                  fontFamily: 'Inter',
                  fontSize: 15,
                  color: colors.text,
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </>
        )}

        {title === 'Aparência e Tema' && (
          <>
            <p
              style={{
                fontSize: 14,
                color: colors.text2,
                margin: 0
              }}
            >
              Escolha o visual que prefere para utilizar o FinanApp:
            </p>

            <div
              className="responsive-grid-2"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16
              }}
            >
              <div
                onClick={() => setTempDarkMode(false)}
                style={{
                  padding: 20,
                  borderRadius: 16,
                  border: `2px solid ${
                    !tempDarkMode
                      ? colors.primary
                      : colors.border
                  }`,
                  background: colors.surface2,
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <span
                  style={{
                    fontSize: 28,
                    display: 'block',
                    marginBottom: 8
                  }}
                >
                  ☀️
                </span>

                <span
                  style={{
                    fontFamily: 'Outfit',
                    fontWeight: 700,
                    color: colors.text
                  }}
                >
                  Modo Claro
                </span>
              </div>

              <div
                onClick={() => setTempDarkMode(true)}
                style={{
                  padding: 20,
                  borderRadius: 16,
                  border: `2px solid ${
                    tempDarkMode
                      ? colors.primary
                      : colors.border
                  }`,
                  background: '#1E1B4B',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                <span
                  style={{
                    fontSize: 28,
                    display: 'block',
                    marginBottom: 8
                  }}
                >
                  🌙
                </span>

                <span
                  style={{
                    fontFamily: 'Outfit',
                    fontWeight: 700,
                    color: '#FFF'
                  }}
                >
                  Modo Noturno
                </span>
              </div>
            </div>
          </>
        )}

        {title === 'Exportar dados financeiros' && (
          <>
            <p
              style={{
                fontSize: 14,
                color: colors.text2,
                margin: 0
              }}
            >
              Transfira todos os seus lançamentos, extratos conciliados e relatórios de metas para análise externa.
            </p>

            <div
              className="responsive-grid-2"
              style={{
                display: 'flex',
                gap: 16,
                marginTop: 10
              }}
            >
              <button
                onClick={handleSave}
                style={{
                  flex: 1,
                  padding: '16px',
                  borderRadius: 12,
                  border: `1px solid ${colors.border}`,
                  background: colors.surface2,
                  color: colors.primary,
                  fontFamily: 'Outfit',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                📄 Exportar em CSV
              </button>

              <button
                onClick={handleSave}
                style={{
                  flex: 1,
                  padding: '16px',
                  borderRadius: 12,
                  border: `1px solid ${colors.border}`,
                  background: colors.surface2,
                  color: colors.primary,
                  fontFamily: 'Outfit',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                📊 Exportar em Excel (XLSX)
              </button>
            </div>
          </>
        )}

        {title === 'Ajuda e suporte' && (
          <>
            <div>
              <p
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  fontSize: 15,
                  color: colors.text,
                  marginBottom: 4
                }}
              >
                Perguntas Frequentes (FAQ)
              </p>

              <p
                style={{
                  fontSize: 13,
                  color: colors.text2,
                  margin: '0 0 12px 0'
                }}
              >
                Consulte tutoriais sobre como importar ficheiros OFX e gerir categorias.
              </p>

              <button
                style={{
                  padding: '10px 16px',
                  borderRadius: 10,
                  background: colors.primaryLight,
                  color: colors.primary,
                  border: 'none',
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Abrir Central de Ajuda
              </button>
            </div>

            <div
              style={{
                borderTop: `1px solid ${colors.border}`,
                paddingTop: 16
              }}
            >
              <p
                style={{
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  fontSize: 15,
                  color: colors.text,
                  marginBottom: 4
                }}
              >
                Falar com o Suporte Técnico
              </p>

              <p
                style={{
                  fontSize: 13,
                  color: colors.text2,
                  margin: '0 0 12px 0'
                }}
              >
                A nossa equipa responde habitualmente em menos de 2 horas.
              </p>

              <button
                style={{
                  padding: '10px 16px',
                  borderRadius: 10,
                  background: colors.primary,
                  color: '#FFF',
                  border: 'none',
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Enviar Mensagem
              </button>
            </div>
          </>
        )}

        {title !== 'Exportar dados financeiros' && (
          <button
            onClick={handleSave}
            style={{
              background: saved
                ? colors.green
                : colors.primary,
              color: '#FFF',
              border: 'none',
              borderRadius: 14,
              padding: '16px',
              fontFamily: 'Outfit',
              fontWeight: 700,
              fontSize: 15,
              cursor: 'pointer',
              marginTop: 10,
              transition: 'background 0.3s'
            }}
          >
            {saved
              ? '✅ Alterações guardadas com sucesso!'
              : 'Guardar Alterações'}
          </button>
        )}
      </Card>
    </div>
  );
}


function SettingsScreen({
  onSelectSubScreen,
  onLogoutClick,
  colors
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 28,
        width: '100%',
        maxWidth: 1200,
        margin: '0 auto'
      }}
    >
      <h2
        style={{
          fontFamily: `Outfit`,
          fontWeight: 700,
          fontSize: 26,
          color: colors.text,
          textAlign: 'center',
          margin: 0
        }}
      >
        Ajustes e Conta
      </h2>

      <Card
        colors={colors}
        style={{
          display: `flex`,
          alignItems: `center`,
          gap: 20,
          padding: 32
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: `50%`,
            background: `linear-gradient(135deg, ${colors.primary}, #C084FC)`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            fontFamily: `Outfit`,
            fontWeight: 800,
            fontSize: 26,
            color: `#FFF`
          }}
        >
          L
        </div>

        <div>
          <p
            style={{
              fontFamily: `Outfit`,
              fontWeight: 700,
              fontSize: 22,
              color: colors.text,
              marginBottom: 4
            }}
          >
            Lucas Mendes
          </p>

          <p
            style={{
              fontSize: 14,
              color: colors.text2
            }}
          >
            lucas@email.com · Plano Pro Ativo
          </p>
        </div>
      </Card>

      <div
        className="responsive-grid-2"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16
        }}
      >
        {[
          { icon: `👤`, label: `Perfil e conta` },
          { icon: `🔔`, label: `Notificações e Alertas` },
          { icon: `🔒`, label: `Segurança e senha` },
          { icon: `🌙`, label: `Aparência e Tema` },
          { icon: `📤`, label: `Exportar dados financeiros` },
          { icon: `❓`, label: `Ajuda e suporte` }
        ].map(item => (
          <button
            onClick={() =>
              onSelectSubScreen(
                item.label,
                item.icon
              )
            }
            style={{
              display: `flex`,
              alignItems: `center`,
              gap: 16,
              padding: `22px 24px`,
              background: colors.surface,
              border: `1px solid ${colors.border}`,
              borderRadius: 16,
              cursor: `pointer`,
              textAlign: `left`,
              width: `100%`,
              boxShadow:
                '0 2px 8px rgba(0,0,0,0.02)',
              transition: 'transform 0.15s'
            }}
            key={item.label}
          >
            <span style={{ fontSize: 26 }}>
              {item.icon}
            </span>

            <span
              style={{
                fontFamily: `Outfit`,
                fontWeight: 700,
                fontSize: 16,
                color: colors.text,
                flex: 1
              }}
            >
              {item.label}
            </span>

            <svg
              width={18}
              height={18}
              viewBox={`0 0 24 24`}
              fill={`none`}
              stroke={colors.text2}
              strokeWidth={`2`}
              strokeLinecap={`round`}
              strokeLinejoin={`round`}
            >
              <polyline points={`9 18 15 12 9 6`} />
            </svg>
          </button>
        ))}
      </div>

      <button
        onClick={onLogoutClick}
        style={{
          background: `none`,
          border: `2px solid ${colors.border}`,
          borderRadius: 16,
          padding: `20px`,
          fontFamily: `Outfit`,
          fontWeight: 700,
          fontSize: 15,
          color: colors.red,
          cursor: `pointer`,
          width: '100%',
          marginTop: 8
        }}
      >
        Sair da conta
      </button>
    </div>
  );
}


// COMPONENTE PRINCIPAL APP

function App() {
  let [activeTab, setActiveTab] =
    React.useState('inicio');

  let [isDarkMode, setIsDarkMode] =
    React.useState(false);

  let [subSetting, setSubSetting] =
    React.useState(null);

  let [showLogoutModal, setShowLogoutModal] =
    React.useState(false);

  let [transactions, setTransactions] =
    React.useState(initialTransactionsData);

  let [pendingItems, setPendingItems] =
    React.useState(initialPendingTransactions);

  const colors = isDarkMode
    ? themes.dark
    : themes.light;

  React.useEffect(() => {
    document.body.style.backgroundColor =
      colors.bg;
  }, [isDarkMode, colors.bg]);

  const handleAddTransaction = newTx => {
    setTransactions(prev => [
      newTx,
      ...prev
    ]);
  };

  const handleAcceptPending = (
    item,
    chosenCat
  ) => {
    setPendingItems(prev =>
      prev.filter(p => p.id !== item.id)
    );

    setTransactions(prev => [
      {
        id: item.id,
        desc: item.desc,
        valor: item.valor,
        hora: 'Hoje',
        cat: chosenCat
      },
      ...prev
    ]);
  };

  const handleDiscardPending = id => {
    setPendingItems(prev =>
      prev.filter(p => p.id !== id)
    );
  };

  return (
    <div
      className="app-layout-container"
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
        minHeight: '100vh',
        position: 'relative',
        width: '100%',
        overflowX: 'hidden'
      }}
    >

      {/* ESTILOS CSS ESTRUTURAIS E RESPONSIVOS AJUSTADOS */}
      <style>{`

        * {
          box-sizing: border-box;
        }

        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          min-width: 0;
          overflow-x: hidden;
        }

        button,
        input,
        select {
          max-width: 100%;
        }

        .top-header-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 32px;
          border-bottom: 1px solid;
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
          flex-wrap: wrap;
          gap: 16px;
          width: 100%;
        }

        .logo-area {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }

        .logo-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .nav-pills-container {
          display: flex;
          align-items: center;
          padding: 4px;
          border-radius: 14px;
          gap: 4px;
          overflow-x: auto;
          max-width: 100%;
          min-width: 0;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .nav-pills-container::-webkit-scrollbar {
          display: none;
        }

        .nav-pill-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 10px;
          border: none;
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          white-space: nowrap;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .theme-toggle-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          flex-shrink: 0;
        }

        .user-profile-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7C3AED, #C084FC);
          color: #FFF;
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .app-main-body {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          box-sizing: border-box;
        }

        @media (max-width: 900px) {
          .subtitle-text {
            display: none !important;
          }
        }

        /* ==========================================
           MOBILE
           ========================================== */

        @media (max-width: 768px) {

          .top-header-bar {
            display: grid !important;
            grid-template-columns: minmax(0, 1fr) auto;
            grid-template-rows: auto auto;
            align-items: center;
            column-gap: 12px;
            /* Aumentado o espaçamento entre as linhas para empurrar o menu para baixo */
            row-gap: 16px; 
            /* Aumentado o padding inferior para dar mais respiro à navbar */
            padding: 14px 16px 18px 16px !important;
            width: 100%;
            min-width: 0;
            box-sizing: border-box;
          }

          .logo-area {
            grid-column: 1;
            grid-row: 1;
            min-width: 0;
            display: flex;
            align-items: center;
          }

          .header-actions {
            grid-column: 2;
            grid-row: 1;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 8px;
            flex-shrink: 0;
          }

          .nav-pills-container {
            grid-column: 1 / -1;
            grid-row: 2;
            width: 100% !important;
            max-width: 100% !important;
            display: flex;
            align-items: center;
            overflow-x: auto;
            overflow-y: hidden;
            padding: 6px; /* Adicionado um padding leve interno */
            gap: 6px;
            box-sizing: border-box;
            scrollbar-width: none;
            -ms-overflow-style: none;
          }

          .nav-pills-container::-webkit-scrollbar {
            display: none;
          }

          .nav-pill-btn {
            flex: 0 0 auto;
            padding: 8px 12px;
            font-size: 13px;
          }

          .app-main-body {
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            padding: 24px 16px !important;
            box-sizing: border-box;
            overflow-x: hidden;
          }

          .responsive-grid-2 {
            grid-template-columns: 1fr !important;
          }

          .responsive-categories-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          h1, h2, h3, h4, p, span {
            overflow-wrap: break-word;
          }

        }

        @media (max-width: 420px) {
          .top-header-bar {
            padding: 12px 12px 16px 12px !important;
          }

          .nav-pill-btn {
            padding: 8px 10px;
            font-size: 12px;
            gap: 5px;
          }

          .theme-toggle-btn,
          .user-profile-avatar {
            width: 36px;
            height: 36px;
          }

          .logo-icon {
            width: 34px;
            height: 34px;
          }

          .app-main-body {
            padding: 20px 12px !important;
          }
        }

      `}</style>


      <TopHeader
        active={activeTab}
        onChange={tab => {
          setActiveTab(tab);
          setSubSetting(null);
        }}
        isDarkMode={isDarkMode}
        onToggleTheme={() =>
          setIsDarkMode(!isDarkMode)
        }
        colors={colors}
      />


      <main
        className="app-main-body"
        style={{
          padding: '32px 24px',
          maxWidth: 1200,
          width: '100%',
          margin: '0 auto',
          boxSizing: 'border-box'
        }}
      >
        {activeTab === 'inicio' && (
          <HomeScreen
            transactions={transactions}
            onNovoLancamento={() =>
              setActiveTab('novo')
            }
            onViewAll={() =>
              setActiveTab('extratos')
            }
            colors={colors}
          />
        )}

        {activeTab === 'novo' && (
          <NewTransactionScreen
            onBack={() =>
              setActiveTab('inicio')
            }
            onAddTransaction={
              handleAddTransaction
            }
            colors={colors}
          />
        )}

        {activeTab === 'extratos' && (
          <StatementsScreen
            transactions={transactions}
            pendingItems={pendingItems}
            onAcceptPending={
              handleAcceptPending
            }
            onDiscardPending={
              handleDiscardPending
            }
            colors={colors}
          />
        )}

        {activeTab === 'metas' && (
          <GoalsScreen
            colors={colors}
          />
        )}

        {activeTab === 'ajustes' && (
          subSetting ? (
            <SubSettingScreen
              title={subSetting.title}
              icon={subSetting.icon}
              onBack={() =>
                setSubSetting(null)
              }
              isDarkMode={isDarkMode}
              setIsDarkMode={
                setIsDarkMode
              }
              colors={colors}
            />
          ) : (
            <SettingsScreen
              onSelectSubScreen={(
                title,
                icon
              ) =>
                setSubSetting({
                  title,
                  icon
                })
              }
              onLogoutClick={() =>
                setShowLogoutModal(true)
              }
              colors={colors}
            />
          )
        )}
      </main>


      {/* Modal de Confirmação Destrutiva */}
      {showLogoutModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor:
              'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: 20
          }}
        >
          <div
            style={{
              background: colors.surface,
              borderRadius: 20,
              padding: 32,
              maxWidth: 400,
              width: '100%',
              border: `1px solid ${colors.border}`,
              textAlign: 'center',
              boxShadow:
                '0 10px 25px rgba(0,0,0,0.2)'
            }}
          >
            <p
              style={{
                fontSize: 32,
                margin: '0 0 12px 0'
              }}
            >
              ⚠️
            </p>

            <h3
              style={{
                fontFamily: 'Outfit',
                fontWeight: 700,
                fontSize: 20,
                color: colors.text,
                margin: '0 0 8px 0'
              }}
            >
              Deseja mesmo sair?
            </h3>

            <p
              style={{
                fontSize: 14,
                color: colors.text2,
                margin: '0 0 24px 0'
              }}
            >
              Será necessário iniciar sessão novamente para aceder à sua conta financeira.
            </p>

            <div
              style={{
                display: 'flex',
                gap: 12
              }}
            >
              <button
                onClick={() =>
                  setShowLogoutModal(false)
                }
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: 12,
                  border: `1px solid ${colors.border}`,
                  background: colors.surface2,
                  color: colors.text,
                  fontFamily: 'Outfit',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Cancelar
              </button>

              <button
                onClick={() => {
                  setShowLogoutModal(false);
                  alert(
                    'Sessão terminada com sucesso!'
                  );
                }}
                style={{
                  flex: 1,
                  padding: '12px',
                  borderRadius: 12,
                  border: 'none',
                  background: colors.red,
                  color: '#FFF',
                  fontFamily: 'Outfit',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                Sim, Sair
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;