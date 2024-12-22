import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import EditorPage from "./pages/EditorPage"
import {Toaster} from 'react-hot-toast'
import HomePage from './pages/HomePage'
import ContactUs from './components/ContactUS'
import AboutUs from './components/AboutUs'

function App() {

  return (
    <>
    <div>
      <Toaster 
      position="top-right"
      toastOptions={{
        success: {
          theme: {
            primary: '#4aed88'
          }
        }
      }}>
      </Toaster>
    </div>

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/contactus" element={<ContactUs />} />
          <Route path="/aboutus" element={<AboutUs />} /> */}
          <Route path="/editor/:roomId" element={<EditorPage />} />
        </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
