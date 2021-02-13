import './App.css'
import TrainingDiary from './components/TrainingDiary/TrainingDiary'
import data from './data'

function App() {
  return (
    <div className="App">
      <TrainingDiary data={data} />
    </div>
  )
}

export default App
