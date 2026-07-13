import { useQuery } from '@tanstack/react-query'
import { cryptoData } from '../mocks/cryptoData'

const fetchCrypto = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500))
  return cryptoData
}

export const useCrypto = () => {
  return useQuery({
    queryKey: ['crypto'],
    queryFn: fetchCrypto,
  })
}
