export const initialState = {
  token: localStorage.getItem('token') || null,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      action.payload !== undefined &&
        localStorage.setItem('token', action.payload);
      return { ...state, token: action.payload };

    case 'logout':
      localStorage.removeItem('token');
      localStorage.removeItem('firebaseToken');
      localStorage.removeItem('username');
      localStorage.removeItem('profile-image');
      localStorage.clear();

      return { ...state, token: null, role: '', currentUserId: '' };

    default:
      return state;
  }
};
