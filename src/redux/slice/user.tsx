import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    picture: '',
    firstName: 'Test',
    lastName: 'Test',
    email: 'test@test.ts',
    date: '12.34.5678',
    createAt: '98.76.5432',
    role: 'client',
  },
  accesses_token: '',
  refresh_token: '',
}

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (_, { payload }) => {
      const newUser = payload.name || ''
      return newUser
    },
  },
})

export const { setUser } = user.actions
export default user.reducer
