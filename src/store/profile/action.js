import { 
    TOGGLE_CHECKBOX, 
    CHANGE_NAME 
} from '../typsStore'

export const toggleCheckbox = {
    type: TOGGLE_CHECKBOX,
}

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name,
  });