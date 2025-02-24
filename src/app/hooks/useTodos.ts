import { useGetUsersQuery } from "@/app/api/userApi";
import { useGetTodosQuery } from "@/app/api/todoApi";
import { useMemo } from "react";
import { User } from "@/app/types";



export const useTodos = () => {
  const { data: users, isLoading: usersLoading } = useGetUsersQuery();
  const { data: todos, isLoading: todosLoading } = useGetTodosQuery();

  const userTasks = useMemo(() => {
    if (!users || !todos) return [];
    return users.map((user) : User => ({
      ...user,
      todoCount: todos.filter((todo) => todo.userId === user.id).length,
    }));
  }, [users, todos]);

  return { userTasks, isLoading: usersLoading || todosLoading };
};
