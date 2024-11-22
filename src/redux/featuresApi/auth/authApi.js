import { baseApi } from "@/redux/baseApi"


const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo) => ({
        url: '/auth/login',
        method: 'POST',
        body: userInfo
      }),
      invalidatesTags: ['user']
    })
  })
})

export const { useLoginMutation } = authApi
