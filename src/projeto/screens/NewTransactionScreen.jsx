import React from 'react';
import { categories } from '../data/categories.js';
import { categoryEmoji } from '../data/categoryEmoji.js';
import BackIcon from '../components/icons/BackIcon.jsx';
import Card from '../components/Card.jsx';

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

export default NewTransactionScreen;
