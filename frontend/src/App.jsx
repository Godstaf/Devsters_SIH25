import React from 'react'
import Navbar from './components/layout_files/Navbar'
import Footer from './components/layout_files/Footer'
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import SignUpPage from './components/pages/SignUpPage'
import Dashboard from './components/pages/Dashboard'
import Profile from './components/pages/Profile'
import Portfolio from './components/pages/Portfolio'
import Approval from './components/pages/Approval'
import InternshipSection from './components/pages/Internship'
import WorkCon from './components/pages/WorkCon'
import Engagements from './components/pages/Engagements'

function resolvePageComponent(pathname) {
  switch (pathname) {
    case '/':
    case '/home':
    case '':
      return <HomePage />
    case '/login':
      return <LoginPage />
    case '/sign-up':
      return <SignUpPage />
    case '/dashboard':
      return <Dashboard />
    case '/profile':
      return <Profile />
    case '/portfolio':
      return <Portfolio />
    case '/approvals':
      return <Approval />
    case '/internships':
      return <InternshipSection />
    case '/workshops':
      return <WorkCon />
    case '/engagements':
      return <Engagements />
    default:
      return <HomePage />
  }
}

const App = () => {
  const content = resolvePageComponent(window.location.pathname)
  return (
    <div className="bg-gray-50 text-gray-900">
      <div className="relative flex min-h-screen flex-col">
        <Navbar/>
        {content}
        <Footer/>
      </div>
    </div>
  )
}

export default App
