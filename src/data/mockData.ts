// Mock data for Ndii Intelligence Dashboard

export const kpiData = {
  paymentSuccessRate: 97.8,
  activeCorridors: 142,
  liquidityDepth: 847500000,
  avgSettlementTime: 4.2,
};

export const paymentsOverTime = [
  { date: "Jan 1", payments: 12400, volume: 2400000 },
  { date: "Jan 2", payments: 13200, volume: 2650000 },
  { date: "Jan 3", payments: 11800, volume: 2100000 },
  { date: "Jan 4", payments: 15600, volume: 3200000 },
  { date: "Jan 5", payments: 14200, volume: 2900000 },
  { date: "Jan 6", payments: 16800, volume: 3500000 },
  { date: "Jan 7", payments: 18200, volume: 4100000 },
  { date: "Jan 8", payments: 17400, volume: 3800000 },
  { date: "Jan 9", payments: 19600, volume: 4500000 },
  { date: "Jan 10", payments: 21200, volume: 5200000 },
  { date: "Jan 11", payments: 20400, volume: 4800000 },
  { date: "Jan 12", payments: 22800, volume: 5600000 },
  { date: "Jan 13", payments: 24100, volume: 6100000 },
  { date: "Jan 14", payments: 23500, volume: 5900000 },
];

export const corridorReliability = [
  { source: "USDC", dest: "XLM", reliability: 99.2, volume: 45000000, latency: 3.1 },
  { source: "USDC", dest: "EURC", reliability: 98.7, volume: 32000000, latency: 3.4 },
  { source: "XLM", dest: "USDC", reliability: 99.1, volume: 41000000, latency: 2.9 },
  { source: "EURC", dest: "USDC", reliability: 97.8, volume: 28000000, latency: 3.8 },
  { source: "XLM", dest: "EURC", reliability: 96.5, volume: 18000000, latency: 4.2 },
  { source: "USDC", dest: "BRL", reliability: 94.2, volume: 12000000, latency: 5.1 },
  { source: "USDC", dest: "NGN", reliability: 92.8, volume: 8500000, latency: 6.2 },
  { source: "XLM", dest: "BRL", reliability: 93.5, volume: 6200000, latency: 5.8 },
];

export const topAssets = [
  { asset: "USDC", issuer: "Circle", volume: 125000000, successRate: 99.1, txCount: 45200 },
  { asset: "XLM", issuer: "Native", volume: 89000000, successRate: 99.8, txCount: 128400 },
  { asset: "EURC", issuer: "Circle", volume: 42000000, successRate: 98.4, txCount: 18600 },
  { asset: "BRL", issuer: "Anclap", volume: 18500000, successRate: 95.2, txCount: 7800 },
  { asset: "ARST", issuer: "Settle", volume: 12000000, successRate: 94.8, txCount: 5200 },
  { asset: "yUSDC", issuer: "Ultra", volume: 8400000, successRate: 97.1, txCount: 3400 },
];

export const anchorData = [
  { name: "Circle", assets: ["USDC", "EURC"], volume: 167000000, successRate: 98.9, failures: 1.1, status: "green" },
  { name: "Stellar Foundation", assets: ["XLM"], volume: 89000000, successRate: 99.8, failures: 0.2, status: "green" },
  { name: "Anclap", assets: ["BRL", "ARS"], volume: 24500000, successRate: 94.6, failures: 5.4, status: "yellow" },
  { name: "Settle Network", assets: ["ARST"], volume: 12000000, successRate: 94.8, failures: 5.2, status: "yellow" },
  { name: "Ultra Capital", assets: ["yUSDC"], volume: 8400000, successRate: 97.1, failures: 2.9, status: "green" },
  { name: "AQUA", assets: ["AQUA"], volume: 5200000, successRate: 96.2, failures: 3.8, status: "green" },
  { name: "Cowrie", assets: ["NGNT"], volume: 3100000, successRate: 88.4, failures: 11.6, status: "red" },
];

export const corridorPairs = [
  { label: "USDC → XLM", value: "usdc-xlm" },
  { label: "USDC → EURC", value: "usdc-eurc" },
  { label: "XLM → USDC", value: "xlm-usdc" },
  { label: "EURC → USDC", value: "eurc-usdc" },
  { label: "USDC → BRL", value: "usdc-brl" },
  { label: "XLM → EURC", value: "xlm-eurc" },
];

export const corridorDetails: Record<string, {
  successRate: number;
  avgSlippage: number;
  volume7d: number;
  volumeTrend: { day: string; volume: number }[];
}> = {
  "usdc-xlm": {
    successRate: 99.2,
    avgSlippage: 0.12,
    volume7d: 45000000,
    volumeTrend: [
      { day: "Mon", volume: 5800000 },
      { day: "Tue", volume: 6200000 },
      { day: "Wed", volume: 5900000 },
      { day: "Thu", volume: 7100000 },
      { day: "Fri", volume: 6800000 },
      { day: "Sat", volume: 6400000 },
      { day: "Sun", volume: 6800000 },
    ],
  },
  "usdc-eurc": {
    successRate: 98.7,
    avgSlippage: 0.08,
    volume7d: 32000000,
    volumeTrend: [
      { day: "Mon", volume: 4200000 },
      { day: "Tue", volume: 4800000 },
      { day: "Wed", volume: 4100000 },
      { day: "Thu", volume: 5200000 },
      { day: "Fri", volume: 4900000 },
      { day: "Sat", volume: 4300000 },
      { day: "Sun", volume: 4500000 },
    ],
  },
  "xlm-usdc": {
    successRate: 99.1,
    avgSlippage: 0.15,
    volume7d: 41000000,
    volumeTrend: [
      { day: "Mon", volume: 5400000 },
      { day: "Tue", volume: 5900000 },
      { day: "Wed", volume: 5600000 },
      { day: "Thu", volume: 6400000 },
      { day: "Fri", volume: 6100000 },
      { day: "Sat", volume: 5800000 },
      { day: "Sun", volume: 5800000 },
    ],
  },
  "eurc-usdc": {
    successRate: 97.8,
    avgSlippage: 0.09,
    volume7d: 28000000,
    volumeTrend: [
      { day: "Mon", volume: 3800000 },
      { day: "Tue", volume: 4200000 },
      { day: "Wed", volume: 3900000 },
      { day: "Thu", volume: 4400000 },
      { day: "Fri", volume: 4100000 },
      { day: "Sat", volume: 3700000 },
      { day: "Sun", volume: 3900000 },
    ],
  },
  "usdc-brl": {
    successRate: 94.2,
    avgSlippage: 0.34,
    volume7d: 12000000,
    volumeTrend: [
      { day: "Mon", volume: 1600000 },
      { day: "Tue", volume: 1800000 },
      { day: "Wed", volume: 1500000 },
      { day: "Thu", volume: 1900000 },
      { day: "Fri", volume: 1700000 },
      { day: "Sat", volume: 1600000 },
      { day: "Sun", volume: 1900000 },
    ],
  },
  "xlm-eurc": {
    successRate: 96.5,
    avgSlippage: 0.22,
    volume7d: 18000000,
    volumeTrend: [
      { day: "Mon", volume: 2400000 },
      { day: "Tue", volume: 2700000 },
      { day: "Wed", volume: 2500000 },
      { day: "Thu", volume: 2800000 },
      { day: "Fri", volume: 2600000 },
      { day: "Sat", volume: 2300000 },
      { day: "Sun", volume: 2700000 },
    ],
  },
};
