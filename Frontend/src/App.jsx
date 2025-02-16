import {BrowserRouter , Routes , Route} from 'react-router-dom'
import {Home} from './components/Home'
import { About } from './components/About'
import { SignIn } from './components/Signin'
import { SignUp } from './components/SignUp'
import {Profile} from './components/Profile'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App