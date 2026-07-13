import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import { cryptoData, type CryptoCurrency } from '../mocks/cryptoData'

const fetchCrypto = async () => {
  await new Promise<CryptoCurrency[]>((resolve) => setTimeout(resolve, 500))
  return cryptoData
}

export const useCrypto = (): UseQueryResult<CryptoCurrency[], Error> => {
  return useQuery<CryptoCurrency[], Error>({
    queryKey: ['crypto'],
    queryFn: fetchCrypto,
  })
}
