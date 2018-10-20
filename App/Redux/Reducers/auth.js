import {
  SET_TOKEN
} from 'App/Redux/AT';

const initialState = {
  token: ''
}

export default function auth (state = initialState, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }

    default: return state;
  }
}