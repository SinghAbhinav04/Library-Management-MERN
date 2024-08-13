import HomePage from "./homePage.jsx"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUpPage from "./signUpPage1.jsx"
import LoginPage from "./loginPage.jsx"
import UserProfile from "./userProfile.jsx"
import SignupPage2 from "./signupPage2.jsx"
import SignupPage3 from "./signupPage3.jsx"
import SearchPage from "./SearchPage.jsx"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signup2" element={<SignupPage2/>}/>
          <Route path="/signup3" element={<SignupPage3/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/userProfile" element={<UserProfile/>}/>
          <Route path="/search" element={<SearchPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
