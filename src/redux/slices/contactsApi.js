import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  tagTypes: ['Data'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://635570ff483f5d2df3b48ab4.mockapi.io/api/v1/',
  }),
  endpoints: build => ({
    getContacts: build.query({
      query: () => 'contacts',
      providesTags: ({ data }) =>
        data
          ? [
              ...data.map(({ id }) => ({ type: 'Data', id })),
              { type: 'Data', id: 'LIST' },
            ]
          : [{ type: 'Data', id: 'LIST' }],
    }),
    addContact: build.mutation({
      query: body => ({
        url: 'contacts',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{ type: 'Data', id: 'LIST' }],
    }),
    deleteContact: build.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Data', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
