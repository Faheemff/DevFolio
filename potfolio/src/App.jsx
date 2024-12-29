import { useContext, useState } from 'react'
import AdminDashboard from './Components/Dashboard/AdminDashboard'
// import { getLocalStorage, setLocalStorage } from './Utils/LocalStorage'
import Login from './Components/Auth/Login'
import EmplyeeDashboard from './Components/Dashboard/EmployeeDashboard'
import { AuthContext } from './Context/AuthProvider'

const App = () => {

  // useEffect(() => {
  //   // setLocalStorage()
  //   getLocalStorage();
  // })


  const [user, setUser] = useState(null)

  const handleLogin = (email,password)=> {
    if(email == 'admin@gmail.com' && password == '123'){
      setUser('admin')
    }else {
      setUser('employee')
    }
  }

  const data = useContext(AuthContext);
  console.log(data);
  

  return (
    <>
     <div>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == 'admin' ? <AdminDashboard /> : <EmplyeeDashboard />}
     </div>
    </>
  )
}

export default App
