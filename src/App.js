import { data } from "./lib/api";
import Accordion from "./Accordion";
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className="app-title">React Accordion</h1>
      <div className="accordion">
      {data.map((provider) => (
        <div key={provider.providerName}>
          <Accordion provider={provider} />
        </div>
        )
      )}
      </div>
    </div>
  )
}

export default App;
