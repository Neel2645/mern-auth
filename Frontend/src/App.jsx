import {BrowserRouter , Routes , Route} from 'react-router-dom'
import {Home} from './Pages/Home'
import { About } from './Pages/About'
import { SignUp } from './Pages/SignUp'
import { SignIn } from './Pages/SignIn'
import {Profile} from './Pages/Profile'
import { Header } from './components/Header'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App