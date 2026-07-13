export interface CryptoCurrency {
  id: string
  name: string
  symbol: string
  price: number
  change24h: number
  marketCap: number
  volume: number
  icon?: string
}

export const cryptoData: CryptoCurrency[] = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 67234.5,
    change24h: 2.34,
    marketCap: 1320000000000,
    volume: 28000000000,
    icon: '₿',
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3456.78,
    change24h: -0.87,
    marketCap: 415000000000,
    volume: 15000000000,
    icon: '⟠',
  },
  {
    id: 'binancecoin',
    name: 'BNB',
    symbol: 'BNB',
    price: 598.12,
    change24h: 1.23,
    marketCap: 89000000000,
    volume: 2200000000,
    icon: '🟡',
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    price: 172.45,
    change24h: 5.67,
    marketCap: 76000000000,
    volume: 3400000000,
    icon: '◎',
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.4621,
    change24h: -1.45,
    marketCap: 16000000000,
    volume: 890000000,
    icon: '₳',
  },
  {
    id: 'ripple',
    name: 'XRP',
    symbol: 'XRP',
    price: 0.5432,
    change24h: 0.23,
    marketCap: 29000000000,
    volume: 1200000000,
    icon: '✕',
  },
  {
    id: 'polkadot',
    name: 'Polkadot',
    symbol: 'DOT',
    price: 7.89,
    change24h: -2.11,
    marketCap: 10500000000,
    volume: 540000000,
    icon: '●',
  },
]

export const fetchCryptoData = (): Promise<CryptoCurrency[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cryptoData)
    }, 800)
  })
}
