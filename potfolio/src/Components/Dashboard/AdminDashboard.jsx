// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'

const AdminDashboard = () => {
    return (
        <>
            <div className='p-10 h-screen w-full'>
                <Header />
                <CreateTask />
                <AllTask />
            </div>
        </>
    )
}

export default AdminDashboard
