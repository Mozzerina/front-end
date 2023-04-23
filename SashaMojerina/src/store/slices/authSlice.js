import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import AuthService from '../../services/AuthSevice';
import { API_URL } from '../../http';

export const login = createAsyncThunk(
  'auth/login',
  async ({ email, password }, { rejectWithValue, dispatch }) => {
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem('token', response.data.accessToken);
      dispatch(setAuth(true));
      dispatch(setUser({
        name: response.data.name,
        email: response.data.email,
        surname: response.data.surname,
        id: response.data.id,
      }));
    //   return response.data.user;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const registration = createAsyncThunk(
  'auth/registration',
  async ({
    name, surname, email, password,
  }, { rejectWithValue, dispatch }) => {
    try {
      const response = await AuthService.register(name, surname, email, password);
      console.log(response);
      localStorage.setItem('token', response.data.passwordHash);
      dispatch(setAuth(true));
      dispatch(setUser({
        name: response.data.name,
        email: response.data.email,
        surname: response.data.surname,
        id: response.data.id,
      }));
    //   return response.data.user;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue, dispatch }) => {
    try {
    //   const response = await AuthService.logout();
      localStorage.removeItem('token');
      dispatch(setAuth(false));
      dispatch(setUser({}));
    //   return response.data.user;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
      localStorage.setItem('token', response.data.passwordHash);
      dispatch(setAuth(true));
      dispatch(setUser({
        name: response.data.name,
        email: response.data.email,
        surname: response.data.surname,
        id: response.data.id,
      }));
    //   return response.data.user;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  },
);

const setError = (state, action) => {
  state.status = 'rejected';
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: '',
      email: '',
      surname: '',
      id: 0,
    },
    isAuth: false,
    status: null,
    error: null,
  },
  reducers: {
    setAuth(state, action) {
      state.isAuth = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.status = 'loading';
      state.error = null;
    },
    [login.fulfilled]: (state, action) => {
      state.status = 'resolved';
      state.user = action.payload;
    },
    [login.rejected]: setError,
  },
});

export const { setAuth, setUser } = authSlice.actions;
export default authSlice.reducer;
