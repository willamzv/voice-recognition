const script = (state = "", action) => {
  switch(action.type) {
    case 'SET_SCRIPT':
      return action.script
    default:
      return state;
  }
}

export default script;
