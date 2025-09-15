import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './components/pages/HomePage.jsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { store } from './store/store.js'
import {Provider} from 'react-redux'
import LoginPage from './components/pages/LoginPage.jsx'
import SignUpPage from './components/pages/SignUpPage.jsx'
import Dashboard from './components/pages/Dashboard.jsx'
import Profile from './components/pages/Profile.jsx'
import Portfolio from './components/pages/Portfolio.jsx'
import Approval from './components/pages/Approval.jsx'
import InternshipSection from './components/pages/Internship.jsx'
import WorkCon from './components/pages/WorkCon.jsx'
import Engagements from './components/pages/Engagements.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path="" element={<HomePage/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/sign-up" element={<SignUpPage/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/approvals" element={<Approval/>}/>
      <Route path="/internships" element={<InternshipSection/>}/>
      <Route path="/workshops" element={<WorkCon/>}/>
      <Route path="/engagements" element={<Engagements/>}/>
    </Route>
  )
)

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
