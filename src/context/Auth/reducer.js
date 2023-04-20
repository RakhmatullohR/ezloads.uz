import { getCookie, setCookie } from '../../utils/formatters';

export const initialState = {
  token: getCookie('token') || null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      action.payload !== undefined && setCookie('token', action.payload);
      return { ...state, token: action.payload };

    case 'logout':
      setCookie('token', '');

      return { ...state, token: null, role: '', currentUserId: '' };

    default:
      return state;
  }
};
