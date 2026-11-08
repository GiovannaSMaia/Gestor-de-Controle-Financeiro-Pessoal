import { filterTransactions } from '../utils/filterTransactions.js';
import React from 'react';
import { categories } from '../data/categories.js';
import { categoryEmoji } from '../data/categoryEmoji.js';
import { formatCurrency } from '../utils/formatCurrency.js';
import Card from '../components/Card.jsx';

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

  const filteredTransactions = filterTransactions(transactions, searchQuery, filterCategory);

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
                          -{formatCurrency(item.valor)}
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
                    -{formatCurrency(item.valor)}
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

export default StatementsScreen;
