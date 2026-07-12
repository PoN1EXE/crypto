import { BalanceButton } from '../Btn/BalanceButton'

import styles from './Card.module.scss'

const Card = () => {
  return (
    <div className={styles.card}>
      <p>Crypto-Finance</p>
      <div className={styles.cardBalance}>
        <p>Фамилия Имя</p>
        <BalanceButton />
      </div>
    </div>
  )
}

export { Card }
