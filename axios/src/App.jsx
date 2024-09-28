
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from './Card'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Form from './Form'
import { UserProvider } from './Context'
function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Card />}><Route path='/form' element={<Form />} /></Route>
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
