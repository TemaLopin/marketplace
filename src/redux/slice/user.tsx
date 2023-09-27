import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  accesses_token: '',
  refresh_token: '',
}

const User = createSlice({
  name: 'user',
  initialState,
  reducers: {},
})

export const {} = User.actions
export default User.reducer
