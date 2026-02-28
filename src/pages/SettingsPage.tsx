type ThemeMode = "dark" | "light";

type SettingsPageProps = {
  network: string;
  onNetworkChange: (value: string) => void;
  walletLabel: string;
  onConnectWallet: () => void;
  theme: ThemeMode;
  onThemeChange: (value: ThemeMode) => void;
};

export function SettingsPage({
  network,
  onNetworkChange,
  walletLabel,
  onConnectWallet,
  theme,
  onThemeChange
}: SettingsPageProps) {
  return (
    <section className="page-grid">
      <article className="glass panel settings-grid">
        <div className="panel-header">
          <h3>Settings</h3>
          <button className="add-btn">Save</button>
        </div>

        <label className="setting-row">
          <span>Default Network</span>
          <select className="small-select" value={network} onChange={(event) => onNetworkChange(event.target.value)}>
            <option value="Ethereum">
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                {/* Ethereum logo */}
                <img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/info/logo.png" alt="ETH" width={18} height={18} style={{ borderRadius: "50%" }} /> Ethereum
              </span>
            </option>
            <option value="Arbitrum">
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                {/* Arbitrum logo */}
                <img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/arbitrum/info/logo.png" alt="ARB" width={18} height={18} style={{ borderRadius: "50%" }} /> Arbitrum
              </span>
            </option>
            <option value="Polygon">
              <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                {/* Polygon logo */}
                <img src="https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/polygon/info/logo.png" alt="MATIC" width={18} height={18} style={{ borderRadius: "50%" }} /> Polygon
              </span>
            </option>
          </select>
        </label>

        <label className="setting-row">
          <span>Default Slippage</span>
          <select className="small-select" defaultValue="0.5%">
            <option>0.1%</option>
            <option>0.5%</option>
            <option>1.0%</option>
          </select>
        </label>

        <label className="setting-row">
          <span>Transaction Deadline</span>
          <select className="small-select" defaultValue="20 min">
            <option>10 min</option>
            <option>20 min</option>
            <option>30 min</option>
          </select>
        </label>

        <label className="setting-row">
          <span>Theme</span>
          <select className="small-select" value={theme} onChange={(event) => onThemeChange(event.target.value as ThemeMode)}>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </label>
      </article>

      <article className="glass panel">
        <div className="panel-header">
          <h3>Wallet Security</h3>
          <button className="more-btn">⋯</button>
        </div>
        <p className="muted">Wallet conectada: {walletLabel}</p>
        <div className="quick-pairs">
          <button onClick={onConnectWallet}>Reconnect Wallet</button>
          <button>Export Session</button>
          <button>Permissions</button>
          <button>Revoke DApps</button>
        </div>
      </article>
    </section>
  );
}
