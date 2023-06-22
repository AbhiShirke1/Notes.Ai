import React from 'react'
import { useNavigate } from 'react-router-dom';
import folder from '../../assets/images/folder.png'

const Folder = ({ note, index }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col p-5 w-[90%] h-[90%]" onClick={() => navigate({
          pathname: `/folders/${note.name}`
        })}>
      
    <img
      src={folder}
      />
      <div className="text-2xl text-center">{note?.name}</div>
    </div>
    // <button
    //   type='button'
    //   onClick={() => navigate({
    //     pathname: `/folders/${note.name}`
    //   })
    //   } class="card min-w-[200px] mr-[20px]">
    //   <div>
    //     <h3 class="card-title">{note?.name}</h3>
    //   </div>
    //   <div class="card-link-wrapper">
    //     {/* <a href="" class="card-link" onClick={() => navigate('/title')}>Read more....</a> */}
    //   </div>
    // </button>
  )
}

export default Folder;