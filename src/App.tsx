import { useEffect, useState, useMemo } from "react";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { LiquidityPage } from "./pages/LiquidityPage";
import { SettingsPage } from "./pages/SettingsPage";
import { SwapPage } from "./pages/SwapPage";
import { TokensPage } from "./pages/TokensPage";
import { FaExchangeAlt, FaWater, FaChartBar, FaCoins, FaCog, FaBars } from "react-icons/fa";

const logoImage = "/dashboard/logo.jpg";

type EthereumProvider = {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
};

declare global {
  interface Window {
    ethereum?: EthereumProvider;
  }
}

type Page = "Swap" | "Liquidity" | "Analytics" | "Tokens" | "Settings";
type ThemeMode = "dark" | "light";

const navItems = [
  { label: "Swap", icon: <FaExchangeAlt /> },
  { label: "Liquidity", icon: <FaWater /> },
  { label: "Analytics", icon: <FaChartBar /> },
  { label: "Tokens", icon: <FaCoins /> },
  { label: "Settings", icon: <FaCog /> },
];

const navPages: Page[] = ["Swap", "Liquidity", "Analytics", "Tokens", "Settings"];

export function App() {
  const [activePage, setActivePage] = useState<Page>("Swap");
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [network, setNetwork] = useState("BSC");
  const [fromAmount, setFromAmount] = useState("5.25");
  const [toAmount, setToAmount] = useState("1628.75");
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem("go-swap-theme");
    return saved === "light" ? "light" : "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("go-swap-theme", theme);
  }, [theme]);

  const price = useMemo(() => {
    const from = Number(fromAmount) || 0;
    const to = Number(toAmount) || 0;
    if (!from || !to) return 0;
    return to / from;
  }, [fromAmount, toAmount]);

  const walletLabel = useMemo(() => {
    if (!walletAddress) return "Connect Wallet";
    return `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`;
  }, [walletAddress]);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Nenhuma wallet detectada. Instale MetaMask ou similar.");
        return;
      }

      const accounts = (await window.ethereum.request({
        method: "eth_requestAccounts"
      })) as string[];

      if (accounts.length > 0) {
        setWalletAddress(accounts[0]);
      }
    } catch {
      alert("Não foi possível conectar a wallet.");
    }
  };

  const handleSwapPreview = () => {
    alert(`Swap simulado: ${fromAmount} ETH por ${toAmount} USDC`);
  };

  const flipPair = () => {
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case "Liquidity":
        return <LiquidityPage />;
      case "Analytics":
        return <AnalyticsPage />;
      case "Tokens":
        return <TokensPage />;
      case "Settings":
        return (
          <SettingsPage
            network={network}
            onNetworkChange={setNetwork}
            walletLabel={walletLabel}
            onConnectWallet={connectWallet}
            theme={theme}
            onThemeChange={setTheme}
          />
        );
      case "Swap":
      default:
        return <SwapPage />;
    }
  };

  return (
    <div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars />
      </button>
      <div className="app-shell">
        <aside className={`sidebar${menuOpen ? " open" : ""}`}>
          <div className="logo-wrap">
            <div className="logo-mark">
              <img src={logoImage} alt="GO Swap" className="logo-image" />
            </div>
            <div className="logo-text">GO SWAP</div>
          </div>
          <hr className="menu-hr" />
          <nav className="side-nav">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`nav-item ${activePage === item.label ? "active" : ""}`}
                onClick={() => { setActivePage(item.label as Page); setMenuOpen(false); }}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
            ))}
          </nav>
          <hr className="menu-hr" />
        </aside>

        <main className="main-content">
          <header className="topbar glass">
            <div className="top-actions">
              <select className="network-select" value={network} onChange={(event) => setNetwork(event.target.value)}>
                <option value="BSC">BSC</option>
                <option value="Ethereum">Ethereum</option>
                <option value="Arbitrum">Arbitrum</option>
                <option value="Polygon">Polygon</option>
              </select>

              <button className="theme-toggle" onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}>
                {theme === "dark" ? "☀ Light" : "🌙 Dark"}
              </button>

              <button className="settings-btn" title="Configurações" onClick={() => setActivePage("Settings")}>⚙️</button>

              <button className="wallet-connect-btn" onClick={connectWallet}>
                <span className="wallet-icon">👤</span>
                <span className="wallet-label">{walletLabel}</span>
                <span className={`wallet-status ${walletAddress ? "connected" : "disconnected"}`}></span>
              </button>
            </div>
          </header>

          {renderActivePage()}
        </main>
      </div>
    </div>
  );
}
