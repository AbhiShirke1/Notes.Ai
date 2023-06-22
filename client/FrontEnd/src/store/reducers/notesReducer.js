import { act } from "react-dom/test-utils";

const initialState = {
    folders: []
}

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'createFolder':
            return {
                ...state,
                folders: [
                    ...state.folders,
                    {
                        name: action.payload.name
                    }
                ]
            }
        case 'createNote':
            const { title, content, isFavourite, name } = action.payload;

            let folders = [...state?.folders]; // copy
            let index;
            let olderNotes = [];

            let newFolderList = folders.length > 0
                && state?.folders?.filter((item) => item?.name !== name);

            const selectedFolder = folders.length > 0
                && state?.folders?.filter((item, i) => {
                    if (item.name === name) {
                        index = i;
                        olderNotes = item?.notes || [];
                        return item;
                    }
                });
            const notes = selectedFolder[0]?.notes?.length > 0 ? selectedFolder[0]?.notes : [];
            return {
                ...state,
                folders: [
                    ...newFolderList,
                    {
                        ...selectedFolder[0],
                        notes: [
                            ...notes,
                            { title, content, isFavourite }
                        ]
                    }
                ]
            }
        case 'updateNote':

            let list = [...state?.folders];

            let newList = list?.length > 0
                && list?.filter((item) => item?.name !== action.payload.name);

            const selectedObj = list.length > 0
                && list?.filter((item, i) => (item.name === action.payload.name))[0];

            const olderNotefiles=list?.length>0 && list?.filter((item)=>item?.index!==action.payload.index);
            
            const noteToBeUpdated=list?.length>0 && list?.filter((item)=>item.index===action.payload.index);
            debugger;
            return {
                folders: [
                    ...newList,
                    
                    {...selectedObj ,
                        notes:[
                        ...selectedObj?.notes,{
                            index:action.payload.index,
                            content : action.payload.content
                    }
                ]
            }
        ]
            }
        case 'deleteNotes':
            return state
        default:
            return state
    }
}

export default notesReducer;