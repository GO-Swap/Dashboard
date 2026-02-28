import { TokenLogo } from "../components/TokenLogo";

const pairs = [
  { pair: ["ETH", "USDC"], addresses: ["0x2170Ed0880ac9A755fd29B2688956BD959F933F8", "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"], volume: "$14.4M", fees: "$43,200", change: "+5.2%", positive: true },
  { pair: ["BTC", "USDT"], addresses: ["0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", "0x55d398326f99059fF775485246999027B3197955"], volume: "$11.2M", fees: "$33,600", change: "+3.9%", positive: true },
  { pair: ["ARB", "ETH"], addresses: ["0x912CE59144191C1204E64559FE8253a0e49E6548", "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"], volume: "$4.9M", fees: "$14,700", change: "-1.1%", positive: false },
];

export function AnalyticsPage() {
  return (
    <section className="page-grid">
      <article className="glass panel split-grid">
        <div className="mini-stat">
          <span>Daily Volume</span>
          <strong>$58.2M</strong>
        </div>
        <div className="mini-stat">
          <span>Weekly Volume</span>
          <strong>$402.4M</strong>
        </div>
        <div className="mini-stat">
          <span>Protocol Revenue</span>
          <strong>$6.42M</strong>
        </div>
        <div className="mini-stat">
          <span>Active Wallets</span>
          <strong>125,430</strong>
        </div>
      </article>

      <article className="glass panel">
        <div className="panel-header">
          <h3>Volume Trend</h3>
          <div className="tabs">
            <button className="active">7D</button>
            <button>30D</button>
            <button>90D</button>
          </div>
        </div>
        <div className="chart-area">
          <div className="line"></div>
        </div>
      </article>

      <article className="glass panel">
        <div className="panel-header">
          <h3>Top Pairs by Fees</h3>
          <button className="more-btn">⋯</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Pair</th>
              <th>24h Volume</th>
              <th>Fees</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {pairs.map((p, idx) => (
              <tr key={idx}>
                <td>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <TokenLogo addressOrSymbol={p.pair[0]} address={p.addresses[0]} size={24} />
                    <TokenLogo addressOrSymbol={p.pair[1]} address={p.addresses[1]} size={24} />
                    {p.pair[0]}/{p.pair[1]}
                  </span>
                </td>
                <td>{p.volume}</td>
                <td>{p.fees}</td>
                <td className={p.positive ? "positive" : "negative"}>{p.change}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>
    </section>
  );
}
