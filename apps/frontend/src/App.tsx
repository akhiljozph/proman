import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [apiStatus, setApiStatus] = useState<string>('Loading...')

  useEffect(() => {
    fetch('/api')
      .then(res => res.text())
      .then(data => setApiStatus(data))
      .catch(() => setApiStatus('API connection failed'))
  }, [])

  return (
    <div className="App">
      <h1>Proman</h1>
      <p>Project Management System</p>
      <div>
        <h2>API Status:</h2>
        <p>{apiStatus}</p>
      </div>
    </div>
  )
}

export default App