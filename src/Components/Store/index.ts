import { configureStore } from '@reduxjs/toolkit'
import CarReducer from '../Store/Reducers/car'
import api from '../Services'
import ModalReducer from '../Store/Reducers/Modal'
import deliveryReducer from '../Store/Reducers/modalDelivery'
import modalPay from '../Store/Reducers/modalPay'
import modalConfirm from '../Store/Reducers/modalConfirm'

export const Store = configureStore({
  reducer: {
    car: CarReducer,
    [api.reducerPath]: api.reducer,
    modal: ModalReducer,
    delivery: deliveryReducer,
    pay: modalPay,
    confirm: modalConfirm
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof Store.getState>
