import './App.css'
import Navigation from './Components/Navigation/Navigation.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import ContactForm from './Components/ContactForm/ContactForm.jsx'

function App() {

  return (
    <div>
      <Navigation/>
      <div className='main_container'>
      <ContactUs/>
      <ContactForm/>
      </div>
    </div>
  )
}

export default App
