const user = (state = {}, action) => {
  switch(action.type) {
    case 'SET_TIME':
    let { t, t1, amPm } = action
    return { t, t1, amPm }
    default:
      return state;
  }
}

export default user;
