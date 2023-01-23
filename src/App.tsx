import { useState } from 'react'
import './App.css'
import { Text } from './components/Text'
import { Border } from './components/Border'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Text as='div' color="red">O mundo é mesmo muito lindo</Text>
      <Text as='a' href='https://www.google.com/'>hello google here</Text>
      <Border as='div' width="2" variant="solid" color="red">yuzuru hanyu</Border>

    </div>
  )
}

export default App
