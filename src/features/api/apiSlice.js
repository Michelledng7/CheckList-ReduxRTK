import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5500/' }), //query the server
	endpoints: (builder) => ({
		getTodos: builder.query({
			query: () => '/todos',
		}),
		addTodo: builder.mutation({
			query: (newTodo) => ({
				url: '/todos',
				method: 'POST',
				body: newTodo,
			}),
		}),
		updateTodo: builder.mutation({
			query: (updateTodo) => ({
				url: `/todos/${updateTodo.id}`,
				method: 'PATCH',
				body: updateTodo,
			}),
		}),
		deleteTodo: builder.mutation({
			query: ({ id }) => ({
				url: `/todos/${id}`,
				method: 'DELETE',
				body: id,
			}),
		}),
		//tranformResponse:
		//providesTags:
	}),
});

export const { useGetTodosQuery } = apiSlice;

export default apiSlice;
