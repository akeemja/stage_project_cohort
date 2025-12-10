import { useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './navbar'
import Login from './login'
import Register from './register'
import Home from './home'
import UploadExcel from './upload'
import Recommendations from './recommendations'
import NotFound from './notFound'

export default function App() {

  const [user, setUser] = useState()
  const [recommendations, setRecommendations] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/loggedIn")
        const data = await res.json()

        if (res.ok && data !== 'No user') {
          setUser(data)
        }
      } finally {
        setloading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
          <Routes>
            <Route path='/login' element={user ? <Navigate to="/" /> : <Login setUser={setUser} />} />
            <Route path='/' element={user ? <Home setRecommendations={setRecommendations} /> : <Navigate to="/login"/>} />
            <Route path='/register' element={!loading ? (user ? <Register setUser={setUser} /> : <Navigate to="/" />) : (<p>loading...</p>)} />
            <Route path='/recommendations' element={!loading ? (user ? <Recommendations recommendations={recommendations} /> : <Navigate to="/login"/>) : (<p>loading...</p>)} />
            <Route path='/uploadExcel' element={!loading ? (user ? <UploadExcel />: <Navigate to="/login"/>) : (<p>loading...</p>)} />
            <Route path="*" element={user ? <NotFound /> : <Navigate to="/login" />} />
          </Routes>
    </Router>
  )
}