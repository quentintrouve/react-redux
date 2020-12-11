const initialState = {
  compteur: 0
}

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'INCREMENTE':
      return {
        compteur: state.compteur + 1
      }
      break;
    case 'DECREMENTE':
      return {
        compteur: state.compteur - 1
      }
      break;
    default:
      return state;
  }

  return state;
}

export default reducer;