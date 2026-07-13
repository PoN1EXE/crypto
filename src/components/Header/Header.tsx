import styles from './Header.module.scss'

const APP_NAME = 'CRYPTO'
const Header = (): JSX.Element => {
  return <header className={styles.header}>{APP_NAME}</header>
}

export { Header }
