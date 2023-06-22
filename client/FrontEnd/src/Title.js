import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'

const Title = () => {
  return (
    <div>
        <div className='flex'>
        <Sidebar/>
        <h1 className='m-10 font-nunito text-3xl'>Title</h1>
        </div>
    </div>
  )
}

export default Title