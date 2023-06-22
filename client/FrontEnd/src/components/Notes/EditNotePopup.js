import { useDispatch } from 'react-redux'
import { AiFillCloseCircle } from 'react-icons/ai';

import { updateNote } from '../../store/actions/notesAction'


const Popup = ({ isOpen = false, content = '', setIsOpen = null, setContent = null, name,index }) => {
    const dispatch = useDispatch();

    return (
        <div className='fixed top-0 left-0 z-[100] flex items-center justify-center backdrop-blur w-[100%] h-[100%]'>

            <div className='bg-white px-[20px] py-[30px] relative w-[40%] shadow-lg'>
                <div className='flex items-center justify-between mb-[20px]'>
                    <h2 className='text-black mt-0'>
                        Edit Note
                    </h2>
                    <div className='cursor-pointer'>
                        <AiFillCloseCircle className='text-[20px]' onClick={() => { setIsOpen(false) }} />
                    </div>
                </div>

                <input
                    type="text"
                    value={content}
                    onChange={(e) => { setContent(e.target.value) }}
                    className='h-[40px] border-2 border-gray-400 block border-solid rounded mb-5 w-full'
                />
                <button
                    type="button"
                    className='bg-[#fd9940] text-white px-[20px] py-[10px] block text-center w-full'
                    onClick={() => {
                        if (content) {
                            dispatch(updateNote({
                                content: content,
                                name: name,
                                index:index
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