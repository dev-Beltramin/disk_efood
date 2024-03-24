import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Cardapios } from '../../../Pages/Home'
import { toast } from 'react-toastify'

type carType = {
  items: Cardapios[]
  isOpen: boolean
}

const initialState: carType = {
  items: [],
  isOpen: false
}

const carSlice = createSlice({
  name: 'car',
  initialState,

  reducers: {
    add: (state, action: PayloadAction<Cardapios>) => {
      const newItem = state.items.find((item) => item.id === action.payload.id)
      if (!newItem) {
        state.items.push(action.payload)
        toast('Item adicionado ao carinho')
      } else {
        toast('Este produto já consta em seu carrinho ... ')
      }
    },
    Open: (state) => {
      state.isOpen = true
    },
    Close: (state) => {
      state.isOpen = false
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

export const { add, Open, Close, remove } = carSlice.actions
export default carSlice.reducer
