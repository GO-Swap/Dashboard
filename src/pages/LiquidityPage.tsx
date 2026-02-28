import { TokenLogo } from "../components/TokenLogo";

const pools = [
  { pair: ["ETH", "USDC"], addresses: ["0x2170Ed0880ac9A755fd29B2688956BD959F933F8", "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d"], position: "$24,891", tvl: "$84.03M", apr: "23.5%", status: "Active" },
  { pair: ["BTC", "ETH"], addresses: ["0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c", "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"], position: "$12,308", tvl: "$68.65M", apr: "18.2%", status: "Active" },
  { pair: ["USDC", "USDT"], addresses: ["0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", "0x55d398326f99059fF775485246999027B3197955"], position: "$7,911", tvl: "$40.61M", apr: "8.1%", status: "Active" },
];

export function LiquidityPage() {
  return (
    <section className="page-grid">
      <article className="glass panel">
        <div className="panel-header">
          <h3>Liquidity Positions</h3>
          <button className="add-btn">+ Add Liquidity</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Pool</th>
              <th>Your Position</th>
              <th>TVL</th>
              <th>APR</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {pools.map((pool, idx) => (
              <tr key={idx}>
                <td>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <TokenLogo addressOrSymbol={pool.pair[0]} address={pool.addresses[0]} size={28} />
                    <TokenLogo addressOrSymbol={pool.pair[1]} address={pool.addresses[1]} size={28} />
                    {pool.pair[0]}/{pool.pair[1]}
                  </span>
                </td>
                <td>{pool.position}</td>
                <td>{pool.tvl}</td>
                <td className="positive">{pool.apr}</td>
                <td>{pool.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </article>

      <article className="glass panel split-grid">
        <div className="mini-stat">
          <span>Total Deposited</span>
          <strong>$45,110</strong>
        </div>
        <div className="mini-stat">
          <span>Rewards Pending</span>
          <strong className="positive">$1,284</strong>
        </div>
        <div className="mini-stat">
          <span>Avg APR</span>
          <strong className="positive">16.6%</strong>
        </div>
      </article>
    </section>
  );
}
