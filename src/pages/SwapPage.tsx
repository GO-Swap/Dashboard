
import React, { useState } from "react";
import { stats, tokens } from "../data/dashboardData";
import { TokenLogo } from "../components/TokenLogo";

const PAIRS = [
  { from: { symbol: "ETH", address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8" }, to: { symbol: "USDC", address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d" } },
  { from: { symbol: "BTC", address: "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c" }, to: { symbol: "USDT", address: "0x55d398326f99059fF775485246999027B3197955" } },
  { from: { symbol: "LINK", address: "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD" }, to: { symbol: "ETH", address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8" } },
  { from: { symbol: "SOL", address: "0x570A5D26f7765Ecb7bA5b7AefF7eAfcBa5C3e5aB" }, to: { symbol: "USDC", address: "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d" } },
];

export function SwapPage() {
  const [fromToken, setFromToken] = useState(PAIRS[0].from);
  const [toToken, setToToken] = useState(PAIRS[0].to);
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [price, setPrice] = useState(310.24);

  // Troca os tokens
  const handleFlipPair = () => {
    setFromToken(toToken);
    setToToken(fromToken);
    setFromAmount(toAmount);
    setToAmount(fromAmount);
  };

  // Troca para par rápido
  const handleQuickPair = (pairIdx: number) => {
    setFromToken(PAIRS[pairIdx].from);
    setToToken(PAIRS[pairIdx].to);
    setFromAmount("");
    setToAmount("");
    setPrice(310.24); // Aqui pode atualizar o preço conforme o par
  };

  return (
    <>
      <section className="stats-grid">
        {stats.map((item) => (
          <article className="stat-card glass" key={item.label}>
            <h4>{item.label}</h4>
            <div className="stat-main">{item.value}</div>
            <span className="positive">{item.delta}</span>
          </article>
        ))}
      </section>

      <section className="content-grid">
        <article className="swap-card glass panel">
          <div className="panel-header">
            <h3>Swap</h3>
            <button className="more-btn">⋯</button>
          </div>

          <div className="swap-box">
            <label>From</label>
            <div className="row">
              <div className="token" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <TokenLogo addressOrSymbol={fromToken.symbol} address={fromToken.address} size={28} /> {fromToken.symbol}
              </div>
              <input value={fromAmount} onChange={(event) => setFromAmount(event.target.value)} type="number" step="0.01" />
            </div>
          </div>

          <button className="flip-btn" onClick={handleFlipPair}>⇅</button>

          <div className="swap-box">
            <label>To</label>
            <div className="row">
              <div className="token" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <TokenLogo addressOrSymbol={toToken.symbol} address={toToken.address} size={28} /> {toToken.symbol}
              </div>
              <input value={toAmount} onChange={(event) => setToAmount(event.target.value)} type="number" step="0.01" />
            </div>
          </div>

          <div className="swap-info">
            <div>Slippage: <strong>0.5%</strong></div>
            <div>{price ? `1 ${fromToken.symbol} = ${price.toFixed(2)} ${toToken.symbol}` : "-"}</div>
          </div>

          <button className="swap-btn" onClick={() => {}} >SWAP ✦</button>

          <div className="quick-pairs">
            {PAIRS.map((pair, idx) => (
              <button key={idx} onClick={() => handleQuickPair(idx)}>
                <TokenLogo addressOrSymbol={pair.from.symbol} address={pair.from.address} size={20} />/
                <TokenLogo addressOrSymbol={pair.to.symbol} address={pair.to.address} size={20} /> {pair.from.symbol}/{pair.to.symbol}
              </button>
            ))}
          </div>
        </article>

        <article className="chart-card glass panel">
          <div className="panel-header">
            <h3>Market Chart</h3>
            <select className="small-select">
              <option><TokenLogo addressOrSymbol="ETH" address="0x2170Ed0880ac9A755fd29B2688956BD959F933F8" size={16} />/<TokenLogo addressOrSymbol="USDC" address="0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d" size={16} /> ETH/USDC</option>
              <option><TokenLogo addressOrSymbol="BTC" address="0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c" size={16} />/<TokenLogo addressOrSymbol="USDT" address="0x55d398326f99059fF775485246999027B3197955" size={16} /> BTC/USDT</option>
              <option><TokenLogo addressOrSymbol="SOL" address="0x570A5D26f7765Ecb7bA5b7AefF7eAfcBa5C3e5aB" size={16} />/<TokenLogo addressOrSymbol="USDC" address="0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d" size={16} /> SOL/USDC</option>
            </select>
          </div>

          <div className="tabs">
            <button className="active">24H</button>
            <button>1W</button>
            <button>2M</button>
            <button>1Y</button>
          </div>

          <div className="chart-area">
            <div className="line"></div>
          </div>

          <div className="chart-foot">
            <div>
              <p>Price</p>
              <strong>$3,294.52</strong>
            </div>
            <div>
              <p>Change</p>
              <strong className="positive">+1.92%</strong>
            </div>
            <div>
              <p>Volume</p>
              <strong>$58.2M</strong>
            </div>
          </div>
        </article>

        <article className="tokens-card glass panel">
          <div className="panel-header">
            <h3>Top Tokens</h3>
            <button className="add-btn">+ Add</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Token</th>
                <th>Price</th>
                <th>24H</th>
                <th>Volume</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token) => (
                <tr key={token[0]}>
                  <td>{token[0]}</td>
                  <td>{token[1]}</td>
                  <td className={token[2].startsWith("-") ? "negative" : "positive"}>{token[2]}</td>
                  <td>{token[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>

        <article className="liquidity-card glass panel">
          <div className="panel-header">
            <h3>Liquidity Pools</h3>
            <button className="more-btn">⋯</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Pair</th>
                <th>TVL</th>
                <th>APY</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ETH / USDC</td><td>$84.03M</td><td className="positive">23.5%</td><td><button className="pill">Add</button></td></tr>
              <tr><td>BTC / ETH</td><td>$68.65M</td><td className="positive">18.2%</td><td><button className="pill">Add</button></td></tr>
              <tr><td>USDC / USDT</td><td>$40.61M</td><td className="positive">8.1%</td><td><button className="pill">Add</button></td></tr>
            </tbody>
          </table>
        </article>

        <article className="trades-card glass panel">
          <div className="panel-header">
            <h3>Recent Trades</h3>
            <button className="more-btn">⋯</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Pair</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>ETH/USDC</td><td>5.25</td><td>8,628</td><td>12:32:45</td></tr>
              <tr><td>BTC/USDT</td><td>0.45</td><td>29,850</td><td>12:00:12</td></tr>
              <tr><td>LINK/ETH</td><td>105.6</td><td>0.048</td><td>12:00:08</td></tr>
            </tbody>
          </table>
        </article>
      </section>
    </>
  );
}
