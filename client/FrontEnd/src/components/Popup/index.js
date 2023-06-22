import { useDispatch } from 'react-redux'

import { createFolder } from '../../store/actions/notesAction'
import { AiFillCloseCircle } from 'react-icons/ai';


const Popup = ({ isOpen = false, title = '', setIsOpen = null, setTitle = null }) => {
    const dispatch = useDispatch();
    return (
        <div className='fixed top-0 left-0 z-[100] flex items-center justify-center backdrop-blur w-[100%] h-[100%]'>
            
            <div className='bg-white px-[20px] py-[30px] relative w-[40%] shadow-lg'>
                <div className='flex items-center justify-between mb-[20px]'>
                    <h2 className='text-black mt-0'>
                        Add Folder📁
                    </h2>
                    <div className='cursor-pointer'>
                    <AiFillCloseCircle className='text-[20px]' onClick={()=>{setIsOpen(false)}} />
                    </div>
                </div>
                
                <input
                    type="text"
                    value={title}
                    onChange={(e) => { setTitle(e.target.value) }}
                    className='h-[40px] border-2 border-gray-400 block border-solid rounded mb-5 w-full'
                />
                <button
                    type="button"
                    className='bg-[#fd9940] text-white px-[20px] py-[10px] block text-center w-full'
                    onClick={() => {
                        if(title){
                        dispatch(createFolder({
                            name: title
                        }));
                        setIsOpen(false);
                    }
                    }}
                >
                    Done
                </button>
            </div>
        </div>
    )
};
export default Popup;