import { useState } from 'react'
import './styles.scss'

const BtnBalance = () => {
  const [balance, setBalance] = useState(5000)

  return (
    <div>
      <button className='btnBalance' onClick={() => setBalance(balance + 1000)}>
        Деньге!!!
      </button>
      <p>${balance}</p>
    </div>
  )
}

export { BtnBalance }
