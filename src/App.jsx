import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Applications from './pages/Applications'
import Reports from './pages/Reports'
import Settings from './pages/Settings'
import MainLayout from './components/layout/Mainlayout'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Dashboard />} />
          <Route path='applications' element={<Applications />} />
          <Route path='reports' element={<Reports />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
