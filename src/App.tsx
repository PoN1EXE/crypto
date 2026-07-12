import { Header } from './components/Header/Header'
import { Main } from './pages/Main/Main'
import { Card } from './components/Card/Card'
import './index.css'

function App() {
  return (
    <div className='app'>
      <Header />
      <Card />
      <Main />
    </div>
  )
}

export default App
