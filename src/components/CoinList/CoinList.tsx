import { useState } from 'react'
import { useCrypto } from '../../hooks/useCrypto'
import styles from './CoinList.module.scss'

export const CoinList = () => {
  const { data: coins, isLoading, isError, error } = useCrypto()
  const [search, setSearch] = useState('')

  if (isLoading) {
    return <div className={styles.loading}>Загрузка...</div>
  }

  if (isError) {
    return <div className={styles.error}>Ошибка: {error.message}</div>
  }

  const filteredData = coins?.filter((coins) => coins.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Криптовалюты</h2>
      <input
        className={styles.input}
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Поиск...'
      />
      {filteredData?.length === 0 ? (
        <div>'Ничего не найдено...'</div>
      ) : (
        <ul className={styles.list}>
          {filteredData?.map((coin) => (
            <li key={coin.id} className={styles.item}>
              <div className={styles.left}>
                <span className={styles.icon}>{coin.icon}</span>
                <span className={styles.name}>{coin.name}</span>
                <span className={styles.symbol}>{coin.symbol}</span>
              </div>
              <div className={styles.right}>
                <span className={styles.price}>${coin.price.toFixed(2)}</span>
                <span className={`${styles.change} ${coin.change24h >= 0 ? styles.positive : styles.negative}`}>
                  {coin.change24h > 0 ? '+' : ''}
                  {coin.change24h.toFixed(2)}%
                </span>
                <span className={styles.volume}>Vol: {coin.volume.toLocaleString()}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
