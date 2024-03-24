import { createSlice } from '@reduxjs/toolkit'

type Props = {
  isOpen: boolean
}

const initialState: Props = {
  isOpen: false
}

const modalConfirm = createSlice({
  name: 'modalconfirm',
  initialState,
  reducers: {
    OpenConfirm: (state) => {
      state.isOpen = true
    },
    closeConfirm: (state) => {
      state.isOpen = false
    }
  }
})

export const { OpenConfirm, closeConfirm } = modalConfirm.actions
export default modalConfirm.reducer
