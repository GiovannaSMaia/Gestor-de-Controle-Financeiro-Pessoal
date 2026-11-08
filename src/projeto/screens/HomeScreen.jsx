import React from 'react';
import { categoryEmoji } from '../data/categoryEmoji.js';
import { formatCurrency } from '../utils/formatCurrency.js';
import ProgressBar from '../components/ProgressBar.jsx';
import Card from '../components/Card.jsx';

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
          Olá, Lúcia 👋
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
            {formatCurrency(gastoAtual)}
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
              Meta mensal: {formatCurrency(metaMensal)}
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
                    -{formatCurrency(transacao.valor)}
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

export default HomeScreen;
