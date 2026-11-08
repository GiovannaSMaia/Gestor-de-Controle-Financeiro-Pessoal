import React from 'react';
import Card from '../components/Card.jsx';

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
            Lúcia Mendes
          </p>

          <p
            style={{
              fontSize: 14,
              color: colors.text2
            }}
          >
            Lúcia@email.com · Plano Pro Ativo
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

export default SettingsScreen;
