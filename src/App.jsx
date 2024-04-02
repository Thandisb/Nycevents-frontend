import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Events from "./components/Events"
import EventDetail from './components/EventDetail'
import EventForm from './components/EventForm'
import EditEvent from './components/EditEvent'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import './App.css'

function App() {
  

  return (
    <>
      <div className='app'>
        <Router>
          <NavBar/>
          <Routes>
            <Route path ='/events' element={<Events/>}/>
            <Route path ='/events/new' element={<EventForm/>}/>
            <Route path ='/events/:id' element={<EventDetail/>}/>
            <Route path ='/events/:id/edit' element={<EditEvent/>}/>
          </Routes>
      
        </Router>
      
      </div>
    
    </>
  )
}

export default App
