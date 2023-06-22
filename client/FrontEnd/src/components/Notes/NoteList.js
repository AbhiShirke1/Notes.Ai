import { useSelector, useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import AddNote from "./AddNote";
import Sidebar from "../Sidebar/Sidebar";
import {MdOutlineFeaturedPlayList ,MdOutlineTaskAlt} from 'react-icons/md';
import Translate from "./Translate";
import Note from "./NoteCard.js";
import '../../index2.css'
import { createNote, updateNote } from "../../store/actions/notesAction";


const NotesList = ({ handleDeleteNote }) => {
    const [noteText, setNoteText] = useState('');
    const { name } = useParams();
    const folders = useSelector(state => state.folderDetails?.folders);

    const selectedFolder = folders.length > 0 && folders.filter((item) => item.name === name)[0];
    const notes = selectedFolder.notes;
    debugger;

    const dispatch = useDispatch();
    const handleAddNote = () => {
        dispatch(createNote({
            title: '1234',
            content: noteText,
            isFavourite: false,
            name: name
        }))
    }
    const handlleUpdateNote = () => {
        dispatch(updateNote({
            content: noteText
        }))
    }
    return (<>
    <div className="flex">
    <Sidebar/>
        <div className='notes-container' >
            <div className='container'>
                <div className='notes-head'>
                    <MdOutlineTaskAlt size="1.9rem" style={{ color: '#3F497F' }} />
                    <h2>My Notes</h2>
                </div>
                <div className="notes-list">
                    {notes?.length > 0 && notes.map(({ title, content, isFavourite,index }, i) => (
                        <Note
                            name={name}
                            title={title}
                            content={content}
                            index={index}
                            id={i}
                        />))}
                    <AddNote
                        noteText={noteText}
                        setNoteText={setNoteText}
                        handleAddNote={handleAddNote}
                    />
                </div>


            </div>
            <div className='right'>
                <div className='notes-head1'>
                    <MdOutlineFeaturedPlayList size="1.9rem" style={{ color: '#3F497F' }} />
                    <h2>Try Features</h2>
                </div>
                <Translate />
            </div>
        </div>
        </div>
</>
    )
}
export default NotesList;


