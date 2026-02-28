import React, { useState } from "react";
import { TokenLogo } from "../components/TokenLogo";
import "../tokenPage.css";

type TokenInfo = {
  symbol: string;
  name: string;
  address: string;
};

const TOKENS: TokenInfo[] = [
  { symbol: "WBNB", name: "WBNB", address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52" },
  { symbol: "USDT", name: "USDT", address: "0x55d398326f99059fF775485246999027B3197955" },
  { symbol: "CAKE", name: "CAKE", address: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82" },
  { symbol: "ETH", name: "ETH", address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8" },
  { symbol: "BTCB", name: "BTCB", address: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c" },
  { symbol: "XRP", name: "XRP", address: "0x1D2F0dA169cebD6c1F1eE2186b4bA7c8e2a1456B" },
  { symbol: "ADA", name: "ADA", address: "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47" },
  { symbol: "DOT", name: "DOT", address: "0x7083609fCE4d1d8dc6E1fF5b85cDc34E43eE6e2A" },
  { symbol: "DOGE", name: "DOGE", address: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43" },
  { symbol: "USDC", name: "USDC", address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d" },
  { symbol: "SHIB", name: "SHIB", address: "0x2857aD1b7c2C5e7bA7eA2eB7e6eA2eB7e6eA2eB7" },
  { symbol: "LTC", name: "LTC", address: "0x4338665cbb7b2485a7f6a1eec9f7e7e7e7e7e7e7" },
  { symbol: "SOL", name: "Solana", address: "0x570A5D26f7765Ecb7bA5b7AefF7eAfcBa5C3e5aB" },
  { symbol: "MATIC", name: "Polygon", address: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0" },
  { symbol: "TRX", name: "Tron", address: "0x50327c6c5a14dce4c2b6f6d7c7a7a7a7a7a7a7a7" },
  { symbol: "AVAX", name: "Avalanche", address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7" },
];

const TokensPage: React.FC = () => {
  const [search, setSearch] = useState("");
  const filtered = TOKENS.filter(
    t =>
      t.symbol.toLowerCase().includes(search.toLowerCase()) ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.address.toLowerCase().includes(search.toLowerCase()) ||
      search.trim() === ""
  );

  // Organiza em linhas de 4
  const rows: TokenInfo[][] = [];
  for (let i = 0; i < filtered.length; i += 4) {
    rows.push(filtered.slice(i, i + 4));
  }

  return (
    <section className="tokens-section">
      <div className="tokens-header">
        <h2 className="tokens-title">Tokens</h2>
        <input
          className="tokens-search"
          type="text"
          placeholder="Search token or paste address..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="tokens-grid">
        {rows.map((row: TokenInfo[], idx: number) => (
          <div className="tokens-row" key={idx}>
            {row.map((token: TokenInfo) => (
              <div className="token-card" key={token.symbol}>
                <TokenLogo addressOrSymbol={token.symbol} address={token.address} size={64} />
                <div className="token-label">{token.symbol}</div>
                <div className="token-value">$ {Math.floor(Math.random() * 1000) + 1}</div>
                <button
                  className="swap-btn"
                  onClick={() => window.location.href = `/swap?from=${token.symbol}`}
                >Swap</button>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
export { TokensPage };
