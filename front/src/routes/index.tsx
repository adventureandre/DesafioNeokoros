import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Tasks } from '../pages/Tasks'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
