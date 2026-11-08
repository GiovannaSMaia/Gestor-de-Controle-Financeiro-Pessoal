import React from 'react';

function LogoutModal({ colors, onClose }) {
  return (
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
                  onClose()
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
                  onClose();
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
  );
}

export default LogoutModal;
