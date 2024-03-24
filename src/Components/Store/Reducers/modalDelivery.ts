import { createSlice } from '@reduxjs/toolkit'

type Props = {
  isOpen: boolean
}

const initialState: Props = {
  isOpen: false
}

const modalDelivery = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    OpenDelivery: (state) => {
      state.isOpen = true
    },
    closeDelivery: (state) => {
      state.isOpen = false
    }
  }
})

export const { OpenDelivery, closeDelivery } = modalDelivery.actions
export default modalDelivery.reducer
