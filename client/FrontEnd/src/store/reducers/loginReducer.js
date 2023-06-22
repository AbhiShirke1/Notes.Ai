const initialState = {
    folders:[]
}

const loginReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'createFolder':
            return state
        case 'createNotes':
            return state
        case 'updateNote':
            return state
        case 'deleteNotes':
            return state
        default:
            return state
    }
}
export default loginReducer;