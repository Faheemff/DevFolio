// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
    return (
        <>
            <div className='text-white bg-[#1C1C1C] h-screen p-9'>
                <Header />
                <TaskListNumbers />
                <TaskList />
            </div>
        </>
    )
}

export default EmployeeDashboard
