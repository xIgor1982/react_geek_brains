import { 
    TOGGLE_CHECKBOX, 
    CHANGE_NAME 
} from '../typsStore'

const initialState = {
    checkbox: false,
    name: 'default name'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CHECKBOX:
          return {
            ...state,
            checkbox: !state.checkbox,
          };
        case CHANGE_NAME:
          return {
            ...state,
            name: action.payload,
          };
        default:
          return state;
      }
}