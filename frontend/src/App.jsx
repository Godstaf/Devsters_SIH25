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
import FacultyApprovals from './components/pages/FacultyApprovals'
import ActivityTracker from './components/pages/ActivityTracker'
import Contest from './components/pages/Contest'
import Analytics from './components/pages/Analytics'
import IntegrationSupport from './components/pages/IntegrationSupport'
import LeadershipRoles from './components/pages/LeadershipRoles'
import FacultyDashboard from './components/pages/FacultyDashboard'

function resolvePageComponent(pathname) {
  const path = (pathname || '').toLowerCase()
  switch (path) {
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
    case '/faculty-approvals':
      return <FacultyApprovals />
    case '/integration-support':
      return <IntegrationSupport />
    case '/activity-tracker':
      return <ActivityTracker />
    case '/contest':
      return <Contest />
    case '/analytics':
      return <Analytics />
    case '/leadershiproles':
      return <LeadershipRoles />
    case '/faculty':
      return <FacultyDashboard />
    case '/faculty-dashboard':
      return <FacultyDashboard />
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
