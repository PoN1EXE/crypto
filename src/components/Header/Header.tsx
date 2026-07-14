import styles from './Header.module.scss'

const APP_NAME = 'CRYPTO'
const Header = () => {
  return <header className={styles.header}>{APP_NAME}</header>
}

export { Header }
