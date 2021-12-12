import {
    TOGGLE_CHECKBOX,
    CHANGE_NAME,
    SIGN_IN,
    SIGN_OUT
} from '../typsStore'

export const toggleCheckbox = {
    type: TOGGLE_CHECKBOX,
}

export const changeName = (name) => ({
    type: CHANGE_NAME,
    payload: name,
  });

export const sigIn = () => ({
    type: SIGN_IN
})

export const sigOUT = () => ({
    type: SIGN_OUT
})