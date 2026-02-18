import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Игра мемори</h1>
      </header>
      <main>
        контент
        <Button title="заказать" color="red"/>
        <Button title="купить" color="green" />
        <Button title="Войти" color="blue"/>

        <button>моя кнопка</button>
      </main>
      <footer>
        <p>&copy; Ивлева Кира, 2026</p>
      </footer>

    </div>
  )
}

export default App
