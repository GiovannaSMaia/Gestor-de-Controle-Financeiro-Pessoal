import React from 'react';
import BackIcon from '../components/icons/BackIcon.jsx';
import Card from '../components/Card.jsx';

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
                defaultValue="Lúcia Mendes"
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
                defaultValue="Lúcia@email.com"
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

export default SubSettingScreen;
