import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    name: '',
  },
  accesses_token: '',
  refresh_token: '',
}

const User = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, { payload }) => {
      const newUser = payload.name || ''
      return newUser
    },
  },
})

export const {setUser} = User.actions
export default User.reducer
