const notes = (state = [], action) => {
  switch( action.type ) {
    case 'GET_NOTES':
      return action.notes;
    case 'ADD_NOTE':
      let { _id, text, title } = action;
      return [
        { _id, text, title, completed: false },
        ...state
      ]
    case 'TOGGLE_NOTE':
      return state.map( note => {
        if (note._id !== action._id)
          return note;
        return {
          ...note,
          completed: !note.completed
        }
      })
    case 'DELETE_NOTE':
      return state.filter( note => note._id !== action._id )
   default:
     return state;
  }
}

export default notes;
