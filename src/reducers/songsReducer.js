const INITIAL_STATE = {
  message: 'Hello from redux'
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SEARCH_FOR_SONG':
      return { ...state, song: action.payload }
    default:
      return state
  }
}
