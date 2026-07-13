import { Card } from '../../components/Card/Card'
import styles from './Main.module.scss'
import { useCrypto } from './../../hooks/useCrypto'
import { CoinList } from '../../components/CoinList/CoinList'

const Main = () => {
  return (
    <main className={styles.main}>
      <div>
        <Card />
        <CoinList />
      </div>
    </main>
  )
}

export { Main }
