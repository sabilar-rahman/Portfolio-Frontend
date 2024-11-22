import { createSlice } from '@reduxjs/toolkit'

// Initial state
const initialState = {
  user: null,
  token: null
}

// Create the slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload
      state.user = user
      state.token = token
    },
    logout: (state) => {
      state.user = null
      state.token = null
    }
  }
})

// Export actions and reducer
export const { setUser, logout } = authSlice.actions
export default authSlice.reducer

// Selectors
export const useCurrentToken = (state) => state.auth.token
export const useCurrentUser = (state) => state.auth.user
