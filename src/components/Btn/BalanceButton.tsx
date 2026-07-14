import { useState } from 'react'
import styles from './BalanceButton.module.scss'

export const BalanceButton = () => {
  const [balance, setBalance] = useState<number | null>(5000)

  const microzaimHandler = () => {
    setBalance((prevBalance) => {
      if (prevBalance === null) {
        return null
      }

      return prevBalance + 1000
    })
  }

  return (
    <>
      <p>${balance}</p>
      <button className={styles.balanceButton} onClick={microzaimHandler}>
        Микрозайм
      </button>

      <button className={styles.balanceButton} onClick={() => setBalance(0)}>
        Купить мотоцикл
      </button>
    </>
  )
}
