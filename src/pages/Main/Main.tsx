import { Card } from '../../components/Card/Card'
import styles from './Main.module.scss'
import { CoinList } from '../../components/CoinList/CoinList'

export const Main = () => {
  return (
    <main className={styles.main}>
      <div>
        <Card />
        <CoinList />
      </div>
    </main>
  )
}
