import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Options } from '../../Pages/Home'

type Products = {
  price: number
  id: number
}

type InstallmentsDelivery = {
  products?: Products[]

  delivery?: {
    receiver?: string
    address?: {
      description?: string
      city?: string
      zipCode?: string
      number?: number
      complement?: string
    }
  }
  payment?: {
    card?: {
      name?: string
      numberCard?: string
      code?: number

      experies?: {
        month?: number
        year?: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood'
  }),
  endpoints: (builder) => ({
    getHome: builder.query<Options[], void>({
      query: () => 'restaurantes'
    }),
    getProfile: builder.query<Options, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<any, InstallmentsDelivery>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetHomeQuery, useGetProfileQuery, usePurchaseMutation } = api
export default api
