import { createSlice } from '@reduxjs/toolkit'

type Props = {
  isOpen: boolean
}

const initialState: Props = {
  isOpen: false
}

const modalPay = createSlice({
  name: 'pay',
  initialState,
  reducers: {
    OpenPay: (state) => {
      state.isOpen = true
    },
    closePay: (state) => {
      state.isOpen = false
    }
  }
})

export const { OpenPay, closePay } = modalPay.actions
export default modalPay.reducer
