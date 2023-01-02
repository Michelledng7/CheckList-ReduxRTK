import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5500/' }), //query the server
	tagTypes: ['Todos'],
	endpoints: (builder) => ({
		getTodos: builder.query({
			query: () => '/todos',
			transformResponse: (response) => response.sort((a, b) => b.id - a.id),
			providesTags: ['Todos'],
		}),
		addTodo: builder.mutation({
			query: (newTodo) => ({
				url: '/todos',
				method: 'POST',
				body: newTodo,
			}),
			invalidatesTags: ['Todos'],
		}),
		updateTodo: builder.mutation({
			query: (updateTodo) => ({
				url: `/todos/${updateTodo.id}`,
				method: 'PUT',
				body: updateTodo,
			}),
			invalidatesTags: ['Todos'],
		}),
		deleteTodo: builder.mutation({
			query: ({ id }) => ({
				url: `/todos/${id}`,
				method: 'DELETE',
				body: id,
			}),
			invalidatesTags: ['Todos'],
		}),
	}),
});

export const {
	useGetTodosQuery,
	useDeleteTodoMutation,
	useUpdateTodoMutation,
	useAddTodoMutation,
} = apiSlice;
