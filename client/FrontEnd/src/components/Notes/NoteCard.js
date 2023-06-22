import { MdDeleteForever, MdFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { useState, useRef } from 'react';
import { BsFillStarFill, BsStar } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import Popup from './EditNotePopup';
import '../../index2.css'

const Note = ({ title = '', content = '', id, name }) => {
    const [click, setClick] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [newContent, setContent] = useState(content || '');

    const handleClick = () => setClick(!click);

    return (
        <div className="note">
            <textarea rows='4' cols='6' className='overflow-y-hidden text-xl bg-[#ededed]' readOnly>{content}</textarea>

            <div className="note-footer">
                {/* <strong>{date}</strong> */}
                <div className='star' onClick={handleClick}>
                    {click ? (<BsFillStarFill size="25" style={{ color: '#F7C04A' }} />) :
                        (<BsStar size={25} style={{ color: "#000" }} />)}
                </div>
                <AiFillEdit
                    type="button"
                    onClick={() => { setIsOpen(true) }}
                    size={30}
                >
                    Update
                </AiFillEdit>

                <MdDeleteForever
                    className='delete-icon'
                    size='1.9em' style={{ color: '#539165' }}
                    // onClick={() => handleDeleteNote(id)}
                />

                {isOpen && (<Popup
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    content={newContent}
                    setContent={setContent}
                    name={name}
                />)}
            </div>
        </div>
    )
}

export default Note;



