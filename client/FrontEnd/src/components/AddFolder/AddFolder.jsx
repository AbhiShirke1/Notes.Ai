import React, { useState } from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import Popup from '../Popup';

const AddFolder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');


  const addFolder = () => {
    setIsOpen(true);
  }
  return (
    <>
      <div className='fixed w-auto h-auto bottom-[50px] right-[40px] z-[99] cursor-pointer'>
        <BsFillPlusCircleFill
          size={50}
          color='#fd9940'
          onClick={addFolder}
        />
      </div>
      {isOpen && (<Popup
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        title={title}
        setTitle={setTitle}
      />)}
    </>
  )
}

export default AddFolder