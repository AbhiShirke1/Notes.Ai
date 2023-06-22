import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import './card.css';
import Folder from './Folder';


const Folders =()=>{
    const folderList = useSelector(state=>state.folderDetails);
    return (
        <div class="px-[30px] py-[20px] relative">
            <h2 className='mb-5'>NOTES🗒️</h2>
            <div className="flex max-w-[45%] overflow-x-auto">
                {folderList?.folders?.length > 0 && folderList.folders.map((note,index) => (
                   <Folder 
                        key={index}
                        note={note} 
                        index={index}
                    /> 
                ))
                }
            </div>
        </div>
    )
}

export default Folders;


// <div className='section'>
                    //          <div class="card"> 
                    //                     <h3 class="card__title">{props.title} 
                    //                     </h3>
                    //                     <p className='card_desc'>
                    //                         {props.desc}</p>
                    //                     <img className='relative flex justify-end rounded-[0.75rem] max-w-full' src={props.img} alt="" />        
                    //                     <button className='flex'onClick={()=>navigate('/title')}>more..</button>
                    //           </div>

                    // </div>