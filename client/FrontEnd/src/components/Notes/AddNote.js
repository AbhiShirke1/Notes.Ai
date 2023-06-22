import { useState } from "react";
import { BsFilePlusFill } from "react-icons/bs";
import '../../index2.css'

const AddNote = ({ noteText, setNoteText, handleAddNote }) => {

    const charLimit = 200;
    const [options, setOptions] = useState([]);
    const [to, setTo] = useState('en');

    const handleChange = (event) => {
        if (charLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    }

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText);
            setNoteText('');
        }

    }

    return (
        <div className="note new">
            <textarea rows='8' cols='10'
                placeholder="Type a note ..."
                onChange={handleChange}
                value={noteText}
            >
            </textarea>
            <div className="note-footer">
                <strong>{charLimit - noteText.length} Remaining</strong>

                <BsFilePlusFill onClick={handleSaveClick} size='2.5em' />
            </div>

        </div>
    )
}

export default AddNote;