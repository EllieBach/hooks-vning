
import './App.css'
import Counter from './components/Counter'

function App() {


  return (
    <>
      <Counter initialValue={0} min={1} max={10}/>
    </>
  )
}

export default App
