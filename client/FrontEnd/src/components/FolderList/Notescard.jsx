import React from 'react'
import Folders from './Folders'
const Notescard = () => {
  return (
    <div className=' relative w-[90%]  left-6 bottom-16 '>
      <div className="flex -my-2 border-1 rounded-lg border-solid shadow-lg bg-[#e5e5e5] overflow-x-hidden">
        <Folders />
      </div>
    </div>
  )
}

export default Notescard