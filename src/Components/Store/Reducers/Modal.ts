import { createSlice } from '@reduxjs/toolkit'

type Props = {
  isOpen: boolean
}

const initialState: Props = {
  isOpen: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    Open: (state) => {
      state.isOpen = true
    },
    Close: (state) => {
      state.isOpen = false
    }
  }
})

export const { Open, Close } = modalSlice.actions
export default modalSlice.reducer
