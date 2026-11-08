import React from 'react';
import HomeIcon from './icons/HomeIcon.jsx';
import StatementIcon from './icons/StatementIcon.jsx';
import GoalIcon from './icons/GoalIcon.jsx';
import SettingsTabIcon from './icons/SettingsTabIcon.jsx';

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

export default TopHeader;
