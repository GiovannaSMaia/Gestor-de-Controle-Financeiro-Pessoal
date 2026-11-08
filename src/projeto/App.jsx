import useTransactions from './hooks/useTransactions.js';
import React from 'react';
import { themes } from './data/themes.js';
import TopHeader from './components/TopHeader.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import NewTransactionScreen from './screens/NewTransactionScreen.jsx';
import StatementsScreen from './screens/StatementsScreen.jsx';
import GoalsScreen from './screens/GoalsScreen.jsx';
import SubSettingScreen from './screens/SubSettingScreen.jsx';
import SettingsScreen from './screens/SettingsScreen.jsx';
import LogoutModal from './components/LogoutModal.jsx';
import './layout.css';

function App() {
  let [activeTab, setActiveTab] =
    React.useState('inicio');

  let [isDarkMode, setIsDarkMode] =
    React.useState(false);

  let [subSetting, setSubSetting] =
    React.useState(null);

  let [showLogoutModal, setShowLogoutModal] =
    React.useState(false);

  const { transactions, pendingItems, handleAddTransaction, handleAcceptPending, handleDiscardPending } = useTransactions();

  const colors = isDarkMode
    ? themes.dark
    : themes.light;

  React.useEffect(() => {
    document.body.style.backgroundColor =
      colors.bg;
  }, [isDarkMode, colors.bg]);

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

      {showLogoutModal && (
        <LogoutModal colors={colors} onClose={() => setShowLogoutModal(false)} />
      )}
    </div>
  );
}

export default App;
