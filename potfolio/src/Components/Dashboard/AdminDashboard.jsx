// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../Others/Header'

const AdminDashboard = () => {
    return (
        <>
            <div className='p-10 h-screen w-full'>
                <Header />
                <div className=' bg-[#1C1C1C] p-5'>
                    <form className='w-full flex flex-wrap items-start justify-between'>
                        <div  className='w-1/2'>
                            <div>
                                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design' />
                            </div>
                            <div>
                                <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                            </div>
                            <div>
                                <h2 className='text-sm text-gray-300 mb-0.5'>Asign to</h2>
                                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                            </div>
                            <div>
                                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
                            </div>
                        </div>
                        <div className='w-2/5 flex flex-col items-start'>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                            <textarea className='w-full h-44 text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' placeholder='Write a detailed description of the task' />
                            <button className='bg-emerald-500 py-3 px-5 hover:bg-emerald-600 rounded mt-4 text-sm w-full'>Create Task</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard
