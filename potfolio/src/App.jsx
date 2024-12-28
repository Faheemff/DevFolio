import { useEffect } from 'react'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { setLocalStorage } from './Utils/LocalStorage'
import Login from './Components/Auth/Login'
import EmplyeeDashboard from './Components/Dashboard/EmployeeDashboard'

const App = () => {

  useEffect(() => {
    setLocalStorage()
  })
  

  return (
    <>
     <div>
      <EmplyeeDashboard />
      {/* <Login /> */}
      <AdminDashboard />
     </div>
    </>
  )
}

export default App
