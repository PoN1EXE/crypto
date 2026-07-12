import './styles.scss'
import { BtnBalance } from '../Btn/BtnBalance'

const Card = () => {
  return (
    <div className='card'>
      <p>Crypto-Finance</p>
      <div className='card-balance'>
        <p>Фамилия Имя</p>
        <BtnBalance />
      </div>
    </div>
  )
}

export { Card }
