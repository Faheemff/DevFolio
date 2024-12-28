import { useEffect, useState } from 'react'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import Login from './Components/Auth/Login'
import EmplyeeDashboard from './Components/Dashboard/EmployeeDashboard'

const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage();
  // })


  const [user, setuser] = useState(null)

  const handleLogin = (email,password)=> {
    if(email == 'admin@gmail.com' && password == '123'){
      setuser('admin')
    }else {
      setuser('employee')
    }
  }
  

  return (
    <>
     <div>
      {/* <EmplyeeDashboard /> */}
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmplyeeDashboard />}
      {/* <AdminDashboard /> */}
     </div>
    </>
  )
}

export default App
