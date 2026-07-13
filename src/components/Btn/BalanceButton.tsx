import { useState } from 'react'
import styles from './BalanceButton.module.scss'

export const BalanceButton = () => {
  const [balance, setBalance] = useState<number>(5000)

  return (
    <div>
      <p>${balance}</p>
      <button className={styles.balanceButton} onClick={() => setBalance((prevBalance) => prevBalance + 1000)}>
        Микрозайм
      </button>
      <div>
        <button className={styles.balanceButton} onClick={() => setBalance((prevBalance) => prevBalance * 0)}>
          Купить мотоцикл
        </button>
      </div>
    </div>
  )
}
