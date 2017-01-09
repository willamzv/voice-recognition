import $ from 'jquery';

//Notes

export const fetchNotes = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/notes',
      type: 'GET'
    }).done( notes => {
      dispatch(getNotes(notes));
    });
  }
}

export const addNote = (text) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/notes',
      type: 'POST',
      data: { text }
    }).done( item => {
      dispatch(note('ADD_NOTE', item));
    });
  }
}

export const deleteNote = (_id) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/Notes/${_id}`,
      type: 'DELETE'
    }).done( () => {
      dispatch(note('DELETE_NOTE', {_id}));
    });
  }
}

export const toggleNote = (id) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/Notes/${id}`,
      type: 'PUT'
    }).done( item => {
      dispatch(note('TOGGLE_NOTE', item));
    });
  }
}

export const getVisible = (notes, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return notes;
    case 'SHOW_COMPLETED':
      return notes.filter( t => t.completed );
    case 'SHOW_ACTIVE':
      return notes.filter( t => !t.completed );
  }
}

export const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}

const getNotes = (notes) => {
  return { type: 'GET_NOTES', notes }
}

const note = (type, item) => {
  let { _id, text, completed } = item;
  return {
    type,
    _id,
    text,
    completed
  }
}


//Contacts

export const fetchContacts = () => {
  return (dispatch) => {
    $.ajax({
      url: '/api/contacts',
      type: 'GET'
    }).done( contacts => {
      dispatch(getContacts(contacts));
    });
  }
}

export const addContact = (name,email) => {
  return (dispatch) => {
    $.ajax({
      url: '/api/contacts',
      type: 'POST',
      data: {
        name,
        email
      }
    }).done( item => {
      dispatch(contact('ADD_CONTACT', item));
    });
  }
}

export const deleteContact = (_id) => {
  return (dispatch) => {
    $.ajax({
      url: `/api/contacts/${_id}`,
      type: 'DELETE'
    }).done( () => {
      dispatch(note('DELETE_CONTACT', {_id}));
    });
  }
}

const getContacts = (contacts) => {
  return { type: 'GET_CONTACTS', contacts }
}

const contact = (type, item) => {
  let {_id, name, email} = item;
  return {
    type,
    _id,
    name,
    email
  }
}


//Clock

export const setClock = (time) => {
  return (dispatch) => {
    dispatch(clock('SET_TIME', time))
  }
}

const clock = (type,item) => {
  let { t, t1, amPm } = item;
  return{
    type,
    t,
    t1,
    amPm
  }
}

//script

export const setScript = (script) => {
  return (dispatch) => {
    dispatch(dictation('SET_SCRIPT', script))
  }
}

const dictation = (type,item) => {
  let script = item
  return {
    type,
    script
  }
}
