import { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const submitHandler = (e)=> {
        e.preventDefault();
        console.log("email is" , email);
        console.log("password is" , password);
        setEmail('');
        setPassword('');
    }
  return (
    <>
      <div className='h-screen w-full flex justify-center items-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
            onSubmit={(e)=> {
                submitHandler(e);
            }}
            className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=> {
                    setEmail(e.target.value);
                }}
                required 
                className='border-2 border-emerald-600 rounded-full px-6 py-3 text-xl text-white bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your email' />
                <input
                value={password}
                onChange={(e)=> {
                    setPassword(e.target.value);
                }}
                required 
                className='border-2 border-emerald-600 rounded-full px-6 py-3 text-xl mt-4 text-white bg-transparent placeholder:text-gray-400' type="password" placeholder='Enter your password' />
                <button className='border-2 border-emerald-600 rounded-full px-7 py-2 mt-4 text-xl text-white bg-emerald-600 placeholder:text-white'>Login</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Login
