const contacts = (state = [], action) => {
  switch( action.type ) {
    case 'GET_CONTACTS':
      return action.contacts;
    case 'ADD_CONTACT':
      let { _id, name, email } = action;
      return [
        { _id, name, email },
        ...state
      ]
    case 'DELETE_CONTACT':
        return state.filter( contact => contact._id !== action._id )
   default:
     return state;
  }
}

export default contacts;
