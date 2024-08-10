import HomePage from "./homePage.jsx"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUpPage from "./signUpPage.jsx"
import LoginPage from "./loginPage.jsx"
import UserProfile from "./userProfile.jsx"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/userProfile" element={<UserProfile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
