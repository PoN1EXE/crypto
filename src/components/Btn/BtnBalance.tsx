import { useState } from 'react'
import './styles.scss'

const BtnBalance = () => {
  const [balance, setBalance] = useState(5000)

  return (
    <button className='btnBalance' onClick={() => setBalance(balance + 1000)}>
      ${balance}
    </button>
  )
}

export { BtnBalance }
