export type Stat = {
  label: string;
  value: string;
  delta: string;
};

export const stats: Stat[] = [
  { label: "TVL", value: "$245.8M", delta: "+5.61%" },
  { label: "Volume 24h", value: "$58.2M", delta: "+3.28%" },
  { label: "Fees (24h)", value: "$127.5K", delta: "+12.48%" },
  { label: "Users", value: "125,430", delta: "+8.12%" }
];

export const tokens = [
  ["ETH", "$3,294.52", "+1.92%", "$58.2M"],
  ["BTC", "$66,128.05", "+4.25%", "$123.5M"],
  ["USDC", "$1.00", "+0.00%", "$12.8B"],
  ["USDT", "$1.00", "+0.01%", "$11.3B"],
  ["BNB", "$584.20", "+2.14%", "$8.9M"],
  ["SOL", "$152.75", "-1.33%", "$7.4M"]
] as const;
