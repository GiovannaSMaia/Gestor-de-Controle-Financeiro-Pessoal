import React from 'react';
import { categoryEmoji } from '../data/categoryEmoji.js';
import { initialBudgets } from '../data/initialBudgets.js';
import { formatCurrency } from '../utils/formatCurrency.js';
import ProgressBar from '../components/ProgressBar.jsx';
import Card from '../components/Card.jsx';

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
                      {formatCurrency(b.gasto)} /
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

export default GoalsScreen;
