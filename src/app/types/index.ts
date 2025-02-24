export interface User {
  id: number;
  username: string;
  email: string;
  todoCount?: number;
}

export interface Todo {
  userId: number;
  id: number;
}