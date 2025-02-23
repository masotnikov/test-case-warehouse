export interface User {
  id: number;
  username: string;
  email: string;
}

export interface Todo {
  userId: number;
  id: number;
}